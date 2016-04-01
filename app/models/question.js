import DS from 'ember-data';

export default DS.Model.extend({
  query: DS.attr(),
  info: DS.attr(),
  author: DS.attr(),
  date: DS.attr()
});
