import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },
    saveAnswer1() {
      var params = {
        response: this.get('response'),
        name: this.get('name'),
        question: this.get('question'),
      };
      this.set('addNewAnswer', false);
      this.sendAction('saveAnswer2', params);
    }
  }
});
