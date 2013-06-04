$(function() {

	$('#widget_navbar').draggable({
		appendTo: 'body',
		connectToSortable: '#viewer',
		helper: 'clone',
		revert: 'invalid'
	});

	#('#viewer').droppable();
});
