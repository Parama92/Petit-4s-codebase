<template>
    <b-row>
        <b-col id="main">
            <div id="prev" class="btn" @click="prevImage"><font-awesome-icon :icon="prev"/></div>
            <div id="img" style="background-image=url('http://buzzbakeshop.com/wp-content/uploads/2016/04/DSC04866.jpg')" alt="Responsive image"></div>
            <div id="imgNext" style="background-image=url('https://www.norbertskitchen.com/wp-content/uploads/2016/01/DSC6890.jpg')" class="hide" alt="Responsive image"></div>
            <!-- <img height="750px" width="100%" id="img" src="http://buzzbakeshop.com/wp-content/uploads/2016/04/DSC04866.jpg" alt="Responsive image">
            <img height="750px" width="100%" id="imgNext" src="../assets/cake2.jpg" class="hide" alt="Responsive image"> -->
            <!-- <b-img-lazy :src="require(currentImage())" center fluid-grow width="100%" blank-color="#bbb" alt="Cake"/> -->
            <!-- <div id="img-caption">
                <h1 id="img-cap-h"></h1>
                <p id="img-cap-p"></p>
                <button class="btn btn-secondary">Order</button>
            </div> -->
            <div id="next" class="btn" @click="nextImage"><font-awesome-icon :icon="next"/></div>
        </b-col>
    </b-row>
</template>

<script>

import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faChevronRight, faChevronLeft)

// Vue.component('font-awesome-icon', FontAwesomeIcon)

export default {
  name: 'Slideshow',
  components: {
    FontAwesomeIcon
  },
  data () {
      return {
        images: [
              {id:0, captionHead: "CHOCOLATE CAKE WITH SPRINKLES", captionPara: "One of our special orders.", name: "http://buzzbakeshop.com/wp-content/uploads/2016/04/DSC04866.jpg"},
              {id:1, captionHead: "CUPCAKES", captionPara: "Beautifully decorated with bows.", name: "https://www.norbertskitchen.com/wp-content/uploads/2016/01/DSC6890.jpg"},
              {id:2, captionHead: "VANILLA CUPCAKES", captionPara: "With a hint of coffee and buttercream frosting", name: "https://www.ladybehindthecurtain.com/wp-content/uploads/2016/05/Easy-Smore-Cupcake-Recipe-7.jpg"},
              {id:3, captionHead: "RED VELVET CUPCAKES", captionPara: "With buttercream frosting", name: "http://cookingshooking.com/wp-content/uploads/2015/07/redvelvetccfir1.jpg"}
            ],
        index : 0,
        prev : faChevronLeft,
        next : faChevronRight
      }
  },
  computed: {
        image(){
            return this.images[this.index]
        }
  },
  methods: {
      nextImage () {
          this.index = this.image.id == this.images.length-1 ? 0 : this.image.id+1
          console.log(this.index, this.image.name)
          this.currentImage()
      },
      prevImage () {
          this.index = this.image.id == 0 ? this.images.length-1 : this.image.id-1
          this.currentImage()
      },
      currentImage(){
          let next = document.getElementById('img').classList.contains('hide') ? document.getElementById('img') : document.getElementById('imgNext')
          let current = next == document.getElementById('img') ? document.getElementById('imgNext') : document.getElementById('img')
          
          current.classList.remove('fadeIn')
          current.classList.add('fadeOut')
          next.style.backgroundImage = `url('${this.image.name}')`
        //   let capH = document.createTextNode(this.image.captionHead)
        //   let capP = document.createTextNode(this.image.captionPara)
          
          setTimeout(function(){
              current.classList.remove('fadeOut')
              current.classList.add('hide')
              next.classList.remove('hide')
              next.classList.add('fadeIn')
            //   document.getElementById('img-cap-h').innerHTML = ""
            //   document.getElementById('img-cap-p').innerHTML = ""
            //   document.getElementById('img-cap-h').appendChild(capH)
            //   document.getElementById('img-cap-p').appendChild(capP)
          },500)
      }
  },
  created () {
      setInterval(this.nextImage, 10000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   #main{
       position: relative;
       top: -200px;
       padding: 0px;
   }
   .hide{
       display: none;
   }
   .fadeOut{
       opacity: 0;
       transition: all 500ms linear;
   }
   .fadeIn{
      animation-name: fade;
      animation-duration: 500ms;
   }
   @keyframes fade {
       from { opacity: 0; }
       to { opacity: 1; }
   }
   #prev{
       position: absolute;
       left: 20px;
       top:50%;
   }
   #next{
       position: absolute;
       right: 20px;
       top:50%;
   }
   #img-caption{
       position:absolute;
       top:60%;
       right: 30%;
       z-index: 100;
       color: white;
       font-size: 2em;
   }
   #prev, #next{
       font-size: 2.5em;
       z-index: 100;
       color: rgba(187, 183, 183, 0.815);
   }
   #img, #imgNext{
       background-size: cover;
       background-repeat: no-repeat;
       height: 750px; 
       width: 100% ;
   }
</style>
