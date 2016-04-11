import Ember from 'ember';


export default Ember.Component.extend({
  voteMade: false,
  actions: {
    delete(answer) {
      if (confirm('Are you sure you want to delete this answer?')) {
        this.sendAction('destroyAnswer', answer);
      }
    },
    upVote(answer) {
      this.sendAction('upVote', answer);
      this.set('voteMade', true);
    },
    downVote(answer) {
      this.sendAction('downVote', answer);
      this.set('voteMade', true);
    }
  }
});
