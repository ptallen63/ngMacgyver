angular.module('ngMacgyver.services', [])
.service('wrench', function () {
	//Set up 
	

	//API
	return {
		isSet: function (value, checkValue) {
			return value === checkValue;
		},
		setTab: function (value, setValue) {
			this[setValue] = value;
		}
	};
	

});