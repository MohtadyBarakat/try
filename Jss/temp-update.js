var data = [
     ["noha","sadsa","img/1.jpg"]
    ,["mohannad","cvcv","img/2.jpg"]
    ,["dola","sajsdna","img/3.jpg"]
    ,["noha","sadsa","img/4.jpg"]
    ,["mohannad","cvcv","img/5.jpg"]
    ,["dola","sajsdna","img/6.jpg"]
    ,["noha","sadsa","img/7.jpg"]
    ,["mohannad","cvcv","img/8.jpg"]
    ,["dola","sajsdna","img/9.jpg"]
    ,["noha","sadsa","img/10.jpg"]
    ,["mohannad","cvcv","img/11.jpg"]
    ,["dola","sajsdna","img/6.jpg"]];
function mohannad(x){
        $(this).css({
            "border-color":"#417bad",
            "border-style": "solid",
            "border-width": "3px"})
        $("#data h3").text(data[x][0])
        $("#data p").text(data[x][1])
        $("#data img").attr("src",data[x][2])
        
};

var itm= null
$(document).ready(function(){
    $("#step img").click(function(){
        $(this).css({
            "border-color":"#417bad",
            "border-style": "solid",
            "border-width": "3px",
            "position": "relative",
            "z-index": "50"});
        itm = $(this)
        
    });
    $("#step img").hover(function(){
        $("#step img").css({
            "border-color":"transparent",
            "border-style": "solid",
            "border-width": "3px",
            "position": "relative",
            "z-index": "0" 
        });
        
        $(this).css({
            "border-color":"#417bad",
            "border-style": "solid",
            "border-width": "3px",
            "position": "relative",
            "z-index": "500000"});
        //$(this).next(".tooltiptext").css({"visibility": "visible"});
        
    });
    $("#step img").mouseleave(function(){
        $(this).next(".tooltiptext").css({"visibility": "hidden"});
        $("#step img").css({
            "border-color":"transparent",
            "border-style": "solid",
            "border-width": "3px",
            "position": "relative",
            "z-index": "0" 
        });
        itm.css({
            "border-color":"#417bad",
            "border-style": "solid",
            "border-width": "3px",
            "position": "relative",
            "z-index": "500000"});
        
    });
    
    
    
});