import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('question');
  },
  actions: {
    update(question, params) {
      question.save();
      this.transitionTo('question question_id')
    }
  }
});
