define(["Backbone","underscore","popit/collections/suggestions","templates/person/compact_list"],function(a,b,c,d){var e=a.View.extend({tagName:"ul",className:"suggestions",collection:new c,render:function(){var a=d({persons:this.collection.toJSON()});return this.$el.html(a),this},setName:b.debounce(function(a){var b=this;return a?b.collection.fetch({data:{name:a},success:function(){b.render()}}):(b.collection.reset(),b.render()),b},200)});return e})