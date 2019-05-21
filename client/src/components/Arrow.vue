<template>
    <b-row>
        <b-col>
            <a href="#arrow"><canvas id="arrow" height="50" width="100"></canvas></a>
        </b-col>
    </b-row>
</template>
<script>

export default {
  name: 'Arrow',
  mounted () {
      const canvas = document.getElementById('arrow')
      const arrowCtx = canvas.getContext('2d')

      arrowCtx.beginPath()
      arrowCtx.moveTo(25, 25)
      arrowCtx.lineTo(22, 28)
      arrowCtx.lineTo(53, 39)
      arrowCtx.lineTo(81, 28)
      arrowCtx.lineTo(78, 25)
      arrowCtx.lineTo(53, 35)
      arrowCtx.closePath()
      arrowCtx.fillStyle = '#4b4d4e'
      arrowCtx.fill()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .row{
        margin-left:0;
        margin-right: 0;
    }
</style>