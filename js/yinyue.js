var video=document.getElementById('video');
var jpplay=document.getElementsByClassName('jp-play')[0]
var jppause=document.getElementsByClassName('jp-pause')[0]


var jpduration=document.getElementsByClassName('jp-duration')[0]
var jpcurrenttime=document.getElementsByClassName('jp-current-time')[0]


var jpseekbar=document.getElementsByClassName('jp-seek-bar')[0]
var jpplaybar=document.getElementsByClassName('jp-play-bar')[0]
var jpfullscreen=document.getElementsByClassName('jp-full-screen')[0]

var jpvolumebarvalue=document.getElementsByClassName('jp-volume-bar-value')[0]
var jpvolumebar=document.getElementsByClassName('jp-volume-bar')[0]
var b=0;
var span=document.getElementsByTagName('span')[0]
video.addEventListener('canplay',function(){
    jpplay.addEventListener('click',function(){
        
      video.play();  
     jpplay.style="display:none"
     jppause.style="display:block"
     
    })

    jppause.addEventListener('click',function(){
      video.pause();  
     jpplay.style="display:block"
     jppause.style="display:none"
    });
    
    jpduration.innerText=formatTime(video.duration);
   video.addEventListener('timeupdate',function(){
     jpcurrenttime.innerText=formatTime(video.currentTime) 
     jpplaybar.style.width=(video.currentTime / video.duration)*100+'%' 
   })
    jpseekbar.addEventListener('click',function(e){
        e=e||window.event;
        var cx=e.offsetX;
        var cw=this.offsetWidth;

        jpplaybar.style.width=(cx/cw)*100+'%';

        video.currentTime = (cx / cw)*video.duration;

    })
    jpfullscreen.addEventListener('click',function(){
        video.webkitRequestFullScreen();
    })



    video.addEventListener('ended',function(){
        video.currentTime=0;
        jpplaybar.style="width=0%";
        jppause.style="display:none";
        jpplay.style="display:block";
    })
    jpvolumebar.onclick = function(e) {
        var e = e || window.event;
        jpvolumebarvalue.style.width = Math.floor(e.offsetX / this.offsetWidth * 100) + '%';
        video.volume = e.offsetX / this.offsetWidth
    }
    
    document.onkeydown =function(e){
        var e=e|| window.event;
        b++;
        if(b%2==1){
        if(e.keyCode==32){
          video.play();  
            jpplay.style="display:none"
            jppause.style="display:block" 
        }
        }else{
           
              video.pause();  
            jpplay.style="display:block"
            jppause.style="display:none"
        }        
    }
});
function formatTime(t){
    var m =Math.floor(t/60)
    m<10?s='0'+m:m;
    var s =Math.floor(t%60);
    s<10?s='0'+s:s;
    return  m+':'+s;
}
// setInterval(function(){
//     span.style.background='rgb('+parseInt(Math.random()*256)+','+parseInt(Math.random()*256)+','+parseInt(Math.random()*256)+')'
// },1000)


