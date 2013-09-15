App = Ember.Application.create();

// App.ApplicationAdapter = DS.FixtureAdapter.extend();

// DS.RESTAdapter.configure("plurals", {
//   rodovia: "rodovias"
// });

// DS.RESTAdapter.reopen({
//   url: 'http://dprf-server-dropegroup.aws.af.cm'
// });
App.ApplicationAdapter = DS.RESTAdapter.extend({
  host: 'http://dprf-server-dropegroup.aws.af.cm'
});


// Router
// App.Router.map(function() {
//   this.resource('tables', function() {
//     this.resource('table', {path: ':table_id'});
//   });
// });

App.Router.map(function() {
  this.resource('rodovias', { path: '/' });
});

App.RodoviasRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('rodovia');
    // return Ember.$.getJSON('http://dprf-server-dropegroup.aws.af.cm/rodovias').then(function(data) { return data; });
    // var x = Ember.$.getJSON('https://api.github.com/repos/emberjs/ember.js/pulls', function(result) { alert(result[0].title) }).done(function(data) { return '12341234' });
    // alert(x);
  //   return Ember.$.getJSON('https://api.github.com/repos/emberjs/ember.js/pulls').then(function(data) {
  // return data.splice(0, 3);
  // });
  }
         // setupController: function() {
         //   this.controllerFor('food').set('model', App.Food.find());
         // }
});

// App.IndexRoute = Ember.Route.extend({
//   redirect: function() {
//     this.transitionTo('tables');
//   }
// });
// 
// App.TablesRoute = Ember.Route.extend({
//   model: function() {
//     return App.Table.find();
//   }
// });
// 
// // App.TableRoute = Ember.Route.extend({
// //   model: function(params) {
// //     return App.Table.find(params.table_id);
// //   },
// // });
// 
// App.TablesController = Ember.ArrayController.extend({
//   sortProperties: ['id ']
// });
// 
// // App.TableController = Ember.ObjectController.extend();
// 
// App.FoodController = Ember.ArrayController.extend({
//   addFood: function(food) {
//     var table = this.controllerFor('table').get('model');
//     var tabItems = table.get('tab.tabItems');
//     tabItems.createRecord({
//       food: food,
//       cents: food.get('cents')
//       });
//   }
// });
// 
// // App.TabConroller = Ember.ObjectController.extend();
// 
// // View Helpers
// Ember.Handlebars.registerBoundHelper('money', function(value) {
//   return (value % 100 === 0 ?
//     value / 100 + '.00' :
//     parseInt(value / 100, 10) + '.' + value % 100);
// });

// Models
// App.Store = DS.Store.extend({
//   revision: 11,
//   adapter: 'DS.FixtureAdapter'
// });

App.Rodovia = DS.Model.extend({
  id:   DS.attr('integer'),
  code: DS.attr('string'),
  type: DS.attr('string')
});

// App.Table = DS.Model.extend({
//   tab: DS.belongsTo('App.Tab')
// });
// 
// App.Tab = DS.Model.extend({
//   tabItems: DS.hasMany('App.TabItem'),
//   cents: function() {
//     return this.get('tabItems').getEach('cents').reduce(function(accum, item) {
//       return accum + item;
//     }, 0);
//   }.property('tabItems.@each.cents')
// });
// 
// App.TabItem = DS.Model.extend({
//   cents: DS.attr('number'),
//   food: DS.belongsTo('App.Food')
// });
// 
// App.Food = DS.Model.extend({
//   name: DS.attr('string'),
//   imageUrl: DS.attr('string'),
//   cents: DS.attr('number')
// });

// App.Rodovia.FIXTURES = [ { id: 1, code: 'BR-116', type: 'A' } ];

// App.Table.FIXTURES = [{
//   id: 1,
//   tab: 1
// }, {
//   id: 2,
//   tab: 2
// }, {
//   id: 3,
//   tab: 3
// }, {
//   id: 4,
//   tab: 4
// }, {
//   id: 5,
//   tab: 5
// }, {
//   id: 6,
//   tab: 6
// }];
// 
// App.Tab.FIXTURES = [{
//   id: 1,
//   tabItems: []
// }, {
//   id: 2,
//   tabItems: []
// }, {
//   id: 3,
//   tabItems: []
// }, {
//   id: 4,
//   tabItems: [400, 401, 402, 403, 404]
// }, {
//   id: 5,
//   tabItems: []
// }, {
//   id: 6,
//   tabItems: []
// }];
// 
// App.TabItem.FIXTURES = [{
//   id: 400,
//   cents: 1500,
//   food: 1
// }, {
//   id: 401,
//   cents: 300,
//   food: 2
// }, {
//   id: 402,
//   cents: 700,
//   food: 3
// }, {
//   id: 403,
//   cents: 950,
//   food: 4
// }, {
//   id: 404,
//   cents: 2000,
//   food: 5
// }];
// 
// App.Food.FIXTURES = [{
//   id: 1,
//   name: 'Pizza',
//   imageUrl: 'img/pizza.png',
//   cents: 1500
// }, {
//   id: 2,
//   name: 'Pancakes',
//   imageUrl: 'img/pancakes.png',
//   cents: 300
// }, {
//   id: 3,
//   name: 'Fries',
//   imageUrl: 'img/fries.png',
//   cents: 700
// }, {
//   id: 4,
//   name: 'Hot Dog',
//   imageUrl: 'img/hotdog.png',
//   cents: 950
// }, {
//   id: 5,
//   name: 'Birthday Cake',
//   imageUrl: 'img/birthdaycake.png',
//   cents: 2000
// }];
