<template>
  <div @click="testing">
    <div class="button-box">
      <div class="price" v-if="flightAmount">
        <small>{{flightAmount.CurrencyCode}}</small>
<!--        <small>{{detailFares.segments[0].AirItineraryPricingInfo[0].ItinTotalFare.TotalFare.CurrencyCode}}</small>-->
        <span @click="testing">{{ flightAmount.Amount }}</span>
      </div>
    </div>
    <div v-if="detailFares">
      <div
        v-for="(segment, segmentIndex) in detailFares.segments[0]"
        :key="segmentIndex"
      >

        <!--      <div class="outbound">-->
        <!--        <div class="icon">-->
        <!--          <span class="mdi mdi-airplane mdi-rotate-90"></span>-->
        <!--        </div>-->
        <!--        <div class="text">-->
        <!--        <span v-if="params">-->
        <!--          <h5>-->
        <!--            {{-->
        <!--            segmentsIndex === 0 ? "Outbound, " : "Inbound, "-->
        <!--            }}-->
        <!--          </h5>-->
        <!--          <span>-->
        <!--            {{-->
        <!--            `${$formatDate(this.detailFare.segments[0].departureDate)}`-->
        <!--            }}-->
        <!--          </span>-->
        <!--        </span>-->
        <!--        <span v-else>-->
        <!--        </span>-->
        <!--        </div>-->
        <!--      </div>-->
        <!--      segmentIndex+1==detailFare.segments.length-->
        <!--      &&flightIndex+1==segment.flights.length-->

        <div class="outbound mb-6">
          <div class="icon">
            <span class="mdi mdi-airplane mdi-rotate-90"></span>
          </div>
          <div class="text">
              <span v-if="params">
                <h5>
                  {{
                    segmentIndex === 0 ? "Outbound " : "Inbound "
                  }}
                </h5>
              </span>
            <span>
              {{segment.FlightSegment[0].DepartureAirport.LocationCode}}-{{segment.FlightSegment[segment.FlightSegment.length-1].ArrivalAirport.LocationCode}}
            </span>
            <!--        <span v-else>-->
            <!--        </span>-->
          </div>
        </div>
        <div
          v-for="(flight, flightIndex) in segment.FlightSegment"
          :key="`${segmentIndex}${flightIndex}`"
        >
          <div class="flight-full-summary">

            <div class="time">
              <div :style="flightIndex == 0?'margin-top: -15px;':''">
                <strong>{{ convertFlightDate(flight.DepartureDateTime,'time') }}</strong>
                <h6>{{ convertFlightDate(flight.DepartureDateTime,'date') }},</h6>
              </div>
              <div :style="flightIndex+1 == segment.FlightSegment.length?'margin-bottom : -21px;':''">
                <strong>{{ convertFlightDate(flight.ArrivalDateTime,'time')
                  }}</strong>
                <h6>{{ convertFlightDate(flight.ArrivalDateTime,'date') }}</h6>
              </div>
              <!--          <div>-->
              <!--            <strong>{{ segment.arrivalTime }}</strong>-->
              <!--            <h6>{{ segment.arrivalDate }}</h6>-->
              <!--          </div>-->
            </div>
            <div class="center-line">
              <div class="x-line-dot"></div>
              <div class="x-line" style="min-height:30px !important"></div>
              <div v-if="flightIndex+1==segment.FlightSegment.length" class="x-line"></div>
              <div v-else class="x-line dot"></div>
              <!--<div class="x-line-dot" v-if="flightIndex < segment.flights.lengh - 1"></div>-->
              <!--<div class="x-line" v-if="flightIndex < segment.flights.lengh - 1"></div>-->
              <div v-if="flightIndex+1==segment.FlightSegment.length" class="x-line-dot"></div>
            </div>
            <div class="your-flight">
              <strong v-if="flight.DepartureAirport.LocationCode !== undefined"
              >{{ airportsByKey[flight.DepartureAirport.LocationCode].city }}
              </strong>
                          <h6>
                            ({{ flight.DepartureAirport.LocationCode }}) <span v-if="flight.ArrivalAirport.TerminalID">T-{{ flight.ArrivalAirport.TerminalID }}</span>
                          </h6>
              <div class="facilities row">
                <div class="facilitie-box">
                  <div>
                    <span class="mdi mdi-airplane-takeoff"></span>
                  </div>
                  <div>
                    <small>
                      {{
                      airlinesByKey[flight["OperatingAirline"]['Code']]
                      ? airlinesByKey[flight["OperatingAirline"]['Code']].name
                      : flight["OperatingAirline"]['Code']
                      }} -
                      {{ flight.FlightNumber }}
                    </small>
                  </div>
                </div>
                <div class="facilitie-box">
                  <div>
                    <span class="mdi mdi-seat-recline-normal"></span>
                  </div>
                  <div>
                    <small
                    ><span>{{ params.travelClass }}</span></small
                    >
                  </div>
                </div>

                <div class="facilitie-box">
                  <div>
                    <span class="mdi mdi-ray-vertex"></span>
                  </div>
                  <div>
                    <small>
                      {{
                      segment.FlightSegment.length > 1
                      ? `${segment.FlightSegment.length-1} STOP`
                      : "Non Stop"
                      }}
                    </small>
                  </div>
                </div>
                <div class="facilitie-box">
                  <div>
                    <span class="mdi mdi-briefcase"></span>
                  </div>
                  <div>
                    <small></small>
                    <small class="flex-wrap" v-for="(bag,index) in baggageinfo">{{
                      bag.Allowance[0].Pieces
                      }} Allowance</small>
                  </div>
                </div>
                <!-- <div class="facilitie-box">
                <div>
                  <span class="mdi mdi-briefcase-check"></span>
                </div>
                <div>
                  <small>30kg Luggage</small>
                </div>
              </div> -->
                <div class="facilitie-box">
                  <div>
                    <span class="mdi mdi-clock"></span>
                  </div>
                  <div>
                    <small>
                      {{ parseInt(segment["ElapsedTime"]/60) }}H {{segment["ElapsedTime"]%60}}M
                    </small>
                  </div>
                </div>
