<template>
  <div id="categories">
    <b-row>
      <b-col>
        <h1 class="mb-4" id="cat-heading">
          S
          <span>ELECT A CATEGORY</span>
        </h1>
      </b-col>
    </b-row>
    <b-row class="mb-5">
      <b-col>
        <p>At Petit 4s you are spoilt for choices. Select any one these categories to unleash our wide range of baked goodies.</p>
      </b-col>
    </b-row>
    <b-row id="cat-container">
      <b-col class="col-sm-10 offset-sm-1">
        <b-row>
          <b-col
            lg="2"
            md="4"
            sm="12"
            class="cat-col mb-5"
            v-for="category in categories"
            :key="category.id"
          >
            <div class="cat" :style="{'background-image' : 'url(' + category.background + ')' }">
              <div class="overlay"></div>
              <span>{{ category.name }}</span>
              <a
                :href=" category.name == 'Customized Cakes' ? '/customize' : '/menu/#'+ category.name "
                class="btn btn-light"
              >TRY NOW</a>
            </div>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  name: "Categories",
  data() {
    return {
      categories: [
        {
          id: 0,
          name: "Petit 4s",
          background: "https://i.imgur.com/1MODrWL.jpg"
        },
        {
          id: 1,
          name: "Savouries",
          background: "https://i.imgur.com/Sh9zk7Y.jpg"
        },
        {
          id: 2,
          name: "Customized Cakes",
          background: "https://i.imgur.com/VVgPxTs.jpg"
        },
        { id: 3, name: "Cakes", background: "https://i.imgur.com/5Y2fTHO.jpg" },
        {
          id: 4,
          name: "French Pastries",
          background: "https://i.imgur.com/m7AjbMv.jpg"
        },
        {
          id: 5,
          name: "Cookies",
          background: "https://i.imgur.com/l6rcTd1.jpg"
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row {
  margin-left: 0;
  margin-right: 0;
}
#categories {
  margin: 100px 0;
}
#categories p {
  font-size: 1.7em;
}
#cat-container .col {
  padding: 0 2px;
}
.cat-col {
  padding: 0 3px;
}
.cat {
  height: 220px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.cat .btn {
  display: none;
  text-align: center;
  position: absolute;
  bottom: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
  transition: all 500ms linear;
}
.cat:hover span {
  display: none;
}
.cat:hover .btn {
  display: inline-block;
}
.overlay {
  background: black;
  opacity: 0.8;
  width: 100%;
  height: 100%;
  z-index: 100;
  cursor: pointer;
  transition: all 200ms linear;
}
.overlay + span {
  color: white;
  position: absolute;
  bottom: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
  width: 100%;
  text-transform: uppercase;
}
/* .overlay:hover{
        opacity: 0.5;
    } */
#cat-heading span {
  font-size: 0.8em;
}
@media screen and (max-width: 767px) {
  .cat {
    height: 300px;
    width: 80%;
    margin-left: 10%;
  }
  .overlay:hover {
    opacity: 0.5;
  }
}
</style>