<template>
  <div class="container-fluid flight-list-body">
    <div class="height-38"></div>
    <div class="flights-page">

<!--      <div class="flights-heading">-->
<!--        <div class="container pb-3 pt-1">-->
<!--          <div class="flights-modify-section">-->
<!--            <div class="left">-->
<!--              <div class="flight-top-section">-->
<!--                <h1>{{country.name}}</h1>-->
<!--              </div>-->
<!--              <h5>{{country.region}}</h5>-->
<!--            </div>-->
<!--            <div>-->
<!--              <div class="right">-->
<!--                <button @click="$router.back()" class="btn btn-primary">Back</button>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->

      <div class="packages-heading" v-bind:style="{ 'background-image': 'url(https://fse.galabahrain.com/assets/' + country.header_image + ')'}">
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
                <h1>{{country.name}}</h1>
                <h5>{{country.region}}</h5>
                <!-- <span class="mdi mdi-airplane mdi-rotate-90"></span> -->
              </div>
            </div>
            <!-- <div>
              <div class="right">
                <button class="btn btn-primary">Change your flight</button>
              </div>
            </div> -->
          </div>
        </div>
      </div>
      <div class="deals pt-2">
        <div class="hotel-deals">
          <div class="row" v-if="allPackages.length > 0">
            <div :key="index" v-for="(pakage, index) in allPackages" class="col-lg-3 col-md-6">
              <div class="hotel-deal-box" v-if="pakage">
                <div
                  v-if="pakage.image"
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
            </div>
            <div v-if="allPackages.length <= 0 && loading == false" class="no_pakage col-lg-12 col-md-12">
              <img src="../../static/nopackage.png" alt/>
              <h3>No Pakage Found</h3>
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
              <img src="../../static/USP_icon_1.png" width="120px" alt/>
              <h6>
                Compare
                <br/>800+ Airlines
              </h6>
            </div>
            <div class="col-lg-3 best-deal-box">
              <img src="../../static/USP_icon_2.png" width="120px" alt/>
              <h6>
                Easy and
                <br/>fast booking
              </h6>
            </div>
            <div class="col-lg-3 best-deal-box">
              <img src="../../static/USP_icon_3.png" width="120px" alt/>
              <h6>
                English speaking
                <br/>customer service
              </h6>
            </div>
            <div class="col-lg-3 best-deal-box">
              <img src="../../static/USP_icon_4.png" width="120px" alt/>
              <h6>
                GALA TRAVEL is
                <br/>a member of IATA
              </h6>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
  import {mapGetters} from "vuex";

  export default {
    data() {
      return {
        loading: false,
        value: "250",
        regions: [
          'Asia',
          'Middle East',
          'Africa',
          'North America',
          'South America',
          'Antaractica',
          'Europe',
          'Australia'
        ],
        allPackages: [],
        country: {}
      };
    },
    computed: {
      ...mapGetters({
        pakages: "pakages/getPakages",
        pakageCountry: "pakages/getPakageCountry",
      }),
    },
    created() {
      this.loading = true;
      this.$nextTick(() => {
        this.$nuxt.$loading.start();
      })
      if (typeof this.$route.params.id == "number") {
        this.$api.get(`/package`).then(({data}) => {
          this.$store.commit("pakages/setPakages", data);
          var allPackages = []
          for (var i = 0; i < data.data.length; i++) {
            if (data.data[i].package_country_id == this.$route.params.id) {
              allPackages.push(data.data[i]);
            }
          }
          this.allPackages = allPackages;
          this.$nuxt.$loading.finish();
          this.loading = false;
        });
        this.$api.get(`/packagecountry/${this.$route.params.id}`).then(({data}) => {

          this.$store.commit("pakages/setPakageCountry", data);
          this.country = data;
        });
      } else {
        this.$api.get(`/package`).then(({data}) => {
          this.$store.commit("pakages/setPakages", data);
          var allPackages = []
          for (var i = 0; i < data.data.length; i++) {
            if (data.data[i].package_country && this.convertSmall(data.data[i].package_country.region) == this.$route.params.id) {
              allPackages.push(data.data[i]);
            }
          }
          this.allPackages = allPackages;
          this.$nuxt.$loading.finish();
          this.loading = false;
        });
        this.$api.get(`/packagecountry`).then(({data}) => {

          this.$store.commit("pakages/setPakageCountry", data);
          this.country = data;
        });
      }
    },
    methods: {
      convertSmall(string) {
        return string.toLowerCase()
      }
    },
  };
</script>
<style type="text/css">
  .no_pakage {
    text-align: center;
    color: gray;
    opacity: 0.6;
  }
</style>
