define(["jadeRuntime"],function(jade){return function anonymous(locals,attrs,escape,rethrow){var attrs=jade.attrs,escape=jade.escape,rethrow=jade.rethrow,buf=[];with(locals||{}){var interp,__indent=[];buf.push('<!DOCTYPE html><!--[if lt IE 7]><html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="en-gb"><![endif]--><!--[if IE 7]><html class="no-js lt-ie9 lt-ie8" lang="en-gb"><![endif]--><!--[if IE 8]><html class="no-js lt-ie9" lang="en-gb"><![endif]--><!--[if gt IE 8]>\n<!-- --><html lang="en-gb" class="no-js"><![endif]-->\n<head>\n  <meta'),buf.push(attrs({terse:!0,charset:"UTF-8"},{charset:!0})),buf.push("><!--\n  |\n  -------------------------------------\n  PopIt\n  -------------------------------------\n  A really easy way to store and share information about politicians or other public figures brought to you by mySociety, a charitable project which builds websites that give people simple, tangible benefits in the civic and community, and teaches through demonstration, how to use the internet most efficiently to improve lives. (http://www.mysociety.org/)\n  --------------------------------- -->\n  <meta"),buf.push(attrs({terse:!0,name:"creator",content:"http://www.mysociety.org/"},{name:!0,content:!0})),buf.push(">\n  <meta"),buf.push(attrs({terse:!0,"http-equiv":"imagetoolbar",content:"false"},{"http-equiv":!0,content:!0})),buf.push(">\n  <meta"),buf.push(attrs({terse:!0,name:"description",content:"PopIt, a really easy way to store and share information about politicians or other public figures."},{name:!0,content:!0})),buf.push(">\n  <title>People</title>\n  <link"),buf.push(attrs({terse:!0,rel:"stylesheet",href:"/css/popit.css",type:"text/css",media:"screen, print",charset:"utf-8"},{rel:!0,href:!0,type:!0,media:!0,charset:!0})),buf.push(">\n  <link"),buf.push(attrs({terse:!0,rel:"stylesheet",href:"/css/print.css",type:"text/css",media:"print",charset:"utf-8"},{rel:!0,href:!0,type:!0,media:!0,charset:!0})),buf.push(">\n  <meta"),buf.push(attrs({terse:!0,name:"viewport",content:"width=device-width,initial-scale=1"},{name:!0,content:!0})),buf.push(">\n  <!-- script(src='/js/libs/modernizr-2.5.3.js', type='text/javascript', charset='utf-8')-->\n  <script"),buf.push(attrs({terse:!0,src:"/js/libs/require-1.0.8.js","data-main":"/js/main-instance",type:"text/javascript",charset:"utf-8"},{src:!0,"data-main":!0,type:!0,charset:!0})),buf.push("></script>\n</head>");if(locals.user)var bodyClasses=["signed_in"];buf.push("\n<!-- FIXME set the body ID to be the slug version of the instance name instead of united-kingdom-->\n<body"),buf.push(attrs({terse:!0,id:"popit-united_kingdom","class":bodyClasses},{"class":!0})),buf.push(">"),locals.user&&(buf.push("\n  <noscript>\n    <div"),buf.push(attrs({terse:!0,id:"no-js-warning"},{})),buf.push('>Please <a href="http://www.enable-javascript.com/" target="_blank">enable JavaScript</a> - without it much of the admin on this website will not work.</div>\n  </noscript>')),buf.push("\n  <header"),buf.push(attrs({terse:!0,id:"header"},{})),buf.push(">\n    <h1"),buf.push(attrs({terse:!0,"class":"logo"},{})),buf.push("><a"),buf.push(attrs({terse:!0,href:"/"},{href:!0})),buf.push("><abbr"),buf.push(attrs({terse:!0,title:"People Organisations Positions"},{title:!0})),buf.push(">Pop</abbr>It"),locals.popit&&(buf.push("<span"),buf.push(attrs({terse:!0,"class":"popit-instance"},{})),buf.push("> : <span"),buf.push(attrs({terse:!0,id:"popit_instance_name"},{})),buf.push(">"+escape((interp=popit.instance_name())==null?"":interp)+"</span></span>")),buf.push("</a></h1>\n    <div"),buf.push(attrs({terse:!0,id:"user_menu"},{})),buf.push(">"),locals.user?(buf.push("\n      <div"),buf.push(attrs({terse:!0,id:"signed_in"},{})),buf.push(">Hello <span"),buf.push(attrs({terse:!0,"class":"username"},{})),buf.push(">"+escape((interp=user.email)==null?"":interp)+"</span>, <a"),buf.push(attrs({terse:!0,href:"/logout"},{href:!0})),buf.push(">Sign Out</a>\n      </div>")):(buf.push("\n      <div"),buf.push(attrs({terse:!0,id:"sign_in"},{})),buf.push(">already have an account? <a"),buf.push(attrs({terse:!0,href:"/login"},{href:!0})),buf.push(">Sign In</a></div>")),buf.push("\n      <div><a"),buf.push(attrs({terse:!0,href:"/info/data-import"},{href:!0})),buf.push(">Import data automatically</a></div>\n    </div>\n  </header>\n  <div"),buf.push(attrs({terse:!0,id:"content"},{})),buf.push(">\n    <div"),buf.push(attrs({terse:!0,"class":"page-header"},{})),buf.push(">\n      <h1>People</h1>\n    </div>\n    <p"),buf.push(attrs({terse:!0,"class":"admin-options"},{})),buf.push("><a"),buf.push(attrs({terse:!0,id:"new-person",href:"#"},{href:!0})),buf.push(">Create a new person</a></p>"),people.length?(buf.push("\n    <ul>"),function(){if("number"==typeof people.length)for(var a=0,b=people.length;a<b;a++){var c=people[a];buf.push("\n      <li><a"),buf.push(attrs({terse:!0,href:""+c.slug_url+""},{href:!0})),buf.push(">"+escape((interp=c.name)==null?"":interp)+"  </a>\n      </li>")}else for(var a in people){var c=people[a];buf.push("\n      <li><a"),buf.push(attrs({terse:!0,href:""+c.slug_url+""},{href:!0})),buf.push(">"+escape((interp=c.name)==null?"":interp)+"  </a>\n      </li>")}}.call(this),buf.push("\n    </ul>")):(buf.push("\n    <p"),buf.push(attrs({terse:!0,"class":"error"},{})),buf.push(">There are no people in the system yet</p>")),buf.push("\n  </div>\n  <footer"),buf.push(attrs({terse:!0,id:"footer"},{})),buf.push(">\n    <div>\n      <div"),buf.push(attrs({terse:!0,id:"sitemap"},{})),buf.push("><a"),buf.push(attrs({terse:!0,href:"/","class":"logo"},{href:!0})),buf.push(">PopIt</a>\n        <ul>\n          <li><a"),buf.push(attrs({terse:!0,href:"/person"},{href:!0})),buf.push(">People</a>, <a"),buf.push(attrs({terse:!0,href:"/organisation"},{href:!0})),buf.push(">Organisations</a></li>\n          <li><a"),buf.push(attrs({terse:!0,href:"/FIXME"},{href:!0})),buf.push(">About PopIt</a></li>\n          <li><a"),buf.push(attrs({terse:!0,href:"/api"},{href:!0})),buf.push(">API</a> / <a"),buf.push(attrs({terse:!0,href:"/info/data-import"},{href:!0})),buf.push(">Data Freedom</a></li>\n          <li><a"),buf.push(attrs({terse:!0,href:"/FIXME"},{href:!0})),buf.push(">Self Hosting</a></li>\n          <li><a"),buf.push(attrs({terse:!0,href:"/info/privacy"},{href:!0})),buf.push(">Terms & Privacy Policy</a></li>\n        </ul>\n      </div>\n      <div"),buf.push(attrs({terse:!0,id:"about-mysociety"},{})),buf.push("><a"),buf.push(attrs({terse:!0,href:"http://www.mysociety.org",title:"mySociety"},{href:!0,title:!0})),buf.push("><img"),buf.push(attrs({terse:!0,src:"/img/mysociety-logo.png","class":"mysociety-logo"},{src:!0})),buf.push("></a>\n        <p>This is the <a"),buf.push(attrs({terse:!0,href:"http://en.wikipedia.org/wiki/Software_release_life_cycle#Alpha"},{href:!0})),buf.push(">α</a>lpha of <a"),buf.push(attrs({terse:!0,href:config.hosting_site_base_url},{href:!0})),buf.push(">PopIt</a>, a new service for lowering the barrier\n          to getting started with transparency projects. Please feel free to\n          make a <a"),buf.push(attrs({terse:!0,href:""+config.hosting_site_base_url+"/instances/new"},{href:!0})),buf.push(">new instance</a>, and join <a"),buf.push(attrs({terse:!0,href:"https://secure.mysociety.org/admin/lists/mailman/listinfo/components"},{href:!0})),buf.push(">our mailing list</a> to let us know that you're interested in giving it a go\n        </p>\n        <p>Learn more at <a"),buf.push(attrs({terse:!0,href:"http://www.mysociety.org",title:"mySociety"},{href:!0,title:!0})),buf.push(">www.mysociety.org</a></p>\n      </div>\n    </div>\n    <div"),buf.push(attrs({terse:!0,"class":"copyright"},{})),buf.push("></div>\n  </footer>\n</body></html>")}return buf.join("")}})