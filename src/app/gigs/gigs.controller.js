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
        'location': 'Valencia,Spain',
        'ticketUrl': 'http://www.songkick.com/artists/4915163-strypes'
      },

      {

        'date': '25-06-2016',
        'venue': 'Heitere Open Air',
        'location': 'Zofingen,Switzerland',
        'ticketUrl': 'http://www.viagogo.ie/Festival-Tickets/Festivals-in-Switzerland/Heitere-Open-Air-Tickets'

      },

      {

        'date': '15-07-2016',
        'venue': 'Caja magica',
        'location': 'Madrid,Spain',
        'ticketUrl': 'http://www.viagogo.com/Madrid/La-Caja-Magica-Tickets/_V-10119'
      },

      {

        'date': '10-10-2016',
        'venue': 'Rock Werchter',
        'location': 'Belgium',
        'ticketUrl': 'http://www.viagogo.ie/Festival-Tickets/Festivals-in-Belgium/Rock-Werchter-Tickets'
      },{

        'date': '02-12-2016',
        'venue': 'Maracana Stadium',
        'location': 'Rio de Janeiro, Brazil',
        'ticketUrl': 'http://www.viagogo.ie/Concert-Tickets/Alternative-and-Indie/Coldplay-Tickets/E-1374016'
      },{

        'date': '24-12-2016',
        'venue': 'Olympia Theatre',
        'location': 'Dublin',
        'ticketUrl': 'http://www.viagogo.ie/Concert-Tickets/Rock-and-Pop/Troye-Sivan-Tickets/E-1434973'
      },{

        'date': '31-12-2016',
        'venue': 'Etihad Stadium',
        'location': 'Manchester, United Kingdom',
        'ticketUrl': 'http://www.viagogo.ie/Concert-Tickets/Alternative-and-Indie/Coldplay-Tickets'
      }




    ];





  }

})();
