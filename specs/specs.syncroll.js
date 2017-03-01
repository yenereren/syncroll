var boxWidth = 100;
var bixBoxHeight = 1500;
var smallBoxHeight = 150;

QUnit.test("jquery should included", function(assert) {
    assert.expect(1);

    var _$ = $;
    assert.ok(!!_$, "jquery included");
});

QUnit.test("synroll should be appended to jquery", function(assert) {
    assert.expect(1);

    var fn = $.fn;
    assert.ok(!!fn.syncroll, "syncroll appended to jquery");
});

QUnit.test("type of synroll should be function", function(assert) {
    assert.expect(1);

    var syncroll = $.fn.syncroll;
    assert.ok('function' === typeof syncroll, "syncroll appended to jquery");
});

QUnit.test("bix box should not be synced-scroll to small box", function(assert) {
    assert.expect(1);

    var bigBox = $('<div/>', {
        'id': 'bigBox'
    }).width(boxWidth).height(bixBoxHeight);
    var smallBox = $('<div/>', {
        'id': 'smallBox'
    }).width(boxWidth).height(smallBoxHeight);

    var isSynced = bigBox.syncroll(smallBox);
    assert.notOk(isSynced, "syncroll should return false if big box synced to small box");

});

QUnit.test("equals boxes should not be synced-scroll", function(assert) {
    assert.expect(1);

    var bigBox = $('<div/>', {
        'id': 'bigBox'
    }).width(boxWidth).height(bixBoxHeight);
    var smallBox = $('<div/>', {
        'id': 'smallBox'
    }).width(boxWidth).height(bixBoxHeight);

    var isSynced = bigBox.syncroll(smallBox);
    assert.notOk(isSynced, "equals boxes should not be synced-scroll");
});

QUnit.test("syncroll should not be applied if page is not scrollable", function(assert) {
    assert.expect(1);

    var windowHeight = $(window).height();
    $("body").height(windowHeight - 1);

    var bigBox = $('<div/>', {
        'id': 'bigBox'
    }).width(boxWidth).height(bixBoxHeight);

    var smallBox = $('<div/>', {
        'id': 'smallBox'
    }).width(boxWidth).height(smallBoxHeight);

    var isSynced = smallBox.syncroll(bigBox);
    assert.notOk(isSynced, "syncroll should not be applied if page is not scrollable");
});

QUnit.test("small box should be synced-scroll to bix box's bottom", function(assert) {
    assert.expect(1);

    var windowHeight = $(window).height();
    $("body").height(windowHeight + 1);

    var bigBox = $('<div/>', {
        'id': 'bigBox'
    }).width(boxWidth).height(bixBoxHeight);

    var smallBox = $('<div/>', {
        'id': 'smallBox'
    }).width(boxWidth).height(smallBoxHeight);

    var isSynced = smallBox.syncroll(bigBox);
    assert.ok(isSynced, "syncroll should return false if big box synced to small box");
});

QUnit.test("small box's position should not be as fixed if scroll not scrolled", function(assert) {
    assert.expect(2);

    var windowHeight = $(window).height();
    $("body").height(windowHeight + 1);

    var bigBox = $('<div/>', {
        'id': 'bigBox'
    }).width(boxWidth).height(bixBoxHeight)

    var smallBox = $('<div/>', {
        'id': 'smallBox'
    }).width(boxWidth).height(smallBoxHeight).css('position', 'relative');;

    var position = smallBox.css('position');

    var isSynced = smallBox.syncroll(bigBox);

    assert.notOk(position === 'fixed', "syncroll should return false if big box synced to small box");
    assert.ok(isSynced, "syncroll should return false if big box synced to small box");

});
