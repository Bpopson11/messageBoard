import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveQuestion1 (){
      var params = {
        query: this.get('query'),
        info: this.get('info'),
        author: this.get('author'),
        date: this.get('date') ? this.get('date') : moment().format('MMMM Do YYYY, h:mm a'),
      };
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion2', params);
    }
  }
});
