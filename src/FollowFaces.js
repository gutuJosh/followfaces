
const freezeFace = (img) => {
    try{
        
        img.addEventListener('mouseenter', ()=>{
              img.style.opacity=1;
         }, false);

        img.addEventListener('mouseleave', ()=>{
          img.style.opacity=0;
        }, false);
        
        if(('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)){
            img.addEventListener('touchstart', ()=>{
                img.style.opacity=1;
           }, false);
  
          img.addEventListener('touchend', ()=>{
            img.style.opacity=0;
          }, false);
        }
      
       }
       catch(error){
           console.log(error);
       }
}

class FollowFaces{

    constructor(props){

        this.element = null;
        this.scrollStep = null;
        this.touchsupport = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0);
      
        if(typeof props === 'string'){
         
            const image = document.querySelectorAll(props);
            if(typeof image !== 'undefined'){
                const self = this;
                window.addEventListener('mousemove', (event) => {
                  image.forEach( (item) => {
                    self.element  = item;
                    self.scrollStep = document.querySelector('.'+item.className+' img').offsetWidth;
                    self.initialize(event);
                  });
                }, false);

                if(this.touchsupport){
                    window.addEventListener('touchmove', (event) => {
                     image.forEach( (item) => {
                        self.element  = item;
                        self.scrollStep = document.querySelector('.'+item.className+' img').offsetWidth;
                        self.initialize(event);
                     });
                    }, false);
                }

                image.forEach( (item) => {
                    item.children[0].style.opacity=0;
                    freezeFace(item.children[0]);
                });
            }
        }
       
    }

    initialize(event){

         event.preventDefault();
         let element = this.element;
         //Get the position of the picture
         let face = this.element.getBoundingClientRect();
         //Get the center of the picture
         let picCenterX = (element.offsetWidth / 2) + face.left;
         let picCenterY = (element.offsetHeight / 2) + face.top;
         //Get user mouse position
         let clientX = parseInt(event.clientX);
         let clientY = parseInt(event.clientY);

         //Get the distance of the mouse from the center of the picture
         let distX = event.type === 'mousemove' ? (clientX - picCenterX) : (parseInt(event.changedTouches[0].clientX) - picCenterX);
         let distY = event.type === 'mousemove' ? clientY - picCenterY : (parseInt(event.changedTouches[0].clientY) - picCenterY);

         //Get the angle in radiants, formed by the mouse X, Y position and the center of the image
         // then transform radiants in degree
         //and finally add 180 to obtain a complete rotation (circle = an angle of rad 2π)
         var angle = Math.round(Math.atan2(distY, distX) * (180 / Math.PI)) + 180;
         
         if(angle >= 0 && angle < 40){
           element.style.backgroundPosition="-"+(this.scrollStep*2)+"px 0";
         }
         else if(angle >= 40 && angle < 66){
          this.element.style.backgroundPosition="-"+this.scrollStep+"px 0";
         }
         else if(angle >= 66 && angle < 114){
          element.style.backgroundPosition="0 0";
         }
         else if(angle >= 114 && angle < 146){
          element.style.backgroundPosition="-"+(this.scrollStep*7)+"px 0";
         }
         else if(angle >= 147 && angle < 181){
          element.style.backgroundPosition="-"+(this.scrollStep*6)+"px 0";
         }
         else if(angle >= 182 && angle < 246){
          element.style.backgroundPosition="-"+(this.scrollStep*5)+"px 0";
         }
         else if(angle >= 247 && angle < 301){
          element.style.backgroundPosition="-"+(this.scrollStep*4)+"px 0";
         }
         else if(angle >= 301 && angle < 361){
          element.style.backgroundPosition="-"+(this.scrollStep*3)+"px 0";
         }

    }

}
export default FollowFaces;