import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findAll('question');
  },
  actions: {
    destroyQuestion(question) {
      question.destroyRecord();
      this.transitionTo('index');
    }
  }
});


// , params.question_id will be needed later 
