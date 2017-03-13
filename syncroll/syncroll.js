/*
 * Syncroll Sync With Sibling Forever v0.0.1
 */

(function($) {

    function SyncrollValidator(element, syncTo, options) {
        this.$element = $(element);
        this.$syncTo = $(syncTo);
        this.options = $.extend({}, Syncroll.Defaults, options);
    }

    SyncrollValidator.prototype.validate = function() {
        var self = this;

        if (self.$element.length === 0 && self.$syncTo.length === 0) {
            return false;
        }

        if (self.$element.height() >= 0 && self.$element.height() >= self.$syncTo.height()) {
            return false;
        }

        if ($("body").height() <= $(window).height()) {
            return false;
        }

        return true;
    };

    function Syncroll(element, syncTo, options) {

        var result = true;
        this.settings = null;
        this.$window = $(window);
        this.$element = $(element);
        this.$syncTo = $(syncTo);

        this.elemenDistanceTop = Math.floor(this.$element.offset().top);
        this.elementHeight = this.$element.height();
        this.syncToElementOffsetBottom = Math.floor(this.$syncTo.offset().top + this.$syncTo.height());

        this.currentScrollPosition = 0;
        this.options = $.extend({}, Syncroll.Defaults, options);
        this.constants = Syncroll.Constants;
        this.init();

    }

    Syncroll.Defaults = {
        debugMode: false,
        paddingTop: 10
    };

    Syncroll.Constants = {
        sections: {
            top: 'top',
            scrollableArea: 'scrollableArea',
            bottom: 'bottom',
        }
    };

    Syncroll.prototype.init = function() {
        this.setup();
    }

    Syncroll.prototype.setup = function() {
        this.log('setup');
        this.registerEvents();
    };

    Syncroll.prototype.registerEvents = function() {
        this.log('registerEvents');
        var self = this;

        $(document).on('scroll', function() {
            self.currentScrollPosition = Math.floor($(this).scrollTop());
            self.sync();
        });
    };

    Syncroll.prototype.sync = function() {
        var self = this;
        var section = self.getSection();

        if (section === self.constants.sections.scrollableArea) {
            self.$element.css('top', self.options.paddingTop);
            self.$element.css('position', 'fixed');
        } else if (section === self.constants.sections.bottom) {
            var topPosition = self.syncToElementOffsetBottom - self.$element.height() - $('#scrollableContainer').offset().top;
            self.$element.css('top', topPosition);
            self.$element.css('position', 'absolute');
        } else {
            self.$element.css('position', 'relative');
            self.$element.css('top', 0);
        }
    };

    Syncroll.prototype.getSection = function() {
        var self = this;
        var section = self.constants.sections.top;

        var bottom = Math.floor(self.$element.offset().top + self.elementHeight) + 1;
        var distanceToTop = Math.floor(self.elemenDistanceTop - self.currentScrollPosition);
        var distanceToBrowsersTop = Math.floor(self.elemenDistanceTop + Math.abs(distanceToTop) + self.elementHeight);

        if (distanceToTop > Syncroll.Defaults.paddingTop) {
            section = self.constants.sections.top;
        } else if (distanceToTop <= Syncroll.Defaults.paddingTop & distanceToBrowsersTop < self.syncToElementOffsetBottom) {
            section = self.constants.sections.scrollableArea;
        } else {
            section = self.constants.sections.bottom;
        }

        console.log(section);
        return section;
    };

    Syncroll.prototype.log = function(message) {
        if (this.options.debugMode) {
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

        if (validator.validate()) {
            this.each(function() {
                new Syncroll(this, syncTo, typeof option == 'object' && option);
            });
        } else {
            result = false;
        }

        return result;
    };

    $.fn.syncroll.Constructor = Syncroll;

})(window.jQuery);
