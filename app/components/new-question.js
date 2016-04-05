import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveQuestion1 (){
      var params = {
        query: this.get('query'),
        ifno: this.get('info'),
        author: this.get('author'),
        date: this.get('date'),
      };
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion2', params);
    }
  }
});
