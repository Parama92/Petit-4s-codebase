<template>
    <div id="footer">
        <b-row>
            <b-col xs="12" md="3" class="mb-5">
                <b-row>
                    <b-col><h3>CONTACT</h3></b-col>
                </b-row>
                <b-row class="mb-4">
                    <b-col>
                        <font-awesome-icon :icon="email" class="contact-ico"/>&nbsp;&nbsp;anisa@petit4s.in
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <font-awesome-icon :icon="phone"/>&nbsp;&nbsp;+91-9748486294
                    </b-col>
                </b-row>
                <b-row></b-row>
            </b-col>
            <b-col xs="12" md="3" class="mb-5">
                <b-row>
                    <b-col><h3>OPENING HOURS</h3></b-col>
                </b-row>
                <b-row>
                    <b-col>
                        MON - SAT <br>
                        8am - 8pm <br>
                        <hr>
                        SUN <br>
                        9am - 8pm <br>
                        <hr>
                        Please note there is no reserved
                        seating at the café bakery.
                    </b-col>
                </b-row>
                <b-row></b-row>
            </b-col>
            <b-col xs="12" md="3" class="mb-5">
                <b-row>
                    <b-col><h3>JOIN OUR FRIENDS</h3></b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <form>
                            <div class="form-group">
                                <input type="name" class="form-control" id="name" placeholder="NAME">
                            </div>
                            <div class="form-group">
                                <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="EMAIL">
                            </div>
                            <button type="submit" class="btn btn-outline-secondary btn-block"><b>JOIN NOW</b></button>
                        </form>
                    </b-col>
                </b-row>
                <b-row></b-row>
            </b-col>
            <b-col xs="12" md="3">
                <a href='https://www.facebook.com/HandcraftedbyAnisa/' target='_blank'><span id="fb" class="ico"><font-awesome-icon :icon="fb"/></span></a>
                <span id="insta" class="ico"><font-awesome-icon :icon="insta"/></span>
            </b-col>
        </b-row>
    </div>
</template>
<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faMobile } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faFacebookF, faInstagram, faEnvelope, faMobile)

export default {
  name: 'Arrow',
  components: {
    FontAwesomeIcon
  },
  computed: {
      fb () {
          return faFacebookF
      },
      insta () {
          return faInstagram
      },
      email () {
          return faEnvelope
      },
      phone () {
          return faMobile
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
    .ico{
        font-size:1.2em;
        margin: 0 5px;
        padding:6px 9px;
        border: 1px solid #4b4d4e;
        color: rgba(187, 183, 183, 0.815);
        background-color: #4b4d4e;
        border-radius: 50%;
        cursor:pointer;
        transition: all 200ms linear;
    }
    .ico:hover{
        color: #4b4d4e;
        background-color: rgba(187, 183, 183, 0.815);
        border: 1px solid rgba(187, 183, 183, 0.815);
    }
    #fb{
        font-size:1.2em;
        padding:6px 12px;
    }
    #footer{
        background-color: #9c9c9cc7;
        padding: 50px;
        text-align:left;
    }
    #footer .row{
        width: 90%;
        margin-left:5%;
    }
    h3{
        color:#4b4d4e;
    }
    .contact-ico{
        position:relative;
        top:3px;
    }
    @media screen and (max-width: 767px) {
        #fb{
            width: 20%;
            margin-left: 40%;
        }
    }
    @media screen and (min-width: 770px ) and (max-width: 945px) {
        #footer .row{
            width: 100%;
            margin-left: 5px;
        }
        #footer .col{
            padding: 0;
        }
    }
</style>