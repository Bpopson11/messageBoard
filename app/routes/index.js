import Ember from 'ember';

  var questions=[{
    query: "Why is the sky blue?",
    info: "Why is the sky blue and not like...red?",
    author: "Jiffy Popsicle",
    date:"03/15/2016"
  }, {
    query: "When was the sound barrier broken?",
    info: "By humans, either ground or air. Or both!",
    author: "Mrs. Buttersworth",
    date:"02/02/2016"
  }, {
    query: "Who was the King in Robin Hood?",
    info: "Who was the actor in the new Robin Hood with Russel Crow? I don't remember the kings name!",
    author: "Filbert G.",
    date:"02/01/2016"
  }, {
    query: "Why is the night sky dark?",
    info: "I mean if the reason we can't see them in the day is the sun is so bright it drowns out their light, how come at night the sky isn't as bright since the universe has not end and there's billions upon billions of stars?",
    author: "Missy Pumpernickel",
    date:"01/13/2016"
  }];

export default Ember.Route.extend({
  model() {
    return quesitons;
  }
});
