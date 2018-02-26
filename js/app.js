console.log(' new loaded');
$(document).ready(function() {
  $('#fullpage').fullpage();
});

function init() {

  $(document).ready(function(){


    $('#fullpage').fullpage({
      anchors: ['about', 'projects', 'skills', 'contact']
    });


  });

}


init();
