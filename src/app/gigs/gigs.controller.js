(function() {
  'use strict';

  angular
    .module('bandMusic')
    .controller('GigsController', GigsController);

  /** @ngInject */
  function GigsController($http) {
    var vm = this;
    vm.options = {
    rowHeight: 50,
    headerHeight: 50,
    footerHeight: false,
    scrollbarV: false,
    selectable: false,
    columns: [
    {
      name: "Date",
      
    }, 
    {
      name: "Venue"
    }, 
    {
      name: "Location"
    },
    {
      name: "Tickets"
    }
    ]
  };
    vm.data=[];
     function loadDataTable(){
      $http.get('/table.json')
        .then(function(response){
          vm.data = response.data;
        });
    }
    
    loadDataTable();
}
  
})();
