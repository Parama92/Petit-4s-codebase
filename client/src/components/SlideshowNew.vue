<template>
  <b-row>
    <b-col id="main">
      <div id="prev" class="btn" @click="prevImage">
        <font-awesome-icon :icon="prev"/>
      </div>
      <div id="next" class="btn" @click="manualNext">
        <font-awesome-icon :icon="next"/>
      </div>
      <div class="row">
        <div class="col">
          <div id="imgL" @click="enlarge($event)" class="custom-img" alt="Responsive image"></div>
          <div
            id="imgLNext"
            @click="enlarge($event)"
            class="custom-img hide"
            alt="Responsive image"
          ></div>
        </div>
        <div class="col">
          <div id="imgC" @click="enlarge($event)" class="custom-img" alt="Responsive image"></div>
          <div
            id="imgCNext"
            @click="enlarge($event)"
            class="custom-img hide"
            alt="Responsive image"
          ></div>
        </div>
        <div class="col">
          <div id="imgR" @click="enlarge($event)" class="custom-img" alt="Responsive image"></div>
          <div
            id="imgRNext"
            @click="enlarge($event)"
            class="custom-img hide"
            alt="Responsive image"
          ></div>
        </div>
      </div>
    </b-col>
    <enlarge v-show="enlargeImg" @close="closeOverlay" :current="current"></enlarge>
  </b-row>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faChevronRight,
  faChevronLeft
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Enlarge from "./Enlarge.vue";

library.add(faChevronRight, faChevronLeft);

