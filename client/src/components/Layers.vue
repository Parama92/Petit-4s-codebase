<template>
    <div id="layers">
        <b-row style="margin-bottom: 90px;">
            <b-col>
                <h1 class="text-center" id="ctm-heading">CUSTOMIZE YOUR CAKE</h1>
                <p style="font-size: 1.5em; width:70%; margin-left:15%; margin-right: 15%;">We offer a wide range of options for you to choose from for each of the three layers in our cakes - the base, the filling and the frosting.</p>
            </b-col>
        </b-row>
        <b-row>
            <b-col col lg="7">
                <canvas width="200px" height="200px" id="cake"></canvas>
            </b-col>
            <b-col col lg="5" id="customization">
                <div id="ctm-menu">
                    <div class="row">
                        <div class="col-6">
                            <span id="frosting" class="custom-cake" @click="showMenu('frosting')" title="Frosting"></span>
                        </div>
                        <div class="col-6">
                            <div id="frosting-menu" class="menu hidden">
                                <ul class="list-group">
                                    <li @click="changeImage('frosting', fros)" v-for="fros in frosting" :key="fros.id" :title="fros.option"><span class="menu-li make-inline" :style="{ backgroundColor : fros.color}"></span><span class="ctm-text"> {{ fros.option }} </span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-4">
                        <div class="col-6">Frosting</div>
                    </div>
                    <div class="row">
                        <div class="col-6">
                            <span id="filling" class="custom-cake" @click="showMenu('filling')" title="Filling"></span>
                        </div>
                        <div class="col-6">
                            <div id="filling-menu" class="menu hidden">
                                <ul class="list-group">
                                    <li @click="changeImage('filling', fill)" v-for="fill in filling" :key="fill.id" :title="fill.option"><span class="menu-li make-inline" :style="{ backgroundColor : fill.color}"></span><span class="ctm-text"> {{ fill.option }} </span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-4">
                        <div class="col-6">Filling</div>
                    </div>
                    <div class="row">
                        <div class="col-6">
                            <span id="base" class="custom-cake" @click="showMenu('base')" title="Base"></span>
                        </div>
                        <div class="col-6">
                            <div id="base-menu" class="menu hidden">
                                <ul class="list-group">
                                    <li @click="changeImage('base', b)" v-for="b in base" :key="b.id" :title="b.option"><span class="menu-li make-inline" :style="{ backgroundColor : b.color}"></span><span class="ctm-text"> {{ b.option }} </span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-4">
                        <div class="col-6">Base</div>
                    </div>
                    <!-- <span id="frosting" class="custom-cake" @click="showMenu('frosting')" title="Frosting"></span>
                    <div id="frosting-menu" class="menu hidden">
                        <ul class="list-inline">
                            <li class="list-inline-item" @click="changeImage('frosting', fros.img)" v-for="fros in frosting" :key="fros.id" :title="fros.option" :style="{ backgroundColor : fros.color}"></li>
                        </ul>
                    </div> -->
                    <!-- <span id="filling" class="custom-cake" @click="showMenu('filling')" title="Filling"></span>
                    <div id="filling-menu" class="menu hidden">
                        <ul class="list-inline">
                            <li class="list-inline-item" @click="changeImage('filling', fill.img)" v-for="fill in filling" :key="fill.id" :title="fill.option" :style="{ backgroundColor : fill.color}"></li>
                        </ul>
                    </div>
                    <span id="base" class="custom-cake" @click="showMenu('base')" title="Base"></span>
                    <div id="base-menu" class="menu hidden">
                        <ul class="list-inline">
                            <li class="list-inline-item" @click="changeImage('base', b.img)" v-for="b in base" :key="b.id" :title="b.option" :style="{ backgroundColor : b.color}"></li>
                        </ul>
                    </div> -->
                </div>
            </b-col>
        </b-row>
    </div>
