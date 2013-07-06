"use strict";

$(function() {

	var widget = new Widget();

	// Navbar
	$('#widget_navbar').draggable({
		appendTo: 'body',
		connectToSortable: '#viewer',
		helper: function(event) {

			var navbar = widget.createWidget('Navbar');

			return navbar.$e;
		},
		revert: 'invalid'
	});

	// Tab
	$('#widget_navtab').draggable({
		appendTo: 'body',
		connectToSortable: '#viewer',
		helper: function(event) {

			var tab = widget.createWidget('Tab');

			return tab.$e;
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
				var component = widget.createWidget($(ui.helper).attr('widgetname'));
				var $item = component.$e;
				$item.css({ position: 'relative', left: 0, top: 0, height: '' });  

				externalObj = $item;
			}
		})
		.disableSelection();

});
