var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/cakes', function(req, res, next) {
  res.json(
    {
      images: [
        {id:0, captionHead: "CHOCOLATE CAKE WITH SPRINKLES", captionPara: "One of our special orders.", name: "https://scontent.fccu3-1.fna.fbcdn.net/v/t1.0-9/36930013_794732107583578_1080166450829721600_n.jpg?_nc_cat=0&oh=44c3d29fdc117ff3069daa4973566ee2&oe=5BCF7F7D"},
        {id:1, captionHead: "CUPCAKES", captionPara: "Beautifully decorated with bows.", name: "https://scontent.fccu3-1.fna.fbcdn.net/v/t1.0-9/26907861_677086982681425_6356937452746568553_n.jpg?_nc_cat=0&oh=2f6ba2fcc1124c3a068974a44b6121bc&oe=5BDDCA95"},
        {id:2, captionHead: "VANILLA CUPCAKES", captionPara: "With a hint of coffee and buttercream frosting", name: "https://scontent.fccu3-1.fna.fbcdn.net/v/t1.0-9/26903861_677178576005599_4112224162660273263_n.jpg?_nc_cat=0&oh=1e026548dad4b5121f7be957e0a2a892&oe=5BA08070"},
        {id:3, captionHead: "RED VELVET CUPCAKES", captionPara: "With buttercream frosting", name: "https://scontent.fccu3-1.fna.fbcdn.net/v/t1.0-9/36840255_793914977665291_4197137995515559936_n.jpg?_nc_cat=0&oh=613f927c77c03cca1a6d6c9406d2a151&oe=5BD818C3"},
        {id:4, captionHead: "RED VELVET CUPCAKES", captionPara: "With buttercream frosting", name: "https://scontent.fccu3-1.fna.fbcdn.net/v/t1.0-9/26804460_677089636014493_4327338938288701830_n.jpg?_nc_cat=0&oh=ac167d2d5f0180961fd7bee0f91384b8&oe=5BCFEFFF"},
        {id:5, captionHead: "RED VELVET CUPCAKES", captionPara: "With buttercream frosting", name: "https://scontent.fccu3-1.fna.fbcdn.net/v/t1.0-9/36803348_791330454590410_4393671154905120768_n.jpg?_nc_cat=0&oh=eb4bb276841b10db32b3b6e808737b0b&oe=5B9FFEB9"},
        {id:6, captionHead: "RED VELVET CUPCAKES", captionPara: "With buttercream frosting", name: "https://scontent.fccu3-1.fna.fbcdn.net/v/t1.0-9/26805278_677178692672254_7507076583392975802_n.jpg?_nc_cat=0&oh=aba33f7a0349b8de7e4169a3c514d986&oe=5BD4C02C"},
        {id:7, captionHead: "RED VELVET CUPCAKES", captionPara: "With buttercream frosting", name: "https://scontent.fccu3-1.fna.fbcdn.net/v/t1.0-9/26906991_677089706014486_68389221256152726_n.jpg?_nc_cat=0&oh=67741eea3bbfb6671430f4eec85c2eee&oe=5BE2842B"},
        {id:8, captionHead: "RED VELVET CUPCAKES", captionPara: "With buttercream frosting", name: "https://scontent.fccu3-1.fna.fbcdn.net/v/t1.0-9/26805038_677086932681430_6108391254650001960_n.jpg?_nc_cat=0&oh=739a5bd0840a2b07ea6957d0f1024694&oe=5BE7544F"},
      ]
    }
  );
});

module.exports = router;
