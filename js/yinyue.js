var arr=0;
$('.hua').on('touchstart',function (){
var d= $('audio'); 
  arr++;
  num=1;
  if(arr>=d.length){
    arr=0
}
d.attr('class','audio1')
d[arr].className='audio';
var gm=$('.audio').text()
$('.text p').eq('0').text(gm)
$('.text p').eq('0').removeClass('rl')
$('.text p').eq('0').addClass('rl')

paly();
clearInterval(timer)
setTimeout(function(){
  go(); 
},1000)
}) 

$('.imgs img').on('touchstart',function(){
  
  if( $('.sol').is(':hidden')){
   $('.sol').show('slow')
  }else{
    $('.sol').slideUp('slow')
  }
})
$('.sol ul li').on('touchstart',function(){
  $('.sol ul li').removeClass('rgb')
  $(this).addClass('rgb')
})
$('.sol ul li').on('touchend',function(){
  $('.sol ul li').removeClass('rgb')
  var index=$(this).index()
  var dio= $('audio'); 
  dio.attr('class','audio1')
  dio[index].className='audio';
  var gm=$('.audio').text()
  $('.text p').eq('0').text(gm)
  $('.text p').eq('0').removeClass('rl')
  $('.text p').eq('0').addClass('rl')
  num=1;
  paly();
  clearInterval(timer)
  setTimeout(function(){
  go(); 
},1000)

})

var jpplay=$('.jp-play')[0]
var jppause=$('.jp-pause')[0]
var jpduration=$('.jp-duration')[0]
var jpcurrenttime=$('.jp-current-time')[0]





function paly(){
     var audio=$('.audio')[0]; 
     var audio1=$('.audio1')[0]; 
     console.log(audio1)
     console.log(audio)
    
     jpplay.addEventListener('click',function(){
     audio1.pause();
     audio.play();  
     jpplay.style="display:none"
     jppause.style="display:block" 
     }) 
     setTimeout(function(){
      audio1.pause();
      audio.play();  
      jpplay.style="display:none";
      jppause.style="display:block" ;
     },1000)
     jppause.addEventListener('click',function (){
     audio.pause();  
     jpplay.style="display:block"
     jppause.style="display:none"
    });

//     setInterval(function(){
//     jpcurrenttime.innerText=formatTime(audio.currentTime);  
//     },1000)
//     jpduration.innerText=formatTime(audio.duration); 
    
    
   
   
// function formatTime(t){
//     var m =Math.floor(t/60)
//     m<10?s='0'+m:m;
//     var s =Math.floor(t%60);
//     s<10?s='0'+s:s;
//     return  m+':'+s;
// }
}

