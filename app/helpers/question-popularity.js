import Ember from 'ember';

export function questionPopularity(params) {
  var question = params[0];

  if(question.get('answers').get('length') >= 4) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-question-sign"></span><span class="glyphicon glyphicon-question-sign"></span><span class="glyphicon glyphicon-question-sign"></span><span class="glyphicon glyphicon-question-sign"></span>')
  } else if (question.get('answers').get('length') >= 3) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-question-sign"></span><span class="glyphicon glyphicon-question-sign"></span><span class="glyphicon glyphicon-question-sign"></span>')
  } else if (question.get('answers').get('length') >= 2) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-question-sign"></span><span class="glyphicon glyphicon-question-sign">')
  } else if (question.get('answers').get('length') > 0) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-question-sign"></span>')
  }
}
export default Ember.Helper.helper(questionPopularity);
