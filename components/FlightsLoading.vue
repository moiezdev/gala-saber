<template>
  <div class="loading-page2">
    <div class="loading-page1">
      <div class="main">
        <div class="loadd-bg">
          <div class="container">
            <div class="midl">
              <div class="logo">
                <img
                  :src="
          headerLogo
            ? `${$config.ASSET_URL}/${headerLogo}`
            : '/theme-1/logo.jpg'
        " alt="">
              </div>
            </div>
            <div v-if="loadingParams">
              <div
                v-if="params && params.type !== 'multi'"
                class="three"
              >
                <div class="on-trp mr-4">
                  <div class="blue-tp">
                    <div class="take-of">
                    </div>
                    <strong>
                      {{ params["locations"]["originLocationCode"]["iata"] }}
                    </strong>
                    <h6>{{ params["locations"]["originLocationCode"]["city"] }}</h6>
                    <h5> {{$days(
                      new Date(params["departureDate"]).getDay())
                      }}</h5>
                    <h3 class="date-tp"> {{
                      `${$formatDate(params["departureDate"])}`
                      }}</h3>
                  </div>
                </div>
                <div class="two-trp">
                  <h6>{{title}}</h6>
                  <div class="w3-container w3-green w3-round" style="width: 300px;height: 5px;"></div>

                  <div class="loading-progressbar mt-2">
                    <b-progress class="progress" type="is-info"></b-progress>
                  </div>

                  <h5>  {{ `${traveler} Traveler${traveler > 1 ? "s" : ""}` }}</h5>

                </div>
                <div class="on-trp ml-4">
                  <div class="blue-tp">
                    <strong>
                      {{ params["locations"]["destinationLocationCode"]["iata"] }}
                    </strong>
                    <h6> {{ params["locations"]["destinationLocationCode"]["city"] }}</h6>
                    <h5 v-if="params.type == 'round'"> {{$days(new Date(params["returnDate"]).getDay())}}</h5>
                    <h5 v-else> {{$days(new Date(params["departureDate"]).getDay())}}</h5>
                    <h3 class="date-tp" v-if="params.type == 'round'"> {{
                      ` ${$formatDate(
                      params["returnDate"]
                      )}`
                      }}</h3>
                      <h3 class="date-tp" v-else> {{
                      ` ${$formatDate(
                      params["departureDate"]
                      )}`
                      }}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--    <div class="loading-page2-a">-->
    <!--&lt;!&ndash;    <div class="loading-header">&ndash;&gt;-->
    <!--&lt;!&ndash;      <img&ndash;&gt;-->
    <!--&lt;!&ndash;        :src="&ndash;&gt;-->
    <!--&lt;!&ndash;          headerLogo&ndash;&gt;-->
    <!--&lt;!&ndash;            ? `${$config.ASSET_URL}/${headerLogo}`&ndash;&gt;-->
    <!--&lt;!&ndash;            : '/theme-1/logo.jpg'&ndash;&gt;-->
    <!--&lt;!&ndash;        "&ndash;&gt;-->
    <!--&lt;!&ndash;        alt&ndash;&gt;-->
    <!--&lt;!&ndash;      />&ndash;&gt;-->
    <!--&lt;!&ndash;    </div>&ndash;&gt;-->
    <!--&lt;!&ndash;    <div class="loading-header-text">&ndash;&gt;-->
    <!--&lt;!&ndash;      <h4>{{ title }}</h4>&ndash;&gt;-->
    <!--&lt;!&ndash;    </div>&ndash;&gt;-->
    <!--    &lt;!&ndash;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&ndash;&gt;-->
    <!--&lt;!&ndash;    <div class="loading-progressbar mt-2">&ndash;&gt;-->
    <!--&lt;!&ndash;      <b-progress class="progress" type="is-success"></b-progress>&ndash;&gt;-->
    <!--&lt;!&ndash;    </div>&ndash;&gt;-->
    <!--    &lt;!&ndash;-&#45;&#45;&#45;&#45;&#45;&#45;&ndash;&gt;-->
    <!--    <div v-if="loadingParams">-->
    <!--      &lt;!&ndash; Loading Content For One or Round Search &ndash;&gt;-->
    <!--      <div-->
    <!--        class="loading-header-text2"-->
    <!--        v-if="params && params.type !== 'multi'"-->
    <!--      >-->
    <!--        <div class="center-text-filed" style="text-align: left">-->
    <!--          <span-->
    <!--            >({{ params["locations"]["originLocationCode"]["city"] }} - -->
    <!--            {{ params["locations"]["destinationLocationCode"]["city"] }})</span-->
    <!--          >-->
    <!--        </div>-->
    <!--        <div class="center-text-filed">-->
    <!--          <span>{{-->
    <!--            `${$days(-->
    <!--              new Date(params["departureDate"]).getDay()-->
    <!--            )}, ${$formatDate(params["departureDate"])}`-->
    <!--          }}</span>-->
    <!--          <template v-if="params['returnDate']">-->
    <!--            <span>-</span>-->
    <!--            <span>{{-->
    <!--              `${$days(new Date(params["returnDate"]).getDay())}, ${$formatDate(-->
    <!--                params["returnDate"]-->
    <!--              )}`-->
    <!--            }}</span>-->
    <!--          </template>-->
    <!--        </div>-->
    <!--        <div class="center-text-filed" style="text-align: right">-->
    <!--          <span>{{ `${traveler} Traveler${traveler > 1 ? "s" : ""}` }}</span>-->
    <!--        </div>-->
    <!--      </div>-->

    <!--      &lt;!&ndash; MultiSearch Loading Content &ndash;&gt;-->
    <!--      <div-->
    <!--        v-else-->
    <!--        v-for="(destination, index) in params.destinations"-->
    <!--        :key="index"-->
    <!--        class="loading-header-text2"-->
    <!--      >-->
    <!--        <div class="center-text-filed">-->
    <!--          <span-->
    <!--            >({{ destination["locations"]["originLocationCode"]["city"] }} - -->
    <!--            {{-->
    <!--              destination["locations"]["destinationLocationCode"]["city"]-->
    <!--            }})</span-->
    <!--          >-->
    <!--        </div>-->
    <!--        <div class="center-text-filed">-->
    <!--          <span>{{-->
    <!--            `${$days(-->
    <!--              new Date(destination["departureDate"]).getDay()-->
    <!--            )}, ${$formatDate(destination["departureDate"])}`-->
    <!--          }}</span>-->
    <!--        </div>-->
    <!--        <div class="center-text-filed">-->
    <!--          <span>{{ `${traveler} Traveler${traveler > 1 ? "s" : ""}` }}</span>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->
    <!--    &lt;!&ndash;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&ndash;&gt;-->
    <!--    </div>-->
  </div>
</template>

<script>
  import { mapGetters } from "vuex";
  export default {
    props: ["title", "loadingParams","propParams"],
    data() {
      return {
        headerLogo: null,
      };
    },
    layout:"loading",
    computed: {
      ...mapGetters({
        params: "forAll/getSearchParams",
        siteLogos: "siteSetting/getLogos",
      }),

      traveler() {
        let traveler = this.params.adults;
        if (this.params.children) {
          traveler += this.params.children;
        }
        if (this.params.infants) {
          traveler += this.params.infants;
        }
        return traveler;
      },
    },

    created() {
      if (!this.params){
        this.params = this.propParams
      };
      if (this.siteLogos) {
        this.headerLogo = this.siteLogos[0].header_logo;
      }
    },
  };

</script>
<style scoped>
  .loading-page2{
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: white;
    z-index: 100;
    top: 0px;
    left: 0;
    padding: 15% 20%;
  }
  .loading-page2-a{
    width: 60%;
    position: absolute;
    left: 50%;
    right: 50%;
    transform: translate(-50%);
  }
</style>