export default {
  name: "SlideshowNew",
  components: {
    FontAwesomeIcon,
    Enlarge
  },
  data() {
    return {
      images: [
        {
          id: 0,
          captionHead: "An assortment of cookies",
          captionPara: "One of our special orders.",
          name: "https://i.imgur.com/VyfuEf5.jpg"
        },
        {
          id: 1,
          captionHead: "Cakesicles",
          captionPara: "Beautifully decorated with bows.",
          name: "https://i.imgur.com/IrIKLRi.jpg"
        },
        {
          id: 2,
          captionHead:
            "Coffee soaked genoise sponge with light and creamy Italian coffee buttercream",
          captionPara: "With a hint of coffee and buttercream frosting",
          name: "https://i.imgur.com/gUIMuUF.jpg"
        },
        {
          id: 3,
          captionHead: "Cakesicles 2",
          captionPara: "With buttercream frosting",
          name: "https://i.imgur.com/dvTb9Jm.jpg"
        },
        {
          id: 4,
          captionHead: "Introducing our savoury selection",
          captionPara: "With buttercream frosting",
          name: "https://i.imgur.com/P3gvanF.jpg"
        },
        {
          id: 5,
          captionHead: "Customized for a baby shower",
          captionPara: "With buttercream frosting",
          name: "https://i.imgur.com/2LSr8qy.jpg"
        },
        {
          id: 6,
          captionHead: "Chocolate Caramel Cake",
          captionPara: "With buttercream frosting",
          name: "https://i.imgur.com/6loXEgr.jpg"
        },
        {
          id: 7,
          captionHead: "Coffee mocha mini spheres",
          captionPara: "With buttercream frosting",
          name: "https://i.imgur.com/rMYuPFO.jpg"
        },
        {
          id: 8,
          captionHead: "Customized cake",
          captionPara: "With buttercream frosting",
          name: "https://i.imgur.com/ng7ict9.jpg"
        }
      ],
      index: 0,
      prev: faChevronLeft,
      next: faChevronRight,
      timer: 0,
      enlargeImg: false,
      current: ""
    };
  },
  computed: {
    imageL() {
      return this.images[this.index];
    },
    imageC() {
      return this.images[this.index + 1];
    },
    imageR() {
      return this.images[this.index + 2];
    }
  },
  methods: {
    closeOverlay() {
      this.enlargeImg = false;
    },
    nextImage() {
      this.index =
        this.imageL.id == this.images.length - 3 ? 0 : this.imageL.id + 3;
      this.currentImage();
    },
    manualNext() {
      console.log(this.timer);
      window.clearInterval(this.timer);
      this.timer = 0;
      this.nextImage();
    },
    prevImage() {
      this.index =
        this.imageL.id == 0 ? this.images.length - 3 : this.imageL.id - 3;
      this.currentImage();
    },
    enlarge(event) {
      this.enlargeImg = true;
      this.current = event.target.style.backgroundImage;
    },
    currentImage() {
      if (!document.getElementById("imgL")) {
        return;
      }

      let nextL = document.getElementById("imgL").classList.contains("hide")
        ? document.getElementById("imgL")
        : document.getElementById("imgLNext");
      let currL =
        nextL == document.getElementById("imgL")
          ? document.getElementById("imgLNext")
          : document.getElementById("imgL");

      let nextC = document.getElementById("imgC").classList.contains("hide")
        ? document.getElementById("imgC")
        : document.getElementById("imgCNext");
      let currC =
        nextC == document.getElementById("imgC")
          ? document.getElementById("imgCNext")
          : document.getElementById("imgC");

      let nextR = document.getElementById("imgR").classList.contains("hide")
        ? document.getElementById("imgR")
        : document.getElementById("imgRNext");
      let currR =
        nextR == document.getElementById("imgR")
          ? document.getElementById("imgRNext")
          : document.getElementById("imgR");

      currL.classList.remove("fadeIn");
      currL.classList.add("fadeOut");
      nextL.style.backgroundImage = `url('${this.imageL.name}')`;

      currC.classList.remove("fadeIn");
      currC.classList.add("fadeOut");
      nextC.style.backgroundImage = `url('${this.imageC.name}')`;

      currR.classList.remove("fadeIn");
      currR.classList.add("fadeOut");
      nextR.style.backgroundImage = `url('${this.imageR.name}')`;
      //   let capH = document.createTextNode(this.image.captionHead)
      //   let capP = document.createTextNode(this.image.captionPara)
      const self = this;
      setTimeout(function() {
        currL.classList.remove("fadeOut");
        currL.classList.add("hide");
        nextL.classList.remove("hide");
        nextL.classList.add("fadeIn");

        currC.classList.remove("fadeOut");
        currC.classList.add("hide");
        nextC.classList.remove("hide");
        nextC.classList.add("fadeIn");

        currR.classList.remove("fadeOut");
        currR.classList.add("hide");
        nextR.classList.remove("hide");
        nextR.classList.add("fadeIn");

        if (self.timer == 0) {
          self.runTimer();
        }
        //   document.getElementById('img-cap-h').innerHTML = ""
        //   document.getElementById('img-cap-p').innerHTML = ""
        //   document.getElementById('img-cap-h').appendChild(capH)
        //   document.getElementById('img-cap-p').appendChild(capP)
      }, 300);
    },
    runTimer() {
      this.timer = setInterval(this.nextImage, 7000);
    }
  },
  mounted() {
    if (document.getElementById("main")) {
      this.runTimer();
    }
  },
  beforeDestroy() {
    window.clearInterval(this.timer);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#main {
  position: relative;
  top: 27px;
  padding: 0px;
}
.hide {
  display: none !important;
}
.fadeOut {
  opacity: 0;
  transition: all 500ms linear;
}
.fadeIn {
  animation-name: fade;
  animation-duration: 500ms;
}
@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
#prev {
  position: absolute;
  left: 20px;
  top: 50%;
}
#next {
  position: absolute;
  right: 20px;
  top: 50%;
}
#img-caption {
  position: absolute;
  top: 60%;
  right: 30%;
  z-index: 100;
  color: white;
  font-size: 2em;
}
#prev,
#next {
  font-size: 2.5em;
  z-index: 100;
  color: rgba(187, 183, 183, 0.815);
  display: none;
  transition: all 300ms linear;
}
#main:hover #prev,
#main:hover #next {
  display: inline-block;
}
.custom-img {
  background-color: white;
  background-size: auto 100%;
  background-position: center;
  background-repeat: no-repeat;
  height: 350px;
  width: 100%;
  display: inline-block;
  cursor: pointer;
}
#main .row .col {
  padding: 0 3px;
}
#main .row {
  margin: 0;
}
#imgL {
  background-image: url("https://i.imgur.com/VyfuEf5.jpg");
}
#imgR {
  background-image: url("https://i.imgur.com/IrIKLRi.jpg");
}
#imgC {
  background-image: url("https://i.imgur.com/gUIMuUF.jpg");
}
.row {
  margin-left: 0;
  margin-right: 0;
}
.overlay {
  height: 100%;
  width: 100%;
  background: black;
  opacity: 0.8;
  z-index: 120;
}
@media screen and (max-width: 767px) {
  #main {
    top: 0;
  }
}
</style>
