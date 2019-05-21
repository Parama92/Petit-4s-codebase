<template>
    <div id="top" class="hide">
        <font-awesome-icon :icon="up" id="up-arrow" @click="scrollUp"/>
    </div>
</template>
<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faChevronUp)

export default {
  name: 'Top',
  components: {
    FontAwesomeIcon
  },
  data () {
      return {
          top: null,
          offset: null
      }
  },
  methods:{
      handleScroll () {
        if(window.pageYOffset > this.offset + 200) {
            this.top.classList.remove('hide')
        }
        else {
            this.top.classList.add('hide')
        }
      },
      scrollUp () {
          window.scroll(0, 0)
      }
  },
  computed: {
      up(){
          return faChevronUp
      }
  },
  mounted () {
    this.top = document.querySelector('#top')
    this.offset = this.top.offsetTop 
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #top{
        position: fixed;
        right: 17px;
        bottom: 20px;
        font-size: 1.5em;
        border: 2px solid white;
        border-radius: 50%;
        padding:3px 10px;
        cursor: pointer;
        transition: all 200ms linear;
    }
    #up-arrow{
        transition: all 300ms linear;
    }
    a, a:hover, a:visited{
        color:#4b4d4e;
    }
    #top:hover{
        border-color: #383e46;
        background-color: #383e46;
        color: white;
    }
    #top:hover #up-arrow{
        color: white;
    }
    .hide{
        display: none;
    }
</style>