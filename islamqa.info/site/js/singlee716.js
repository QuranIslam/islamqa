!function(e){var t={};function s(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=t,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s(s.s=5)}({5:function(e,t,s){e.exports=s("6MM0")},"6MM0":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});s("W8Z5"),s("rZ4Y"),s("Q9nz"),s("MGNW")},MGNW:function(e,t,s){s("My2+"),window.initShareButtons=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.location.href;$(e).jsSocials({showLabel:!1,showCount:!1,url:t,shares:[{share:"facebook",logo:"icon-facebook2"},{share:"twitter",logo:"icon-twitter2"},{share:"whatsapp",logo:"icon-whatsapp2"},{share:"telegram",logo:"icon-send"},{share:"email",logo:"icon-envelope"}]}),$("a",".jssocials-share").attr("rel","noreferrer")},window.initShareButtons("#shareButtons",$("#shareButtons").data("page-url"))},"My2+":function(e,t){var s,r;!function(e,t,s){var r="JSSocials",a=function(e,s){return t.isFunction(e)?e.apply(s,t.makeArray(arguments).slice(2)):e},n=/(\.(jpeg|png|gif|bmp|svg)$|^data:image\/(jpeg|png|gif|bmp|svg\+xml);base64)/i,i=/(&?[a-zA-Z0-9]+=)?\{([a-zA-Z0-9]+)\}/g,o={G:1e9,M:1e6,K:1e3},l={};function h(e,s){var a=t(e);a.data(r,this),this._$element=a,this.shares=[],this._init(s),this._render()}h.prototype={url:"",text:"",shareIn:"blank",showLabel:function(e){return!1===this.showCount?e>this.smallScreenWidth:e>=this.largeScreenWidth},showCount:function(e){return!(e<=this.smallScreenWidth)||"inside"},smallScreenWidth:640,largeScreenWidth:1024,resizeTimeout:200,elementClass:"jssocials",sharesClass:"jssocials-shares",shareClass:"jssocials-share",shareButtonClass:"jssocials-share-button",shareLinkClass:"jssocials-share-link",shareLogoClass:"jssocials-share-logo",shareLabelClass:"jssocials-share-label",shareLinkCountClass:"jssocials-share-link-count",shareCountBoxClass:"jssocials-share-count-box",shareCountClass:"jssocials-share-count",shareZeroCountClass:"jssocials-share-no-count",_init:function(e){this._initDefaults(),t.extend(this,e),this._initShares(),this._attachWindowResizeCallback()},_initDefaults:function(){this.url=e.location.href,this.text=t.trim(t("meta[name=description]").attr("content")||t("title").text())},_initShares:function(){this.shares=t.map(this.shares,t.proxy(function(e){"string"==typeof e&&(e={share:e});var s=e.share&&l[e.share];if(!s&&!e.renderer)throw Error("Share '"+e.share+"' is not found");return t.extend({url:this.url,text:this.text},s,e)},this))},_attachWindowResizeCallback:function(){t(e).on("resize",t.proxy(this._windowResizeHandler,this))},_detachWindowResizeCallback:function(){t(e).off("resize",this._windowResizeHandler)},_windowResizeHandler:function(){(t.isFunction(this.showLabel)||t.isFunction(this.showCount))&&(e.clearTimeout(this._resizeTimer),this._resizeTimer=setTimeout(t.proxy(this.refresh,this),this.resizeTimeout))},_render:function(){this._clear(),this._defineOptionsByScreen(),this._$element.addClass(this.elementClass),this._$shares=t("<div>").addClass(this.sharesClass).appendTo(this._$element),this._renderShares()},_defineOptionsByScreen:function(){this._screenWidth=t(e).width(),this._showLabel=a(this.showLabel,this,this._screenWidth),this._showCount=a(this.showCount,this,this._screenWidth)},_renderShares:function(){t.each(this.shares,t.proxy(function(e,t){this._renderShare(t)},this))},_renderShare:function(e){(t.isFunction(e.renderer)?t(e.renderer()):this._createShare(e)).addClass(this.shareClass).addClass(e.share?"jssocials-share-"+e.share:"").addClass(e.css).appendTo(this._$shares)},_createShare:function(e){var s=t("<div>"),r=this._createShareLink(e).appendTo(s);if(this._showCount){var a="inside"===this._showCount,n=a?r:t("<div>").addClass(this.shareCountBoxClass).appendTo(s);n.addClass(a?this.shareLinkCountClass:this.shareCountBoxClass),this._renderShareCount(e,n)}return s},_createShareLink:function(e){var s=this._getShareStrategy(e).call(e,{shareUrl:this._getShareUrl(e)});return s.addClass(this.shareLinkClass).append(this._createShareLogo(e)),this._showLabel&&s.append(this._createShareLabel(e)),t.each(this.on||{},function(r,a){t.isFunction(a)&&s.on(r,t.proxy(a,e))}),s},_getShareStrategy:function(e){var t=u[e.shareIn||this.shareIn];if(!t)throw Error("Share strategy '"+this.shareIn+"' not found");return t},_getShareUrl:function(e){var t=a(e.shareUrl,e);return this._formatShareUrl(t,e)},_createShareLogo:function(e){var s=e.logo,r=n.test(s)?t("<img>").attr("src",e.logo):t("<i>").addClass(s);return r.addClass(this.shareLogoClass),r},_createShareLabel:function(e){return t("<span>").addClass(this.shareLabelClass).text(e.label)},_renderShareCount:function(e,s){var r=t("<span>").addClass(this.shareCountClass);s.addClass(this.shareZeroCountClass).append(r),this._loadCount(e).done(t.proxy(function(e){e&&(s.removeClass(this.shareZeroCountClass),r.text(e))},this))},_loadCount:function(e){var s=t.Deferred(),r=this._getCountUrl(e);if(!r)return s.resolve(0).promise();var a=t.proxy(function(t){s.resolve(this._getCountValue(t,e))},this);return t.getJSON(r).done(a).fail(function(){t.get(r).done(a).fail(function(){s.resolve(0)})}),s.promise()},_getCountUrl:function(e){var t=a(e.countUrl,e);return this._formatShareUrl(t,e)},_getCountValue:function(e,s){var r=(t.isFunction(s.getCount)?s.getCount(e):e)||0;return"string"==typeof r?r:this._formatNumber(r)},_formatNumber:function(e){return t.each(o,function(t,s){if(e>=s)return e=parseFloat((e/s).toFixed(2))+t,!1}),e},_formatShareUrl:function(t,s){return t.replace(i,function(t,r,a){var n=s[a]||"";return n?(r||"")+e.encodeURIComponent(n):""})},_clear:function(){e.clearTimeout(this._resizeTimer),this._$element.empty()},_passOptionToShares:function(e,s){var r=this.shares;t.each(["url","text"],function(a,n){n===e&&t.each(r,function(t,r){r[e]=s})})},_normalizeShare:function(e){return t.isNumeric(e)?this.shares[e]:"string"==typeof e?t.grep(this.shares,function(t){return t.share===e})[0]:e},refresh:function(){this._render()},destroy:function(){this._clear(),this._detachWindowResizeCallback(),this._$element.removeClass(this.elementClass).removeData(r)},option:function(e,t){if(1===arguments.length)return this[e];this[e]=t,this._passOptionToShares(e,t),this.refresh()},shareOption:function(e,t,s){if(e=this._normalizeShare(e),2===arguments.length)return e[t];e[t]=s,this.refresh()}},t.fn.jsSocials=function(e){var s=t.makeArray(arguments).slice(1),a=this;return this.each(function(){var n,i=t(this),o=i.data(r);if(o)if("string"==typeof e){if(void 0!==(n=o[e].apply(o,s))&&n!==o)return a=n,!1}else o._detachWindowResizeCallback(),o._init(e),o._render();else new h(i,e)}),a};var u={popup:function(s){return t("<a>").attr("href","#").on("click",function(){return e.open(s.shareUrl,null,"width=600, height=400, location=0, menubar=0, resizeable=0, scrollbars=0, status=0, titlebar=0, toolbar=0"),!1})},blank:function(e){return t("<a>").attr({target:"_blank",href:e.shareUrl})},self:function(e){return t("<a>").attr({target:"_self",href:e.shareUrl})}};e.jsSocials={Socials:h,shares:l,shareStrategies:u,setDefaults:function(e){var s;t.isPlainObject(e)?s=h.prototype:(s=l[e],e=arguments[1]||{}),t.extend(s,e)}}}(window,jQuery),window,s=jQuery,r=window.jsSocials,s.extend(r.shares,{email:{label:"E-mail",logo:"fa fa-at",shareUrl:"mailto:{to}?subject={text}&body={url}",countUrl:"",shareIn:"self"},twitter:{label:"Tweet",logo:"fa fa-twitter",shareUrl:"https://twitter.com/share?url={url}&text={text}&via={via}&hashtags={hashtags}",countUrl:""},facebook:{label:"Like",logo:"fa fa-facebook",shareUrl:"https://facebook.com/sharer/sharer.php?u={url}",countUrl:"https://graph.facebook.com/?id={url}",getCount:function(e){return e.share&&e.share.share_count||0}},vkontakte:{label:"Like",logo:"fa fa-vk",shareUrl:"https://vk.com/share.php?url={url}&title={title}&description={text}",countUrl:"https://vk.com/share.php?act=count&index=1&url={url}",getCount:function(e){return parseInt(e.slice(15,-2).split(", ")[1])}},googleplus:{label:"+1",logo:"fa fa-google",shareUrl:"https://plus.google.com/share?url={url}",countUrl:""},linkedin:{label:"Share",logo:"fa fa-linkedin",shareUrl:"https://www.linkedin.com/shareArticle?mini=true&url={url}",countUrl:"https://www.linkedin.com/countserv/count/share?format=jsonp&url={url}&callback=?",getCount:function(e){return e.count}},pinterest:{label:"Pin it",logo:"fa fa-pinterest",shareUrl:"https://pinterest.com/pin/create/bookmarklet/?media={media}&url={url}&description={text}",countUrl:"https://api.pinterest.com/v1/urls/count.json?&url={url}&callback=?",getCount:function(e){return e.count}},stumbleupon:{label:"Share",logo:"fa fa-stumbleupon",shareUrl:"http://www.stumbleupon.com/submit?url={url}&title={title}",countUrl:"https://cors-anywhere.herokuapp.com/https://www.stumbleupon.com/services/1.01/badge.getinfo?url={url}",getCount:function(e){return e.result&&e.result.views}},telegram:{label:"Telegram",logo:"fa fa-telegram",shareUrl:"tg://msg?text={url} {text}",countUrl:"",shareIn:"self"},whatsapp:{label:"WhatsApp",logo:"fa fa-whatsapp",shareUrl:"whatsapp://send?text={url} {text}",countUrl:"",shareIn:"self"},line:{label:"LINE",logo:"fa fa-comment",shareUrl:"http://line.me/R/msg/text/?{text} {url}",countUrl:""},viber:{label:"Viber",logo:"fa fa-volume-control-phone",shareUrl:"viber://forward?text={url} {text}",countUrl:"",shareIn:"self"},pocket:{label:"Pocket",logo:"fa fa-get-pocket",shareUrl:"https://getpocket.com/save?url={url}&title={title}",countUrl:""},messenger:{label:"Share",logo:"fa fa-commenting",shareUrl:"fb-messenger://share?link={url}",countUrl:"",shareIn:"self"},rss:{label:"RSS",logo:"fa fa-rss",shareUrl:"/feeds/",countUrl:"",shareIn:"blank"}})},Q9nz:function(e,t,s){"use strict";var r=s("rZ4Y");$(document).ready(function(){var e=$("[data-clipboard]");$(e).mouseleave(r.a).blur(r.a),$(e).click(function(){var e=$($(this).data("clipboard-target"));e.focus(),e.select();try{document.execCommand("copy"),Object(r.c)(this,"Copied!")}catch(e){Object(r.c)(this,Object(r.b)("copy"))}})})},W8Z5:function(e,t){var s=$(".single-layout"),r=function(){var e=$(s).attr("class").split(/\s+/).filter(function(e){return e.includes("is-size-")})[0];return Number(e.match(/[1-7]/)[0])};$("[data-change-font-face]").click(function(e){e.stopPropagation();var t=r();$(s).removeClass("is-taha is-droid").addClass($(this).data("change-font-face")),"is-taha"===$(this).data("change-font-face")?$(s).removeClass("is-size-"+t).addClass("is-size-5"):$(s).removeClass("is-size-"+t).addClass("is-size-6")});$("[data-change-font-size]").click(function(e){e.stopPropagation();var t=$(this).data("change-font-size"),a=r();"-"===t&&6===a?$("[data-change-font-size='-']").addClass("is-disabled"):"+"===t&&0===a?$("[data-change-font-size='+']").addClass("is-disabled"):($("[data-change-font-size='-']").removeClass("is-disabled"),$("[data-change-font-size='+']").removeClass("is-disabled"));var n="";switch($(s).removeClass("is-size-"+a),t){case"+":n=a>1?a-1:a;break;case"-":n=a<7?a+1:a;break;default:n=$(s).hasClass("is-taha")?5:6}$(s).addClass("is-size-"+n)})},rZ4Y:function(e,t,s){"use strict";s.d(t,"a",function(){return r}),s.d(t,"c",function(){return a}),s.d(t,"b",function(){return n}),window.isMobile||$(".single_fatwa__answer__body .LinkFatwa").each(function(){var e=$(this).attr("href").match(/\/(\d+)$/)[1]||null;if(e){var t=$(this);$(this).webuiPopover({container:$(this),placement:"auto-top",width:300,style:"single_fatwa__tooltip",type:"async",async:{type:"GET",error:function(){$(t).webuiPopover("hide")}},url:"/api/"+window.Lang.locale+"/post/show/"+e,content:function(e){return'<p class="is-size-6">'+e.post.title+"</p>"},trigger:"hover",animation:"pop",direction:$("body").hasClass("is-rtl")?"rtl":"ltr"})}});var r=function(e){$(e.currentTarget).removeClass("tooltipped tooltipped-s"),$(e.currentTarget).attr("aria-label","")},a=function(e,t){$(e).addClass("tooltipped tooltipped-s"),$(e).attr("aria-label",t)},n=function(e){var t="cut"===e?"X":"C";return/iPhone|iPad/i.test(navigator.userAgent)?"No support :(":/Mac/i.test(navigator.userAgent)?"Press ⌘-"+t+" to "+e:"Press Ctrl-"+t+" to "+e}}});