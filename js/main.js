/* 
  Navigation Code Goes here
*/
$(document).ready(function(){


  //respond to click
  $('#openNav').click(function(evt){
    evt.preventDefault();//stops the link from actually working
    $('#topMenu').slideToggle(500);
  });



  //this code taken from Sebastien on Stackoverflow: http://stackoverflow.com/questions/6461300/triggering-jquery-with-css-media-queries
  //it's been rearranged slightly
  //leave the lines below and then write your code in the doneResizing function below
  doneResizing();
  var id;
    $(window).resize(function() {
        clearTimeout(id);
        id = setTimeout(doneResizing, 0);
    });
  

});
//end document.ready

function doneResizing() {
        //the trick with min-width media queries is that you need to start from your largest and go down. In the else at the end you can write  js for any size below your smallest min-width.
      
        if(Modernizr.mq('screen and (min-width:50em)')) {
          //Your code goes here for screens 50em and wider. This example just changes some text in the footer
          $('footer p').text('We are now in the min-width:50em');
          $('#topMenu').show();//make sure it is showing at larger sizes
        }
        else if(Modernizr.mq('screen and (min-width:40em)')) {
          //Your code goes here for screens 40em and wider. This example just changes some text in the footer
          $('footer p').text('we are now in the min-width:40em');
          $('#topMenu').hide();//make sure hiding at smaller sizes
        }
        else if(Modernizr.mq('screen and (min-width:30em)')) {
          //Your code goes here for screens 30em and wider. This example just changes some text in the footer
          $('footer p').text('we are now in the min-width:30em');
          $('#topMenu').hide();//make sure hiding at smaller sizes
        }else{
          //Your code goes here for screens below 30em in this example. If you add other min-width media queries this will always be the width below the smallest in your media queries.This example just changes some text in the footer
          $('footer p').text('this is the smallest size');
        $('#topMenu').hide();//make sure hiding at smaller sizes
        }
    }

    