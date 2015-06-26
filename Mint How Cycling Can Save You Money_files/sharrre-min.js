(function($,window,document,undefined){var pluginName="sharrre",defaults={className:"sharrre",share:{googlePlus:false,facebook:false,twitter:false,digg:false,delicious:false},template:"",title:"",url:document.location.href,text:"",urlCurl:"sharrre.php",count:{},total:0,shorterTotal:true,enableHover:true,hover:function(){},hide:function(){},click:function(){},render:function(){},buttons:{googlePlus:{size:"medium",lang:"en-US"},facebook:{action:"like",layout:"button_count",width:"",send:"false",faces:"false",colorscheme:"",font:"",lang:"en_US"},twitter:{count:"horizontal",via:"",related:"",lang:"en"},digg:{type:"DiggCompact"}}},urlJson={googlePlus:"",facebook:"http://graph.facebook.com/?id={url}&callback=?",twitter:"http://cdn.api.twitter.com/1/urls/count.json?url={url}&callback=?",digg:"http://services.digg.com/2.0/story.getInfo?links={url}&type=javascript&callback=?",delicious:"http://feeds.delicious.com/v2/json/urlinfo/data?url={url}&callback=?"},loadButton={googlePlus:function(self){$(self.element).find(".buttons").append('<div class="button googleplus"><div class="g-plusone" data-size="'+self.options.buttons.googlePlus.size+'" data-href="'+self.options.url+'"></div></div>');window.___gcfg={lang:self.options.buttons.googlePlus.lang};var loading=0;if(typeof gapi==="undefined"&&loading==0){loading=1;(function(){var po=document.createElement("script");po.type="text/javascript";po.async=true;po.src="https://apis.google.com/js/plusone.js";var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(po,s);})();}else{gapi.plusone.go();}},facebook:function(self){var sett=self.options.buttons.facebook;$(self.element).find(".buttons").append('<div class="button facebook"><div class="fb-like" data-href="'+self.options.url+'" data-send="'+sett.send+'" data-layout="'+sett.layout+'" data-width="'+sett.width+'" data-show-faces="'+sett.faces+'" data-action="'+sett.action+'" data-colorscheme="'+sett.colorscheme+'" data-font="'+sett.font+'"></div></div>');var loading=0;if(typeof FB==="undefined"&&loading==0){loading=1;(function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(d.getElementById(id)){return;}js=d.createElement(s);js.id=id;js.src="//connect.facebook.net/"+sett.lang+"/all.js#xfbml=1";fjs.parentNode.insertBefore(js,fjs);}(document,"script","facebook-jssdk"));}else{FB.XFBML.parse();}},twitter:function(self){var sett=self.options.buttons.twitter;$(self.element).find(".buttons").append('<div class="button twitter"><a href="https://twitter.com/share" class="twitter-share-button" data-url="'+self.options.url+'" data-count="'+sett.count+'" data-text="'+self.options.text+'" data-via="'+sett.via+'" data-related="'+sett.related+'" data-lang="'+sett.lang+'">Tweet</a></div>');var loading=0;if(typeof twttr==="undefined"&&loading==0){loading=1;(function(){var twitterScriptTag=document.createElement("script");twitterScriptTag.type="text/javascript";twitterScriptTag.async=true;twitterScriptTag.src="http://platform.twitter.com/widgets.js";var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(twitterScriptTag,s);})();}else{$.ajax({url:"http://platform.twitter.com/widgets.js",dataType:"script",cache:true});}},digg:function(self){$(self.element).find(".buttons").append('<div class="button digg"><a class="DiggThisButton '+self.options.buttons.digg.type+'" rel="nofollow external" href="http://digg.com/submit?url='+self.options.url+'"></a></div>');var loading=0;if(typeof __DBW==="undefined"&&loading==0){loading=1;(function(){var s=document.createElement("SCRIPT"),s1=document.getElementsByTagName("SCRIPT")[0];s.type="text/javascript";s.async=true;s.src="http://widgets.digg.com/buttons.js";s1.parentNode.insertBefore(s,s1);})();}},delicious:function(self){$(self.element).find(".buttons").append('<div class="button delicious"><a href="http://www.delicious.com/save" onclick="window.open(\'http://www.delicious.com/save?v=5&noui&jump=close&url='+encodeURIComponent(self.options.url)+"&title="+self.options.text+'\', \'delicious\', \'toolbar=no,width=550,height=550\'); return false;"><img src="http://www.delicious.com/static/img/delicious.small.gif" height="10" width="10" alt="Delicious" /> Bookmark</a></div>');}};function Plugin(element,options){this.element=element;this.options=$.extend(true,{},defaults,options);this._defaults=defaults;this._name=pluginName;this.init();}Plugin.prototype.init=function(){var self=this;urlJson.googlePlus=this.options.urlCurl+"?url={url}";$(this.element).addClass(this.options.className);$.each(this.options.share,function(name,val){if(val==true){try{self.getSocialJson(name);}catch(e){}}});$(this.element).hover(function(){if($(this).find(".buttons").length===0&&self.options.enableHover===true){$(this).append('<div class="buttons"></div>');$.each(self.options.share,function(name,val){if(val==true){loadButton[name](self);}});}self.options.hover(self.element,self.options);},function(){self.options.hide(self.element,self.options);});$(this.element).click(function(){self.options.click(self.element,self.options);return false;});};Plugin.prototype.getSocialJson=function(name){var self=this,count=0,url=urlJson[name].replace("{url}",this.options.url);$.getJSON(url,function(json){if(typeof json.count!="undefined"){count+=parseInt(json.count,10);}else{if(typeof json.shares!="undefined"){count+=parseInt(json.shares,10);}else{if(typeof json[0]!="undefined"){count+=parseInt(json[0].total_posts,10);}}}self.options.count[name]=count;self.options.total+=count;self.renderer();self.options.render(self.element,self.options);});};Plugin.prototype.renderer=function(){var total=this.options.total,template=this.options.template;if(this.options.shorterTotal===true){total=this.shorterTotal(total);}if(template!==""){template=template.replace("{total}",total);$(this.element).html(template);}else{$(this.element).html('<div class="box"><a class="count" href="#">'+total+"</a>"+(this.options.title!==""?'<a class="share" href="#">'+this.options.title+"</a>":"")+"</div>");}};Plugin.prototype.shorterTotal=function(num){if(num>=1000000){num=(num/1000000).toFixed(2)+"M";}else{if(num>=1000){num=(num/1000).toFixed(1)+"k";}}return num;};$.fn[pluginName]=function(options){return this.each(function(){if(!$.data(this,"plugin_"+pluginName)){$.data(this,"plugin_"+pluginName,new Plugin(this,options));}});};})(jQuery,window,document);