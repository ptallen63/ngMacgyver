'use strict';

describe('', function() {

  var module;
  var dependencies;
  dependencies = [];

  var hasModule = function(module) {
  return dependencies.indexOf(module) >= 0;
  };

  beforeEach(function() {

  // Get module
  module = angular.module('ngMacgyver');
  dependencies = module.requires;
  });

  it('should load config module', function() {
    expect(hasModule('ngMacgyver.config')).to.be.ok;
  });

  
  it('should load filters module', function() {
    expect(hasModule('ngMacgyver.filters')).to.be.ok;
  });
  

  

  
  it('should load services module', function() {
    expect(hasModule('ngMacgyver.services')).to.be.ok;
  });
  

});