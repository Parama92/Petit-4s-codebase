<template>
  <div id="overlay">
      <div class="close" @click='closeOverlay'>&times;</div>
      <b-row>
          <div class='col-10 offset-1'>
              <div class="img"></div>
          </div>
      </b-row>
  </div>
</template>

<script>

export default {
  name: 'enlarge',
  props: ['current'],
  methods: {
    closeOverlay () {
        //   const overlay = document.getElementById('overlay')
        //   const opacity = overlay.style.opacity
        //   overlay.style.opacity = opacity == 0 ? 0.7 : 0
        console.log('clicked')
        this.$emit('close')
    }
  },
  watch: {
      current : function (prev, curr) {
          document.querySelector('#overlay .img').style.backgroundImage = this.current
      }
  },
  mounted () {
      document.querySelector('#overlay .img').style.backgroundImage = this.current
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .img{
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        height: 600px; 
        margin: 30px;
        padding:30px;
        opacity: 1;
    }
    .close{
        color:#d4d3d3;
        font-size: 5em;
        position:fixed;
        top:30px;
        right:30px;
        cursor: pointer;
    }
    .close:hover{
        color:#ecebeb;
    }
   #overlay{
       z-index: 500;
       width:100%;
       height:100%;
       position:fixed;
       background-color: black;
       opacity: 1;
   }
</style>

