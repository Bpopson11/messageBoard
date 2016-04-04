import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(question) {
      if (confirm('Are you sure you want to delete this question?')) {
        this.sendAction('destroyQuestion', question);
      }
    },
    destroyAnswer(answer) {
      answer.destroyRecord();
      this.transitionTo('question question_id');
    },
    update(question, params) {
      this.sendAction('update', question, params);
    }
  }
});
