<template>
  <div class="flight-listing mt-5" @click="testing">
    <flightFilters ref="filterFares" class="pt-4"></flightFilters>
    <div class="flights-list order2">
      <div class="" style="margin-bottom: 5px">
        <b-carousel-list
          :arrow-hover="false"
          repeat
          :data="carousalAirlines"
          :items-to-show="slider"
          style="box-shadow: none"
          class="flight-sorting-slider"
        >
          <template>
            <div
              class="card"
              style="box-shadow: none"
            >
              <!--              @click="filterAirlines(list.iata)"-->
              <div class="card-image">
                <div class="airlines-box-outer" style="cursor: pointer">
                  <div class="airlines-box-inner">
                    <!--                      :src="`${$config.ASSET_URL}${list.image} `"-->
                    <img
                      style="max-width: 30px"
                    />
                    <br/>
                    <div class="text-filed">
                      <!--                      <small>{{ list.title }}</small>-->
                    </div>
                  </div>
                  <div class="airlines-box-inner">
                    <p>
                      <!--                      CAD {{ list.price }}-->
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </b-carousel-list>
      </div>
      <!-- Sorting Buttons -->
      <div class="sorting-box d-flex justify-content-between">
        <div
          class="sorting-field"
          @click="sortFares('cheap')"
          :class="{ active: sortBy === 'cheap' }"
        >
          <div class="icon-box left">
            <span class="mdi mdi-cash"></span>
          </div>
          <div class="tital left-text">
            <h6>Cheapest</h6>
            <span
            >({{filters.price[0]}}<small>{{filters.priceCurrency[0]}}</small>)</span
            >
          </div>
        </div>
        <div
          class="sorting-field"
          :class="{ active: sortBy === 'quick' }"
          @click="sortFares('quick')"
        >
          <div class="icon-box center">
            <span class="mdi mdi-airplane"></span>
          </div>
          <div class="tital center-text">
            <h6>Fastest</h6>
            <span
            >({{
                            `${filters.quickCheapPrice.price}${filters.quickCheapPrice.currency}`
                          }})</span
            >
          </div>
        </div>
        <div
          class="sorting-field"
          @click="sortFares('expensive')"
          :class="{ active: sortBy === 'expensive' }"
        >
          <div class="icon-box right">
            <span class="mdi mdi-cash"></span>
          </div>
          <div class="tital left-text">
            <h6>Expensive</h6>
            <span
            >({{filters.price[1]}}<small>{{filters.priceCurrency[1]}}</small>)</span
            >
          </div>
        </div>

        <!--        <div class="sorting-field">-->
        <!--          &lt;!&ndash;<button class="btn btn-primary" @click="showModifyModal">-->
        <!--            Change Your Flight-->
        <!--          </button> &ndash;&gt;-->
        <!--        </div>-->

      </div>
      <transition-group tag="ul"  name="list">
        <li
          class="row list-item flight-box mt-3"
          v-for="(segments, segmentsIndex) in pagination.chunks[
          pagination.current - 1
        ]"
          :key="`${segmentsIndex}`"
        >
          <div class="col-9 pr-0">
            <div
              class="flight-result-box"
              v-for="(segment, segmentIndex) in segments['AirItinerary']['OriginDestinationOptions']['OriginDestinationOption']"
              :key="`${segmentsIndex}${segmentIndex}`"
            >
              <!--            <transition name="slide-fade">-->
              <div class="center-box">
                <div class="time-section">
                  <h5 class="mb-2 mt-2 pl-1">
                <span>
                  <b v-if="params.type !== 'multi'">
                    {{
                      segmentIndex === 0 ? "Outbound Flight" : "Inbound Flight"
                    }}
                  </b>

                  <b v-else>Departure</b>
                </span>
                    -
                    <strong v-if="airportsByKey">
                      {{segment.FlightSegment[0].DepartureAirport.LocationCode}}
                    </strong>
                    to
                    <strong v-if="airportsByKey">
                      {{segment.FlightSegment[segment.FlightSegment.length-1].ArrivalAirport.LocationCode}}
                    </strong>
                  </h5>
                  <div
                    class="time-section-top"
                  >
                    <!--                  v-for="(segment, segmentIndex) in segments"-->
                    <!--                  :key="`${itineraryIndex}${segmentsIndex}${segmentIndex}`"-->
                    <input
                      class="radioButton"
                      type="radio"
                    />
                    <!--                    :value="segmentIndex"-->
                    <!--                    :id="`${itineraryIndex}${segmentsIndex}${segmentIndex}`"-->
                    <!--                    v-bind:checked="segmentIndex == 0"-->
                    <!--                    :name="`fare${pagination.current}${itineraryIndex}${segmentsIndex}`"-->
                    <label
                      class="media no_selection"
                    >
                      <!--                    :for="`${itineraryIndex}${segmentsIndex}${segmentIndex}`"-->
                      <!--                    <span class="radioLine"></span>-->
                      <!--                    <span class="radioCircle"></span>-->
                      <div class="logo-box h-100">
                        <div class="logo-section">
                          <div class="logo">
                            <img
                              style="max-width: 30px"
                              :src="require('./../assets/airline_logos/'+segment.FlightSegment[0].OperatingAirline.Code+'.png')"
                              @error="testing"
                            />
                            <div>
                              <p>
                                {{airlineName(segment.FlightSegment[0].OperatingAirline.Code)}}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="go-city">
                        <h5 v-if="airportsByKey">
                          <!--                        {{-->
                          <!--                        airportsByKey[segments[0].departureLocation] !==-->
                          <!--                        undefined-->
                          <!--                        ? airportsByKey[segments[0].departureLocation].city-->
                          <!--                        : segments[0].departureLocation-->
                          <!--                        }}-->
                          {{airportCity(segment.FlightSegment[0].DepartureAirport.LocationCode)}}
                        </h5>
                        <h6>
                          <!--                        {{ segment["departureLocation"] }} - -->
                          <!--                        {{-->
                          <!--                        segment["departureTerminal"]-->
                          <!--                        ? `T${segment["departureTerminal"]}`-->
                          <!--                        : ""-->
                          <!--                        }}-->
                          {{segment.FlightSegment[0].DepartureAirport.LocationCode}}-T{{segment.FlightSegment[0].DepartureAirport.TerminalID}}
                        </h6>
                      </div>

                      <div class="duration">
                        <div class="time">
                          <h5>
                            <!--                          {{ // segment["departureTime"] }}-->
                            {{convertFlightDate(segment.FlightSegment[0].DepartureDateTime,'time')}}
                          </h5>
                          <h6>
                            <!--                          {{ $formatDate(segments[0].departureDate) }}-->
                            {{convertFlightDate(segment.FlightSegment[0].DepartureDateTime,'date')}}
                          </h6>
                        </div>
                        <div class="stops">
                          <small>
                            stops{{segment.FlightSegment.length-1}}
                          </small>
                          <div class="dott"></div>
                          <div class="hr"></div>
                          <small>
                            {{ parseInt(segment["ElapsedTime"]/60) }}H {{segment["ElapsedTime"]%60}}M
                          </small>
                        </div>
                        <div class="time">
                          <small></small>
                          <h5>
                            <!--                                                    {{ segment["arrivalTime"] }}-->
                            {{convertFlightDate(segment.FlightSegment[segment.FlightSegment.length-1].ArrivalDateTime,'time')}}
                          </h5>
                          <h6>
                            <!--                          {{ $formatDate(segments[0].arrivalDate) }}-->
                            {{convertFlightDate(segment.FlightSegment[segment.FlightSegment.length-1].ArrivalDateTime,'date')}}
                          </h6>
                        </div>
                      </div>
                      <div class="to-city">
                        <h5 v-if="airportsByKey">
                          {{airportCity(segment.FlightSegment[segment.FlightSegment.length-1].ArrivalAirport.LocationCode)}}
                        </h5>
                        <h6>
                          {{segment.FlightSegment[segment.FlightSegment.length-1].ArrivalAirport.LocationCode}}
                          -T{{segment.FlightSegment[segment.FlightSegment.length-1].ArrivalAirport.TerminalID}}
                        </h6>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
              <!--            </transition>-->
            </div>
            <!--          </transition>-->
          </div>
          <div class="col-3">
            <div class="button-box">
              <div class="price">
                <small>{{segments.AirItineraryPricingInfo[0].ItinTotalFare.TotalFare.CurrencyCode}}</small>
                <span>
                {{segments.AirItineraryPricingInfo[0].ItinTotalFare.TotalFare.Amount}}
              </span>
                <h6>Per Person</h6>
                <div class="book-btn">
                  <button
                    class="btn btn-dark"
                    @click="selectFare(segmentsIndex)"
                  >
                    Book Flight
                    <i class="fa fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!-- v-if="segmentsIndex != 0" -->
          <div class="baggage">
            <div class="flex-option">
              <div class="icons">
                <div>
                  <span class="mdi mdi-seat-recline-normal"></span>
                  <span class="mdi mdi-video"></span>
                  <span class="mdi mdi-wifi"></span>
                  <span class="mdi mdi-power-plug mdi-rotate-90"></span>
                  <span class="mdi mdi-food-fork-drink"></span>
                </div>
              </div>
            </div>
            <!--               @click="setDetail(pagination.chunks[pagination.current-1][segmentsIndex], segmentsIndex)">-->
            <div class="flex-option"
                 @click="setDetail(
            pagination.chunks[pagination.current-1][segmentsIndex].AirItinerary.OriginDestinationOptions.OriginDestinationOption,
            segments.AirItineraryPricingInfo[0].ItinTotalFare.TotalFare,
            segments.AirItineraryPricingInfo[0].PTC_FareBreakdowns.PTC_FareBreakdown[0].PassengerFare.TPA_Extensions.BaggageInformationList.BaggageInformation
            )"
            >

              <i class="fa fa-plane"></i>
              <!--            {{itinerary.weightType}}-->
              <small>
                <a>
                  Flight Detail
                </a>
              </small>
            </div>
          </div>
        </li>
      </transition-group>
      <div class="pagination-row">
        <div class="">
          <b-pagination
            v-model="getPagination.current"
            :total-rows="getPagination.total"
            :per-page="getPagination.perPage"
            size="lg"
            pills
            @change="(page)=>setPaginate(page)"
          ></b-pagination>
        </div>
        <!-- Response Count -->
        <div v-if="pagination.chunks[pagination.current - 1]" class="right-text"
             style="text-align: center; margin-bottom: 2px">
          Showing Result
          {{ pagination.chunks[pagination.current - 1].length }} /
          {{ pagination.total }}
        </div>
        <div v-else class="right-text" style="text-align: center; margin-bottom: 2px">
          No Results to show
        </div>
      </div>
    </div>
    <!-- flight-detail-section -->
    <!-- :backdrop-variant="variant" -->
    <b-sidebar
      id="sidebar-backdrop"
      class="flight-detail-bar sidebar-width"
      :fullheight="true"
      :fullwidth="true"
      scroll="keep"
      backdrop
      left
      shadow
      title="Flight Detail"
      v-model="open"
    >
      <div class="flight-detail-fare-section">
        <flightDetailModal :flightAmount="flightAmount" :baggageinfo="baggageinfo"></flightDetailModal>
      </div>
    </b-sidebar>
    <!-- Price Changed Modal -->
    <b-modal
      id="priceChanged"
      title="Flight Detail"
      hide-footer
      :no-close-on-backdrop="true"
    >
      <div class="d-block text-center">
        <div style="background: white; padding: 15px">
          <h3>Unavailable</h3>
          <p>
            The price of fare you selected has changed <br><b style="color:#1c4c93;">{{ message }}</b
          >.<br> Are you sure you want to continue
          </p>
          <b-button
            class="mt-2"
            variant="outline-success"
            block
            @click="priceChangedOk(confirmedItinerary)"
          >Okay
          </b-button
          >
          <b-button
            class="mt-2"
            variant="outline-danger"
            block
            @click="$bvModal.hide('priceChanged')"
          >Close
          </b-button
          >
        </div>
      </div>

    </b-modal>
    <FlightsLoading
      v-if="loading"
      :loadingParams="true"
      title="We are Searching for the Best Flight Deals"
    />
  </div>

</template>


<script>
  import {mapState, mapGetters, mapMutations} from "vuex";
  // import flightDetail from "@/components/flightDetail.vue";
  import flightModifySearchParams from "@/components/flightModifySearchParams.vue";
  import flightFilters from "@/components/flightFilters.vue";
  import flightDetailModal from "@/components/flightDetailModal";
  import FlightsLoading from "@/components/FlightsLoading.vue";
  import airports from '@/assets/airports.json'

  export default {
    components: {
      // flightDetail,
      flightFilters,
      FlightsLoading,
      flightModifySearchParams,
      flightDetailModal,
    },

    data() {
      return {
        flights: {
          airportsCity: {},
          airlinesName: {},
          flightsList: [
            {
              AirItinerary: {
                OriginDestinationOptions: {
                  OriginDestinationOption: [
                    {
                      ElapsedTime: {},
                      FlightSegment: [
                        {
                          ArrivalAirport: {
                            LocationCode: '',
                            TerminalID: ''
                          },
                          ArrivalDateTime: '',
                          DepartureAirport: {
                            LocationCode: '',
                            TerminalID: ''
                          },
                          DepartureDateTime: '',
                          OperatingAirline: {
                            Code: ""
                          }
                        }
                      ]
                    }
                  ]
                },
              },
              AirItineraryPricingInfo: [
                {
                  ItinTotalFare: {
                    TotalFare: {
                      Amount: {}
                    }
                  }
                }
              ]

            },
          ],
        },
        flightAmount: 0,
        baggageinfo: undefined,
        segmentsindex: undefined,
        loading: false,
        open: false,
        flightDetail: [],
        searchResponseData: [],
        slider: 6,
        window: {
          width: 0,
        },
        message: "",
        ResponseLength: null,
        confirmedError: false,
        confirmedItinerary: null,
        priceChanged: {
          showModal: false,
        },
        detail: false,
        baggage: false,
        value: "",
        selected: "",
      };
    },

    computed: {
      // ...mapState("flights",{
      //   response:'response'
      // }),
      ...mapState("flights", [
        "sortBy",
        'newResponse',
        "filters",
        "carousalAirlines",
        "paginationLength",
      ]),
      ...mapState("forAll", [
        "airportsByKey",
        "airlinesByKey",
        "setSearchParams",
      ]),
      ...mapGetters({params: "forAll/getSearchParams"}),
      ...mapGetters({response: "flights/getResponse"}),

      getPagination() {
        return this.$store.getters['flights/getPagination']
      },
      // getPagination(){
      //   return this.$store.getters['flights/getPagination']
      // },
      pagination: {
        get() {
          return this.$store.state.flights.pagination;
        },
        set(value) {
          return this.$store.commit("flights/setPagination", value);
        },
      },
    },

    created() {
      window.addEventListener("resize", this.handleResize);
      this.handleResize();
      this.getFlights();
      this.airportData();
      // this.setPaginations()
    },

    destroyed() {
      window.removeEventListener("resize", this.handleResize);
      // localStorage.removeItem('searchResponse')
    },

    methods: {
      ...mapMutations("flights", [
        "setSortBy",
        "setDetailFare",
        "setDetailFares",
        "setFlexResponse",
        'setPagination',
      ]),
      testing() {
        // console.log(this.response)
      },
      // setPaginations(){
      //   this.setPagination(this.response.OTA_AirLowFareSearchRS.PricedItineraries.PricedItinerary)
      // },
      airportData() {
        this.flights.airportsCity = airports.airportsCity;
        this.flights.airlinesName = airports.airlines;
      },
      airportCity(iata) {
        let location = this.flights.airportsCity[iata];
        let locationCity = location.split(',')[0];
        return locationCity
      },
      airlineName(iata) {
        let location = this.flights.airlinesName[iata];
        return location
      },
      convertFlightDate(dataDate, type) {
        let date = new Date(dataDate);
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let dt = date.getDate();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        let time = hours + ':' + minutes + '' + ampm;

        if (dt < 10) {
          dt = '0' + dt;
        }
        if (month < 10) {
          month = '0' + month;
        }

        let newdate = dt + '-' + month + '-' + year;
        if (type == 'date') {
          return newdate;
        } else if (type == 'time') {
          return time;
        } else {
          return 'error issue'
        }
      },
      totalTime(flightGroup) {
        let fastestFlight = 0
        flightGroup.map(
          (value, index) => {
            fastestFlight += value.ElapsedTime
          }
        )
        return fastestFlight
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
      getFlights() {
        this.searchResponseData = JSON.parse(localStorage.getItem("searchResponse"));
        this.flights.flightsList = this.searchResponseData.OTA_AirLowFareSearchRS.PricedItineraries.PricedItinerary;
        // console.log('flightsList',this.searchResponseData)
        let fastestFlight = 0
        this.flights.flightsList.sort((a, b) => {
          if (this.totalTime(a.AirItinerary.OriginDestinationOptions.OriginDestinationOption) <
            this.totalTime(b.AirItinerary.OriginDestinationOptions.OriginDestinationOption)) {
            return -1;
          }
          if (this.totalTime(a.AirItinerary.OriginDestinationOptions.OriginDestinationOption) >
            this.totalTime(b.AirItinerary.OriginDestinationOptions.OriginDestinationOption)) {
            return 1;
          }
        });
        // fastest.
        // console.log(this.totalTime(this.flights.flightsList[0].AirItinerary.OriginDestinationOptions.OriginDestinationOption))
        // console.log('flightsList', this.flights.flightsList[0])
      },

      setPaginate(page) {
        this.$store.commit("flights/updatePaginate", page)
      },
      // // showModifyModal() {
      // //   this.$bvModal.show("modifySearchModal")
      // //   this.isModifySearch = true;
      // // },
      setDetail(detail, amount, baggageinfo) {
        let data = {
          segments: [detail],
        };
        this.setDetailFares(data);
        this.$bvModal.show("flightDetail");
        this.flightDetail = detail;
        this.open = true;
        this.baggageinfo = baggageinfo;
        this.flightAmount = amount;
      },
      // flightModify() {
      //   if (this.params.flex == true) {
      //     this.setFlexResponse(null);
      //     this.$emit("search");
      //   } else {
      //     this.$emit("search");
      //   }
      // },
      //
      // flexSeach() {
      //   let data = { ...this.params };
      //   data.flex = true;
      //   this.$store.commit("forAll/setSearchParams", data);
      //   localStorage.setItem("offerParams", JSON.stringify(data));
      //   this.$emit("search");
      // },
      //
      // filterAirlines(airline) {
      //   this.$emit("filterAirline", airline);
      // },
      //
      sortFares(sortBy) {
        // alert('clixked')
        // if (sortBy === this.sortBy) {
        //   return;
        // }
        this.setSortBy(sortBy);
        this.$store.dispatch("flights/sortFares", sortBy);
      },
      selectFare(segmentsindex) {
        // alert(segmentsindex)
        // alert(this.flights.flightsList[segmentsindex]
        //   .AirItinerary.OriginDestinationOptions.OriginDestinationOption[0].FlightSegment[0].OperatingAirline.Code)
        let data = {
          // itinerary: {"SequenceNumber":1,"AirItinerary":{"DirectionInd":"Return","OriginDestinationOptions":{"OriginDestinationOption":[{"ElapsedTime":420,"FlightSegment":[{"DepartureDateTime":"2022-02-01T20:30:00","ArrivalDateTime":"2022-02-02T08:30:00","StopQuantity":0,"FlightNumber":"856","ResBookDesigCode":"K","ElapsedTime":420,"DepartureAirport":{"LocationCode":"YYZ","TerminalID":"1","content":""},"ArrivalAirport":{"LocationCode":"LHR","TerminalID":"2","content":""},"OperatingAirline":{"Code":"AC","FlightNumber":"856","content":""},"Equipment":[{"AirEquipType":"789","content":""}],"MarketingAirline":{"Code":"AC","content":""},"MarriageGrp":"O","DepartureTimeZone":{"GMTOffset":-5},"ArrivalTimeZone":{"GMTOffset":0},"TPA_Extensions":{"eTicket":{"Ind":true},"Mileage":{"Amount":3557}}}]},{"ElapsedTime":695,"FlightSegment":[{"DepartureDateTime":"2022-02-25T09:30:00","ArrivalDateTime":"2022-02-25T12:05:00","StopQuantity":0,"FlightNumber":"901","ResBookDesigCode":"K","ElapsedTime":95,"DepartureAirport":{"LocationCode":"LHR","TerminalID":"2","content":""},"ArrivalAirport":{"LocationCode":"FRA","TerminalID":"1","content":""},"OperatingAirline":{"Code":"LH","FlightNumber":"901","content":""},"Equipment":[{"AirEquipType":"32N","content":""}],"MarketingAirline":{"Code":"LH","content":""},"MarriageGrp":"O","DepartureTimeZone":{"GMTOffset":0},"ArrivalTimeZone":{"GMTOffset":1},"TPA_Extensions":{"eTicket":{"Ind":true},"Mileage":{"Amount":408}}},{"DepartureDateTime":"2022-02-25T13:25:00","ArrivalDateTime":"2022-02-25T16:05:00","StopQuantity":0,"FlightNumber":"9105","ResBookDesigCode":"K","ElapsedTime":520,"DepartureAirport":{"LocationCode":"FRA","TerminalID":"1","content":""},"ArrivalAirport":{"LocationCode":"YYZ","TerminalID":"1","content":""},"OperatingAirline":{"Code":"LH","FlightNumber":"470","content":""},"Equipment":[{"AirEquipType":"359","content":""}],"MarketingAirline":{"Code":"AC","content":""},"DisclosureAirline":{"Code":"LH","content":""},"MarriageGrp":"O","DepartureTimeZone":{"GMTOffset":1},"ArrivalTimeZone":{"GMTOffset":-5},"TPA_Extensions":{"eTicket":{"Ind":true},"Mileage":{"Amount":3953}}}]}]}},"AirItineraryPricingInfo":[{"LastTicketDate":"2022-01-04","PricingSource":"ADVJR1","PricingSubSource":"MIP","FareReturned":true,"ItinTotalFare":{"BaseFare":{"Amount":1,"CurrencyCode":"CAD","DecimalPlaces":2},"FareConstruction":{"Amount":0.78,"CurrencyCode":"NUC","DecimalPlaces":2},"EquivFare":{"Amount":1,"CurrencyCode":"BHD","DecimalPlaces":3},"Taxes":{"Tax":[{"TaxCode":"TOTALTAX","Amount":219.9,"CurrencyCode":"BHD","DecimalPlaces":3,"content":""}]},"TotalFare":{"Amount":220.9,"CurrencyCode":"BHD","DecimalPlaces":3}},"PTC_FareBreakdowns":{"PTC_FareBreakdown":[{"PassengerTypeQuantity":{"Code":"ADT","Quantity":1},"FareBasisCodes":{"FareBasisCode":[{"BookingCode":"K","AvailabilityBreak":true,"DepartureAirportCode":"YYZ","ArrivalAirportCode":"LHR","FareComponentBeginAirport":"YYZ","FareComponentEndAirport":"LHR","FareComponentDirectionality":"FROM","FareComponentVendorCode":"ATP","GovCarrier":"AC","content":"KLA73LGT"},{"BookingCode":"K","AvailabilityBreak":true,"DepartureAirportCode":"LHR","ArrivalAirportCode":"FRA","FareComponentBeginAirport":"LHR","FareComponentEndAirport":"YYZ","FareComponentDirectionality":"TO","FareComponentVendorCode":"ATP","GovCarrier":"AC","content":"KLA73LGT"},{"BookingCode":"K","AvailabilityBreak":true,"DepartureAirportCode":"FRA","ArrivalAirportCode":"YYZ","GovCarrier":"AC","content":"KLA73LGT"}]},"PassengerFare":{"BaseFare":{"Amount":1,"CurrencyCode":"CAD"},"FareConstruction":{"Amount":0.78,"CurrencyCode":"NUC","DecimalPlaces":2},"EquivFare":{"Amount":1,"CurrencyCode":"BHD","DecimalPlaces":3},"Taxes":{"Tax":[{"TaxCode":"YQI","Amount":69.9,"CurrencyCode":"BHD","DecimalPlaces":3,"content":""},{"TaxCode":"YQI","Amount":69.9,"CurrencyCode":"BHD","DecimalPlaces":3,"content":""},{"TaxCode":"CA4","CountryCode":"CA","Amount":7.7,"CurrencyCode":"BHD","DecimalPlaces":3,"content":""},{"TaxCode":"RC2","CountryCode":"CA","Amount":1.2,"CurrencyCode":"BHD","DecimalPlaces":3,"content":""},{"TaxCode":"SQ","CountryCode":"CA","Amount":8.9,"CurrencyCode":"BHD","DecimalPlaces":3,"content":""},{"TaxCode":"RA2","CountryCode":"DE","Amount":9.5,"CurrencyCode":"BHD","DecimalPlaces":3,"content":""},{"TaxCode":"GB","CountryCode":"GB","Amount":41.6,"CurrencyCode":"BHD","DecimalPlaces":3,"content":""},{"TaxCode":"UB","CountryCode":"GB","Amount":11.2,"CurrencyCode":"BHD","DecimalPlaces":3,"content":""}],"TaxSummary":[{"TaxCode":"YQI","Amount":139.8,"CurrencyCode":"BHD","DecimalPlaces":3,"content":""},{"TaxCode":"CA4","CountryCode":"CA","Amount":7.7,"CurrencyCode":"BHD","DecimalPlaces":3,"content":""},{"TaxCode":"SQ","CountryCode":"CA","Amount":8.9,"CurrencyCode":"BHD","DecimalPlaces":3,"content":""},{"TaxCode":"RC2","CountryCode":"CA","Amount":1.2,"CurrencyCode":"BHD","DecimalPlaces":3,"content":""},{"TaxCode":"GB","CountryCode":"GB","Amount":41.6,"CurrencyCode":"BHD","DecimalPlaces":3,"content":""},{"TaxCode":"UB","CountryCode":"GB","Amount":11.2,"CurrencyCode":"BHD","DecimalPlaces":3,"content":""},{"TaxCode":"RA2","CountryCode":"DE","Amount":9.5,"CurrencyCode":"BHD","DecimalPlaces":3,"content":""}],"TotalTax":{"Amount":219.9,"CurrencyCode":"BHD","DecimalPlaces":3}},"TotalFare":{"Amount":220.9,"CurrencyCode":"BHD"},"PenaltiesInfo":{"Penalty":[{"Type":"Exchange","Applicability":"Before","Changeable":true,"Amount":0,"CurrencyCode":"BHD","DecimalPlaces":3},{"Type":"Exchange","Applicability":"After","Changeable":true,"Amount":0,"CurrencyCode":"BHD","DecimalPlaces":3},{"Type":"Refund","Applicability":"Before","Refundable":false},{"Type":"Refund","Applicability":"After","Refundable":false}]},"TPA_Extensions":{"Messages":{"Message":[{"AirlineCode":"AC","Type":"N","FailCode":0,"Info":"NONREF\/NOCHNG"},{"Type":"W","FailCode":0,"Info":"VALIDATING CARRIER - AC"},{"Type":"W","FailCode":0,"Info":"CAT 15 SALES RESTRICTIONS FREE TEXT FOUND - VERIFY RULES"}]},"BaggageInformationList":{"BaggageInformation":[{"ProvisionType":"A","AirlineCode":"AC","Segment":[{"Id":0}],"Allowance":[{"Pieces":0}]},{"ProvisionType":"A","AirlineCode":"AC","Segment":[{"Id":1},{"Id":2}],"Allowance":[{"Pieces":0}]}]}}},"Endorsements":{"NonRefundableIndicator":true},"TPA_Extensions":{"FareCalcLine":{"Info":"YTO AC LON0.39LH X\/FRA AC YTO0.39NUC0.78END ROE1.273398"}},"FareInfos":{"FareInfo":[{"FareReference":"K","TPA_Extensions":{"SeatsRemaining":{"Number":9,"BelowMin":false},"Cabin":{"Cabin":"Y"},"Meal":{"Code":"MB"}}},{"FareReference":"K","TPA_Extensions":{"SeatsRemaining":{"Number":9,"BelowMin":false},"Cabin":{"Cabin":"Y"},"Meal":{"Code":"RG"}}},{"FareReference":"K","TPA_Extensions":{"SeatsRemaining":{"Number":4,"BelowMin":false},"Cabin":{"Cabin":"Y"},"Meal":{"Code":"RM"}}}]}}]},"FareInfos":{"FareInfo":[{"FareReference":"K","TPA_Extensions":{"SeatsRemaining":{"Number":9,"BelowMin":false},"Cabin":{"Cabin":"Y"},"Meal":{"Code":"MB"}}},{"FareReference":"K","TPA_Extensions":{"SeatsRemaining":{"Number":9,"BelowMin":false},"Cabin":{"Cabin":"Y"},"Meal":{"Code":"RG"}}},{"FareReference":"K","TPA_Extensions":{"SeatsRemaining":{"Number":4,"BelowMin":false},"Cabin":{"Cabin":"Y"},"Meal":{"Code":"RM"}}}]},"TPA_Extensions":{"DivideInParty":{"Indicator":false},"ValidatingCarrier":[{"SettlementMethod":"BSP","NewVcxProcess":true,"Default":{"Code":"AC"}}]}}],"TicketingInfo":{"TicketType":"eTicket","ValidInterline":"Yes"},"TPA_Extensions":{"ValidatingCarrier":{"Code":"AC"},"DiversitySwapper":{"WeighedPriceAmount":369.686}}}
          itinerary: this.pagination.chunks[
          this.pagination.current - 1
            ][segmentsindex],
          origion_code: this.params.locations.originLocationCode.code,
          distination_code: this.params.locations.destinationLocationCode.code,
          depart_date: this.convertApiDate(this.params.departureDate),
          return_date: this.convertApiDate(this.params.returnDate),
          adult: this.params.adults,
          child: this.params.children,
          infant: this.params.infants,
          airline: this.flights.flightsList[segmentsindex]
            .AirItinerary.OriginDestinationOptions.OriginDestinationOption[0].FlightSegment[0].OperatingAirline.Code,
          trip: this.reformateType(this.params.type),
          gds: 'SABRE',
        }
        this.loading = true;

        this.$api({
          method: "post",
          url: "flight_detail_api",
          data: data,
        })
          .then(({data}) => {
            // if (itinerary.markups) {
            //   data["markups"] = itinerary.markups;
            // }
            // console.log(data)
            if (this.pagination.chunks[
            this.pagination.current - 1
              ][segmentsindex].AirItineraryPricingInfo[0].ItinTotalFare.TotalFare.Amount !== data.itinerary.AirItineraryPricingInfo[0].ItinTotalFare.TotalFare.Amount) {
              this.confirmedItinerary = data;
              this.$bvModal.show("priceChanged");
              this.priceChanged.message = `The price of fare you selected has changed from . Are you sure you want to continue?`;
              this.message = `from ${this.response.currency} ${itinerary.formatedTotalAmount} to ${data.currency} ${data.totalAmount}`;
            } else {
              this.priceChangedOk(data, this.pagination.chunks[
              this.pagination.current - 1
                ][segmentsindex].AirItineraryPricingInfo);
            }
          })
          .catch((err) => {
            console.log(err);
            console.log(err.response);
            this.confirmedError = true;
            let data = err.response.data;
            if (data.messages) {
              for (var message of data.messages) {
                this.$bvToast.toast(
                  `Code: ${message.code}, Message ${message.text}`,
                  {
                    title: "GALA TRAVEL",
                    variant: "danger",
                    solid: true,
                    toaster: "b-toaster-top-center",
                  }
                );
              }
            }
          })
          .finally(() => {
            setTimeout(() => {
              this.$emit("fareConfirmed");
              this.loading = false;
            }, 2000);
          });
      },
      // selectFare(itineraryIndex) {
      //   this.$emit("confirmingFare");
      //
      //   let current = this.pagination.current;
      //   let itinerary = this.pagination.chunks[current - 1][itineraryIndex];
      //   let data = {
      //     passengers: itinerary.passengers,
      //     destinations: [],
      //   };
      //   if (itinerary.markups) {
      //     data["markups"] = itinerary.markups;
      //   }
      //   for (var index in itinerary.segments) {
      //     let segment = document.querySelector(
      //       `input[name="fare${current}${itineraryIndex}${index}"]:checked`
      //     ).value;
      //     segment = itinerary.segments[index][segment];
      //     data.destinations.push(segment);
      //   }
      //   this.$api({
      //     method: "post",
      //     url: "confirmation",
      //     data,
      //   })
      //     .then(({ data }) => {
      //       if (itinerary.markups) {
      //         data["markups"] = itinerary.markups;
      //       }
      //       if (itinerary.formatedTotalAmount !== data.totalAmount) {
      //         this.confirmedItinerary = data;
      //         this.$bvModal.show("priceChanged");
      //         // this.priceChanged.message = `The price of fare you selected has changed from ${this.response.currency} ${itinerary.formatedTotalAmount} to ${data.currency} ${data.totalAmount}. Are you sure you want to continue?`;
      //         this.message = `from ${this.response.currency} ${itinerary.formatedTotalAmount} to ${data.currency} ${data.totalAmount}`;
      //       } else {
      //         this.priceChangedOk(data);
      //       }
      //     })
      //     .catch((err) => {
      //       this.confirmedError = true;
      //       let data = err.response.data;
      //       if (data.messages) {
      //         for (var message of data.messages) {
      //           this.$bvToast.toast(
      //             `Code: ${message.code}, Message ${message.text}`,
      //             {
      //               title: "Aatourism",
      //               variant: "danger",
      //               solid: true,
      //               toaster: "b-toaster-top-center",
      //             }
      //           );
      //         }
      //       }
      //       console.log(err);
      //       console.log(err.response);
      //     })
      //     .finally(() => {
      //       setTimeout(() => {
      //         this.$emit("fareConfirmed");
      //       }, 2000);
      //     });
      // },

//     function compare( a, b ) {
//   if ( a.last_nom < b.last_nom ){
//     return -1;
//   }
//   if ( a.last_nom > b.last_nom ){
//     return 1;
//   }
//   return 0;
// }

      // data.sort( compare );


      detailFare(segment) {
        // let current = this.pagination.current;
        // let itinerary = this.pagination.chunks[current - 1][itineraryIndex];
        let data = {
          segments: [segment],
        };
        // for (var index in itinerary.segments) {
        //   let segment = document.querySelector(
        //     `input[name="fare${current}${itineraryIndex}${index}"]:checked`
        //   ).value;
        //   segment = itinerary.segments[index][segment];
        //   data.segments.push(segment);
        // }
        this.setDetailFare(data);
        this.$bvModal.show("flightDetail");
      },
      //
      // hideDetailModal() {
      //   this.setDetailFare(null);
      //   this.detail = false;
      // },
      //
      // setBaggageFare(itineraryIndex) {
      //   let current = this.pagination.current;
      //   let itinerary = this.pagination.chunks[current - 1][itineraryIndex];
      //   let data = {
      //     segments: [],
      //   };
      //   for (var index in itinerary.segments) {
      //     let segment = document.querySelector(
      //       `input[name="fare${current}${itineraryIndex}${index}"]:checked`
      //     ).value;
      //     segment = itinerary.segments[index][segment];
      //     data.segments.push(segment);
      //   }
      //   this.setDetailFare(data);
      //   this.baggage = true;
      // },
      //
      // hideBaggageModal() {
      //   this.setDetailFare(null);
      //   this.baggage = false;
      // },
      //
      priceChangedOk(confirmedItinerary, segmentsIndex) {
        if (process.env.NODE_ENV != "development" && process.env.CACHE == "true") {
          localStorage.setItem(
            "confirmedItinerary",
            JSON.stringify(confirmedItinerary)
          );
        }
        this.$store.commit("flights/setConfirmedItinerary", {value: confirmedItinerary, index: segmentsIndex});
        this.setDetailFare(confirmedItinerary);
        this.$router.push({name: "flightDetail"});
      },
      //
      handleResize() {
        this.window.width = window.innerWidth;
        if (this.window.width < 500) {
          this.slider = 1;
        } else if (this.window.width > 500 && this.window.width <= 850) {
          this.slider = 2;
        } else if (this.window.width > 850 && this.window.width <= 1000) {
          this.slider = 3;
        } else {
          this.slider = 6;
        }
      },
    },
  };
</script>

<style scoped>
  .sorting-box {
    background: none;
  }

  .sorting-box .sorting-field .tital {
    background: white;
  }

  .sorting-box .sorting-field {
    width: 35% !important;
  }

  .sorting-box .sorting-field-btns {
    width: 40% !important;
  }

  @media (max-width: 1250px) {
    .sorting-box {
      flex-direction: column !important;
    }

    .sorting-box .sorting-field {
      width: 100% !important;
      margin-bottom: 5px;
    }

    .sorting-box .sorting-field-btns {
      width: 100% !important;
      margin-bottom: 5px;
    }
  }

  /* list transitions */
  .list-move {
    transition: transform 1s;
  }

  .list-item {
    margin-right: 10px;
  }

  .list-item:hover {
    /*background-color: wheat;*/
  }

  .list-enter-active, .list-leave-active {
    transition: all 300ms;
  }

  .list-enter, .list-leave-to /* .list-leave-active for <2.1.8 */
  {
    opacity: 0;
    transform: translateY(30px);
  }
</style>
