<template>
    <div id="add-bar" class="row">
        <div class="col">
            Address
        </div>
        <div class="col">
            Something
        </div>
        <div class="col">
            <a href='https://www.facebook.com/HandcraftedbyAnisa/' target='_blank'><span id="fb" class="ico"><font-awesome-icon :icon="fb"/></span></a>
            <span class="ico"><font-awesome-icon :icon="insta"/></span>
        </div>
    </div>
</template>
<script>

import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faFacebookF, faInstagram)

export default {
  name: 'Addressbar',
  components: {
    FontAwesomeIcon
  },
  computed: {
      fb () {
          return faFacebookF
      },
      insta () {
          return faInstagram
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #add-bar{
        background-color: #9c9c9cc7;
        color:black;
        position:fixed;
        top: 0;
        width: 100%;
        height:27px;
        z-index: 120;   
    }
    .ico{
        margin-right:15px;
        font-size:0.8em;
        margin: 0 5px;
        padding:2px 5px;
        border: 1px solid #4b4d4e;
        color: rgba(187, 183, 183, 0.815);
        background-color: #4b4d4e;
        border-radius: 50%;
        cursor: pointer;
        transition: all 200ms linear;
    }
    .ico:hover{
        color: #4b4d4e;
        background-color: rgba(187, 183, 183, 0.815);
        border: 1px solid rgba(187, 183, 183, 0.815);
    }
    #fb{
        padding:2px 7px;
    }
    .row{
        margin-left:0;
        margin-right: 0;
    }
    @media screen and (max-width: 767px){
        #add-bar{
            display:none;
        }
    }
</style>