<!--                <div class="flight-class">-->
<!--                  <div class="flight-class-box">-->
<!--                    <div>-->
<!--                      <label for v-if="flight.stopDuration">Change Plane:</label>-->
<!--                    </div>-->
<!--                    <div>-->
<!--                      <span v-if="flight.stopDuration"> {{ flight.stopDuration }}</span>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                  <div class="flight-class-box">-->
<!--                    <div>-->
<!--                      <label for v-if="flight.departureTerminal">Terminal:</label>-->
<!--                    </div>-->
<!--                    <div>-->
<!--                      <span v-if="flight.departureTerminal">T-{{ flight.departureTerminal }}</span>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
              </div>
              <strong
                v-if="flightIndex+1==segment.FlightSegment.length"
              >
                {{ airportsByKey[flight.ArrivalAirport.LocationCode].city }} </strong>
              <h6 v-if="flightIndex+1==segment.FlightSegment.length">
              <span>
              ({{ flight.ArrivalAirport.LocationCode }}) <z v-if="flight.ArrivalAirport.TerminalID">T-{{ flight.ArrivalAirport.TerminalID }}</z>
              </span>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
    <span style="display: inline-block; height:36px;">
      <h5>    </h5>
    </span>
  </div>
</template>
<script>
  import {mapState, mapGetters, mapMutations} from "vuex";

  export default {
    data(){
      return{
        detailFare:null,
      }
    },
    props: ["flightAmount", "segmentsindex" , 'baggageinfo'],
    computed: {
      ...mapState("forAll", ["airportsByKey", "airlinesByKey"]),
      ...mapState("flights", ["detailFares", "confirmedItinerary"]),
      ...mapGetters({params: "forAll/getSearchParams"}),
    },
    async created() {
      if (process.env.NODE_ENV != "production" && process.env.CACHE == "true") {
        let confirmation = JSON.parse(localStorage.getItem("confirmedItinerary"));
        this.$store.commit("flights/setConfirmedItinerary", confirmation);
        setTimeout(() => {
          this.$store.commit("flights/setDetailFare", confirmation);
        }, 2000);
      }

      if (!this.confirmedItinerary) {
        return this.redirect();
      }
    },
    methods: {
      testing() {
        console.log('params',this.detailFares)
      },
      redirect() {
        return this.$router.push({name: "flights"});
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
      inoutBound(segmentIndex, flightIndex) {
        if (flightIndex == 0) {
          if (segmentIndex === 0) {
            return "Outbound"
          } else if (segmentIndex + 1 === this.detailFare.segments[0].AirItinerary.OriginDestinationOptions.OriginDestinationOption.length) {
            return "Inbound"
          }
        }
      },
      classFlightline(a, b, c, d) {
        if (a + 1 != b && c + 1 != d) {
          alert('hlw')
          return 'marginBottom'
        }
      },
      convertProvisionType(type) {
        let types = {
          A: 'Checked baggage allowance.',
          C: 'Day of check-in charges.',
          B: 'Carry-on baggage allowance.',
          CC: 'Carry-on baggage charges.',
          E: 'Baggage embargo.',
          P: 'Prepaid checked baggage charges.',
          EE: 'Generic embargo:No excess permitted.'
        }
        return types[type]
      },
    },
  };
</script>
