function shuffle( array ) {
	var currentIndex = array.length, temporaryValue, randomIndex;
	while (0 !== currentIndex) {
		randomIndex = Math.floor( Math.random() * currentIndex );
		currentIndex -= 1;
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	return array;
}
$( document ).ready( function() {
	$( '#go' ).click( function( e ) {
		var lines = [ '#1', '#2', '#3', '#4', '#5' ];
		shuffle( lines );
		lines = $.map( lines, function( l ) {
			return $( l ).val();
		} );
		$( '#output' ).val( lines.join( '\n' ) );
	} );
} );
