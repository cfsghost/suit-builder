"use strict";

var NavbarBrand = function() {
	var self = this;

	self.widgetName = 'NavbarBrand';

	self.$e = $('<div>')
		.addClass('brand')
		.attr('widgetName', self.widgetName)
		.text('Brand Name');

	// Schema of property
	self.schema = {
		id: 'String'
	};

	// Properties
	self.props = {
		id: 'navbar_brand'
	};
};

Widget.register('Navigator', 'NavbarBrand', NavbarBrand);
