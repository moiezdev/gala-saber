
<template>
  <div class="flight-box mb-2" v-if="detailFare">
    <div class="flights-list" style="width:100% !important">
      <div
        class="flight-box mb-2"
        v-for="(segment, segmentIndex) in detailFare.segments"
        :key="segmentIndex"
      >
        <div
          class="flight-result-box mt-0"
          v-for="(flight, flightIndex) in segment.flights"
          :key="`${segmentIndex}${flightIndex}`"
        >
          <div class="center-box">
            <div class="time-section">
              <div class="time-section-top">
                <div class="go-city">
                  <small>Depart</small>
                  <h6>{{ $formatDate(flight.departureDate) }},</h6>
                  <h5
                    v-if="airportsByKey[flight.departureLocation] !== undefined"
                  >
                    {{ flight.departureLocation }}
                  </h5>
                </div>
                <div class="duration">
                  <div class="time">
                    <b
                      ><strong>
                        {{ flight.departureTime }}
                      </strong></b
                    >
                  </div>
                  <div class="stops">
                    <small>T-{{ flight.departureTerminal }}</small>
                    <div class="dott"></div>
                    <div class="hr"></div>
                    <b>{{ airportsByKey[flight.departureLocation].city }}</b>
                    ({{ flight.departureLocation }}) →
                    <b>{{ airportsByKey[flight.arrivalLocation].city }}</b>
                    ({{ flight.arrivalLocation }})
                    <div class="col-12 order-4">
                      <div class="plane-change-row" v-if="flightIndex !== 0">
                        <hr />
                        <div class="plane-change-lable">
                          Change Plane: {{ flight.stopDuration }}
                        </div>
                      </div>
                    </div>
                    <p>
                    {{
                      airlinesByKey[flight["marketingCarrier"]]
                        ? airlinesByKey[flight["marketingCarrier"]].name
                        : flight["marketingCarrier"]
                    }}
                    {{ flight["flightNumber"] }}
                  </p>
                  </div>
                  <div class="time">
                    <b>{{ flight.arrivalTime }}</b>
                  </div>
                </div>
                <div class="to-city">
                  <h5>
                    <small>Arrival</small>
                    <h6>{{ $formatDate(flight.arrivalDate) }},</h6>
                  </h5>
                  <h6>
                    <span
                      v-if="airportsByKey[flight.arrivalLocation] !== undefined"
                      >{{ flight.arrivalLocation }}</span
                    >
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState("forAll", ["airportsByKey", "airlinesByKey"]),
    ...mapState("flights", ["detailFare"]),
    ...mapGetters({ params: "forAll/getSearchParams" }),
  },
};
</script>
