define(["jquery","jquery.fancybox","Backbone","Backbone.Marionette","popit/models/person","popit/views/person-new"],function(a,b,c,d,e,f){a.ajaxSetup({converters:{"text json":function(b){var c=a.parseJSON(b);return c.results||c.result||c}}});var g=new c.Marionette.Application;return g.addInitializer(function(b){a("#new-person").click(function(b){b.preventDefault();var c=new e({}),d=new f({model:c});d.render(),a.fancybox(d.el),d.$(":input:first").focus()})}),g})