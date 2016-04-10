import DS from 'ember-data';

export default DS.Model.extend({
  response: DS.attr(),
  name: DS.attr(),
  timestamp: DS.attr(),
  question: DS.belongsTo('question', { async: true })
});
