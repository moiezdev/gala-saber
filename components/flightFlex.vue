<template>
  <div class="inner-banner style-4">
    <div class="vertical-align flight-banner">
      <div class="container">
        <div v-if="response">
          <div class="main-list" style="margin-top: 20px">
            <div v-if="selected">
              <div class="flight-listing">
                <div class="flights-flex-list order2">
                  <div class="flight-box mt-3 row">
                    <div class="col-10 pr-0">
                      <div class="flight-result-box">
                        <div class="center-box">
                            <div
                              class="hotel-item flight-list-box style-10 bg-white"
                              v-for="(segment, segmentIndex) in selected['segments']"
                              :key="`${segmentIndex}`"
                            >
                              <div class="time-section">
                                <h5 class="mb-2 mt-4">
                                  <span>
                                    <b v-if="params.type !== 'multi'">{{
                                      segmentIndex === 0 ? "Outbound Flight" : "Inbound Flight"
                                    }}</b>
                                    <b v-else>Departure</b>
                                  </span>
                                  -
                                  <strong>{{
                                    airportsByKey[segment.departureLocation] !== undefined
                                      ? airportsByKey[segment.departureLocation].city
                                      : segment.departureLocation
                                  }}</strong>
                                  to
                                  <strong>{{
                                    airportsByKey[segment.arrivalLocation] !== undefined
                                      ? airportsByKey[segment.arrivalLocation].city
                                      : segment.arrivalLocation
                                  }}</strong>
                                  on
                                  <strong>{{ $formatDate(segment.departureDate) }}</strong>
                                </h5>

                                <!-- Single List Div  -->
                                <div class="time-section-top">
                                  <div class="logo-box">
                                    <div class="logo-section">
                                      <div class="logo" :id="`logo${segmentIndex}`">
                                        <img
                                          :src="`${$config.ASSET_URL}flightlogo/${segment['marketingCarrier']}.png`"
                                          alt=""
                                        />
                                        <div>
                                          <a
                                            @click="
                                              setDetail(segment, `${selected['formatedTotalAmount']}`)
                                            "
                                            >Flight Detail</a
                                          >
                                        </div>
                                      </div>
                                      <b-tooltip
                                        :target="`logo${segmentIndex}`"
                                        variant="dark"
                                        placement="top"
                                      >
                                        {{
                                          airlinesByKey[segment["marketingCarrier"]]
                                            ? airlinesByKey[segment["marketingCarrier"]].name
                                            : ""
                                        }}
                                      </b-tooltip>
                                    </div>
                                  </div>
                                  <div class="go-city">
                                    <h5>
                                      {{
                                        airportsByKey[segment.departureLocation] !== undefined
                                          ? airportsByKey[segment.departureLocation].city
                                          : segment.departureLocation
                                      }}
                                    </h5>
                                    <h6>
                                      {{ segment["departureLocation"] }} - 
                                      {{
                                        segment["departureTerminal"]
                                          ? `T${segment["departureTerminal"]}`
                                          : ""
                                      }}
                                    </h6>
                                  </div>
                                  <div class="duration">
                                    <div class="time">
                                      <h5>{{ segment["departureTime"] }}</h5>
                                      <h6>{{ $formatDate(segment.departureDate) }}</h6>
                                    </div>
                                    <div class="stops">
                                      <small>
                                        {{
                                          segment["numberOfStops"] === 0
                                            ? "Non Stop"
                                            : `${segment["numberOfStops"]} Stops`
                                        }}
                                      </small>
                                      <div class="dott"></div>
                                      <div class="hr"></div>
                                      <small>{{ segment["duration"] }}</small>
                                    </div>
                                    <div class="time">
                                      <h5>{{ segment["arrivalTime"] }}</h5>
                                      <h6>{{ $formatDate(segment.arrivalDate) }}</h6>
                                    </div>
                                  </div>
                                  <div class="to-city">
                                    <h5>
                                      {{
                                        airportsByKey[segment.arrivalLocation] !== undefined
                                          ? airportsByKey[segment.arrivalLocation].city
                                          : segment.arrivalLocation
                                      }}
                                    </h5>
                                    <h6>
                                      {{ segment["arrivalLocation"] }} - 
                                      {{
                                        segment["arrivalTerminal"]
                                          ? `T${segment["arrivalTerminal"]}`
                                          : ""
                                      }}
                                    </h6>
                                  </div>
                                </div>
                              </div>
                            </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-2">
                      <div class="button-box">
                        <div class="price">
                          <small>BHD</small>
                          <span>
                            {{
                              `${selected["formatedTotalAmount"]}`
                            }}
                          </span>
                          <h6>Per Person</h6>
                          <div class="book-btn">
                            <button
                              class="btn btn-dark"
                              @click="bookFare()"
                              >
                              Book Flight
                              <i class="fa fa-arrow-right"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- v-if="segmentsIndex != 0" -->
                    <div class="baggage" >
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
                      <div class="flex-option">
                        <i class="fa fa-suitcase"></i>
                        <small>Baggage Detail</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="inbound-lable" v-if="response.minDates.inbound">
              <div>
                <b>
                  <span class="mdi mdi-arrow-left"></span>
                  Inbound
                  {{ params["locations"]["destinationLocationCode"]["iata"] }} -
                  {{ params["locations"]["originLocationCode"]["iata"] }}
                  <span class="mdi mdi-arrow-right"></span>
                </b>
              </div>
              <div class="row sorting-box-btns" style="min-width: 330px; justify-content: flex-end;">
                <flightModifySearchParams @flightModify="flightModify" />
              </div>
            </div>
            <template v-if="response.minDates.inbound && response.minDates.outbound">
              
              <div class="flex-search-result-outer">
   
                <div class="lable">
                
                  <h5>Outbound</h5>
                  <small>
                    {{ params["locations"]["originLocationCode"]["iata"] }}
                    <span class="mdi mdi-arrow-right"></span>
                    {{ params["locations"]["destinationLocationCode"]["iata"] }}
                  </small>
                </div>
                <template v-for="(day, index) in 7">
                  <div class="lable" :key="day">
                    <h5>Inbound</h5>
                    <small>
                    {{ `${$formatDate(datesCheck("returnDate", index))}` }}
                    </small>
                  </div>
                </template>
              </div>
              <div class="flex-search-result-inner">
                <div class="flex-search-colum-left">
                  <template v-for="(day, index) in 7">
                    <div class="inner" :key="day">
                      <h4>Outbound</h4>
                      <small>
                        {{ `${$formatDate(datesCheck("departureDate", index))}` }}
                      </small>
                    </div>
                  </template>
                </div>
                <div class="flex-search-result-inner">
                  <div class="flex-search-colum-right">
                    <div
                      class="flex-search-result-inner"
                      v-for="(row, rowIndex) in 7"
                      :key="rowIndex"
                    >
                      <template v-if="response.itineraries[rowIndex]">
                        <div
                          class="inner"
                          v-for="(column, columnIndex) in 7"
                          :key="columnIndex"
                          @click="
                            selectFare(response.itineraries[rowIndex][columnIndex])
                          "
                          :class="{
                            'flex-active':
                              JSON.stringify(
                                response.itineraries[rowIndex][columnIndex]
                              ) == JSON.stringify(selected),
                            'flex-lowest':
                              response.itineraries[rowIndex][columnIndex] &&
                              response.itineraries[rowIndex][columnIndex]
                                .totalAmount == Roundlowest,
                          }"
                        >
                          <template
                            v-if="response.itineraries[rowIndex][columnIndex]"
                          >
                            <h5>
                              {{
                                `${response.currency} ${response.itineraries[rowIndex][columnIndex].formatedTotalAmount}`
                              }}
                            </h5>
                            <small>
                              <img
                                :src="`${$config.ASSET_URL}flightlogo/${response.itineraries[rowIndex][columnIndex].segments[0]['marketingCarrier']}.png`"
                                alt=""
                              />
                              {{
                                response.itineraries[rowIndex][columnIndex].segments[0][
                                  "marketingCarrier"
                                ]
                              }}
                            </small>
                          </template>
                          <template v-else>
                            <h5><span class="mdi mdi-magnify"></span></h5>
                            <small>Not Available</small>
                          </template>
                        </div>
                      </template>
                      <template v-else>
                        <div
                          class="inner"
                          v-for="(column, columnIndex) in 7"
                          :key="columnIndex"
                        >
                          <h5><span class="mdi mdi-magnify"></span></h5>
                            <small>Not Available</small>
                        </div>
                      </template>
                    </div>
                  </div>
                </div>
              </div>
            </template>
            <!--  -->
            <template v-else>
              <div class="inbound-lable">
                <div>
                  <b>
                    <span class="mdi mdi-arrow-left"></span>
                    Departure
                    {{ params["locations"]["originLocationCode"]["iata"] }} -
                    {{ params["locations"]["destinationLocationCode"]["iata"] }}
                    <span class="mdi mdi-arrow-right"></span>
                  </b>
                </div>
                <div class="row sorting-box-btns" style="min-width: 330px; justify-content: flex-end;">
                  <flightModifySearchParams @flightModify="flightModify" />
                </div>
              </div>
              <div class="flex-search-result-outer">
                <template>
                  <div class="lable" v-for="(day, index) in 7" :key="day">
                    <h5>Inbound</h5>
                    <small>
                      {{ `${$formatDate(datesCheck("departureDate", index))}` }}
                    </small>
                  </div>
                </template>
              </div>
              <div class="flex-search-result-outer" v-if="response.itineraries">
                <div class="flex-search-colum-right">
                  <div class="flex-search-result-outer">
                    <template v-for="(column, columnIndex) in 7">
                      <div
                        :key="columnIndex"
                        v-if="response.itineraries[columnIndex]"
                        class="inner"
                        @click="selectFare(response.itineraries[columnIndex])"
                        :class="{
                          'flex-active':
                            JSON.stringify(response.itineraries[columnIndex]) ==
                            JSON.stringify(selected),
                          'flex-lowest':
                            response.itineraries[columnIndex] &&
                            response.itineraries[columnIndex].totalAmount == lowest,
                        }"
                      >
                        <h5>
                          {{
                            `${response.currency} ${response.itineraries[columnIndex].formatedTotalAmount}`
                          }}
                        </h5>
                        <small>
                        å
                        </small>
                      </div>
                      <div class="inner" v-else :key="columnIndex">N/A</div>
                    </template>
                  </div>
                </div>
              </div>
            </template>

            <!-- Price Changed Modal -->
            <b-modal
              id="price_Changed"
              title="GALA TRAVEL"
              hide-footer
              :no-close-on-backdrop="true"
            >
              <div class="d-block text-center">
                <div style="background: white; padding: 15px">
                  <h3>Unavailable</h3>
                  <p>
                    The price of fare you selected has changed <b>{{ message }}</b
                    >. Are you sure you want to continue
                  </p>
                  <b-button
                    class="mt-2"
                    variant="outline-success"
                    block
                    @click="priceChangedOk(confirmedItinerary)"
                    >Okay</b-button
                  >
                  <b-button
                    class="mt-2"
                    variant="outline-danger"
                    block
                    @click="$bvModal.hide('price_Changed')"
                    >Close</b-button
                  >
                </div>
              </div>
              
            </b-modal>
          </div>
        </div>
      </div>
    </div>
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
import { mapState, mapGetters, mapMutations } from "vuex";
import flightDetail from "@/components/flightDetail.vue";
import flightModifySearchParams from "@/components/flightModifySearchParams.vue";
import flightDetailModal from "@/components/flightDetailModal";

