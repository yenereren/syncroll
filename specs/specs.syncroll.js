
QUnit.test( "jquery should included", function( assert ) {
    var _$ = $;
    assert.ok( !!_$, "jquery included" );

});

QUnit.test( "synroll should be appended to jquery", function( assert ) {
    var fn = $.fn;
    assert.ok( !!fn.syncroll, "syncroll appended to jquery" );
});

QUnit.test( "type of synroll should be function", function( assert ) {
    var syncroll = $.fn.syncroll;
    assert.ok( 'function' === typeof syncroll, "syncroll appended to jquery" );
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
