<template>
  <div class="container-fluid">
    <div class="search-form-bg">
      <div class="bg-white" style="height: 130px;margin-bottom: -1px"></div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
        <path class="elementor-shape-fill" opacity="0.33" d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"></path>
        <path class="elementor-shape-fill" opacity="0.66" d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"></path>
        <path class="elementor-shape-fill" d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"></path>
      </svg>
      <div class="text text-left container">
        <h6>Let’s Explore</h6>
        <h1>Where Would You Like To Go?​</h1>
<!--        <h4>Fly to See all destinations</h4>-->
      </div>
    </div>
    <div class="main-search-form-outer">
      <div class="main-search-form">
        <div>
          <div class="drop-tabs">
            <!-- <b-tabs>
              <b-tab-item label="Flights" icon="airplane-takeoff">
                <b-tabs>
                  <b-tab active> -->
                    <flightSearchForm />
                  <!-- </b-tab>
                </b-tabs>
              </b-tab-item>
              <b-tab-item label="Hotel" icon="hotel">
                <div class="row search-fileds pt-5">
                  <div class="col-lg-9">
                    <div class="row">
                      <div class="col-lg-12 mt-3">
                        <input
                          type="text"
                          class="form-control index-cntrl"
                          placeholder="Destination"
                        />
                      </div>
                      <div class="col-lg-4 col-6 mt-3">
                        <div class="date">
                          <span class="mdi mdi-calendar"></span>
                          <span>Checkin</span>
                        </div>
                      </div>
                      <div class="col-lg-4 col-6 mt-3">
                        <div class="date">
                          <span class="mdi mdi-calendar"></span>
                          <span>Checkout</span>
                        </div>
                      </div>
                      <div class="col-lg-4 mt-3">
                        <div class="date">
                          <span class="mdi mdi-account-circle"></span>
                          <span>2 adult,</span>
                          <span class="mdi mdi-bed ml-3"></span>
                          <span>Room</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 search-button">
                    <router-link
                      :to="{ name: 'hotels' }"
                      class="search-button-outer"
                    >
                      <button class="btn btn-light">
                        <span>Search for Hotels</span>
                        <i class="fa fa-chevron-right"></i>
                      </button>
                    </router-link>
                  </div>
                </div>
              </b-tab-item>
              <b-tab-item label="Car" icon="car">
                <div class="row search-fileds pt-5">
                  <div class="col-lg-9">
                    <div class="row">
                      <div class="col-lg-6 mt-3">
                        <input
                          type="text"
                          class="form-control index-cntrl"
                          placeholder="Pick Up ?"
                        />
                      </div>

                      <div class="col-lg-6 mt-3">
                        <input
                          type="text"
                          class="form-control index-cntrl"
                          placeholder="Drop Off ?"
                        />
                      </div>
                      <div class="col-lg-4 col-6 mt-3">
                        <div class="date">
                          <span class="mdi mdi-calendar"></span>
                          <span>Pick Up</span>
                        </div>
                      </div>
                      <div class="col-lg-4 col-6 mt-3">
                        <div class="date">
                          <span class="mdi mdi-calendar"></span>
                          <span>Drop Off</span>
                        </div>
                      </div>
                      <div class="col-lg-4 mt-3">
                        <div class="date">
                          <span class="mdi mdi-account-circle"></span>
                          <span>1 Pax,</span>
                          <span class="mdi mdi-car ml-3"></span>
                          <span>Car Type</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 search-button">
                    <router-link
                      :to="{ name: 'hotels' }"
                      class="search-button-outer"
                    >
                      <button class="btn btn-light">
                        <span>Search for Hotels</span>
                        <i class="fa fa-chevron-right"></i>
                      </button>
                    </router-link>
                  </div>
                </div>
              </b-tab-item>

              <b-tab-item label="My Booking" icon="ticket-confirmation">
                <div class="row search-fileds pt-5">
                  <div class="col-lg-9">
                    <div class="row">
                      <div class="col-lg-6 mt-3">
                        <input
                          type="text"
                          class="form-control index-cntrl"
                          placeholder="Ticket number or reservation code (PNR)"
                        />
                      </div>
                      <div class="col-lg-6 mt-3">
                        <input
                          type="text"
                          class="form-control index-cntrl"
                          placeholder="Passenger surname"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 search-button">
                    <router-link
                      :to="{ name: 'hotels' }"
                      class="search-button-outer"
                    >
                      <button class="btn btn-light">
                        <span>Search for Hotels</span>
                        <i class="fa fa-chevron-right"></i>
                      </button>
                    </router-link>
                  </div>
                </div>
              </b-tab-item>
            </b-tabs> -->
          </div>
        </div>
      </div>
    </div>
    <div class="content-slogan">
      <h1></h1>
    </div>
    <div class="deals">
      <div class="local-destination">
        <h6>Destination lists</h6>
        <h1>Go Exotic Places</h1>
        <div class="row">
          <div class="col-lg-3">
            <div class="banner-1">
              <div class="banner-text">
                <h6>Visit</h6>
                <h2>Bahrain Now</h2>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="banner-2">
              <div class="banner-text">
                <h6>Discover</h6>
                <h2>Muharraq’s Hidden Charm</h2>
              </div>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="banner-3">
              <div class="banner-text">
                <h6>Bahrain</h6>
                <h2>Grand Prix</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cheap-deal">
        <div class="row">
          <div class="col-lg-5">
            <img src="../static/home-img.png"  alt />
          </div>
          <div class="col-lg-7 pl-6">
            <h6>Get to know us</h6>
            <h3>Plan Your Trip with <br>Gala Travel & Tourism</h3>
            <p>
              “The world is a book, and those who do not travel read only one page”
              Book a lavish flight to your dream destination. Fly with
              <b>GALA TRAVEL</b> anywhere in the world, at a competitive
              price. We provide you with full service all through your travel trip.
              Get competitive deals on flights, hotel bookings, car rentals and
              anything that make your trip memorable.
            </p>
            <small>
              <a href="/about">
                <span>Read more</span>
              </a>
            </small>
          </div>
        </div>

      </div>
    </div>
    <!-- start of carousel -->
    <div class="ciunteris">
      <h3>Featured Tours</h3>
      <h2>Most Popular Tours</h2>
      <div class="cont hotel-deals">
        <b-carousel-list :data="allPackages" :items-to-show="slider">
          <template slot="item" slot-scope="pakage">
            <div class="hotel-deal-box">
              <div
                v-bind:style="{ 'background-image': 'url(https://fse.galabahrain.com/assets/' + pakage.image + ')'}"
                class="europe-united">
                <!-- <h3>{{pakage.name}}</h3> -->
              </div>
              <div class="text-area">
                <!--                  <div class="top"><p class=""><span><span-->
                <!--                    class="mdi mdi-camera float-right"></span></span><span-->
                <!--                    class="mdi mdi-video float-right"></span></p></div>-->
                <h2
                  v-html="pakage.description.length > 150 ? pakage.description.substring(0,150)+'...' : pakage.description">
                </h2>
                <div class="country-name">
                    <span class="d-flex align-items-center"><span
                      class="mdi mdi-map-marker"></span>{{pakage.package_country.name}}
                    </span>
                  <span>
                      {{pakage.day != '' ? pakage.day: ''}} <span v-if="pakage.day" class="mdi mdi-white-balance-sunny"></span> {{pakage.night != '' ? pakage.night:
                        ''}} <span v-if="pakage.night" class="mdi mdi-weather-night"></span>
                    </span>
                </div>
                <!--                  <div class="hotel-deal-rate">-->
                <!--                    <div class="left">-->
                <!--                      <h5>-->
                <!--                        {{pakage.day != '' ? pakage.day+' Days': ''}} {{pakage.night != '' ? pakage.night+' Nights':-->
                <!--                        ''}}-->
                <!--                        <span class="mdi mdi-chevron-double-right"></span>-->
                <!--                      </h5>-->
                <!--                    </div>-->
                <!--                    <div class="right">-->
                <!--                    </div>-->
                <!--                  </div>-->
                <div class="hotel-deal-rate">
                  <h5>
                    <small>From</small>
                    <span>BHD</span>
                    <b>{{pakage.price}}</b>
                  </h5>
                  <nuxt-link
                    :to="{
                          name: 'pakagedetails-id',
                          params: { id: pakage.id }
                        }"
                  >
                    <div class="left">
                      <h5>
                        Explore
                        <span class="mdi mdi-chevron-double-right"></span>
                      </h5>
                    </div>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </template>
        </b-carousel-list>
      </div>
    </div>
    <!-- end of carousel -->
    <!-- start of top offer carouse -->
    <!--  <Carousal></Carousal>-->
    <div class="top-baner">
      <div
        class="center-image bottom-slider-box bg-tour-pc"
        alt=""
        :style="{
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }"
      >
        <div class="tp-s">
          <!-- <div class="second-title">
            <h6>Why Choose</h6>
            <h2>Gala Travel & Tourism</h2>
          </div> -->
          <b-carousel-list :data="homeBottomSlides" :items-to-show="1">
            <template slot="item" slot-scope="list">
              <div class="arrow">
                <div class="col-12 p-0">
                  <div class="slider-block clearfix slider-tour">
                    <div
                      class="slider-block-left background-block"
                      :style="{
                        backgroundImage:
                          `url(${$config.ASSET_URL}` + list.image + ')',
                      }"
                    ></div>
                    <div class="slider-block-right">
                      <h6 class="sb-title">Top Services</h6>
                      <h2 class="main-title">{{ list.title }}</h2>
                      <div
                        class="sb-price"
                        style="
                          display: -webkit-box;
                          -webkit-line-clamp: 8;
                          -webkit-box-orient: vertical;
                          overflow: hidden;
                        "
                        v-html="list.description"
                      ></div>
                      <div class="sb-text"></div>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </b-carousel-list>
        </div>
      </div>
    </div>
    <!-- end of top offer carousel -->
    <div class="your-best-deal">
      <div class="heading">
        <div class="container">
          <h6>Why Choose </h6>
          <h4>Gala Travel & Tourism</h4>
        </div>
      </div>
      <div class="container best-deal-outer">
        <div class="row">
          <div class="col-lg-3 best-deal-box">
            <img src="../static/USP_icon_1.png" width="120px" alt />
            <h6>
              Compare
              <br />800+ Airlines
            </h6>
          </div>
          <div class="col-lg-3 best-deal-box">
            <img src="../static/USP_icon_2.png" width="120px" alt />
            <h6>
              Easy and
              <br />fast booking
            </h6>
          </div>
          <div class="col-lg-3 best-deal-box">
            <img src="../static/USP_icon_3.png" width="120px" alt />
            <h6>
              English speaking
              <br />customer service
            </h6>
          </div>
          <div class="col-lg-3 best-deal-box">
            <img src="../static/USP_icon_4.png" width="120px" alt />
            <h6>
              GALA TRAVEL is
              <br />a member of IATA
            </h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import flightSearchForm from "@/components/flightSearchForm.vue";
