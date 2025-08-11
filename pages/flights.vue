<template>
  <div>
    <!--    <div class="inner-banner style-4" v-if="!notFoundError">-->
    <!--      <div class="vertical-align flight-banner">-->
    <!--        <div class="container">-->
    <!--          &lt;!&ndash; Simple Search Result &ndash;&gt;-->
    <!--          <h2 class="color-white" v-if="params && params.type !== 'multi'">-->
    <!--            {{-->
    <!--            `${params["locations"]["originLocationCode"]["city"]} to-->
    <!--            ${params["locations"]["destinationLocationCode"]["city"]}`-->
    <!--            }}-->
    <!--          </h2>-->
    <!--          &lt;!&ndash; Multi Search Result &ndash;&gt;-->
    <!--          <h4 class="color-white" v-else>-->
    <!--            <span-->
    <!--              v-for="(destination, index) in params.destinations"-->
    <!--              :key="index"-->
    <!--            >-->
    <!--              <span v-if="index != 0"> /</span>-->
    <!--              <template-->
    <!--                v-if="-->
    <!--                  destination['locations']['originLocationCode'] !== undefined-->
    <!--                "-->
    <!--              >{{-->
    <!--                  `${destination["locations"]["originLocationCode"]["city"]} to ${destination["locations"]["destinationLocationCode"]["city"]}`-->
    <!--                }}</template-->
    <!--              >-->
    <!--            </span>-->
    <!--          </h4>-->

    <!--          &lt;!&ndash; Simple Search Date &ndash;&gt;-->
    <!--          <h4 class="color-white" v-if="params && params.type !== 'multi'">-->
    <!--            {{-->
    <!--            ` Travelling ${new Date(-->
    <!--            params["departureDate"]-->
    <!--            ).getDate()}/${$months(-->
    <!--            new Date(params["departureDate"]).getMonth()-->
    <!--            )}/${new Date(params["departureDate"]).getFullYear()}`-->
    <!--            }}-->
    <!--            {{-->
    <!--            params["returnDate"]-->
    <!--            ? `to ${new Date(params["returnDate"]).getDate()}/${$months(-->
    <!--            new Date(params["returnDate"]).getMonth()-->
    <!--            )}/${new Date(params["returnDate"]).getFullYear()}`-->
    <!--            : ""-->
    <!--            }}, {{ `Travelers ${traveler}` }}.-->
    <!--          </h4>-->

    <!--          &lt;!&ndash; Multi Search Date &ndash;&gt;-->
    <!--          <h4 class="color-white" v-else>-->
    <!--            <span-->
    <!--              style="font-size: 14px"-->
    <!--              v-for="(destination, index) in params.destinations"-->
    <!--              :key="index"-->
    <!--            >-->
    <!--              <template-->
    <!--                v-if="-->
    <!--                  destination['locations']['originLocationCode'] !== undefined-->
    <!--                "-->
    <!--              >{{-->
    <!--                  `Travelling ${new Date(-->
    <!--                    destination["departureDate"]-->
    <!--                  ).getDate()}/${$months(-->
    <!--                    new Date(destination["departureDate"]).getMonth()-->
    <!--                  )}/${new Date(destination["departureDate"]).getFullYear()}`-->
    <!--                }}-->
    <!--                {{-->
    <!--                  destination["returnDate"]-->
    <!--                    ? `to ${new Date(-->
    <!--                        destination["returnDate"]-->
    <!--                      ).getDate()}/${$months(-->
    <!--                        new Date(destination["returnDate"]).getMonth()-->
    <!--                      )}/${new Date(destination["returnDate"]).getFullYear()}`-->
    <!--                    : ""-->
    <!--                }}-->
    <!--                /-->
    <!--              </template>-->
    <!--            </span>-->
    <!--            {{ `Travelers ${traveler}` }}-->
    <!--          </h4>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->
    <div class="container-fluid flight-list-body" v-if="!loading">
      <div style="height: 38px"></div>
      <div class="flights-page">
        <!--        <template>-->
        <!--          <notFound @search="mount"></notFound>-->
        <!--        </template>-->
        <template>
          <template v-if="true">
            <template>
              <div class="flights-heading">
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
                        v-if="params && params.type !== 'multi'"
                      >
                        <span>{{
                          `${params["locations"]["originLocationCode"]["city"]}`
                        }}</span>
                        <span class="mdi mdi-airplane mdi-rotate-90"></span>
                        <span>{{
                          `${params["locations"]["destinationLocationCode"]["city"]}`
                        }}</span>
                      </div>
                      <!-- Multi Search Result -->
                      <h5 class="color-white" v-else>
                        <span
                          v-for="(destination, index) in params.destinations"
                          :key="index"
                        >
                          <span v-if="index != 0"> /</span>
                          <template
                            v-if="
                              destination['locations']['originLocationCode'] !==
                              undefined
                            "
                          >{{
                              `${destination["locations"]["originLocationCode"]["city"]} to ${destination["locations"]["destinationLocationCode"]["city"]}`
                            }}</template
                          >
                        </span>
                      </h5>

                      <!-- Simple Search Date -->
                      <h5
                        class="color-white"
                        v-if="params && params.type !== 'multi'"
                      >
                        {{
                        ` Travelling ${new Date(
                        params["departureDate"]
                        ).getDate()}/${$months(
                        new Date(params["departureDate"]).getMonth()
                        )}/${new Date(params["departureDate"]).getFullYear()}`
                        }}
                        {{
                        params["returnDate"]
                        ? `to ${new Date(
                        params["returnDate"]
                        ).getDate()}/${$months(
                        new Date(params["returnDate"]).getMonth()
                        )}/${new Date(
                        params["returnDate"]
                        ).getFullYear()}`
                        : ""
                        }}, {{ `Travelers ${traveler}` }}
                      </h5>

                      <!-- Multi Search Date -->
                      <h5 class="color-white" v-else>
                        <span
                          style="font-size: 14px"
                          v-for="(destination, index) in params.destinations"
                          :key="index"
                        >
                          <template
                            v-if="
                              destination['locations']['originLocationCode'] !==
                              undefined
                            "
                          >{{
                              `Travelling ${new Date(
                                destination["departureDate"]
                              ).getDate()}/${$months(
                                new Date(
                                  destination["departureDate"]
                                ).getMonth()
                              )}/${new Date(
                                destination["departureDate"]
                              ).getFullYear()}`
                            }}
                            {{
                              destination["returnDate"]
                                ? `to ${new Date(
                                    destination["returnDate"]
                                  ).getDate()}/${$months(
                                    new Date(
                                      destination["returnDate"]
                                    ).getMonth()
                                  )}/${new Date(
                                    destination["returnDate"]
                                  ).getFullYear()}`
                                : ""
                            }}
                            /
                          </template>
                        </span>
                        {{ `Travelers ${traveler}` }}
                      </h5>
                      <!-- <h5>Wed 08 Jul - Sun 12 Jul, 1 passenger, Economy</h5> -->
                    </div>
                    <div>
                      <flightModifySearchParams></flightModifySearchParams>
                    </div>
                  </div>
                  <div class="top-filter">
                    <div class="top-filter-section" @click="directFligthsFilter('all')">
                      <router-link :to="{ name: 'flights' }">
                        <div class="text-section" :class="directFlights == 'all'? 'active':'' ">
                          <h5>Your Search</h5>
                          <p>Best flights available</p>
                        </div>
                      </router-link>
                    </div>
                    <div class="top-filter-section center" @click="directFligthsFilter('direct')">
                      <div class="text-section" :class="directFlights == 'direct'? 'active':'' ">
                        <h5>Direct Flights</h5>
                        <p>Non stop flights</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!--              <button @click="routerpass">test</button>-->
              <div class="container">
                <!-- <flightFilters ref="filterFares" class="pt-4">
                  </flightFilters> -->
                <flightslist
                  ref="flightlist"
                  v-if="counts > 0"
                >
                  <!--                  @confirmingFare="confirmLoading = true"-->
                  <!--                  @fareConfirmed="confirmLoading = false"-->
                  <!--                  @search="mount()"-->
                  <!--                  @filterAirline="(airline) => updateAirlineFilter(airline)"-->
                  <!-- @filterAirline="
                    (airline) => $refs.filterFares.updateAirlineFilter(airline)
                  " -->
                </flightslist>
                <notFound v-else></notFound>
              </div>
            </template>
          </template>
        </template>
      </div>
    </div>

    <!-- flight-detail-section -->
    <!-- Loading Response -->

    <FlightsLoading
      v-if="loading"
      :loadingParams="true"
      title="We are Searching for the Best Flight Deals"
    >
    </FlightsLoading>
    <!-- Flight Conforming Loader -->

    <FlightsLoading
      v-if="confirmLoading"
      :loadingParams="true"
      title="We are confirming your selection"
    >
    </FlightsLoading>
  </div>
