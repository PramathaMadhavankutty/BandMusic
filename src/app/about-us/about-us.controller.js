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
      "avatar": "assets-band/assets/images/daniel1.jpg",
      "fullName": "DANIEL DE LOS REYES",
      "bio":"Where to start... I have been playing drum set and percussion instruments as far back as I can remember. I think I was probably banging inside my mother's womb until she could stand it no more and said :you're out of there like an umpire in a baseball game. But on a serious note, from the day I was born I heard many different styles and rhythms of music due to the love my parents have for music. My mother is Puerto Rican/American and my father is Cuban/American. I clearly remember my mother always singing beautiful Puerto Rican melodies to us all the time when we were growing up."
      
    }, {
      "avatar":"assets-band/assets/images/jimmy.jpg",
      "fullName":"JIMMY DE MARTINI",
      "bio":"Music has been a part of my life as long as I can remember. While my parents didn’t play any instruments, they would always have music playing around the house and anytime we were in the car.The Police,Led Zeppelin,Paul Simon,The Beatles,Grateful Dead, Tom Petty and The Heartbreakers,and many more were all shaping my musical taste from an early age.My interest in performing music didn’t begin until around the age of twelve. When attending middle school orientation I was introduced to the violin, which I was lucky enough to learn through high school."

    },{
      "avatar": "assets-band/assets/images/bowles1.jpg",
      "fullName": "COY BOWLES",
      "bio": "When I was a kid, I had a room that was next to my bedroom at my parent’s house. Actually, it was part of the attic. It was my world and secret passageway into music and all things creative and awesome. The walls were filled with photos of my favorite bands, musicians, and skateboarders that had been ripped out of magazines and stuck to the wall with thumbtacks and Scotch tape.There was a hammock in this musical, isolation chamber that was filled with sleeping bags and old pillows. I would sit in the hammock and listen to music everyday. I would sing as loud as I could and fill my body with music."
    
    },{
      "avatar": "assets-band/assets/images/cook2.jpg",
      "fullName": "CLAY COOK",
      "bio": "Hello, Internet. This is awkward so I'll make it quick. I was born on April 20th, 1978 (send cash, not presents) in Atlanta, GA. Had a relatively simple, suburban upbringing. My interest in music was a little out of the ordinary for most 5 year olds. I was actually PLAYING guitar by 7. While everyone else was playing video games, I was practicing scale fingers & chord changes.I was practicing scale fingers & chord changes. I am still good at Techmo Bowl though.Fast forward 10 years. They don't let you take \'guitar\' in public school. Soooo,I picked up drums in the fine arts department in high school.",
      "facebook": "the.clay.cook"
    }, {
      "avatar":"assets-band/assets/images/chris1.jpg",
      "fullName":"CHRIS FRYAR",
      "bio":"I hit things! That is what I do. I guess it makes me one of the most laid-back people I know. I suggest you try it...hitting drums, that is! When you see me onstage with a smile on my face, it's because I LOVE what I do.I was born in November of 1970, and according to my mom, I was an easy-going, laid-back, happy child. She also claims that I was singing and banging on pots and pans at a very early age...but I don't really remember any of that.I got my first guitar at the age of six, and my first pair of drumsticks at the age of eleven. I joined the junior high school band program which is where I really developing my love for making all kinds of music.",
      "facebook":"pages/Chris-Fryar",
      "twitter":"ChrisFryarZBB"
    },{
      "avatar":"assets-band/assets/images/matt.jpg",
      "fullName":"MATT MANGANO",
      "bio":"Hello everyone. My name is Matt Mangano and I play the bass. I am honored to be the newest member of Zac Brown Band. Having been the director of Southern Ground Studios, I have been around the gang for a few years, so it already feels like home. Since you may not know me yet, I will share a little bit about myself.I was born May 12, 1976 in Visalia, CA, the heart of the San Joaquin Valley. My parents raised my two sisters and I well, and have always been supportive of my musical journey. At a young age, I was exposed to my dads Martin guitar and my grandmothers baby grand piano, both of which I now have in my home.",
      "facebook":"Matt-Mangano-120938060217",
      "twitter":"mattmangano"
    }];
  }
})();
