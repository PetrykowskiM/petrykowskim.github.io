$('a').hover(
       // On enter
       function(){ 
         var classes = $(this).attr('class').split(/\s+/).filter(function(elem){return elem!='animate-fast'})
         var network = classes[0]

          if(network != 'contact-link'){
              classes.push('overlay')
              classes = classes.map(function(elem){return "." + elem})
              
              var selector = classes.join('')
              console.log(selector)

              $(selector).addClass('animate') 
              $('.tagline').addClass('invisible')
              $('.contact-link').addClass('invisible')
              $(selector+ " > span").addClass('animate-scale') 
              $('#cover').addClass(network)

              $('a').addClass("decent")
              $('a.'+network).removeClass("decent")
            }
          },
          // On leave
        function(){ 
          var classes = $(this).attr('class').split(/\s+/).filter(function(elem){return elem!='animate-fast'})
          var network = classes[0]
          classes.push('overlay')
          classes = classes.map(function(elem){return "." + elem})
          
          var selector = classes.join('')

          $(selector).removeClass('animate')
          $('.tagline').removeClass('invisible')
          $('.contact-link').removeClass('invisible')
          $(selector + " > span").removeClass('animate-scale')
          $('#cover').removeClass(network)
          $('a').removeClass("decent")
        }
)

var mailAttention = null

$(document).ready(function(){
  
  setTimeout(function(){
    $('#description').removeClass('not-visible')
  }, 1000) 

  setTimeout(function(){
    $('.email').removeClass('not-visible')
  }, 2000) 

  setTimeout(function(){
    $('.email').removeClass('animate')
    $('.email').addClass('shake')
    $('.email').addClass('animated')

    mailAttention = setInterval(function(){
      $('.email').addClass('animated')
      $('.email').addClass('shake')
      setTimeout(function(){
        $('.email').removeClass('animated')
        $('.email').removeClass('shake')
      }, 8000)
    }, 9000)
  }, 5000)
})

$('.contact-link').click(function(){
  window.location.href = "mailto:contact@markus-petrykowski.de";

  clearInterval(mailAttention);
})