"use strict";

var Tab = function() {
	var self = this;

	self.widgetName = 'Tab';

	self.$e = $('<div>')
		.attr('widgetName', self.widgetName);

	self.$nav = $('<ul>').addClass('nav nav-tabs');
	self.$item1 = $('<li>');
	self.$label1 = $('<a>').attr({
		'href': '#pane1',
		'data-toggle': 'tab'
	}).text('Tab1');

	self.$item2 = $('<li>');
	self.$label2 = $('<a>').attr({
		'href': '#pane2',
		'data-toggle': 'tab'
	}).text('Tab2');

	self.$nav.append(self.$item1);
	self.$nav.append(self.$item2);

	self.$item1.append(self.$label1);
	self.$item2.append(self.$label2);

	// Content
	self.$content = $('<div>').addClass('tab-content');
	self.$pane1 = $('<div>').addClass('tab-pane').attr('id', 'pane1');
	self.$pane2 = $('<div>').addClass('tab-pane').attr('id', 'pane2');

	self.$content.append(self.$pane1).append(self.$pane2);

	self.$e.append(self.$nav).append(self.$content);
};

Widget.register('Navigator', 'Tab', Tab);
