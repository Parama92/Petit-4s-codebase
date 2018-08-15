<template>
    <div id="categories">
        <b-row>
            <b-col><h1 class="mb-4" id="cat-heading">S<span>ELECT A CATEGORY</span></h1></b-col>
        </b-row>
        <b-row class="mb-5">
            <b-col>
                <p>At Petit 4s you are spoilt for choices. Select any one these categories to unleash our wide range of baked goodies.</p>
            </b-col>
        </b-row>
        <b-row id="cat-container">
            <b-col class="col-sm-10 offset-sm-1">
                <b-row>
                    <b-col lg="2" md='4' sm="12" class="cat-col mb-5">
                        <div class="cat" style="background-image: url('https://scontent.fccu3-1.fna.fbcdn.net/v/t1.0-9/26992435_677084012681722_7466662858905111498_n.jpg?_nc_cat=0&oh=e7ea54478f070f5f2b8aeac84f78c1e6&oe=5BD00DD5')">
                            <div class="overlay"></div>
                            <span>PETIT 4s</span>
                            <a href='/#/menu#Petit 4s' class="btn btn-light">TRY NOW</a>
                        </div>
                    </b-col>
                    <b-col lg="2" md='4' xs="12" class="cat-col mb-5">
                        <div class="cat" style="background-image: url('https://scontent.fccu3-1.fna.fbcdn.net/v/t1.0-9/26814591_677182716005185_167761684198081404_n.jpg?_nc_cat=0&oh=94a5b7eccf2ca150a5183fbedca8c8b4&oe=5BD721F8')">
                            <div class="overlay"></div>
                            <span>SAVOURIES</span>
                            <a href='/#/menu#Savouries' class="btn btn-light">TRY NOW</a>
                        </div>
                    </b-col>
                    <b-col lg="2" md='4' xs="12" class="cat-col mb-5">
                        <div class="cat" style="background-image: url('https://scontent.fccu3-1.fna.fbcdn.net/v/t1.0-9/37736017_809977036059085_6684169190863011840_n.jpg?_nc_cat=0&oh=0fd97a106adc3e043cfb7e12ef8bb51b&oe=5BDEDAC5')">
                            <div class="overlay"></div>
                            <span>CUSTOMIZED CAKES</span>
                            <a href='/#/customize' class="btn btn-light">TRY NOW</a>
                        </div>
                    </b-col>
                    <b-col lg="2" md='4' xs="12" class="cat-col mb-5">
                        <div class="cat" style="background-image: url('https://scontent.fccu3-1.fna.fbcdn.net/v/t1.0-9/36760810_790173454706110_6403333885106585600_n.jpg?_nc_cat=0&oh=8e5e560cfb383d821ae5b9bbd012f4a8&oe=5BC99DEF')">
                            <div class="overlay"></div>
                            <span>CAKES</span>
                            <a href='/#/menu/#Cakes' class="btn btn-light">TRY NOW</a>
                        </div>
                    </b-col>
                    <b-col lg="2" md='4' xs="12" class="cat-col mb-5">
                        <div class="cat" style="background-image: url('https://scontent.fccu3-1.fna.fbcdn.net/v/t1.0-9/26992435_677084012681722_7466662858905111498_n.jpg?_nc_cat=0&oh=e7ea54478f070f5f2b8aeac84f78c1e6&oe=5BD00DD5')">
                            <div class="overlay"></div>
                            <span>FRENCH PASTRIES</span>
                            <a href='/#/menu/#French Pastries' class="btn btn-light">TRY NOW</a>
                        </div>
                    </b-col>
                    <b-col lg="2" md='4' xs="12" class="cat-col mb-5">
                        <div class="cat" style="background-image: url('https://scontent.fccu3-1.fna.fbcdn.net/v/t1.0-9/26805053_677177032672420_2483167105823839287_n.jpg?_nc_cat=0&oh=d62abbf13fd8d7420e7d00e287a49a13&oe=5BE83E70')">
                            <div class="overlay"></div>
                            <span>COOKIES</span>
                            <a href='/#/menu/#Cookies' class="btn btn-light">TRY NOW</a>
                        </div>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
    </div>
</template>
<script>

export default {
  name: 'Categories',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .row{
        margin-left:0;
        margin-right: 0;
    }
    #categories{
        margin: 100px 0;
    }
    #categories p{
        font-size:1.7em;
    }
    #cat-container .col{
        padding: 0 2px;
    }
    .cat-col{
        padding:0 3px;
    }
    #cat-container{
        margin-top:130px;
    }
    .cat{
        height:220px;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
    .cat .btn{
        display: none;
        text-align: center;
        position:absolute;
        bottom: 43%;
        left:28%;
        transition: all 500ms linear;
    }
    .cat:hover span{
        display: none;
    }
    .cat:hover .btn{
        display: inline-block;
    }
    .overlay{
        background: black;
        opacity:0.8;
        width:100%;
        height:100%;
        z-index: 100;
        cursor: pointer;
        transition: all 200ms linear;
    }
    .overlay + span{
        color:white;
        position:absolute;
        bottom: 43%;
        width:100%;
        left:-1px;
    }
    /* .overlay:hover{
        opacity: 0.5;
    } */
    #cat-heading span{
      font-size:0.8em;
    }
    @media screen  and (max-width: 767px){
        .cat{
            height: 300px;
            width: 80%;
            margin-left: 10%;
        }
        .cat:hover .btn{
            display: none;
        }
        .overlay:hover{
            opacity: 0.5;
        } 
    }
    @media screen  and (max-width: 992px) and (min-width: 768px){
        .cat .btn{
            left:33%;
        }
    }
    @media screen  and (max-width: 1212px) and (min-width: 992px){
        .cat .btn{
            left:23%;
        }
    }
</style>