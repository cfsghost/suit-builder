"use strict";

var Widget = function(suitBuilder) {
	var self = this;

	self.suitBuilder = suitBuilder;
	self.serial = 1;
	self.wrappers = {};
	self.components = {};
	self.All = Widget.All;
	self.Navigator = Widget.Navigator;
};

Widget.All = {};
Widget.Navigator = {};
Widget.register = function(className, widgetName, widgetClass) {
	Widget.All[widgetName] = widgetClass;
	Widget[className][widgetName] = widgetClass;
};

Widget.prototype.createWidget = function(widgetName) {
	var self = this;

	var WidgetClass = self.All[widgetName] || null;
	if (!WidgetClass)
		return null;

	var instance = new WidgetClass(self);
	var wrapper = new WidgetWrapper(self, instance);

	instance.props.id = widgetName + self.serial;

	self.components[widgetName + self.serial] = instance;
	self.wrappers[widgetName + self.serial] = wrapper;

	self.serial++;

	return instance;
};


var WidgetWrapper = function(widget, instance) {
	var self = this;

	self.widget = widget;
	self.instance = instance;
	self.focused = false;

	instance.$e.on('click', function() {
		if (!self.focused) {
			self.focused = true;
			self.instance.$e.css({
				'outline': '2px solid #88ccff'
			});

			// Update property tool
			self.widget.suitBuilder.propTool.loadProperties(self.instance.props);
			self.widget.suitBuilder.propTool.renew();
		} else {
			self.focused = false;
			self.instance.$e.css({
				'outline': '0px'
			});
		}
	});
};
