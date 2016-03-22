(function() {
  'use strict';

  angular
    .module('bandMusic')
    .controller('GigsController', GigsController);

  /** @ngInject */
 
    function GigsController() {
    var vm = this;
    vm.shows = [{
        
  'date':'10-06-2016',
  'venue':'Festival-De-Les Arts',
  'location':'Valencia,Spain'
    
    },
	{
        
  'date':'15-06-2016',
  'venue':'Festival-De-Les Arts',
  'location':'Valencia,Spain'
    
    },
    {
        
  'date':'15-06-2016',
  'venue':'Festival-De-Les Arts',
  'location':'Valencia,Spain'
    
    },
    {
        
  'date':'15-06-2016',
  'venue':'Festival-De-Les Arts',
  'location':'Valencia,Spain'
    
    }

];
   


  }
    
})();
