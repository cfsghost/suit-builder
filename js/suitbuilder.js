$(function() {

	// Navbar
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

	// Tab
	$('#widget_navtab').draggable({
		appendTo: 'body',
		connectToSortable: '#viewer',
		helper: function(event) {
			var $e = $('<div>');

			// Tab
			var $nav = $('<ul>').addClass('nav nav-tabs');
			var $item1 = $('<li>');
			var $label1 = $('<a>').attr({
				'href': '#pane1',
				'data-toggle': 'tab'
			}).text('Tab1');

			var $item2 = $('<li>');
			var $label2 = $('<a>').attr({
				'href': '#pane2',
				'data-toggle': 'tab'
			}).text('Tab2');

			$nav.append($item1);
			$nav.append($item2);

			$item1.append($label1);
			$item2.append($label2);

			// Content
			var $content = $('<div>').addClass('tab-content');
			var $pane1 = $('<div>').addClass('tab-pane').attr('id', 'pane1');
			var $pane2 = $('<div>').addClass('tab-pane').attr('id', 'pane2');

			$content.append($pane1).append($pane2);

			$e.append($nav).append($content);

			return $e;
		},
		revert: 'invalid'
	});

	var externalObj = null;
	$('#viewer')
		.sortable({
			placeholder: 'ui-sortable-placeholder',
			update: function(event, ui) {
				console.log('update');
				if (externalObj) {

					externalObj.insertAfter(ui.item);

					$(ui.item).remove();
				}

				externalObj = null;
			},
			start: function(event, ui) {
				console.log('start');
			},
			stop: function(event, ui) {
				console.log('stop');
			},
			sort: function(event, ui) {
				console.log('sort');
			},
			over: function(event, ui) {
				console.log('over');

				console.log(ui.placeholder);
				var $ph = $(ui.placeholder);

				var $item = $(ui.helper).clone(false);
				$item.css({ visibility: 'hidden' });

				//$ph.replaceWith($item);
				$ph.html($item.clone(false).wrap('<div>').parent().html());
				$ph.css({
					height: $(ui.helper).outerHeight() * 2
				});
				console.log(ui.placeholder);
			},
			receive: function(event, ui) {
				var $item = $(ui.helper).clone(true);

				$item
					.removeClass('ui-draggable-dragging ui-sortable-helper')
					.css({ position: 'relative', left: 0, top: 0, height: '' });  

				externalObj = $item;
			}
		})
		.disableSelection();

});
