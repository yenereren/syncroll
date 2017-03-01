/*
 * Syncroll Sync With Sibling Forever v0.0.1
 */

(function($) {

    function SyncrollValidator(element, syncTo, options){
        this.$element = $(element);
        this.$syncTo = $(syncTo);
        this.options = $.extend({}, Syncroll.Defaults, options);
    }

    SyncrollValidator.prototype.validate = function() {
        var self = this;

        if(self.$element.length === 0 && self.$syncTo.length === 0){
            return false;
        }

        if(self.$element.height() >=0 && self.$element.height() >= self.$syncTo.height()){
            return false;
        }

        return true;
    };

    function Syncroll(element, syncTo, options){

        var result = true;
        this.settings = null;
        this.$element = $(element);
        this.$syncTo = $(syncTo);
        this.options = $.extend({}, Syncroll.Defaults, options);
        this.init();
        
    }

    Syncroll.Defaults = {
        debugMode:true
    };

    Syncroll.Constants = {

    };

    Syncroll.prototype.init = function(){
        this.setup();
    }

    Syncroll.prototype.setup = function() {
        this.log('setup');
    };

    Syncroll.prototype.log = function(message) {
        if(this.options.debugMode){
            console.log('syncroll message -> ' + message);
        }
    };

    Syncroll.prototype.createDelegate = function(scope) {
        var fn = this;
        return function() {
            return fn.apply(scope, arguments);
        }
    };


    $.fn.syncroll = function(syncTo, option) {

        var args = Array.prototype.slice.call(arguments, 1);
        var result = true;
        var validator = new SyncrollValidator(this, syncTo, option);

        if(validator.validate()){
            this.each(function() {
                new Syncroll(this, syncTo, typeof option == 'object' && option);
            });
        }else{
            result = false;
        }

        return result;
    };

    $.fn.syncroll.Constructor = Syncroll;

})(window.jQuery);