</template>
<script>
    export default {
        name: 'layers',
        data () {
            return {
                cakeCtx : '',
                frosting : [
                    { id: 0, option: "Butter Cream", color: "rgba(243, 238, 165, 0.89)", img: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/6/30/2/FNK_Vanilla-American-Buttercream_s4x3.jpg.rend.hgtvcom.616.462.suffix/1441926027187.jpeg"},
                    { id: 1, option: "Whipped Cream", color: "#fffcd7", img: "https://4.imimg.com/data4/AF/ID/MY-7568151/fresh-milk-cream-500x500.jpg"},
                    { id: 2, option: "Chocolate Ganache", color: "#4b1d0f", img: "http://www.cbc.ca/inthekitchen/assets_c/2013/03/ChocSauce09-thumb-596x350-281772.jpg"}
                ],
                filling : [
                    { id: 0, option: "Butter Cream", color: "rgba(243, 238, 165, 0.89)", img: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/6/30/2/FNK_Vanilla-American-Buttercream_s4x3.jpg.rend.hgtvcom.616.462.suffix/1441926027187.jpeg"},
                    { id: 1, option: "Fresh Cream", color: "#e9f3b2", img: "https://4.imimg.com/data4/AF/ID/MY-7568151/fresh-milk-cream-500x500.jpg"},
                    { id: 2, option: "Salted Caramel Butter Cream", color: "#cfaa64", img: "https://www.wikihow.com/images/thumb/d/d8/Make-Caramel-Frosting-Intro.jpg/aid327194-v4-728px-Make-Caramel-Frosting-Intro.jpg"},
                    { id: 3, option: "Chocolate Truffle or Ganache", color: "#4b1d0f", img: "https://image.afcdn.com/recipe/20161117/38053_w600.jpg"}
                ],
                base : [
                    { id: 0, option: "Vanilla", color: "#ffffe4", img: "https://goss.veer.com/creative/vcg/veer/800water/veer-140729207.jpg"},
                    { id: 1, option: "Red Velvet", color: "red", img: "https://thumb9.shutterstock.com/display_pic_with_logo/2486239/484775515/stock-photo-red-background-made-of-red-velvet-cake-looks-rough-484775515.jpg"},
                    { id: 2, option: "Chocolate", color: "#4b1d0f", img: "https://image.freepik.com/free-photo/chocolate-bars_1339-3727.jpg"}
                ],
                frostingBg : "https://image.afcdn.com/recipe/20161117/38053_w600.jpg",
                fillingBg : "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/6/30/2/FNK_Vanilla-American-Buttercream_s4x3.jpg.rend.hgtvcom.616.462.suffix/1441926027187.jpeg",
                baseBg : "https://goss.veer.com/creative/vcg/veer/800water/veer-140729207.jpg"
            }
        },
        methods: {
            showMenu(type){
                let menu = document.getElementById(type+'-menu')
                if(menu.classList.contains('hidden')){
                    this.hideAllMenu()
                    menu.classList.remove('hidden')
                    menu.classList.add('make-inline')
                }
                else{
                    menu.classList.add('hidden')
                    menu.classList.remove('make-inline')
                }
            },
            hideAllMenu () {
                document.getElementById('frosting-menu').classList.add('hidden')
                document.getElementById('frosting-menu').classList.remove('make-inline')
                document.getElementById('filling-menu').classList.add('hidden')
                document.getElementById('filling-menu').classList.remove('make-inline')
                document.getElementById('base-menu').classList.add('hidden')
                document.getElementById('base-menu').classList.remove('make-inline')
            },
            changeImage (type, item) {
                document.getElementById(type).style.backgroundImage = `url('${item.img}')`
                this.makeCake({[type] : item.color})
                //console.log(this['cake'+type.charAt(0).toUpperCase()+type.substr(1)])//(this.cakeCtx, item.color)
            },
            fillColor (ctx, color) {
                ctx.fillStyle = color  
            },
            cakeMain (cakeCtx, color) {
                cakeCtx.beginPath()
                cakeCtx.moveTo(60, 147)
                cakeCtx.lineTo(60, 58)
                cakeCtx.arc(120, 60 , 60, Math.PI, (Math.PI/180)*250)
                cakeCtx.lineTo(170, 58)
                cakeCtx.lineTo(170, 64)
                cakeCtx.lineTo(66, 52)
                cakeCtx.lineTo(66, 147)
                cakeCtx.closePath()
                cakeCtx.fillStyle = color || this.frosting[2].color
                cakeCtx.fill();
            },
            cakeBase (cakeCtx, x, y, color) {
                cakeCtx.beginPath()
                cakeCtx.moveTo(x, y)
                cakeCtx.lineTo(x, y+25)  
                cakeCtx.lineTo(x+104, y+37)
                cakeCtx.lineTo(x+104, y+12)
                cakeCtx.closePath()
                cakeCtx.fillStyle = color || this.base[0].color
                cakeCtx.fill();
            },
            cakeFilling (cakeCtx, x, y, color) {
                cakeCtx.beginPath()
                cakeCtx.moveTo(x, y)
                cakeCtx.lineTo(x, y+10)  
                cakeCtx.lineTo(x+104, y+22)
                cakeCtx.lineTo(x+104, y+12)
                cakeCtx.closePath()
                cakeCtx.fillStyle = color || this.filling[0].color
                cakeCtx.fill();
            },
            cakeFrosting (cakeCtx, color) {
                cakeCtx.beginPath()
                cakeCtx.moveTo(200, 60)
                cakeCtx.lineTo(125, 60)
                cakeCtx.arc(125, 50, 10, (Math.PI/2), (-Math.PI/2))
                cakeCtx.lineTo(200, 40)
                cakeCtx.closePath()
                cakeCtx.fillStyle = color || this.frosting[2].color
                cakeCtx.fill();
            },
            makeCake({fondant, base, filling, frosting} = {}){
                let flavour = {fondant, base, filling, frosting}
                let canvas = document.getElementById('cake') 
                let cakeCtx = canvas.getContext('2d')
                
                let self = this
                
                this.cakeCtx = cakeCtx

                function cakeBase(){
                    self.cakeBase(cakeCtx, 66, 52, base)
                    self.cakeBase(cakeCtx, 66, 87, base)
                    self.cakeBase(cakeCtx, 66, 122, base)
                }
                function cakeFilling(){
                    self.cakeFilling(cakeCtx, 66, 77, filling)
                    self.cakeFilling(cakeCtx, 66, 112, filling)
                }

                let flav = Object.keys(flavour).filter(function(key){
                    return flavour[key]
                }).join()
                
                switch(flav){
                    case '':
                        cakeFilling()
                        cakeBase()
                        this.cakeMain(cakeCtx, fondant)
                        break
                    case 'filling':
                        cakeFilling()
                        break
                    case 'base':
                        cakeBase()
                        break   
                }
                // this.cakeFrosting(cakeCtx, frosting)
            }
        },
        mounted() {
            document.getElementById('frosting').style.backgroundImage = `url('${this.frostingBg}')`
            document.getElementById('filling').style.backgroundImage = `url('${this.fillingBg}')`
            document.getElementById('base').style.backgroundImage = `url('${this.baseBg}')`

            this.makeCake()
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #layers{
        position: relative;
        top: -180px;   
    }
    .custom-cake{
        display: inline-block;
        width: 130px;
        height: 130px;
        border: 1px solid white;
        border-radius:50%;
        background-size: cover;
        background-repeat: no-repeat;
        cursor: pointer;
    }
    .hidden{
        display: none;
    }
    .make-inline{
        display: inline-block;
    }
    .menu{
        position: relative;
        top: 12px;
    }
    .menu li{
        list-style-type: none;
        text-align: left;
        font-size:17px;
    }
    .menu .ctm-text{
        bottom: 10px;
        position: relative;
    }
    .menu .menu-li{
        height:30px;
        width:30px;
        border: 1px solid transparent;
        border-radius: 50%;
    }
    #customization{
        position: relative;
        height: 300px;
        padding:10px;
    }
    #customization #ctm-menu{
        position: relative;
        /* top: 30%; */
    }
    #ctm-menu .row{
        margin:0;
    }
    #ctm-heading{
        margin-top:90px;
        padding: 20px 0;
    }
    #cake{
        position: relative;
        top:50%;
    }
</style>