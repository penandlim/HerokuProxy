from random import randint
import string
from urlparse import urlparse
import sys
from django.shortcuts import render
from django.utils import timezone

__author__ = 'john'

from django.http import HttpResponse
import urllib2

#baseurl = "127.0.0.1:8000"
baseurl = "mongoliancartoons.herokuapp.com"

def home(request):
    random_int = randint(0, 3)
    if random_int == 0:
        text = 'Are you ready to watch some Mongolian Cartoons?'
    elif random_int == 1:
        text = "It's never too late to watch some anime"
    elif random_int == 2:
        text = "Evangelion sucks dick naruto rules"
    elif random_int == 3:
        text = "Click here for dark anime girl"
    context_dict = {'base_url': baseurl, 'text': text}
    return render(request, 'mongoliancartoons/index.html', context_dict)


def kissanime(request):
    if request.GET.get('url'):
        content = request.get_full_path()
        sep = '/kissanime/?url='
        rest = content.split(sep, 1)[-1]
        print rest
        sys.stdout.flush()
        urlwithoutparam = urlparse(rest).scheme + '://' +  urlparse(rest).netloc + urlparse(rest).path
        req = urllib2.Request(rest, None, {'User-agent' : 'Mozilla/5.0 (Windows; U; Windows NT 5.1; de; rv:1.9.1.5) Gecko/20091102 Firefox/3.5.5'})
        html = urllib2.urlopen(req).read()
        html = string.replace(html, ' href="http://kissanime.com/Content', ' href="http://'+ baseurl +'/Content')
        html = string.replace(html, ' href="http://kissanime.com', ' href="http://' + baseurl + '/kissanime/?url=http://kissanime.com')
        html = string.replace(html, ' href="/', ' href="http://' + baseurl + '/kissanime/?url=' + 'http://kissanime.com/')
        html = string.replace(html, ' href="?', ' href="http://' + baseurl + '/kissanime/?url=' + urlwithoutparam.encode() + '?')
        html = string.replace(html, 'function DoDetect2() {', 'function DoDetect2(){}\n\n function DoDetect4(){')
    else:
        html = "empty"
    return HttpResponse(html)