import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,

actions: {
  updateQuestionForm() {
    this.set('updateQuestionForm', true);
  },
  update(question) {
    var params = {
      query: this.get('query'),
      info: this.get('info'),
      author: this.get('author'),
      date: this.get('date'),
    };
    this.set('updateQuestionForm', false);
    this.sendAction('update', question, params);
  }
}
});
