var boxWidth = 100;
var bixBoxHeight = 1500;
var smallBoxHeight = 150;

QUnit.test( "jquery should included", function( assert ) {
    assert.expect(1);

    var _$ = $;
    assert.ok( !!_$, "jquery included" );
});

QUnit.test( "synroll should be appended to jquery", function( assert ) {
    assert.expect(1);

    var fn = $.fn;
    assert.ok( !!fn.syncroll, "syncroll appended to jquery" );
});

QUnit.test( "type of synroll should be function", function( assert ) {
    assert.expect(1);

    var syncroll = $.fn.syncroll;
    assert.ok( 'function' === typeof syncroll, "syncroll appended to jquery" );
});

QUnit.test( "bix box should not be synced-scroll to small box", function( assert ) {
    assert.expect(1);

    var bigBox = $('<div/>',{'id':'bigBox'}).width(boxWidth).height(bixBoxHeight);
    var smallBox = $('<div/>',{'id':'smallBox'}).width(boxWidth).height(smallBoxHeight);

    var isSynced = bigBox.syncroll(smallBox);
    assert.notOk(isSynced, "syncroll should return false if big box synced to small box" );

});

QUnit.test( "equals boxes should not be synced-scroll", function( assert ) {
    var bigBox = $('<div/>',{'id':'bigBox'}).width(boxWidth).height(bixBoxHeight);
    var smallBox = $('<div/>',{'id':'smallBox'}).width(boxWidth).height(bixBoxHeight);

    var isSynced = bigBox.syncroll(smallBox);
    assert.notOk(isSynced, "syncroll should return false if big box synced to small box" );
});

QUnit.test( "small box should be synced-scroll to bix box's bottom", function( assert ) {
    var bigBox = $('<div/>',{'id':'bigBox'}).width(boxWidth).height(bixBoxHeight);
    var smallBox = $('<div/>',{'id':'smallBox'}).width(boxWidth).height(smallBoxHeight);

    var isSynced = smallBox.syncroll(bigBox);
    assert.ok(isSynced, "syncroll should return false if big box synced to small box" );
});

// QUnit.test( "type of synroll should be function", function( assert ) {
//   assert.expect(true);
//
//   assert.ok( true == "1", "Passed!" );
//   console.log(leftPanel);
//   console.log(rightPanel);
//
//   // $body.on( "click", function() {
//   //   assert.ok( true, "body was clicked!" );
//   // });
//   //
//   // $body.trigger( "click" );
// });
//
// QUnit.test( "a test", function( assert ) {
//   assert.expect( 1 );
//
//   var leftPanel =  $('<div/>',{'class':'left-panel'}).width(100).height(100);
//   var rightPanel =  $('<div/>',{'class':'right-panel'}).width(100).height(100);
//
//   console.log(leftPanel);
//   console.log(rightPanel);
//
//   // $body.on( "click", function() {
//   //   assert.ok( true, "body was clicked!" );
//   // });
//   //
//   // $body.trigger( "click" );
// });
//
//
//
// QUnit.test( "first test", function( assert ) {
//   assert.ok( 1 == "1", "Passed!" );
// });
