<template>
  <div id="customize">
    <b-row>
      <b-col id="img"></b-col>
    </b-row>
    <Nav/>
    <Arrow/>
    <div class="row layers content">
      <div class="col">
        <layers2></layers2>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "./Nav.vue";
import Arrow from "./Arrow.vue";
import Layers2 from "./Layers2.vue";

export default {
  name: "customize",
  components: {
    Nav,
    Arrow,
    Layers2
  }
};
</script>

<style>
#img {
  background-image: url("https://i.imgur.com/SLVbOKC.jpg");
  background-size: 50% auto;
  background-position: center 68%;
  background-repeat: no-repeat;
  height: 360px;
  width: 100%;
  margin-bottom: -20px;
}
#customize .row {
  margin-left: 0;
  margin-right: 0;
}
.layers {
  margin-top: 190px;
  margin-bottom: 150px;
}
#customize {
  position: relative;
  top: 27px;
  padding: 0px;
}
@media screen and (max-width: 767px) {
  #customize {
    top: 0;
  }
}
</style>