import Carousal from "@/components/Carousal.vue";
export default {
  components: {
    flightSearchForm,
    Carousal,
  },

  data() {
    return {
      data:{},
      activeTab: "",
      slider: 3,
      allPackages: [],
      homeBottomSlides: [],
      coverPhoto: "",
      regions: [
        "asia",
        "midle east",
        "europe",
        "africa",
        "north america",
        "south america",
        "australia",
        "antaractica",
      ],
    };
  },
  computed: {
    ...mapGetters({
      pakages: "pakages/getPakages",
      homebottomSlides: "home/getHomeBottomSlides",
      // countriesData: "home/getCountries",
      sliderBottomcoverPhoto: "home/getBottomSliderCoverPhoto",
      // pakageCountry: "pakages/getPakageCountry",
    }),
  },
  created() {
    this.$store.commit("setPnrGenerated",false)
    this.$api.get(`/package`).then(({ data }) => {
      this.$store.commit("pakages/setPakages", data);
      var allPackages = [];
      for (var i = 0; i < 7; i++) {
        allPackages.push(data.data[i]);
      }
      this.allPackages = allPackages;
    });
    if (this.homebottomSlides.length == 0) {
      this.$api.get(`/cmsslider`).then(({ data }) => {
        for (var i = 0; i < data.data.length; i++) {
          if (data.data[i].name == "Home Services Slider") {
            this.sliderTwoId = data.data[i].id;
            this.coverPhoto = data.data[i].cover_photo;
            this.$store.commit("home/setHomeBottomSlider", data.data[i]);
          }
        }
      });
      this.$api.get(`/cmsslide`).then(({ data }) => {
        for (var i = 0; i < data.data.length; i++) {
          if (
            data.data[i].cms_slider_id == this.sliderTwoId &&
            data.data[i].status == "active"
          ) {
            this.homeBottomSlides.push(data.data[i]);
          }
        }
        this.$store.commit("home/setHomeBottomSlides", this.homeBottomSlides);
      });
    } else {
      this.coverPhoto = this.sliderBottomcoverPhoto;
      this.homeBottomSlides = this.homebottomSlides;
    }
     if (this.$auth.loggedIn && this.$auth.strategy.name !== "local") {
      this.checkLogin();
    }
  },
  methods:{
    checkLogin() {
      console.log('this.$auth.user',this.$auth.strategy.name)
      if (this.$auth && this.$auth.strategy &&this.$auth.strategy.name == "google") {
       this.data.first_name = this.$auth.user.given_name;
        this.data.last_name = this.$auth.user.family_name;
        this.data.email = this.$auth.user.email;
        this.data.provider_id = this.$auth.user.sub;
        this.data.provider = this.$auth.strategy.name;
        this.$api({
          method: "post",
          url: "/user/social",
          data: this.data,
        })
        .then(({ data }) => {
          this.$auth.$storage.setLocalStorage("strategy", "local");
          this.$auth.$storage.setLocalStorage("_token.google", false);
          this.$auth.$storage.setLocalStorage(
            "_token.local",
            "Bearer " + data.data.token
          );
          this.$auth.$storage.setCookie("strategy", "local");
          this.$auth.$storage.setCookie("_token.google", false);
          this.$auth.$storage.setCookie(
            "_token.local",
            "Bearer " + data.data.token
          );
          // return (window.location.href = this.DashboardUrl);
          // this.$router.push("/profile");
          window.location.reload();
        });
      }
      if (this.$auth.strategy.name == "facebook") {
        if (!this.$auth.user.email) {
          alert("Please add email address to continue!");
          this.$router.push("/login");
          this.$auth.$storage.removeLocalStorage("strategy");
          this.$auth.$storage.removeLocalStorage("_token.local");
          this.$auth.$storage.removeCookie("strategy");
          this.$auth.$storage.removeCookie("_token.local");
        } else {
          this.data.first_name = this.$auth.user.name;
          this.data.last_name = this.$auth.user.name;
          this.data.email = this.$auth.user.email;
          this.data.provider_id = this.$auth.user.id;
          this.data.provider = this.$auth.strategy.name;
          this.$api.post(`/user/social`, this.data).then(({ data }) => {
            this.$auth.$storage.setLocalStorage("strategy", "local");
            this.$auth.$storage.setLocalStorage("_token.facebook", false);
            this.$auth.$storage.setLocalStorage(
              "_token.local",
              "Bearer " + data.data.token
            );
            this.$auth.$storage.setCookie("strategy", "local");
            this.$auth.$storage.setCookie("_token.facebook", false);
            this.$auth.$storage.setCookie(
              "_token.local",
              "Bearer " + data.data.token
            );
            // this.$router.push("/profile");
            window.location.reload();
          });
        }
      }
    },
  convertToCapital(string){
    console.log('string',string.cap)
  }
  }
};
</script>

