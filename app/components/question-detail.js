import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(quesiton) {
      if (confirm('Are you sure you want to delete this quesiton?')) {
        this.sendAction('destroyQuestion', quesiton);
      }
    }
  }
});