</template>
<script>
  import {mapState, mapGetters, mapMutations} from "vuex";
  import flightslist from "@/components/flightslist.vue";
  import flightFlex from "@/components/flightFlex.vue";
  import notFound from "@/components/notFound.vue";
  import FlightsLoading from "@/components/FlightsLoading.vue";
  import flightFilters from "@/components/flightFilters.vue";
  import flightModifySearchParams from "@/components/flightModifySearchParams";
  // Temporary Response File
  import flightResponse from "@/assets/response.json";

  export default {
    auth: false,

    components: {
      flightslist,
      flightFlex,
      FlightsLoading,
      flightFilters,
      notFound,
      flightModifySearchParams,
    },

    data() {
      return {
        counts: "",
        directFligth: false,
        isModifySearch: false,
        fares: [],
        searchParams: {},
        searchData: {},
        selected: [],
        value: "",
        loading: true,
        confirmLoading: false,
        notFoundError: false,
        timer: null,
        value: "",
      };
    },

    computed: {
      ...mapGetters({params: "forAll/getSearchParams"}),
      ...mapState("flights", ["response",
        "pagination", "filters", "loadFares", 'selectedStops', 'selectedAirlines', 'selectedAirports', 'selectedNewFilter', 'directFlights']),
      ...mapState("forAll", ["airlinesByKey"]),
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
    },
    mounted() {
      this.ajax(this.params)
      // this.mount();
    },

    methods: {
      ...mapMutations("forAll", ["setSearchParams"]),
      ...mapMutations("flights", [
        "setAjaxResponse",
        "setFlexResponse",
        "setPagination",
        "setLoadFares",
        'setDirectFlight',
        "changeFilters",
        "filterFares"
      ]),
      updateAirlineFilter(airline) {
        this.$refs.flightlist.$refs.filterFares.updateAirlineFilter(airline);
      },
      // mount() {
      //   if (this.loadFares) {
      //     this.loading = true;
      //     if (!this.params) {
      //       return this.redirect();
      //     }
      //     let data = {...this.params};
      //     if (this.params.type !== "multi") {
      //       let soapData = {destinations: []};
      //       soapData.destinations[0] = {};
      //       soapData.destinations[0]["departureLocation"] =
      //         data.locations.originLocationCode.iata;
      //       soapData.destinations[0]["arrivalLocation"] =
      //         data.locations.destinationLocationCode.iata;
      //       if (data["returnDate"]) {
      //         soapData.destinations[1] = {};
      //         soapData.destinations[1]["departureLocation"] =
      //           soapData.destinations[0]["arrivalLocation"];
      //         soapData.destinations[1]["arrivalLocation"] =
      //           soapData.destinations[0]["departureLocation"];
      //         let date = new Date(data["returnDate"]);
      //         soapData.destinations[1]["date"] = data[
      //           "returnDate"
      //           ] = `${date.getFullYear()}-${this.$isoDate(
      //           date.getMonth() + 1
      //         )}-${this.$isoDate(date.getDate())}`;
      //       }
      //       let date = new Date(data["departureDate"]);
      //       soapData.destinations[0][
      //         "date"
      //         ] = `${date.getFullYear()}-${this.$isoDate(
      //         date.getMonth() + 1
      //       )}-${this.$isoDate(date.getDate())}`;
      //       soapData.nonStop = data.nonStop;
      //       soapData.travelClass = data.travelClass;
      //       soapData.includedAirline = data.includedAirline;
      //       soapData["passengers"] = _.pick(data, [
      //         "adults",
      //         "children",
      //         "infants",
      //       ]);
      //       soapData["flex"] = data.flex || false;
      //       this.ajax(soapData);
      //     } else {
      //       let soapData = {destinations: []};
      //       for (var index in data.destinations) {
      //         soapData["destinations"][index] = {};
      //         soapData["destinations"][index]["departureLocation"] =
      //           data.destinations[index].locations.originLocationCode.iata;
      //         soapData["destinations"][index]["arrivalLocation"] =
      //           data.destinations[index].locations.destinationLocationCode.iata;
      //         let date = new Date(data.destinations[index]["departureDate"]);
      //         date = `${date.getFullYear()}-${this.$isoDate(
      //           date.getMonth() + 1
      //         )}-${this.$isoDate(date.getDate())}`;
      //         soapData["destinations"][index].date = date;
      //       }
      //       soapData.nonStop = data.nonStop;
      //       soapData.travelClass = data.travelClass;
      //       soapData.includedAirline = data.includedAirline;
      //       soapData["passengers"] = _.pick(data, [
      //         "adults",
      //         "children",
      //         "infants",
      //       ]);
      //       this.ajax(soapData);
      //     }
      //   } else {
      //     this.setLoadFares(true);
      //   }
      // },

      reformateType(data) {
        if (data == 'round') {
          return 'ROUND_TRIP'
        } else if (data == 'one') {
          return 'ONE_WAY'
        } else if (data == 'multi') {
          return 'MULTI_DIRECTIONAL'
        } else {
          return 'ROUND_TRIP'
        }
      },
      convertApiDate(dataDate) {
        let date = new Date(dataDate);
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let dt = date.getDate();

        if (dt < 10) {
          dt = '0' + dt;
        }
        if (month < 10) {
          month = '0' + month;
        }

        let newdate = year + '-' + month + '-' + dt;
        return newdate;
      },
      reformateData(thisData) {
        let data = thisData;
        // console.log(data)
        return {
          trip: this.reformateType(data.type),
          origion_name:
            data.locations.originLocationCode.city + " (" + data.locations.originLocationCode.iata + " - " +
            data.locations.originLocationCode.name + "), " + data.locations.originLocationCode.country,
          origion_code: data.locations.originLocationCode.iata,
          distination_name:
            data.locations.destinationLocationCode.city + " (" + data.locations.destinationLocationCode.iata + " - " +
            data.locations.destinationLocationCode.name + "), " + data.locations.destinationLocationCode.country,
          distination_code: data.locations.destinationLocationCode.iata,
          depart_date: this.convertApiDate(data.departureDate),
          return_date: this.convertApiDate(data.returnDate),
          adult: data.adults,
          child: data.children ? data.children : null,
          infant: data.infants ? data.infants : null,
          cabin_class: data.travelClass == '' ? 'ECONOMY' : data.travelClass,
        }
        // console.log(data.travelClass)
      },

      ajax(params) {

        // console.log(this.searchParams)
        // if (process.env.NODE_ENV != "production" && process.env.CACHE == "true") {
        //   if (this.params.flex) {
        //     let flightResponse = JSON.parse(
        //       localStorage.getItem("flexSearchResponse")
        //     );
        //     // console.log(flightResponse),
        //     this.setFlexResponse(flightResponse);
        //   } else {
        //     this.setAjaxResponse({
        //       response: flightResponse,
        //       airlinesByKey: this.airlinesByKey,
        //     });
        //   }
        //   this.loading = false;
        // } else {
        // localStorage.removeItem('searchResponse')
        this.loading = true
        // alert('run')
        this.$api({
          method: "post",
          url: "flight_search_api",
          data: this.reformateData(params),
        })
          .then(({data}) => {
            if (!data.error) {
              this.searchData = data
              localStorage.setItem("searchResponse", JSON.stringify(data));
              // console.log(this.searchData)
              // console.log('params',this.params)
              if (
                process.env.NODE_ENV != "production" &&
                process.env.CACHE == "true"
              ) {
                localStorage.setItem("flexSearchResponse", JSON.stringify(data));
              }
              // if (this.params.flex) {
              //   this.setFlexResponse(data);
              // } else {
              //   this.setFlexResponse({
              //     response: data,
              //     airlinesByKey: this.airlinesByKey,
              //   });
              // }
              this.counts = data.OTA_AirLowFareSearchRS.PricedItinCount
              this.notFoundError = false;
              this.timer = setTimeout(() => {
                this.$bvModal.show("search_expired");
              }, 3600000);
            } else {
              console.log('PricedItinCount', JSON.parse(JSON.parse(data.message).message).OTA_AirLowFareSearchRS.PricedItinCount)
              if (JSON.parse(JSON.parse(data.message).message).OTA_AirLowFareSearchRS.PricedItinCount == 0) {
                data = JSON.parse(JSON.parse(data.message).message)
              }
              this.counts = JSON.parse(JSON.parse(data.message).message).OTA_AirLowFareSearchRS.PricedItinCount
            }
            // console.log(data)
            this.setAjaxResponse({
              response: data,
              airlinesByKey: this.airlinesByKey,
            });
            // alert('hlw')
            // console.log(this.pagination)
          })
          .catch((err) => {
            // alert('err')
            this.notFoundError = true;
            console.log("error", err);
            let data = err;
            if (data.error) {
              for (var message of data.messages) {
                this.$bvToast.toast(
                  `Code: ${message.code}, Message ${message.text}`,
                  {
                    title: "GALA TRAVEL!",
                    variant: "danger",
                    solid: true,
                    toaster: "b-toaster-top-center",
                  }
                );
              }
            }
          })
          .finally(
            () => {
              this.loading = false;
            }
            //  {
            //       if(this.$store.state.loading){
            // this.$store.commit("setLoading")
            //       }
            // }
          );
        // }
      },
      directFligthsFilter(type) {
        this.changeFilters({
          stops: this.selectedStops,
          airlines: this.selectedAirlines,
          airports: this.selectedAirports,
          filters: this.selectedNewFilter,
          directFlights: type
        })
        // this.$store.dispatch("flights/changeFilters", {directFlights:type});
        this.$store.dispatch("flights/filterFares");
        // this.setDirectFlight(type)
        // this.filterFares()
        // {
        //   stops: this.selectedStops,
        //     airlines: this.selectedAirlines,
        //   airports: this.selectedAirports,
        //   directFlights: this.directFlights
        // }
        // let stops=[]
        // if(type == 'direct'){
        //   this.directFligth = true
        //   // stops=[0]
        // }
        // else {
        //   this.directFligth = false
        // }
        // let fares = this.response.OTA_AirLowFareSearchRS.PricedItineraries.PricedItinerary
        // if (stops.length > 0) {
        //   fares = fares.filter((x) => {
        //     let status = false
        //     x.AirItinerary.OriginDestinationOptions.OriginDestinationOption.forEach((segments, index)=> {
        //       if (stops.includes(segments.FlightSegment.length-1) && status == false && index==0) {
        //         status = true
        //       }
        //     })
        //     if (status) {
        //       return status
        //     }
        //   });
        // }
        // this.setPagination(fares);
        // if (this.sortBy === "cheap") {
        //   this.$store.dispatch("flights/sortFares", "cheap");
        // } else if (this.sortBy === "expensive") {
        //   this.$store.dispatch("flights/sortFares", "expensive");
        // } else if (this.sortBy == 'quick') {
        //   this.$store.dispatch("flights/sortFares", "cheap");
        //   this.$store.dispatch('flights/sortFares', this.sortBy)
        // }

      },
      redirect() {
        this.$router.push("/");
      },
      reformateType(data) {
        if (data == 'round') {
          return 'ROUND_TRIP'
        } else if (data == 'one') {
          return 'ONE_WAY'
        } else if (data == 'multi') {
          return 'MULTI_DIRECTIONAL'
        } else {
          return 'ROUND_TRIP'
        }
      },
      routerpass() {
        this.$router.push("flights");
        alert('passed')
      },
      // convertApiDate(dataDate) {
      //   let date = new Date(dataDate);
      //   let year = date.getFullYear();
      //   let month = date.getMonth() + 1;
      //   let dt = date.getDate();
      //
      //   if (dt < 10) {
      //     dt = '0' + dt;
      //   }
      //   if (month < 10) {
      //     month = '0' + month;
      //   }
      //
      //   let newdate = year + '-' + month + '-' + dt;
      //   return newdate;
      // },
      // reformateData() {
      //   let data = JSON.parse(localStorage.getItem("searchParams"));
      //   // console.log(data)
      //   this.searchParams = {
      //     trip: this.reformateType(data.type),
      //     origion_name:
      //       data.locations.originLocationCode.city + " (" + data.locations.originLocationCode.iata + " - " +
      //       data.locations.originLocationCode.name + "), " + data.locations.originLocationCode.country,
      //     origion_code: data.locations.originLocationCode.iata,
      //     distination_name:
      //       data.locations.destinationLocationCode.city + " (" + data.locations.destinationLocationCode.iata + " - " +
      //       data.locations.destinationLocationCode.name + "), " + data.locations.destinationLocationCode.country,
      //     distination_code: data.locations.destinationLocationCode.iata,
      //     depart_date: this.convertApiDate(data.departureDate),
      //     return_date: this.convertApiDate(data.returnDate),
      //     adult: data.adults,
      //     child: data.children ? data.children : null,
      //     infant: data.infants ? data.infants : null,
      //     cabin_class: data.travelClass == '' ? 'ECONOMY' : data.travelClass,
      //   }
      //   // console.log(data.travelClass)
      // },

      // ajax(params) {
      //   this.reformateData();
      //   // console.log(this.searchParams)
      //   // if (process.env.NODE_ENV != "production" && process.env.CACHE == "true") {
      //   //   if (this.params.flex) {
      //   //     let flightResponse = JSON.parse(
      //   //       localStorage.getItem("flexSearchResponse")
      //   //     );
      //   //     // console.log(flightResponse),
      //   //     this.setFlexResponse(flightResponse);
      //   //   } else {
      //   //     this.setAjaxResponse({
      //   //       response: flightResponse,
      //   //       airlinesByKey: this.airlinesByKey,
      //   //     });
      //   //   }
      //   //   this.loading = false;
      //   // } else {
      //     localStorage.removeItem('searchResponse')
      //     this.$api({
      //       method: "post",
      //       url: "flight_search_api",
      //       data: this.searchParams,
      //     })
      //       .then(({data}) => {
      //         this.searchData = data
      //         localStorage.setItem("searchResponse", JSON.stringify(data));
      //         // console.log(this.searchData)
      //         // console.log('params',this.params)
      //         if (
      //           process.env.NODE_ENV != "production" &&
      //           process.env.CACHE == "true"
      //         ) {
      //           localStorage.setItem("flexSearchResponse", JSON.stringify(data));
      //         }
      //         if (this.params.flex) {
      //           this.setFlexResponse(data);
      //         } else {
      //           this.setAjaxResponse({
      //             response: data,
      //             airlinesByKey: this.airlinesByKey,
      //           });
      //         }
      //         this.notFoundError = false;
      //         // this.timer = setTimeout(() => {
      //         //   this.$bvModal.show("search_expired");
      //         // }, 3600000);
      //       })
      //       .catch((err) => {
      //         // this.notFoundError = true;
      //         // console.log("error", err);
      //         // let data = err.response.data;
      //         // if (data.messages) {
      //         //   for (var message of data.messages) {
      //         //     this.$bvToast.toast(
      //         //       `Code: ${message.code}, Message ${message.text}`,
      //         //       {
      //         //         title: "GALA TRAVEL!",
      //         //         variant: "danger",
      //         //         solid: true,
      //         //         toaster: "b-toaster-top-center",
      //         //       }
      //         //     );
      //         //   }
      //         // }
      //       })
      //       .finally(
      //         () => (this.loading = false)
      //         //  {
      //         //       if(this.$store.state.loading){
      //         // this.$store.commit("setLoading")
      //         //       }
      //         // }
      //       );
      //   // }
      // },
      showModal() {
        this.isModifySearch = true;
        // this.$bvModal.show("searchModal");
      },
      search() {
        // this.$bvModal.hide("searchModal");
        this.isModifySearch = false;
        if (this.$route.name === "flights") {
          // console.log('flight route')
          // this.$emit("flightModify");
        } else {
          this.$router.push("flights");
        }
      },
    },
  };
</script>
