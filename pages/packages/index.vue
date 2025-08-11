<template>
  <div class="container-fluid flight-list-body">
    <div class="flights-page bg-white">
      <div style="height: 40px" class="bg-white"></div>
      <div class="packages-heading">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
          <path class="elementor-shape-fill" opacity="0.33" d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"></path>
          <path class="elementor-shape-fill" opacity="0.66" d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"></path>
          <path class="elementor-shape-fill" d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"></path>
        </svg>
        <div class="container">
          <div class="flights-modify-section">
            <div class="left">
              <div
                class="flight-top-section"
                style="width: 100%;"
              >
                <h1>Tour Packages</h1>
                <h5>Explore the World | {{active_region}}</h5>
                <!-- <span class="mdi mdi-airplane mdi-rotate-90"></span> -->
              </div>
            </div>
            <!-- <div>
              <div class="right">
                <button class="btn btn-primary">Change your flight</button>
              </div>
            </div> -->
          </div>
          <div class="top-filter top-origin-filter">
            <div @click.prevent="changeRegion(region)" :key="index" v-for="(region,index) in regions" class="top-filter-section">
              <div>
                <div class="text-section" :class="active_region == region ? 'active': ''">
                  <h5>{{region}}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- <div class="content-slogan">
        <h1>Cheap Flights</h1>
        <h6>
          Home
          <span class="mdi mdi-chevron-double-right"></span>
          <a href>Flights</a>
        </h6>
      </div> -->
      <div class="deals pt-2">
        <!-- <div class="cheap-deal">
        <h3>International / Domestic Flight Deals</h3>
        <h6>“The world is a book, and those who do not travel read only one page” Book a lavish flight to your dream destination. Fly with GALA TRAVEL anywhere in the world, at a competitive price.</h6>
        <small>
          Read more
          <span class="mdi mdi-chevron-down"></span>
        </small>
      </div> -->
        <div class="hotel-deals">
          <div class="row" v-if="sortedPackages.length > 0">
            <div  v-for="(countryDetail, index) in sortedPackages"
            :key="index" class="col-lg-4 col-md-6">
              <div class="hotel-deal-box">
                <div v-bind:style="{ 'background-image': 'url(https://fse.galabahrain.com/assets/' + countryDetail.image + ')'}" class="europe-united">
                  <h3>{{countryDetail.name}}</h3>
                </div>
                <div class="text-area">
                   <h6 v-html="countryDetail.description.length > 150 ? countryDetail.description.substring(0,140)+'...' : countryDetail.description">
              </h6>
                  <div class="hotel-deal-rate">
                    <nuxt-link
                      :to="{
                        name: 'packages-id',
                        params: { id: countryDetail.id }
                      }"
                    >
                      <div class="left">
                        <h5>
                          Explore Packages
                          <span class="mdi mdi-chevron-double-right"></span>
                        </h5>
                      </div>
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="sortedPackages.length <= 0 && loading == false" class="no_country col-lg-12 col-md-12">
              <img src="../../static/nopackage.png" alt />
              <h3>No Country Found</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="your-best-deal">
        <div class="heading">
          <h4>Your best deal in no time!</h4>
        </div>
        <div class="container best-deal-outer">
          <div class="row">
            <div class="col-lg-3 best-deal-box">
              <img src="../../static/USP_icon_1.png" width="120px" alt />
              <h6>
                Compare
                <br />800+ Airlines
              </h6>
            </div>
            <div class="col-lg-3 best-deal-box">
              <img src="../../static/USP_icon_2.png" width="120px" alt />
              <h6>
                Easy and
                <br />fast booking
              </h6>
            </div>
            <div class="col-lg-3 best-deal-box">
              <img src="../../static/USP_icon_3.png" width="120px" alt />
              <h6>
                English speaking
                <br />customer service
              </h6>
            </div>
            <div class="col-lg-3 best-deal-box">
              <img src="../../static/USP_icon_4.png" width="120px" alt />
              <h6>
                GALA TRAVEL is
                <br />a member of IATA
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- flight-detail-section -->
   <!--  <b-sidebar
      id="sidebar-backdrop"
      class="flight-detail-bar"
      :backdrop-variant="variant"
      backdrop
      right
      shadow
      title="Flight Detail"
      >
      <div class="flight-detail-fare-section">
        <div class="button-box">
          <div class="price">
            <small>BHD</small>
            <span>2,496</span>
            <sup>.75</sup>
            <h6>Per Person</h6>
            <div class="book-btn">
              <router-link
                :to="{ name: 'flightDetail"
                class="search-button-outer"
              >
                <button class="btn btn-dark">
                  Book this Flight
                  <i class="fa fa-arrow-right"></i>
                </button>
              </router-link>
            </div>
          </div>
        </div>
        <div class="luggage-detail">
          <div>
            <span class="mdi mdi-briefcase-check"></span>
          </div>
          <div>
            <span> 30kg Luggage </span>
          </div>
          <div>
            <span class="mdi mdi-ticket-confirmation"></span>
          </div>
          <div>
            <span>Economy</span>
          </div>
        </div>
        <div class="outbound">
          <div class="icon">
            <span class="mdi mdi-airplane mdi-rotate-90"></span>
          </div>
          <div class="text">
            <h5>Outbound, We 05 Aug</h5>
            <span>Duration: 13h15m</span>
          </div>
        </div>
        <div class="flight-full-summary">
          <div class="time">
            <div>
              <strong>03:10</strong>
              <h6>05 Aug</h6>
            </div>
            <div>
              <strong>03:10</strong>
              <h6>05 Aug</h6>
            </div>
          </div>
          <div class="center-line">
            <div class="x-line-dot"></div>
            <div class="x-line"></div>
            <div class="x-line-dot"></div>
          </div>
          <div class="your-flight">
            <strong>Lahore</strong>
            <h6>(LHE), Pakistan</h6>
            <div class="facilities">
              <h6>Emirates EK623</h6>
              <div class="facilitie-box">
                <div>
                  <span class="mdi mdi-seat-recline-normal"></span>
                </div>
                <div>
                  <small>32" seat pitch</small>
                </div>
              </div>
              <div class="facilitie-box">
                <div>
                  <span class="mdi mdi-video"></span>
                </div>
                <div>
                  <small>Seatback on-demand video</small>
                </div>
              </div>
              <div class="facilitie-box">
                <div>
                  <span class="mdi mdi-wifi"></span>
                </div>
                <div>
                  <small>Basic web browsing (fee)</small>
                </div>
              </div>
              <div class="facilitie-box">
                <div>
                  <span class="mdi mdi-power-plug mdi-rotate-90"></span>
                </div>
                <div>
                  <small>Power & USB outlets</small>
                </div>
              </div>
              <div class="facilitie-box">
                <div>
                  <span class="mdi mdi-food-fork-drink"></span>
                </div>
                <div>
                  <small>Meal provided</small>
                </div>
              </div>
              <div class="flight-class">
                <div class="flight-class-box">
                  <div>
                    <label for>Class:</label>
                  </div>
                  <div>
                    <span>Economy</span>
                  </div>
                </div>
                <div class="flight-class-box">
                  <div>
                    <label for>Aircraft:</label>
                  </div>
                  <div>
                    <span>Boeing 777-300ER</span>
                  </div>
                </div>
                <div class="flight-class-box">
                  <div>
                    <label for>Distance</label>
                  </div>
                  <div>
                    <span>1988 Kms</span>
                  </div>
                </div>
              </div>
            </div>
            <strong>Lahore</strong>
            <h6>(LHE), Pakistan</h6>
          </div>
        </div>
        <div class="outbound">
          <div class="icon">
            <span class="mdi mdi-airplane mdi-rotate-90"></span>
          </div>
          <div class="text">
            <h5>Inbound, We 05 Aug</h5>
            <span>Duration: 13h15m</span>
          </div>
        </div>
        <div class="flight-full-summary">
          <div class="time">
            <div>
              <strong>03:10</strong>
              <h6>05 Aug</h6>
            </div>
            <div>
              <strong>03:10</strong>
              <h6>05 Aug</h6>
            </div>
          </div>
          <div class="center-line">
            <div class="x-line-dot"></div>
            <div class="x-line"></div>
            <div class="x-line-dot"></div>
          </div>
          <div class="your-flight">
            <strong>Lahore</strong>
            <h6>(LHE), Pakistan</h6>
            <div class="facilities">
              <h6>Emirates EK623</h6>
              <div class="facilitie-box">
                <div>
                  <span class="mdi mdi-seat-recline-normal"></span>
                </div>
                <div>
                  <small>32" seat pitch</small>
                </div>
              </div>
              <div class="facilitie-box">
                <div>
                  <span class="mdi mdi-video"></span>
                </div>
                <div>
                  <small>Seatback on-demand video</small>
                </div>
              </div>
              <div class="facilitie-box">
                <div>
                  <span class="mdi mdi-wifi"></span>
                </div>
                <div>
                  <small>Basic web browsing (fee)</small>
                </div>
              </div>
              <div class="facilitie-box">
                <div>
                  <span class="mdi mdi-power-plug mdi-rotate-90"></span>
                </div>
                <div>
                  <small>Power & USB outlets</small>
                </div>
              </div>
              <div class="facilitie-box">
                <div>
                  <span class="mdi mdi-food-fork-drink"></span>
                </div>
                <div>
                  <small>Meal provided</small>
                </div>
              </div>
              <div class="flight-class">
                <div class="flight-class-box">
                  <div>
                    <label for>Class:</label>
                  </div>
                  <div>
                    <span>Economy</span>
                  </div>
                </div>
                <div class="flight-class-box">
                  <div>
                    <label for>Aircraft:</label>
                  </div>
                  <div>
                    <span>Boeing 777-300ER</span>
                  </div>
                </div>
                <div class="flight-class-box">
                  <div>
                    <label for>Distance</label>
                  </div>
                  <div>
                    <span>1988 Kms</span>
                  </div>
                </div>
              </div>
            </div>
            <strong>Lahore</strong>
            <h6>(LHE), Pakistan</h6>
          </div>
        </div>
      </div>
    </b-sidebar> -->
    <!-- flight-detail-section -->
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      loading: false,
      data: [],
      sortedPackages:[],
      value: "250",
      active_region: '',
      regions: [
        'Asia',
        'Middle East',
        'Africa',
        'North America',
        'South America',
        'Antaractica',
        'Europe',
        'Australia'
      ]
    };
  },
    computed: {
    ...mapGetters({
      countries: "pakages/getPakagesCountry",
    }),
  },
  created(){
    this.loading = true;
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
    })
    this.$api.get(`/packagecountry`).then(({ data }) => {
      this.$store.commit("pakages/setPakagesCountry", data);
        if (this.$route.params.region) {
          this.checkRegion();
        } else{
          this.sortedPackages = data.data
        }
        this.$nuxt.$loading.finish();
        this.loading = false;

    });
  },
  methods: {

    checkRegion() {
      var sorted = [];

      for (var i of this.countries) {
        if (this.$route.params.region == i.region) {
          this.active_region = this.$route.params.region;
          sorted.push(i);
        }
      }
      this.sortedPackages = sorted;
    },

    changeRegion(value) {
      var sorted = [];
      this.active_region = value
      for (var i of this.countries) {
        if (value == i.region) {
          sorted.push(i);
        }
      }
      this.sortedPackages = sorted;
    },
  }
};
</script>
<style type="text/css">
  .top-origin-filter{
    cursor: pointer;
  }
  .no_country{
    text-align: center;
    color: gray;
    opacity: 0.6;
  }
</style>
