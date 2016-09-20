$(document).bind('mobileinit',function(){
          $.mobile.changePage.defaults.changeHash = false;
            $.mobile.hashListeningEnabled = false;
            $.mobile.pushStateEnabled = false;
    });

$(document).ready(function () {
        $("#b").click(function () {
        var url = "http://api.nytimes.com/svc/search/v2/articlesearch.json?callback=svc_search_v2_articlesearch&q=" + "Organic Beef" + "&sort=newest&hl=true&api-key=b2660cb2182d4f278a73e270b4f472b8";
        $.getJSON(url, function (data) {
          $.each(data.response.docs, function (i, item) {
            var headline = data.response.docs[i].headline.main;
            var subhead = data.response.docs[i].headline.seo;
            var weburl = data.response.docs[i].web_url;
            var imglinkurl = "<a href='" +weburl +"'>"+headline+"</a>";
            $(".nytimes").append(imglinkurl +"<br/ >");
        });
        });
      });
    });