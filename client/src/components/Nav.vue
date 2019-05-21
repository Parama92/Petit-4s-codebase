<template>
  <b-row id="navTop" class="mb-4 nav-b">
    <b-col>
      <b-navbar toggleable="md" type="dark" class="custom">
        <!-- <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    <font-awesome-icon id="close" :icon="close" class="hide"/>
        </button>-->
        <b-navbar-brand href="#">
          <div id="brand"></div>
        </b-navbar-brand>
        <b-navbar-toggle target="nav_collapse" class="ml-auto mr-auto"></b-navbar-toggle>

        <b-collapse is-nav id="nav_collapse">
          <b-navbar-nav class="ml-auto mr-auto">
            <li class="nav-item active">
              <router-link class="nav-link" to="/">
                <a class="nav-link">Home</a>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/menu">
                <a class="nav-link">Menu</a>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contact">
                <a class="nav-link">Contact</a>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/news">
                <a class="nav-link">News</a>
              </router-link>
            </li>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </b-col>
  </b-row>
  <!-- navbar-1.vue -->
</template>
<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faTimes);

export default {
  name: "Nav",
  components: {
    FontAwesomeIcon
  },
  data() {
    return {
      nav: null,
      offset: null
    };
  },
  computed: {
    close() {
      return faTimes;
    }
  },
  methods: {
    handleScroll() {
      if (window.pageYOffset > this.offset) {
        this.nav.classList.add("sticky");
      } else {
        this.nav.classList.remove("sticky");
      }
    },
    toggleButton() {
      const toggler = document.querySelector(".navbar-toggler").firstChild;
      const close = document.querySelector("#close");

      if (toggler.classList.contains("navbar-toggler-icon")) {
        toggler.classList.add("hide");
        toggler.classList.remove("hide");
      } else {
        toggler.classList.remove("hide");
        toggler.classList.add("hide");
      }
    }
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  mounted() {
    this.nav = document.querySelector(".nav-b");
    this.offset = this.nav.offsetTop - 27;

    window.addEventListener("scroll", this.handleScroll);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.custom {
  background-color: #4b4d4e;
  z-index: 120;
}
.custom .nav-link {
  color: rgba(187, 183, 183, 0.815);
  text-decoration: none;
}
.custom .navbar-brand {
  font-size: 3.4em;
  font-family: "Spirax", cursive;
}
.custom .nav-item {
  font-size: 1.5em;
  /* padding:3px 15px; */
  margin: 0 10px;
  border: 2px solid transparent;
}
.row {
  margin-left: 0;
  margin-right: 0;
}
.nav-b {
  position: relative;
  top: 21px;
}
.nav-b .col {
  padding: 0;
}
.sticky {
  position: fixed;
  top: 27px;
  width: 100%;
  z-index: 120;
}
.sticky ~ .content {
  padding-top: 157px;
}
.navbar-toggler {
  margin-left: auto;
  margin-right: auto;
}
.hide {
  display: none;
}
#brand {
  background-image: url("https://i.imgur.com/8Vbmp7W.jpg");
  height: 120px;
  width: 120px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: 1px solid transparent;
  border-radius: 50%;
}
@media screen and (min-width: 925px) {
  .custom .nav-item {
    margin: 0 25px;
  }
}
@media screen and (max-width: 767px) {
  .nav-b {
    top: 0;
  }
  #brand {
    height: 90px;
    width: 90px;
  }
}
</style>