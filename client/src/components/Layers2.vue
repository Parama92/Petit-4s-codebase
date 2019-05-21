<template>
  <div id="layers">
    <b-row>
      <b-col>
        <h1 class="text-center mb-4" id="ctm-heading">CUSTOMIZE YOUR CAKE</h1>
        <p
          class="mb-5"
        >We offer a wide range of options for you to choose from for each of the three layers in our cakes - the base, the filling and the frosting.</p>
      </b-col>
    </b-row>
    <b-row>
      <!-- 2d diagram of the customized cake -->
      <b-col col lg="7">
        <canvas width="200px" height="200px" id="cake"></canvas>
      </b-col>
      <b-col col lg="5" id="customization">
        <div id="ctm-menu">
          <!-- menu to select the layer option, i.e, frosting, filling, etc. -->
          <div class="input-group mb-4">
            <select
              class="custom-select"
              name="layers"
              v-model="selectedOption"
              @change="showFlavor"
            >
              <option value="0" selected>Choose a layer to customize</option>
              <option value="frosting">Frosting</option>
              <option value="filling">Filling</option>
              <option value="base">Base</option>
              <option value="fondant">Fondant</option>
            </select>
          </div>
          <!-- tabs providing two options: syggersted/ recommended and all flavor options available -->
          <div class="row mb-4 options-container">
            <div class="col selected">Suggestions</div>
            <div class="col">All Flavors</div>
          </div>
          <!-- displays the sub menu of flavorsavailable under the layers option -->
          <div class="row" id="flavors-container">
            <div v-for="f in flavor" :key="f.id">
              <div class="flavor" :style="{ 'background-color': f.color }" @click="changeFlavor(f)"></div>
              <div class="caption">{{ f.option }}</div>
            </div>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  name: "layers2",
  data() {
    return {
      cakeCtx: "",
      selectedOption: 0,
      frosting: [
        {
          id: 0,
          option: "Butter Cream",
          color: "rgba(243, 238, 165, 0.89)",
          img:
            "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/6/30/2/FNK_Vanilla-American-Buttercream_s4x3.jpg.rend.hgtvcom.616.462.suffix/1441926027187.jpeg"
        },
        {
          id: 1,
          option: "Whipped Cream",
          color: "#fffcd7",
          img:
            "https://4.imimg.com/data4/AF/ID/MY-7568151/fresh-milk-cream-500x500.jpg"
        },
        {
          id: 2,
          option: "Chocolate Ganache",
          color: "#4b1d0f",
          img:
            "http://www.cbc.ca/inthekitchen/assets_c/2013/03/ChocSauce09-thumb-596x350-281772.jpg"
        }
      ],
      filling: [
        {
          id: 0,
          option: "Butter Cream",
          color: "rgba(243, 238, 165, 0.89)",
          img:
            "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/6/30/2/FNK_Vanilla-American-Buttercream_s4x3.jpg.rend.hgtvcom.616.462.suffix/1441926027187.jpeg"
        },
        {
          id: 1,
          option: "Fresh Cream",
          color: "#e9f3b2",
          img:
            "https://4.imimg.com/data4/AF/ID/MY-7568151/fresh-milk-cream-500x500.jpg"
        },
        {
          id: 2,
          option: "Salted Caramel Butter Cream",
          color: "#cfaa64",
          img:
            "https://www.wikihow.com/images/thumb/d/d8/Make-Caramel-Frosting-Intro.jpg/aid327194-v4-728px-Make-Caramel-Frosting-Intro.jpg"
        },
        {
          id: 3,
          option: "Chocolate Truffle or Ganache",
          color: "#4b1d0f",
          img: "https://image.afcdn.com/recipe/20161117/38053_w600.jpg"
        }
      ],
      base: [
        {
          id: 0,
          option: "Vanilla",
          color: "#ffffe4",
          img:
            "https://goss.veer.com/creative/vcg/veer/800water/veer-140729207.jpg"
        },
        {
          id: 1,
          option: "Red Velvet",
          color: "red",
          img:
            "https://thumb9.shutterstock.com/display_pic_with_logo/2486239/484775515/stock-photo-red-background-made-of-red-velvet-cake-looks-rough-484775515.jpg"
        },
        {
          id: 2,
          option: "Chocolate",
          color: "#4b1d0f",
          img:
            "https://image.freepik.com/free-photo/chocolate-bars_1339-3727.jpg"
        }
      ],
      frostingBg: "https://image.afcdn.com/recipe/20161117/38053_w600.jpg",
      fillingBg:
        "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/6/30/2/FNK_Vanilla-American-Buttercream_s4x3.jpg.rend.hgtvcom.616.462.suffix/1441926027187.jpeg",
      baseBg:
        "https://goss.veer.com/creative/vcg/veer/800water/veer-140729207.jpg"
    };
  },
  computed: {
    flavor() {
      return this[this.selectedOption];
    }
  },
  methods: {
    showFlavor() {
      console.log("show flavor", this.selectedOption);
    },
    // changes the fill color of the section of the cake corresponding to the option selected by the user.
    changeFlavor(item) {
      this.makeCake({ [this.selectedOption]: item.color }); // an object akin to type: color is passed, i.e, {base: red}
    },
    // sets the fillColor of the context passed to the function
    fillColor(ctx, color) {
      ctx.fillStyle = color;
    },
    // draws the main outline of the cake
    cakeMain(cakeCtx, color) {
      cakeCtx.beginPath();
      cakeCtx.moveTo(60, 147);
      cakeCtx.lineTo(60, 58);
      cakeCtx.arc(120, 60, 60, Math.PI, (Math.PI / 180) * 250);
      cakeCtx.lineTo(170, 58);
      cakeCtx.lineTo(170, 64);
      cakeCtx.lineTo(66, 52);
      cakeCtx.lineTo(66, 147);
      cakeCtx.closePath();
      cakeCtx.fillStyle = color || this.frosting[2].color;
      cakeCtx.fill();
    },
    /* draws the base of the cake */
    cakeBase(cakeCtx, x, y, color) {
      cakeCtx.beginPath();
      cakeCtx.moveTo(x, y);
      cakeCtx.lineTo(x, y + 25);
      cakeCtx.lineTo(x + 104, y + 37);
      cakeCtx.lineTo(x + 104, y + 12);
      cakeCtx.closePath();
      cakeCtx.fillStyle = color || this.base[0].color;
      cakeCtx.fill();
    },
    /* drwas the filling-layer of the cake */
    cakeFilling(cakeCtx, x, y, color) {
      cakeCtx.beginPath();
      cakeCtx.moveTo(x, y);
      cakeCtx.lineTo(x, y + 10);
      cakeCtx.lineTo(x + 104, y + 22);
      cakeCtx.lineTo(x + 104, y + 12);
      cakeCtx.closePath();
      cakeCtx.fillStyle = color || this.filling[0].color;
      cakeCtx.fill();
    },
    /* draws the frosting-layer of the cake */
    cakeFrosting(cakeCtx, color) {
      cakeCtx.beginPath();
      cakeCtx.moveTo(200, 60);
      cakeCtx.lineTo(125, 60);
      cakeCtx.arc(125, 50, 10, Math.PI / 2, -Math.PI / 2);
      cakeCtx.lineTo(200, 40);
      cakeCtx.closePath();
      cakeCtx.fillStyle = color || this.frosting[2].color;
      cakeCtx.fill();
    },
    /* function to handle the complete drawing of the cake */
    makeCake({ fondant, base, filling, frosting } = {}) {
      let flavour = {
        fondant,
        base,
        filling,
        frosting
      }; /* contains an object with the desired colors(flavor representation) of the various layers */
      /* obtains the canvas and creates a 2d context of the same */
      let canvas = document.getElementById("cake");
      let cakeCtx = canvas.getContext("2d");

      let self = this;

      this.cakeCtx = cakeCtx;

      /* handles the drawing of three base layers */
      function cakeBase() {
        self.cakeBase(cakeCtx, 66, 52, base);
        self.cakeBase(cakeCtx, 66, 87, base);
        self.cakeBase(cakeCtx, 66, 122, base);
      }
      /* handles the drawing of two filling layers */
      function cakeFilling() {
        self.cakeFilling(cakeCtx, 66, 77, filling);
        self.cakeFilling(cakeCtx, 66, 112, filling);
      }
      /* stores the name of the layer the flavor of which has to be changed */
      let flav = Object.keys(flavour)
        .filter(function(key) {
          return flavour[key];
        })
        .join();

      switch (flav) {
        case "": // indicates none of the layers have to be changed, i.e, the flavour object is empty, i.e cake is being drawn for the first time after creating the component
          // thus all layers must be drawn
          cakeFilling();
          cakeBase();
          this.cakeMain(cakeCtx, fondant);
          break;
        case "filling": // indicates that 'filling' has been chosen to be customized and hence only the filling layers must be refilled
          cakeFilling();
          break;
        case "base": // indicates that 'base' has been chosen to be customized and hence only the base layers must be refilled
          cakeBase();
          break;
      }
      // this.cakeFrosting(cakeCtx, frosting)
    },
    toggleOptions(option, options) {
      options.forEach(function(o) {
        o.classList.remove("selected");
      });
      option.classList.add("selected");
    }
  },
  mounted() {
    this.makeCake();
    const options = document.querySelectorAll(".options-container .col");
    options.forEach(option => {
      option.addEventListener("click", () => {
        this.toggleOptions(option, options);
      });
    });
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#layers {
  position: relative;
  top: -180px;
  margin-top: 100px;
}
#ctm-heading + p {
  font-size: 1.7em;
  width: 70%;
  margin-left: 15%;
  margin-right: 15%;
}
#customization {
  position: relative;
  height: 300px;
  padding: 10px;
}
#cake {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
/* new styles */
.options-container {
  border: 1px solid #d3d2d2;
  padding: 5px;
  border-radius: 3px;
  cursor: pointer;
}
.options-container .col.selected {
  background-color: #4b4d4e;
  color: #bbb7b7d0;
  border-radius: 2px;
}
#flavors-container {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
}
.flavor {
  height: 100px;
  width: 100px;
  border-radius: 50%;
  border: 1px transparent;
  background-color: #4b4d4e;
  margin: 5px;
}
</style>