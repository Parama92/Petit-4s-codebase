<template>
  <div>
    <div id="overlay"></div>
    <div class="img"></div>
    <div class="close" @click='closeOverlay'>&times;</div>
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
        this.$emit('close')
    },
    setImage () {
        // document.querySelector('#overlay + .img').style.backgroundImage = `url('${this.current}')`
        document.querySelector('#overlay + .img').style.backgroundImage = this.current
    }
  },
  watch: {
      current : function (prev, curr) {
          this.setImage()
      }
  },
  mounted () {
      this.setImage()
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .img{
        position: fixed;
        top: 0;
        left: 0;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        height: 600px; 
        width:100%;
        margin: 30px 0;
        padding:30px;
        z-index: 500;
    }
    .close{
        color:#d4d3d3;
        font-size: 40px;
        font-weight: 100;
        position:fixed;
        top:2px;
        right:30px;
        cursor: pointer;
        z-index:500;
    }
    .close:hover{
        color:#ecebeb;
    }
   #overlay{
       z-index: 500;
       width:100%;
       height:100%;
       position:fixed;
       top:0;
       left:0;
       background-color: black;
       opacity: 0.8;
   }
</style>

