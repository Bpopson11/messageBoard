import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      questions: this.store.findAll('question'),
      answers: this.store.findAll('answer')
    });
  },
  // sortBy: ['author:desc'],
  // sortedQuestions: Ember.computed.sort('model.questions', 'sortBy'),

  actions: {
    update(question, params) {
      question.save();
      this.transitionTo('question', params.question_id);
    }
  }
});
