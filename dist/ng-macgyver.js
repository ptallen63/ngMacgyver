(function (angular) {

  // Create all modules and define dependencies to make sure they exist
  // and are loaded in the correct order to satisfy dependency injection
  // before all nested files are concatenated by Gulp

  // Config
  angular.module('ngMacgyver.config', [])
      .value('ngMacgyver.config', {
          debug: true
      });

  // Modules
  angular.module('ngMacgyver.filters', []);
  angular.module('ngMacgyver.services', []);
  angular.module('ngMacgyver',
      [
          'ngMacgyver.config',
          'ngMacgyver.filters',
          'ngMacgyver.services'
      ]);

})(angular);

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