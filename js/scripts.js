$(document).ready(function() {
  $("button#lightBackground").click(function() {
    $("body").removeClass();
    $("body").addClass("lightBackground");
  });

  $("button#darkBackground").click(function() {
    $("body").removeClass();
    $("body").addClass("darkBackground");
  });

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });
});