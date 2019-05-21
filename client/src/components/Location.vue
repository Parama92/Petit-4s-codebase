<template>
    <div id="map"></div>
</template>

<script>

export default {
  name: 'Location',
  data () {
      return {
          mapName: "Petit4's"
      }
  },
  mounted: function () {
    const element = document.getElementById('map')
    const petit = {lat: 22.5479966, lng: 88.3690399}
    
    // The map, centered at petit
    const map = new google.maps.Map(
      element,
      {zoom: 15, center: petit});

    // The marker, positioned at petit
    const marker = new google.maps.Marker({position: petit, map, title: "Petit 4s"});
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #map{
     border: 2px solid grey;
     height:310px;
   }
</style>
