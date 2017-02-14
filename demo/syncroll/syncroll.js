/*
 * Syncroll Sync With Sibling Forever v0.0.1
 */

;(function($) {

    function Syncroll(element, options){

        this.settings = null;
        this.options = $.extend({}, Thumbify.Defaults, options);

    }

    Syncroll.Defaults = {
        debugMode:true
    };

    Syncroll.Constants = {

    };

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


    $.fn.syncroll = function(option) {
        var args = Array.prototype.slice.call(arguments, 1);

        return this.each(function() {
            new Syncroll(this, typeof option == 'object' && option);
        });
    };

    $.fn.syncroll.Constructor = Syncroll;

})();