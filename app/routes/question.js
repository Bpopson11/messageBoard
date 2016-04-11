import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
    update(question, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          question.set(key,params[key]);
        }
      });
      question.save();
      this.transitionTo('index');
    },
    saveAnswer3(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        return question.save();
      });
      this.transitionTo('question', params.question);
    },
    destroyQuestion(question) {
      question.destroyRecord();
      this.transitionTo('index');
    },
    upVote(answer) {
      var voteCount = answer.get('vote');
      answer.set('vote', voteCount +=1);
      answer.save();
      this.transitionTo('question question_id');
    },
    downVote(answer) {
      var voteCount = answer.get('vote');
      answer.set('vote', voteCount -=1);
      answer.save();
      this.transitionTo('question question_id');
    }
  }
});
