"use strict";

var Navbar = function(widget) {
	var self = this;

	self.widget = widget;
	self.widgetName = 'Navbar';
	self.$e = $('<div>')
		.addClass('navbar')
		.attr('widgetName', self.widgetName);

	self.$inner = $('<div>').addClass('navbar-inner');
	self.$container = $('<div>').addClass('container-fluid');
	self.$brand = $('<div>').addClass('brand').text('Brand Name');
	self.$nav = $('<ul>').addClass('nav');
	self.$divider = $('<li>').addClass('divider-vertical');
	self.$defItem = $('<li>');
	self.$defLabel = $('<a>').attr('href', '#').text('Default Item');

	self.$e.append(self.$inner);
	self.$inner.append(self.$container);
	self.$container
		.append(self.$brand)
		.append(self.$nav);

	self.$nav
		.append(self.$divider)
		.append(self.$defItem);

	self.$defItem.append(self.$defLabel);

	// Initializing container
	var externalObj = null;
	self.$container
		.sortable({
			placeholder: 'ui-sortable-placeholder-horizontal',
			update: function(event, ui) {
				if (externalObj) {

					externalObj.insertAfter(ui.item);

					$(ui.item).remove();
				}

				externalObj = null;
			},
			over: function(event, ui) {

				var $ph = $(ui.placeholder);

				var $item = $(ui.helper).clone(false);
				$item.css({ visibility: 'hidden' });

				$ph.html($item.clone(false).wrap('<div>').parent().html());
				$ph.css({
					height: $(ui.helper).outerHeight()
				});
			},
			receive: function(event, ui) {
				var component = self.widget.createWidget($(ui.helper).attr('widgetname'));
				var $item = component.$e;
				//$item.css({ position: 'relative', left: 0, top: 0, height: '' });  
//				$item.css({ 'float': 'left' });  

				externalObj = $item;
			}
		})
		.disableSelection();

	// Schema of property
	self.schema = {
		id: 'String'
	};

	// Properties
	self.props = {
		id: 'navbar'
	};
};

Widget.register('Navigator', 'Navbar', Navbar);
