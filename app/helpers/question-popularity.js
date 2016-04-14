import Ember from 'ember';

export function questionPopularity(params) {
  var question = params[0];

  // if(question.get('answers').get('length') >= 4) {
  //   return Ember.String.htmlSafe('<span class="glyphicon glyphicon-question-sign"></span><span class="glyphicon glyphicon-question-sign"></span><span class="glyphicon glyphicon-question-sign"></span><span class="glyphicon glyphicon-question-sign"></span>');
  // } else if (question.get('answers').get('length') >= 3) {
  //   return Ember.String.htmlSafe('<span class="glyphicon glyphicon-question-sign"></span><span class="glyphicon glyphicon-question-sign"></span><span class="glyphicon glyphicon-question-sign"></span>');
  // } else if (question.get('answers').get('length') >= 2) {
  //   return Ember.String.htmlSafe('<span class="glyphicon glyphicon-question-sign"></span><span class="glyphicon glyphicon-question-sign">');
  // } else if (question.get('answers').get('length') > 0) {
  //   return Ember.String.htmlSafe('<span class="glyphicon glyphicon-question-sign"></span>');
  // }
  var outputGlyphs = ""
  question.get('answers').forEach(function(answer, index){
    if (index > 4) {
      break;
    } else {
      outputGlyphs += '<span class="glyphicon glyphicon-question-sign"></span>';
    }
  })
  return outputGlyphs;
}
export default Ember.Helper.helper(questionPopularity);
