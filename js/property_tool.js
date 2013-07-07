"use strict";

var PropertyTool = function() {
	var self = this;

	self.$e = $('#property_tool');
	self.properties = null;
	self.schema = null;
};

PropertyTool.prototype.loadSchema = function(schema) {
	var self = this;

	self.schema = schema;
};

PropertyTool.prototype.loadProperties = function(props) {
	var self = this;

	self.properties = props;
};

PropertyTool.prototype.renew = function() {
	var self = this;

	function createField(type, key, value) {
		var $row = $('<tr>');
		var $keyField = $('<td>').text(key);
		var $valueField = $('<td>')
			.css({
				padding: '0px'
			});

		var $valueInput = $('<input>')
			.attr({
				type: 'text'
			})
			.css({
				margin: '0px',
				width: '100%'
			})
			.val(value);

		$valueField.append($valueInput);

		$row.append($keyField).append($valueField);

		$('#property_table').append($row);
	}

	$('#property_table').empty();

	// Re-create fields
	for (var key in self.properties) {
		var value = self.properties[key];

		createField('String', key, value);
	}
}

PropertyTool.prototype.update = function() {
	var self = this;

	for (var key in self.properties) {
//		self.properties[key]
	}
};
