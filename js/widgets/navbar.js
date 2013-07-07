"use strict";

var Navbar = function() {
	var self = this;

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
