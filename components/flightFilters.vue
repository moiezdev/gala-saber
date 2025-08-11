<template>
  <div class="filter order1">
    <div class="heading">
      <img src="../static/filter.png" alt/>
      <h5>Filter your results</h5>
    </div>

    <div class="collapse-box">
      <!--@click="isOpenDepartureTimes = !isOpenDepartureTimes"-->
      <div
        class="filter-itom"
        v-b-toggle.collapse-4
        variant="primary"
        aria-controls="filtersidforDepartureTimes"
      >
        <h5>FILTER BY PRICE</h5>
        <!--
        <span>
          <i v-if="!isOpenDepartureTimes" class="fa fa-chevron-down"></i>
          <i v-if="isOpenDepartureTimes" class="fa fa-chevron-up"></i>
        </span>-->
      </div>
      <b-collapse
        aria-id="filtersidforDepartureTimes"
        v-model="isOpenDepartureTimes"
        animation="slide"
        visible
        id="collapse-4"
        class="collapse show"
      >
        <template v-if="filters.maxminPrices[0]">
          <b-card>
            <div class="w-100">
            <div style="display: flex; justify-content: space-between;width: 100%">
              <span class="range-text">{{
                `${filters.price[0]}`
              }}</span>
              <span class="range-text">{{
                `${filters.price[1]}`
              }}</span>
            </div>
            <b-slider
              v-model="filters.price"
              :min="filters.maxminPrices[0]"
              :max="filters.maxminPrices[1]"
              @dragend="filterFares"
              @change="filterFares"
              type="is-info"
            >
<!--              @input="updateSelectedFilters({filters:filters})"-->
            </b-slider>
            </div>
          </b-card>
          <b-card>
          </b-card>
        </template>
      </b-collapse>
    </div>
    <div class="collapse-box">
      <div
        class="filter-itom filter-bottom"
        v-b-toggle.collapse-5
        variant="primary"
        aria-controls="filtersidforFlightDuration"
      >
        <h5>Flight duration</h5>
        <span>
          <i v-if="!isOpenFlightDuration" class="fa fa-chevron-down"></i>
          <i v-if="isOpenFlightDuration" class="fa fa-chevron-up"></i>
        </span>
      </div>
      <b-collapse
        aria-id="filtersidforFlightDuration"
        v-model="isOpenFlightDuration"
        animation="slide"
        visible
        class="filter-last-box"
        id="collapse-5"
      >
        <b-card>
          <div class="w-100">
            <div style="display: flex; justify-content: space-between;width: 100%">
              <span class="range-text">{{ parseInt(filters.duration[0]/60) }}H {{parseInt(filters.duration[0]%60)}}M</span>
              <span class="range-text">{{ parseInt(filters.duration[1]/60) }}H {{parseInt(filters.duration[1]%60)}}M</span>
            </div>
            <b-slider
              v-model="filters.duration"
              :min="filters.maxminTime[0]"
              :max="filters.maxminTime[1]"
              type="is-info"
              @dragend="filterFares"
              @change="filterFares"
            >
<!--              @input="updateSelectedFilters({filters:filters})"-->
            </b-slider>
          </div>
        </b-card>
      </b-collapse>
    </div>
    <div class="collapse-box">
      <div class="filter-itom" v-b-toggle.collapse-2 variant="primary">
        <!-- aria-controls="filtersidforNumOfStops" -->
        <h5>Number of stops</h5>
        <span>
          <i v-if="!isOpenNumOfStops" class="fa fa-chevron-down"></i>
          <i v-if="isOpenNumOfStops" class="fa fa-chevron-up"></i>
        </span>
      </div>
      <b-collapse
        v-model="isOpenNumOfStops"
        visible
        aria-id="filtersidforNumOfStops"
        animation="slide"
        id="collapse-2"
        class="collapse show"
      >
        <b-card v-for="(stop, index) in response.stops" :key="index">
          <div>
            <b-form-checkbox
              name="numberOfStops"
              v-model="filters.selectedStops[stop]"
              @input="filterFares"
              @change="stop!=0?setDirectFlight('all'):''"
            >
