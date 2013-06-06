$(function() {

	$('#widget_navbar').draggable({
		appendTo: 'body',
		connectToSortable: '#viewer',
		helper: function(event) {
			var $e = $('<div>').addClass('navbar');
			var $inner = $('<div>').addClass('navbar-inner');
			var $container = $('<div>').addClass('container-fluid');
			var $brand = $('<div>').addClass('brand').text('Brand Name');
			var $nav = $('<ul>').addClass('nav');
			var $divider = $('<li>').addClass('divider-vertical');
			var $defItem = $('<li>');
			var $defLabel = $('<a>').attr('href', '#').text('Default Item');

			$e.append($inner);
			$inner.append($container);
			$container
				.append($brand)
				.append($nav);

			$nav
				.append($divider)
				.append($defItem);

			$defItem.append($defLabel);

			return $e;
		},
		revert: 'invalid'
	});

	$('#viewer')
	/*
		.droppable({
			drop: function(event, ui) {
				var $item = $(ui.helper).clone(false);

				$item
					.removeClass('ui-draggable-dragging')
				   .css({ position: 'relative', left: 0, top: 0 });  

				$(this).append($item);
			}
		})
		*/
		.sortable({
			placeholder: 'ui-sortable-placeholder',
			update: function(event, ui) {
//				$(ui.item).remove();
				console.log(1111);
			},
			over: function(event, ui) {
				$(ui.item).replaceWith($(ui.helper));
			//	ui.item = ui.helper;
				console.log(222);
			},
			receive: function(event, ui) {
				var $item = $(ui.helper).clone(false);

				$item
					.removeClass('ui-draggable-dragging')
				   .css({ position: 'relative', left: 0, top: 0 });  

				$(this).append($item);
			}
		})
		.disableSelection();

});
