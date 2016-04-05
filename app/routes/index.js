import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      questions: this.store.findAll('question'),
      answers: this.store.findAll('answer')
    });
  },
  actions: {
    update(question, params) {
      debugger;
      question.save();
      this.transitionTo('question', params.question_id);
    }
  }
});
