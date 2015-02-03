# jquery.leavelink
A simple plugin to nofify when user click a link to leave website

Example : when return true; the href will continue process. Return false it stop.

$("li > a").leaveLink({
    onLeave : function(){
     console.log("Testse");
                  return false;
                  }
});
