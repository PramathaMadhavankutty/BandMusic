(function() {
  'use strict';

  angular
    .module('bandMusic')
    .controller('AboutUsController', AboutUsController);

  /** @ngInject */
  function AboutUsController() {
    var vm = this;
    vm.title = 'Limes and Vines';

    vm.members = [{
      "avatar": "assets-band/assets/images/bowles1.jpg",
      "fullName": "COY BOWLES",
      "bio": "When I was a kid, I had a room that was next to my bedroom at my parent’s house. Actually, it was part of the attic. It was my world and secret passageway into music and all things creative and awesome. The walls were filled with photos of my favorite bands, musicians, and skateboarders that had been ripped out of magazines and stuck to the wall with thumbtacks and Scotch tape.There was a hammock in this musical, isolation chamber that was filled with sleeping bags and old pillows. I would sit in the hammock and listen to music everyday. I would sing as loud as I could and fill my body with music.",
      "twitter": "coydroy",
      "facebook": "the.clay.cook"
    }, {
      "avatar": "assets-band/assets/images/cook2.jpg",
      "fullName": "CLAY COOK",
      "bio": "Hello, Internet. This is awkward so I'll make it quick. I was born on April 20th, 1978 (send cash, not presents) in Atlanta, GA. Had a relatively simple, suburban upbringing. My interest in music was a little out of the ordinary for most 5 year olds. I was actually PLAYING guitar by 7. While everyone else was playing video games, I was practicing scale fingers & chord changes.I was practicing scale fingers & chord changes. I am still good at Techmo Bowl though.Fast forward 10 years. They don't let you take \'guitar\' in public school. Soooo,I picked up drums in the fine arts department in high school.",
      "facebook": "the.clay.cook"
    }, {
      "avatar": "assets-band/assets/images/daniel1.jpg",
      "fullName": "DANIEL DE LOS REYES",
      "bio":"Where to start... I have been playing drum set and percussion instruments as far back as I can remember. I think I was probably banging inside my mother's womb until she could stand it no more and said :you're out of there like an umpire in a baseball game. But on a serious note, from the day I was born I heard many different styles and rhythms of music due to the love my parents have for music. My mother is Puerto Rican/American and my father is Cuban/American. I clearly remember my mother always singing beautiful Puerto Rican melodies to us all the time when we were growing up."
  }];
  }
})();
