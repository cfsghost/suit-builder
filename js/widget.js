var Widget = function() {
	var self = this;

	self.serial = 1;
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

	var instance = new WidgetClass();

	self.components[widgetName + self.serial] = instance;

	self.serial++;

	return instance;
};
