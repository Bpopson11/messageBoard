import Ember from 'ember';
import moment from 'moment';

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
        timestamp: this.get('timestamp') ? this.get('timestamp') : moment().format('MMMM Do YYYY, h:mm a'),
        question: this.get('question'),
      };
      this.set('addNewAnswer', false);
      this.sendAction('saveAnswer2', params);
    }
  }
});
