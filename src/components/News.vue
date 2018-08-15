<template>
    <div id='news'>
      <b-row>
          <b-col id="newsImg"></b-col>
      </b-row>
      <Nav/>
      <Arrow/>
      <b-row class="mb-5 mt-5 content">
        <b-col><h1>N<span>EWS</span></h1></b-col>
      </b-row>
      <b-row class="mb-5">
        <b-col><p style="font-size: 1.5em;">Curated news articles to keep you informed of our daily ins and outs.</p></b-col>
      </b-row>
      <b-row>
        <b-col md="9" xs="12" class="offset-md-1">
          <b-row class="news-container" v-for="item in news" :key="item.id">
            <b-col md="5" xs="12" class="offset-md-1">
              <div class="news-img" :style="item.link"></div>
            </b-col>
            <b-col md="5" xs="12" :class="{ 'order-md-first': item.id%2, 'offset-md-1': item.id+1 }">
              <div class="news-caption">
                <h4>{{ item.heading }}</h4>
                <br>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis quo eius repudiandae, placeat incidunt officia quia ipsa itaque a, molestiae expedita cupiditate. Facilis itaque qui ipsum hic odio incidunt voluptatibus?
                  Neque dolores eveniet dignissimos porro repudiandae corporis magni odio sapiente fugit quo temporibus qui repellendus delectus expedita aspernatur illo, voluptate eum perspiciatis? Perferendis laudantium facere earum provident magnam ipsam laborum.
                  Itaque soluta, labore delectus magnam provident sed id quisquam deleniti quia repellendus minus incidunt quidem molestiae eaque, eveniet ad libero iusto qui nihil sapiente aut dolorem eius beatae tempore. Odit?
                </p>
                <button class="btn btn-outline-secondary">Read On</button>
              </div>          
            </b-col>
          </b-row>
        </b-col>
      </b-row>
  </div>
</template>

<script>

import Nav from './Nav.vue'
import Arrow from './Arrow.vue'

export default {
  name: 'News',
  components: {
      Nav,
      Arrow
  },
  computed: {
  },
  data () {
    return {
      news:[
        {id: 0, heading: "ABC", link: "background-image: url('https://images.unsplash.com/photo-1477763858572-cda7deaa9bc5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1e286beb32274afd7a94dd1ed402c56a&auto=format&fit=crop&w=500&q=60')"},
        {id: 1, heading: "DEF", link: "background-image: url('https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b2220ed80e1639a11cda0c95c0ef2825&auto=format&fit=crop&w=500&q=60')"},
        {id: 2, heading: "GHI", link: "background-image: url('https://images.unsplash.com/photo-1465808883813-7d2959af2252?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=663d004e96404802f547e5aa1dd6fbb3&auto=format&fit=crop&w=500&q=60')"},
        {id: 3, heading: "JKL", link: "background-image: url('https://images.unsplash.com/photo-1477040648049-a289a91626c1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0995f0eee87e22a4c1e8ecc036447cb0&auto=format&fit=crop&w=500&q=60')"},
        {id: 4, heading: "MNO", link: "background-image: url('https://images.unsplash.com/photo-1504469288085-feb62ad2903d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3ce64c14f9509b012c4810683b2b1801&auto=format&fit=crop&w=500&q=60')"},
        {id: 5, heading: "PQR", link: "background-image: url('https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=07df4ad552d3627b7cbc7836321d9a03&auto=format&fit=crop&w=500&q=60')"},
        {id: 6, heading: "STU", link: "background-image: url('https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a1dc842ef95caf2b1a51b3a42dde4ba7&auto=format&fit=crop&w=500&q=60')"}
      ]
    }
  }
}
</script>

<style>
   #news .row{
     margin-left:0;
     margin-right: 0;
   }
   .news-img{
        height:350px;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        border: 1px solid white;
        border-radius: 5px;
    }
    .news-container{
      margin-bottom: 120px;
    }
    .news-caption{
      position: relative;
      top:0%;
    }
    .news-caption p{
      text-align: left;
      max-height: 243px; 
      overflow: hidden;
    }
    #newsImg{
        background-image: url('https://getsetandgo.files.wordpress.com/2013/11/unnamed.jpg');
        background-size: cover;
        background-position: 30%;
        background-repeat: no-repeat;
        height: 360px; 
        width: 100% ;
        margin-bottom: -20px;
    }
    h1 span{
      font-size:0.8em;
    }
    @media screen and (max-width: 767px) {
        .news-caption{
            top: 0
        }
        .news-img{
          margin-bottom: 120px;
        }
    }
</style>
