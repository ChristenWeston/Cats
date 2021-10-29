$(document).ready(function() {
  $("button#lightBackground").click(function() {
    $("body").removeClass();
    $("body").addClass("lightBackground");
  });

  $("button#darkBackground").click(function() {
    $("body").removeClass();
    $("body").addClass("darkBackground");
  });

  $("button#originalBackground").click(function() {
    $("body").removeClass();
  });
});