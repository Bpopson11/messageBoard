import Ember from 'ember';

export default Ember.Component.extend({
  bookmarkList: Ember.inject.service(),
  voteMade: false,

  actions: {
    addToBookmark(question){
      debugger;
      this.get('bookmarkList').add(question);
    },
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
    },
    upVote(answer) {
      this.sendAction('upVote', answer);
    },
    downVote(answer) {
      this.sendAction('downVote', answer);
    }
  }
});
