if (!window.ActiveXObject){ document.write("<div style=\"text-align: center; margin: 0px auto; width:300px; height:250px; position:relative;\">");document.write("<style type=\"text\/css\"> .madLink{ position:absolute; bottom:0px; left:0px; width:14px; height:14px; min-width:14px; max-width:14px; min-height:14px; max-height:14px; color:#FFF; background-color:#FF0000; text-align:center; font:11px Arial, Tahoma, sans-serif; font-weight:bold; opacity:0.6; filter:alpha(opacity=60); } DIV.madLink:hover { cursor:pointer; color:#99ffff; opacity:.9; filter:alpha(opacity=90); } <\/style>"); }var prot = 'http:'; var patternUrl = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;  var psa = 0; var resultApproved = null; var resultServing = null; var approvedURLs = ['kissanime.com']; var adServingURLs = ['madadsmedia.com','ads-by.madadsmedia.com'];  var store = "0"; var resultBlocked = null; var blockedURLs = ["porn","topless","fuck","xxx","tits","pussy","xrated","cunt","gangbang","blowjob","jailbait","nsfw","dead","shot","killed","died","murder","suicide","violence","abused","rape","sex","nipple","porno","carajo","tetas","coño","orgia","mamada","muertos","disparo","muertos","muerto","asesinato","suicidio","violencia","abusado","violación","sexo","pezón","sesso"]; var googlePage = 'www.kissanime.com'; var SiteID='4612';  var realURL = 1; var iframe = 0; var url = 0; var src = 0;  if (top === self){ var refURL = document.location.href; url = encodeURIComponent(document.location.href); src = 0; } else { var refURL = document.referrer; url = encodeURIComponent(document.location.href); src = encodeURIComponent(document.referrer); } if(typeof setMIframe !== 'undefined'){ iframe = setMIframe; } if(typeof setMRefURL !== 'undefined'){ refURL = setMRefURL; if(iframe == 1){ src = setMRefURL; }else{ url = setMRefURL; } }  if(!refURL){ refURL = googlePage ? prot+'//'+googlePage : document.location.href; realURL = 0; }  if(iframe == 1 && !src){ refURL = document.location.href; src = 'BlankRefServe'; realURL = 0; }  var pb300x250='3421/4612/default/300x250.js';  if(patternUrl.test(refURL.toLowerCase())){ for(var i = 0; i < blockedURLs.length; i++){ if(refURL.toLowerCase().match(blockedURLs[i].toLowerCase())){ resultBlocked = true; break; }} if(!resultBlocked){ for(var i = 0; i < approvedURLs.length; i++){ if(refURL.toLowerCase().match(approvedURLs[i].toLowerCase())) { resultApproved = true; break; }} for(var i = 0; i < adServingURLs.length; i++){ if(refURL.toLowerCase().match(adServingURLs[i].toLowerCase())){ resultServing = adServingURLs[i]; break; }}  if(resultApproved || resultServing){ document.write("<img src='http://pixel.madadsmedia.com/?site=4612&size=1&iframe="+iframe+"&url="+url+"&src="+src+"&store="+store+"' style='display:none'>"); document.write("<script type='text/javascript'>");var rp_account='8223';var rp_site='14911';var rp_zonesize='121224-15';var rp_adtype='js';var rp_smartfile='[SMART FILE URL]';var rp_kw='Kissanime.com'; var rp_inventory = {Site : "Kissanime.com"}; var SizeID='1';document.write("<\/script>");document.write("<script type='text/javascript' src='http://ads.rubiconproject.com/ad/8223.js'>");document.write("<\/script>"); var _qevents = _qevents || [];
                                                  (function() {
                                                  var elem = document.createElement('script');
                                                  elem.src = (document.location.protocol == 'https:' ? 'https://secure' : 'http://edge') + '.quantserve.com/quant.js';
                                                  elem.async = true;
                                                  elem.type = 'text/javascript';
                                                  var scpt = document.getElementsByTagName('script')[0];
                                                  scpt.parentNode.insertBefore(elem, scpt);
                                                  })();
                                                  _qevents.push({
                                                  qacct:'p-QAjpCznqPvtcy'
                                                  }); } else { psa = '1'; var dw = document; if(typeof pb300x250 != 'undefined'){ dw.write('<script language="JavaScript" type="text/javascript"'); dw.write('src="http://ads-by.madadsmedia.com/tags/' + pb300x250 + '">'); dw.write('<\/scr' + 'ipt>'); } else { dw.write('<script language="JavaScript" type="text/javascript"'); dw.write('src="http://ads-by.madadsmedia.com/tags/3421/4612/default/300x250.js">'); dw.write('<\/scr' + 'ipt>'); } }} else { document.write('<img src="'+prot+'\//pixel.madadsmedia.com/?site=4612&size=1&iframe='+iframe+'&url='+url+'&src='+src+'&blocked=1" style="display:none">'); } } if (!window.ActiveXObject){ document.write("<div class=\"madLink\"><span><a style=\"color: white; text-decoration: none\" href=\""+prot+"//www.madadsmedia.com\/index\/ref\/30\/\" target=\"_blank\">?</a></span></div>"); document.write("<\/div>"); }