(function() {
  'use strict';

  angular
    .module('bandMusic')
    .controller('GigsController', GigsController);

  /** @ngInject */

  function GigsController($location) {
    var vm = this;
    vm.shows = [{

        'date': '10-06-2016',
        'venue': 'Festival-De-Les Arts',
        'location': 'Valencia,Spain'

      },

      {

        'date': '25-06-2016',
        'venue': 'Heitere Open Air',
        'location': 'Zofingen,Switzerland'

      },

      {

        'date': '15-07-2016',
        'venue': 'Caja magica',
        'location': 'Madrid,Spain'

      },

      {

        'date': '20-08-2016',
        'venue': 'Rock Werchter',
        'location': 'Belgium'

      }

    ];





  }

})();
