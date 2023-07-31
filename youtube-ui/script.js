var Tag_list = document.querySelector('.tag-list');

var List = Tag_list.querySelectorAll('li');

List.forEach((item)=>{
    item.addEventListener('click',(e)=>{
       var Active_ele = Tag_list.querySelector('.active');
       if(Active_ele){
        Active_ele.classList.remove('active');
       }
       e.target.classList.add('active')
    })
})

var Left_arrow=document.getElementById('left');
var Right_arrow = document.getElementById('right');
var carosel_section= document.querySelector('.carosel-section');
 var current_left=50;
 var step=100;
 var minLeft = -430;
 var maxLeft=20;

 Right_arrow.addEventListener('click',()=>{
    Left_arrow.style.display='block'
    current_left -=step;
    if(current_left < minLeft){
        current_left = minLeft
    }
    carosel_section.style.left = `${current_left}px`
})
Left_arrow.addEventListener('click',()=>{

      current_left +=step;
    if(current_left > maxLeft){
        current_left = maxLeft
    }
    carosel_section.style.left = `${current_left}px`
})

var list_details = document.querySelectorAll('.list-details');

list_details.forEach((list)=>{
    list.addEventListener('click',()=>{
        var video=list.querySelector('.img video');
        var video_text = list.querySelector('.text-details h4');
        var banner = document.querySelector('.banner video');
        var channel_details=document.querySelector('.channel-details h1');
 
        // channel-details.innerHTML = video_text.textContent;
        banner.src = video.src;
        channel_details.textContent = video_text.textContent;
    })
})