<!--              :selected="testDirectFlights(stop,index)"-->
              <span class="checkbox-text">{{
                stop == 0 ? "Non Stop" : `${stop} Stops`
              }}</span>
            </b-form-checkbox>
          </div>
        </b-card>
      </b-collapse>
    </div>
    <div class="collapse-box">
      <div
        class="filter-itom collapsed"
        v-b-toggle.collapse-1
        variant="primary"
        aria-controls="filtersidforAllAirlines"
      >
        <h5>All airlines</h5>
        <span>
          <i v-if="!isOpenAllAirlines" class="fa fa-chevron-down"></i>
          <i v-if="isOpenAllAirlines" class="fa fa-chevron-up"></i>
        </span>
      </div>
      <b-collapse
        aria-id="filtersidforAllAirlines"
        v-model="isOpenAllAirlines"
        animation="slide"
        visible
        id="collapse-1"
        class="collapse show panel"
      >
        <template v-if="response['airlines']">
          <b-card v-for="(airline, index) in response['airlines']" :key="index">
            <template v-if="airlinesByKey[airline]">
              <b-form-checkbox
                v-model="filters.airlines[airline]"
                @input="filterFares"
              >
                <img
                  :src="
                    airline
                      ? `${$config.ASSET_URL}/flightlogo/${airline}.png`
                      : '../static/f2.png'
                  "
                  style="max-width: 30px"
                />
                <!-- <img src="../static/f2.png" alt /> -->
                {{ airlinesByKey[airline]["name"] }}
              </b-form-checkbox>
              <!--              <div class="price">-->
              <!--                <span>BHD {{ `${response.airlinesCheapPrice[airline]}` }}</span>-->
              <!--              </div>-->
            </template>
          </b-card>
        </template>
      </b-collapse>
    </div>
    <template v-if="response['airports']">
      <div class="collapse-box">
        <div
          class="filter-itom"
          v-b-toggle.collapse-3
          variant="primary"
          aria-controls="filtersidforAirports"
        >
          <h5>Airports</h5>
          <span>
            <i v-if="!isOpenAirports" class="fa fa-chevron-down"></i>
            <i v-if="isOpenAirports" class="fa fa-chevron-up"></i>
          </span>
        </div>
        <b-collapse
          aria-id="filtersidforAirports"
          animation="slide"
          v-model="isOpenAirports"
          visible
          id="collapse-3"
          class="collapse panel show"
        >
          <template v-if="response['airports']">
            <b-card
              v-for="(airport, index) in response['airports']"
              :key="index"
            >
              <template>
                <b-form-checkbox
                  v-model="filters.airports[airport]"
                  @input="filterFares"
                >
                  <div class="text-overflow">
                    {{ airportsByKey[airport]["name"] }}
                  </div>
                </b-form-checkbox>
              </template>
              <div class="price">
                <span>BHD {{ `${response.airportsCheapPrice[airport]}` }}</span>
              </div>
            </b-card>
          </template>
        </b-collapse>
      </div>
    </template>

  </div>
