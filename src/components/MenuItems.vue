<template>
  <div id="menu">
      <b-row :id='category.name' v-for="category in categories" :key="category.id" class='mb-5 text-left'>
          <b-col md='10' class='offset-md-1'>
              <h2 :id='category.name'>{{ category.name }}</h2>
              <hr class='mb-5'>
              <b-row>
                  <b-col class='mb-5' md='4' v-for='pic in category.items' :key='pic.id'>
                      <b-row>
                          <b-col>
                              <div class="pic"></div>
                          </b-col>
                      </b-row>
                      <b-row>
                          <b-col>
                              <div class="caption">{{ pic.item }}</div>
                          </b-col>
                      </b-row>
                  </b-col>
              </b-row>
          </b-col>
      </b-row>
  </div>
</template>

<script>

export default {
  name: 'menu-items',
  data () {
      return {
          categories : [
              { id: 0, name: 'Petit 4s', items: [ { id:0, item: 'Pic1'}, { id: 1, item: 'Pic2'}, { id:2, item: 'Pic3'}]},
              { id: 1, name: 'Savouries', items: [ { id:0, item: 'Pic1'}, { id: 1, item: 'Pic2'}, { id:2, item: 'Pic3'}]},
              { id: 2, name: 'Cakes', items: [ { id:0, item: 'Pic1'}, { id: 1, item: 'Pic2'}, { id:2, item: 'Pic3'}]},
              { id: 3, name: 'French Pastries', items: [ { id:0, item: 'Pic1'}, { id: 1, item: 'Pic2'}, { id:2, item: 'Pic3'}]},
              { id: 4, name: 'Cookies', items: [ { id:0, item: 'Pic1'}, { id: 1, item: 'Pic2'}, { id:2, item: 'Pic3'}]},
          ]
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   .row{
        margin-left:0;
        margin-right: 0;
    }
    .caption{
        text-align: center;
    }
    .pic{
        height:200px;
        /* background-size: cover;
        background-position: center;
        background-repeat: no-repeat; */
        width: 80%;
        margin-left: 10%;
        margin-bottom: 50px;
        background-color: slategray;
    }
    @media screen  and (max-width: 767px){
        .pic{
            height:300px;
        } 
    }
</style>