export default {
  components: { flightModifySearchParams, flightDetail,flightDetailModal },

  data() {
    return {
      message: "",
      selected: null,
      confirmedItinerary: null,
      priceChanged: {
        message: "",
      },
      detail: false,
      Roundlowest: 0,
      lowest: 0,
      open:false,
      flightAmount:"",
    };
  },

  computed: {
    ...mapState("flights", ["sortBy", "response", "filters"]),
    ...mapState("forAll", ["airportsByKey", "airlinesByKey"]),
    ...mapGetters({ params: "forAll/getSearchParams" }),
  },

  watch: {
    response: {
      handler(latest) {
        this.selectFare(latest.selected);
      },
      deep: true,
    },
  },

  created() {
    this.selectFare(this.response.selected);

    // Round Search
    if (this.params.type == "round" && this.response.itineraries) {
      for (var row in this.response.itineraries) {
        for (var column in this.response.itineraries[row]) {
          let total = this.response.itineraries[row][column].totalAmount;
          if (this.Roundlowest == 0 || total < this.Roundlowest) {
            this.Roundlowest = total;
          }
        }
      }
    }
    // Single Search
    if (this.params.type == "one" && this.response.itineraries) {
      for (var row in this.response.itineraries) {
        let total = this.response.itineraries[row].totalAmount;
        if (this.lowest == 0 || total < this.lowest) {
          this.lowest = total;
        }
      }
    }
  },

  methods: {
    ...mapMutations("flights", [
      "setSortBy",
      "setDetailFare",
      "setFlexResponse",
    ]),
    setDetail(detail, amount) {
      let data = {
        segments: [detail],
      };
      this.setDetailFare(data);
      this.$bvModal.show("flightDetail");
      this.flightDetail = detail;
      this.open = true;
      this.flightAmount = amount;
    },
    flightModify() {
      if (this.params.flex == true) {
        this.setFlexResponse(null);
        this.$emit("search");
      } else {
        this.$emit("search");
      }
    },

    detailFare(segment) {
      let data = {
        segments: [segment],
      };
      this.setDetailFare(data);
      this.$bvModal.show("flightDetail");
    },

    dates(type, day) {
      let date = new Date(this.params[type]);
      day = 3 - day;
      date = new Date(date.setDate(date.getDate() - day));
      return date;
    },

    datesCheck(type, day) {
      let date = new Date(this.params[type]);
      day = 3 - day;
      date = new Date(date.setDate(date.getDate() - day));
      return date;
    },

    selectFare(column) {
      this.selected = column;
      this.setDetailFare(column);
    },

    bookFare() {
      this.$emit("confirmingFare");
      let data = { ...this.selected };
      data["destinations"] = data.segments;
      this.$api({
        method: "post",
        url: "confirmation",
        data,
      })
        .then(({ data }) => {
          if (this.selected.formatedTotalAmount !== data.totalAmount) {
            this.confirmedItinerary = data;
            this.$bvModal.show("price_Changed");
            // this.priceChanged.message = `The price of fare you selected has changed from ${this.response.currency} ${this.selected.formatedTotalAmount} to ${data.currency} ${data.totalAmount}. Are you sure you want to continue?`;
            this.message = `from ${this.response.currency} ${this.selected.formatedTotalAmount} to ${data.currency} ${data.totalAmount}`;
          } else {
            this.priceChangedOk(data);
          }
        })
        .catch((err) => {
          this.confirmedError = true;
          let data = err.response.data;
          if (data.messages) {
            for (var message of data.messages) {
              this.$bvToast.toast(
                `Code: ${message.code}, Message ${message.text}`,
                {
                  title: "GALA TRAVEL",
                  variant: "danger",
                }
              );
            }
          }
          console.log(err);
          console.log(err.response);
        })
        .finally(() => this.$emit("fareConfirmed"));
    },

    priceChangedOk(confirmedItinerary) {
      localStorage.setItem(
        "confirmedItinerary",
        JSON.stringify(confirmedItinerary)
      );
      this.$store.commit("flights/setConfirmedItinerary", confirmedItinerary);
      this.setDetailFare(confirmedItinerary);
      this.$router.push("flightDetail");
    },
  },
};
</script>
<style scoped>
.fullwidth {
  width: 100% !important;
  float: left;
}
</style>