</template>
<script>
  import {mapState, mapMutations} from "vuex";

  export default {
    data() {
      return {
        type: "round",
        selected: "",
        value: "",
        filters: {
          airlines: {},
          price: [],
          selectedStops: {},
          airports: {},
          duration: []
        },
        isOpenAllAirlines: true,
        isOpenAirports: false,
        isOpenNumOfStops: true,
        isOpenDepartureTimes: true,
        isOpenFlightDuration: true,
      };
    },

    computed: {
      ...mapState("flights", ["sortBy", "response",'directFlights']),
      ...mapState("forAll", ["airportsByKey", "airlinesByKey"]),
      storeFilters: {
        get() {
          return {...this.$store.state.flights.filters};
        },
      },
    },

    created() {
      for (var filter in this.storeFilters) {
        if (Array.isArray(this.storeFilters[filter])) {
          this.filters[filter] = [...this.storeFilters[filter]];
        } else if (typeof this.storeFilters[filter] == "object") {
          this.filters[filter] = {...this.storeFilters[filter]};
        } else {
          this.filters[filter] = this.storeFilters[filter];
        }
      }
      this.filters.price = this.storeFilters.maxminPrices
      this.filters.duration = this.storeFilters.maxminTime
      this.createFilters()
      // this.setNewFilters(this.storeFilters)
      this.filterFares()
    },

    watch: {
      response: {
        handler(latest) {
          this.updatedFilters();
        },
        deep: true,
      },
    },

    methods: {
      ...mapMutations("flights", ["setFilters", "setPagination",'changeFilters','setStops','setAirlines','setAirports','setDirectFlight']),
      ...mapMutations('flights', {
        filterFlights:'filterFares',
        updateSelectedFilters:'updateSelectedFilters'
      }),
      ...mapMutations("flights", {
        createFilter: 'createFilters',
      }),

      // updateSelectedfilters (e) {
      //   this.$store.commit('updateSelectedfilters', e.target.value)
      // },
      setNewFilters(){

        let stops = []; // Array of selected stops
        for (var stop in this.filters.selectedStops) {
          if (this.filters.selectedStops[stop]) {
            stops.push(Number(stop));
          }
        }
        let airlines = []; // Array of selected sirlines
        for (var airline in this.filters.airlines) {
          if (this.filters.airlines[airline]) {
            airlines.push(airline);
          }
        }
        console.log(stops)
        let airports = []; // Array of selected sirlines
        for (var airport in this.filters.airports) {
          if (this.filters.airports[airport]) {
            airports.push(airport);
          }
        }
        this.changeFilters({stops:stops, airlines:airlines, airports, filters:this.storeFilters})
      },
      createFilters() {
        this.createFilter(this.response)
      },
      updatedFilters() {
        for (var filter in this.storeFilters) {
          if (Array.isArray(this.storeFilters[filter])) {
            this.filters[filter] = [...this.storeFilters[filter]];
          } else if (typeof this.storeFilters[filter] == "object") {
            this.filters[filter] = {...this.storeFilters[filter]};
          } else {
            this.filters[filter] = this.storeFilters[filter];
          }
        }
      },

      updateAirlineFilter(airline) {
        let airlines = {};
        airlines[airline] = true;
        this.$set(this.filters, "airlines", airlines);
        this.filterFares();
      },

      // testDirectFlights(stop,index){
      //   if(stop == 0 && this.directFlights == 'direct'){
      //     this.filters.selectedStops[index] = t
      //   }
      //   else {
      //     this.filters.selectedStops[index] = false
      //   }
      // },
      filterFares(value) {
        let stops = []; // Array of selected stops
        for (var stop in this.filters.selectedStops) {
          if (this.filters.selectedStops[stop]) {
            stops.push(Number(stop));
          }
        }
        let airlines = []; // Array of selected sirlines
        for (var airline in this.filters.airlines) {
          if (this.filters.airlines[airline]) {
            airlines.push(airline);
          }
        }
        let airports = []; // Array of selected sirlines
        for (var airport in this.filters.airports) {
          if (this.filters.airports[airport]) {
            airports.push(airport);
          }
        }

        // this.$store.dispatch("flights/changeFilters", {stops:stops, airlines:airlines, airports, filters:this.filters});
        this.changeFilters({stops:stops, airlines:airlines, airports, filters:this.filters})
        this.$store.dispatch("flights/filterFares");
        // this.filterFlights({stops:stops, airlines:airlines, airports, filters:this.filters})

        // // Array of filtered fares
        // let fares = this.response.OTA_AirLowFareSearchRS.PricedItineraries.PricedItinerary.filter((x) => {
        //   if (
        //     x.AirItineraryPricingInfo[0].ItinTotalFare.TotalFare.Amount >= this.filters.price[0] &&
        //     x.AirItineraryPricingInfo[0].ItinTotalFare.TotalFare.Amount <= this.filters.price[1]
        //   ) {
        //     return true;
        //   }
        // });
        //
        // // duration filters
        // fares = fares.filter((x)=>{
        //   if(
        //     x.AirItinerary.OriginDestinationOptions.OriginDestinationOption[0].ElapsedTime >= this.filters.duration[0] &&
        //     x.AirItinerary.OriginDestinationOptions.OriginDestinationOption[0].ElapsedTime <= this.filters.duration[1]
        //   ){
        //     return true
        //   }
        // })
        //
        //
        // // stops filters
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
        //
        // // airlines filters
        // if (airlines.length > 0) {
        //   fares = fares.filter((x) => {
        //     let status = false
        //     x.AirItinerary.OriginDestinationOptions.OriginDestinationOption.forEach((segment,index)=> {
        //         if (airlines.includes(segment.FlightSegment[0].OperatingAirline.Code) && status == false) {
        //           status = true
        //         }
        //     })
        //     return status
        //   });
        // }
        // if (airports.length > 0) {
        //   fares = fares.filter((x) => {
        //     for (var segments of x.segments) {
        //       for (var segment of segments) {
        //         for (var flight of segment.flights) {
        //           if (
        //             airports.includes(flight.departureLocation) ||
        //             airports.includes(flight.arrivalLocation)
        //           ) {
        //             return true;
        //           }
        //         }
        //       }
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
        // console.log(this.filters)
      },
    },
  };
</script>



