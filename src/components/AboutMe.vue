<template>
  <div id="about-me">
      <h1>M<span>Y JOURNEY SO FAR</span></h1>
      <p>
            After completing my electrical engineering from HYDERABAD, I started as an
            Assistant Professor in a reputed college. Having had an excellent academic
            record, I dreamt of a career as a successful Engineer. I had just secured a good
            rank in GATE when I got married!
            My husband happened to be from a business family from an entirely different
            region. Suddenly the world around me changed. I was now in Kolkata 1500 kms
            from Hyderabad. The language, the cuisine, the culture, the landscape everything
            was different. By the time I settled down, I had my first child. Like most women I
            chose to be a full-time mother thus my career plans took a back seat.
            Meanwhile I picked up Baking as a hobby. At least it gave me the satisfaction that I was
            still dabbling in numbers. I started baking for family birthdays and anniversaries and
            my husband always said - 
            Anees …. You were never meant to be a plain vanilla, you are “An OPERA” 
            I had my second child in August 2016 and again became super busy. But almighty had a
            bucket full of surprises for me.The year 2017 transformed my life once again. 
            In January 2017 I won a cookery contest organised by an international food magazine
            “HANGLA HNESHEL”. Soon followed another feather in my cap “Cadbury CHOCOCHEF 2017”
            a dessert competition sponsored by Cadbury Dairy Milk & ABP/ The TELEGRAPH
            (the leading news print media of West Bengal).
            This award was like a TRIGGER to my slow-moving life. I’ve never looked
            back after that. I always believed that -"there is a right time for any task to
            be accomplished and it was my time now!!"
            A very dear friend said……. “Never let it stop!” “Make this passion your profession”.
            The engineer who chose to be a housewife for the sake of her children now had the
            courage to think about doing a specialized course in pastry arts. My husband gave wings
            to my dreams. Soon I was off for a six-month course. Being a mother of two, it was the toughest
            decision. Especially leaving my six-year-old with my husband, while I pursued the course.
            But yes, I did it!
            After coming back from the course, everyday has been a balancing act managing the
            family, kids and still completing my Orders. I’ve decided on one thing
            “I am an  Opera…….it is my time now………Never let it stop!”
      </p>
      <button id="read" class="btn btn-outline-secondary" @click="readOn">Read on...</button>
  </div>
</template>

<script>

export default {
  name: 'AboutMe',
  methods:{
      readOn () {
          const about = document.querySelector('#about-me p')
          if(about.style.height != '100%'){
            about.style.height = '100%'
            document.getElementById('read').innerText = 'Hide'
          }
          else {
            about.style.height = '270px'
            document.getElementById('read').innerText = 'Read on...'
          }
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   #about-me p{
       font-size:1.6em;
       width:80%;
       margin-left:10%;
       text-align: left;
       margin-top: 50px;
       height:270px;
       overflow: hidden;
   }
   #read{
       margin-bottom: 100px;
       font-size:1.2em;
   }
   #about-me{
       margin-top: 100px;
   }
   h1 span{
      font-size:0.8em;
    }
   @media screen  and (max-width: 767px){
        #about-me p{
            font-size:1.3em;
        }
        #read{
            font-size:1em;
        }
    }
</style>
