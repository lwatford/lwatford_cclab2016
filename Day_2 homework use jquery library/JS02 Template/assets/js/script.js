    $(document).ready(function(){
      var i = ["ActionScript","AppleScript","Asp","BASIC","C","C++","Clojure","COBOL","ColdFusion","Erlang","Fortran","Groovy","Haskell","Java","JavaScript","Lisp","Perl","PHP","Python","Ruby","Scala","Scheme"];
      $( "#autocomplete" ).autocomplete({
        source: i
      });
      $("#datepicker").datepicker({
        minDate:0,
        maxDate:'10/31/2016'
      });
    });