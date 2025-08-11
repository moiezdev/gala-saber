<template>
  <div class="container-fluid flight-list-body">
    <div class="height-38"></div>
    <div class="flights-page">
      <div class="flights-heading">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
          <path class="elementor-shape-fill" opacity="0.33" d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"></path>
          <path class="elementor-shape-fill" opacity="0.66" d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"></path>
          <path class="elementor-shape-fill" d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"></path>
        </svg>
        <div class="container pb-3 pt-1" v-if="!notFoundError">
          <div class="flights-modify-section">
            <div class="left">
              <div class="flight-top-section">
                <h2 v-if="params && params.type !== 'multi'">
                  <span>
                    {{ `${params["locations"]["originLocationCode"]["city"]}` }}
                    <span class="mdi mdi-airplane mdi-rotate-90"></span>
                    {{
                      `${params["locations"]["destinationLocationCode"]["city"]}`
                    }}
                  </span>
                </h2>
                <h2 v-else>
                  <span>
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
                  </span>
                </h2>
              </div>
              <h5 v-if="params && params.type !== 'multi'">
                {{
                ` Travelling ${params["departureDate"].getDate()}/${$months(
                params["departureDate"].getMonth()
                )}/${params["departureDate"].getFullYear()}`
                }}
                {{
                params["returnDate"]
                ? `to ${params["returnDate"].getDate()}/${$months(
                params["returnDate"].getMonth()
                )}/${params["returnDate"].getFullYear()}`
                : ""
                }}
              </h5>
              <h5 v-else>
                <span
                  v-for="(destination, index) in params.destinations"
                  :key="index"
                >
                  <template
                    v-if="
                      destination['locations']['originLocationCode'] !==
                      undefined
                    "
                  >{{
                      `Travelling ${destination[
                        "departureDate"
                      ].getDate()}/${$months(
                        destination["departureDate"].getMonth()
                      )}/${destination["departureDate"].getFullYear()}`
                    }}
                    {{
                      destination["returnDate"]
                        ? `to ${destination["returnDate"].getDate()}/${$months(
                            destination["returnDate"].getMonth()
                          )}/${destination["returnDate"].getFullYear()}`
                        : ""
                    }}
                    /
                  </template>
                </span>
              </h5>
            </div>
            <div>
              <div class="right">
                <flight-modify-search-params></flight-modify-search-params>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container pt-3 pb-0">
        <div class="flight-listing your-flight-outer">
          <div class="filter2">
            <div class="your-flight">
              <img src="../static/plane-select.png" alt/>
              <br/>
              <h2>Your Flight</h2>
              <!--              <span v-if="confirmedItinerary">-->
              <!--                <span-->
              <!--                  v-for="(flight, index) in confirmedItinerary.segments"-->
              <!--                  :key="index"-->
              <!--                >-->
              <!--                </span>-->
              <!--              </span>-->
            </div>
          </div>
          <div class="flights-list">
            <div
              class="flight-box mb-2"

            >

              <div class="flight-result-box mt-0"
                   v-for="(segment, segmentIndex) in confirmedItinerary"
                   :key="`${segmentIndex}`">

                <!--                <div class="center-box">-->
                <!--                  <div class="time-section">-->
                <!--                    <h3 class="mb-2 mt-2 ">-->
                <!--                      <b v-if="params.type !== 'multi'">{{-->
                <!--                        segmentIndex === 0-->
                <!--                        ? "Outbound Flight"-->
                <!--                        : "Inbound Flight"-->
                <!--                        }}</b>-->
                <!--                    </h3>-->

                <!--                    <div class="time-section-top">-->
                <!--                      <div class="logo-box">-->
                <!--                        <div class="logo-section">-->
                <!--                          <div class="logo pt-3">-->
                <!--                            <img-->
                <!--                              :src="require('./../assets/airline_logos/'+segment.FlightSegment[0].OperatingAirline.Code+'.png')"-->
                <!--                              style="max-width: 30px;"-->
                <!--                            />-->
                <!--                            <div>-->
                <!--                              <p>-->
                <!--                                {{airlineName(segment.FlightSegment[0].OperatingAirline.Code)}}-->
                <!--                              </p>-->
                <!--                            </div>-->
                <!--                          </div>-->
                <!--                        </div>-->
                <!--                      </div>-->
                <!--                      <div class="go-city">-->

                <!--                        <h5>-->
                <!--                          {{-->
                <!--                          airportsByKey[segment.departureLocation] !==-->
                <!--                          undefined-->
                <!--                          ? airportsByKey[segment.departureLocation].city-->
                <!--                          : ""-->
                <!--                          }}-->
                <!--                        </h5>-->
                <!--                        <h6>-->
                <!--                          {{ segment["departureLocation"] }} - -->
                <!--                          {{-->
                <!--                          segment["departureTerminal"]-->
                <!--                          ? `T${segment["departureTerminal"]}`-->
                <!--                          : ""-->
                <!--                          }}-->
                <!--                        </h6>-->
                <!--                      </div>-->
                <!--                      <div class="duration">-->
                <!--                        <div class="time">-->
                <!--                          <h5>-->
                <!--                            {{ segment["departureTime"] }}-->
                <!--                          </h5>-->
                <!--                          <h6>-->
                <!--                            {{ segment["departureDate"] }}-->
                <!--                          </h6>-->
                <!--                        </div>-->
                <!--                        <div class="stops">-->
                <!--                          <small>{{-->
                <!--                            segment.numberOfStops > 0-->
                <!--                            ? `${segment.numberOfStops} STOP`-->
                <!--                            : "Non Stop"-->
                <!--                            }}</small>-->
                <!--                          <div class="dott"></div>-->
                <!--                          <div class="hr"></div>-->
                <!--                          <small>{{ segment["duration"] }}</small>-->
                <!--                        </div>-->
                <!--                        <div class="time">-->
                <!--                          <h5>{{ segment["arrivalTime"] }}</h5>-->
                <!--                          <h6>{{ segment["arrivalDate"] }}</h6>-->
                <!--                        </div>-->
                <!--                      </div>-->
                <!--                      <div class="to-city">-->
                <!--                        <h5>-->
                <!--                          {{-->
                <!--                          airportsByKey[segment.arrivalLocation] !== undefined-->
                <!--                          ? airportsByKey[segment.arrivalLocation].city-->
                <!--                          : ""-->
                <!--                          }}-->
                <!--                        </h5>-->

                <!--                        <h6>-->
                <!--                          {{ segment["arrivalLocation"] }} - -->
                <!--                          {{-->
                <!--                          segment["arrivalTerminal"]-->
                <!--                          ? `T${segment["arrivalTerminal"]}`-->
                <!--                          : ""-->
                <!--                          }}-->
                <!--                        </h6>-->
                <!--                      </div>-->
                <!--                    </div>-->
                <!--                  </div>-->
                <!--                </div>-->

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
                        <!--                    {{-->
                        <!--                    airportsByKey[segments[0].departureLocation] !== undefined-->
                        <!--                    ? airportsByKey[segments[0].departureLocation].city-->
                        <!--                    : segments[0].departureLocation-->
                        <!--                    }}-->
                        <!--                    departureLocation].city-->
                        {{segment.FlightSegment[0].DepartureAirport.LocationCode}}
                      </strong>
                      to
                      <strong v-if="airportsByKey">
                        <!--                    {{-->
                        <!--                    airportsByKey[segments[0].arrivalLocation] !== undefined-->
                        <!--                    ? airportsByKey[segments[0].arrivalLocation].city-->
                        <!--                    : segments[0].arrivalLocation-->
                        <!--                    }}-->
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
                <div class="baggage detail-baggage" v-if="segmentIndex == confirmedItinerary.length -1">

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
                  <div class="flex-option"
                       @click="setDetail(confirmedItinerary,segmentsPricing[0].ItinTotalFare.TotalFare)"
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
              </div>
            </div>
          </div>
        </div>
        <!-- <flightDetail></flightDetail> -->
      </div>
      <div class="container pt-3 pb-0" @click="testing()">
        <div class="flight-listing your-flight-outer">
          <div class="filter2">
            <div
              class="fare-summ"
            >
              <div class="lable">
                <h4>Fare Summary</h4>
              </div>
              <div class="price-section"
                   v-for="(price, key, index) in segmentsPricing[0].PTC_FareBreakdowns.PTC_FareBreakdown"
                   :key="index"
              >
                <div>
                  <b>{{convertPassengerType( price.PassengerTypeQuantity.Code) }} :{{
                    price.PassengerTypeQuantity.Quantity }}</b>

                </div>
                <div>
                  <span
                  >{{ `${price.PassengerFare.TotalFare.Amount}` }}<small>  {{price.PassengerFare.TotalFare.CurrencyCode}}</small></span
                  >
                </div>
              </div>
              <div class="price-section">
                <div>
                  <b>Fare</b>
                </div>
                <div>
                  <span>{{ segmentsPricing[0].ItinTotalFare.BaseFare.Amount }} <small>{{segmentsPricing[0].ItinTotalFare.BaseFare.CurrencyCode}}</small> </span>
                </div>
              </div>
              <div class="price-section">
                <div>
                  <b>Taxes & Fees</b>
                </div>
                <div>
                  <span>{{ `${segmentsPricing[0].ItinTotalFare.Taxes.Tax[0].Amount}` }} <small>{{ `${segmentsPricing[0].ItinTotalFare.Taxes.Tax[0].CurrencyCode}` }}</small></span>
                </div>
              </div>
              <div class="total">
                <div class="price-section">
                  <div>
                    <b>GRAND TOTAL</b>
                  </div>
                  <div>
                    <span>
                      {{ ` ${segmentsPricing[0].ItinTotalFare.TotalFare.Amount}` }}<small>{{ `${segmentsPricing[0].ItinTotalFare.TotalFare.CurrencyCode}` }}</small
                    ></span
                    >
                  </div>
                </div>
              </div>
              <div class="luggage">
                <div class="price-section">
                  <div>
                    <button
                      class="btn btn-primary"
                      @click="fareOpen = true"
                    >
                      Fare Rules
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--
          <div class="filter2">
            <div class="your-flight">
              <img src="../static/passinger-icon.png" alt />
              <br />
              <h2>Your details</h2>
              <h6>Enter passenger details</h6>
            </div>
          </div>
          -->
          <div class="flights-list">
            <div class="flight-box mb-2">
              <div class="Passenger-info mt-0">
                <div class="content-section">
                  <div class="duble-check">
                    <div class="img">
                      <img src="../static/passport.png" alt/>
                    </div>
                    <div class="text-section">
                      <h5>Double check your personal details</h5>
                      <h6>
                        If the details are not correct, the passenger might be
                        denied boarding. Often you will then have to
                        <span>buy a new (more expensive) ticket</span> or
                        <span>pay extra</span> to make changes.
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <!-- below passenges form -->
              <div>
                <travellerDetail></travellerDetail>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <b-sidebar
      id="fareRules"
      class="flight-detail-bar sidebar-width"
      :fullheight="true"
      :fullwidth="true"
      scroll="keep"
      backdrop
      left
      shadow
      title="Fare Rules"
      v-model="fareOpen"
    >
      <div class="flight-detail-fare-section">
        <div class="modify-modal">
          <!-- <a
            class="delete modal-close-btn"
            @click="$bvModal.hide('fareRules')"
          ></a> -->
          <div class="fareRule-section"
            style="background: white; padding: 15px; padding-bottom: 80px"
          >
            <div v-for="(person, personIndex) in segmentsPricing[0].PTC_FareBreakdowns.PTC_FareBreakdown">
              <h4 class="strong"><b>{{personIndex + 1}} : {{convertPassengerType(person.PassengerTypeQuantity.Code)}}</b></h4>
              <div class="pl-2">
              <h4 class="mt-2"><b>Exchange :</b></h4>
              <tr class="" v-if="person.PassengerFare.PenaltiesInfo != null">
                <td class="pl-2 pr-1">Before</td>
                <td>:
                {{
                person.PassengerFare.PenaltiesInfo.Penalty.find((x)=>{
                return x.Type == "Exchange" && x.Applicability == 'Before'
                }).Changeable ?
                person.PassengerFare.PenaltiesInfo.Penalty.find((x)=>{
                return x.Type == "Exchange" && x.Applicability == 'Before'
                }).Amount +
                person.PassengerFare.PenaltiesInfo.Penalty.find((x)=>{
                return x.Type == "Exchange" && x.Applicability == 'Before'
                }).CurrencyCode:'No-Exchange'
                }}
                </td>
              </tr>
              <tr class="pl-2" v-if="person.PassengerFare.PenaltiesInfo != null">
                <td class="pl-2 pr-1">After</td>
                <td>:
                {{
                person.PassengerFare.PenaltiesInfo.Penalty.find((x)=>{
                return x.Type == "Exchange" && x.Applicability == 'After'
                }).Changeable ?
                person.PassengerFare.PenaltiesInfo.Penalty.find((x)=>{
                return x.Type == "Exchange" && x.Applicability == 'After'
                }).Amount +
                person.PassengerFare.PenaltiesInfo.Penalty.find((x)=>{
                return x.Type == "Exchange" && x.Applicability == 'After'
                }).CurrencyCode:'No-Exchange'
                }}</td>
              </tr>
              </div>
              <div class="pl-2">
              <h4 class="mt-2"><b>Refund :</b></h4>
              <tr class="pl-2" v-if="person.PassengerFare.PenaltiesInfo != null">
                <td class="pl-2 pr-1">Before </td>
                <td>:
                {{
                person.PassengerFare.PenaltiesInfo.Penalty.find((x)=>{
                return x.Type == "Refund" && x.Applicability == 'Before'
                }).Refundable? 'Refundable':"Non Refundable"
                }}</td>
              </tr>
              <tr class="pl-2" v-if="person.PassengerFare.PenaltiesInfo != null">
                <td class="pl-2 pr-1">After</td>
                <td>:
                {{
                person.PassengerFare.PenaltiesInfo.Penalty.find((x)=>{
                return x.Type == "Refund" && x.Applicability == 'After'
                }).Refundable? 'Refundable':"Non Refundable"
                }}</td>
              </tr>
              </div>
            </div>
          </div>
        </div>
      </div>
    </b-sidebar>
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
        <flightDetailModal :flightAmount="flightAmount"></flightDetailModal>
      </div>
    </b-sidebar>
  </div>
