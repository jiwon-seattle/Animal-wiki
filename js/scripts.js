$(document).ready(function() {
  $("button#gturtle").click(function(event){
    $("#turtle").show();
    $("#snake").hide();
    $("#wombat").hide();
    $("body").css('background-color', 'green')
  })

  $("button#zsnake").click(function(event){
    $("#turtle").hide();
    $("#snake").show();
    $("#wombat").hide();
    $("body").css('background-color', 'red')
  })

  $("button#awombat").click(function(event){
    $("#turtle").hide();
    $("#snake").hide();
    $("#wombat").show();
    $("body").css('background-color', 'yellow')
  })
})
