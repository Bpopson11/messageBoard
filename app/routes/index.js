import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      questions: this.store.findAll('question'),
      answers: this.store.findAll('answer')
    });
  },
  // sortBy: ['date:desc'],
  // sortedQuestions: Ember.computed.sort('question.date', 'sortBy'),

  actions: {
    update(question, params) {
      question.save();
      this.transitionTo('question', params.question_id);
    }
  }
});