</template>
<script>
  import {mapState, mapGetters, mapMutations} from "vuex";
  import flightDetail from "@/components/flightDetail.vue";
  import flightModifySearchParams from "@/components/flightModifySearchParams.vue";
  import travellerDetail from "@/components/travellerDetail.vue";
  import airports from '@/assets/airports.json'
  import flightDetailModal from "~/components/flightDetailModal";

  export default {
    auth: false,

    components: {
      flightDetail,
      flightModifySearchParams,
      travellerDetail,
      flightDetailModal,
    },

    data() {
      return {
        fareOpen: false,
        flightAmount: {},
        confirmedItinerary: undefined,
        selectedFlights: null,
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
        step: null,
        screenshot: "",
        loading: false,
        notFoundError: false,
        rules: {
          showModal: false,
          rules: null,
        },
        open: false,
      };
    },

    computed: {
      ...mapState("forAll", [
        "airlinesByKey",
        "airportsByKey",
        "setLoggedIn",
        "meals"]),
      ...mapState("flights", [
        "bookingData"]),
      ...mapState("flights", {
        confirmedItineraries: 'confirmedItinerary',
        segmentsPricing: 'segmentsPricing',
      }),
      ...mapState("flights", {responseFlights: 'oldResponse'}),
      ...mapGetters({params: "forAll/getSearchParams"}),
    },

    created() {
      if (this.pnrGenerated) {
        return this.$router.push({name: "index"});
      }
      this.airportData();
      if (process.env.NODE_ENV != "production" && process.env.CACHE == "true") {
        let confirmation = JSON.parse(localStorage.getItem("confirmedItinerary"));
        this.$store.commit("flights/setConfirmedItinerary", confirmation);
        setTimeout(() => {
          this.$store.commit("flights/setDetailFare", confirmation);
        }, 2000);
      }
      if (!this.confirmedItineraries) {
        return this.redirect();
      }
      this.getFlights();
      this.confirmedItinerary = this.confirmedItineraries.itinerary.AirItinerary.OriginDestinationOptions.OriginDestinationOption

      // console.log(JSON.parse(this.confirmedItineraries.itinerary))
    },

    methods: {
      ...mapMutations("flights", ["setBookingData",
        "setDetailFares"]),
      testing() {
        // console.log(this.confirmedItinerary)
        // console.log(this.segmentsPricing)
        // console.log(this.responseFlights)
      },
      convertPassengerType(type) {
        if (type == 'ADT') {
          return 'adult'
        } else if (type == 'CNN') {
          return 'child'
        } else if (type == 'INF') {
          return 'infant'
        }
      },
      setDetail(detail, amount) {
        let data = {
          segments: [detail],
        };
        this.setDetailFares(data);
        this.$bvModal.show("flightDetail");
        // this.flightDetail = detail;
        this.open = true;
        // this.segmentsindex = segmentsindex;
        this.flightAmount = amount;
      },

      convertPassengerType(type) {
        if (type == 'ADT') {
          return 'Adult'
        } else if (type == 'CNN') {
          return 'Child'
        } else if (type == 'INF') {
          return 'Infant'
        }
      },
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
      getFlights() {
        this.searchResponseData = JSON.parse(localStorage.getItem("searchResponse"));
        this.flights.flightsList = this.searchResponseData.OTA_AirLowFareSearchRS.PricedItineraries.PricedItinerary;
        console.log('flightsList', this.flights.flightsList)
        let fastestFlight = 0

        let fastest = this.flights.flightsList
        fastest.sort((a, b) => {
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
      redirect() {
        return this.$router.push({name: "flights"});
      },
    },
  };
</script>

<style scoped>
  .b-form-group {
    width: 100%;
  }
  .fareRule-section h4.strong{
    color: #1c4c93;
    font-size: 19px;
  }
</style>
