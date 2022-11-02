function updateOutput(){
    $("iframe").contents().find("html").html("<html><head><style type='text/css'>" + $("#cssPanel").val() + "</style></head><body>" + $("#htmlPanel").val() + "</body></html>" );
    document.getElementById("outputPanel").contentWindow.eval($("#javascriptPanel").val());
  }
    $(".toggleButton").hover(function(){
$(this).addClass("highLighted");
    } ,function(){
$(this).removeClass("highLighted");
    });
$(".toggleButton").click(function(){
$(this).toggleClass("active");
$(this).removeClass("highLighted");
var panId = $(this).attr("id")+"Panel";
$("#"+ panId).toggleClass("hidden");
var noOfPanel = 4 -  $(".hidden").length;
$(".panel").width(($(window).width() / noOfPanel)-10);
});
$(".panel").height($(window).height() - $("#header").height()-15);
$(".panel").width(($(window).width() / 2)-10);
updateOutput();
$("textarea").on('change keyup paste',function() {
updateOutput();
});