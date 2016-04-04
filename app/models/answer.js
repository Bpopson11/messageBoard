import DS from 'ember-data';

export default DS.Model.extend({
  answer: DS.attr(),
  name: DS.attr(),
  question: DS.belongsTo('question', { async: true })
});
