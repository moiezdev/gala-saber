<template>
  <div class="row search-fileds">
    <div class="col-lg-12">
      <div class="row" v-for="(multi, index) in data.destinations" :key="index">
        <div class="col-lg-1 mt-3 search-button">
          <button class="btn btn-light">
            <span>{{ index + 1 }}</span>
            <i class="fa fa-chevron-right"></i>
          </button>
        </div>
        <div class="col-lg-4 mt-3">
          <b-autocomplete
            v-model="keywords[index].originLocationCode"
            @typing="simpleSuggestionList('originLocationCode', index)"
            placeholder="From"
            :data="locations[index].originLocationCode"
            :loading="fetchingLocations[index].originLocationCode"
            :disabled="fetchingLocations[index].originLocationCode"
            field="city"
            icon="airplane-takeoff"
            @select="
              (option) => selectLocations('originLocationCode', index, option)
            "
            :ref="`originLocationCode_${index}`"
          >
            <template slot="empty"
              >No results for {{ keywords.originLocationCode }}</template
            >
            <template slot-scope="props">
              <div class="media">
                <div class="media-content">
                  {{
                    `${props.option.city} (${props.option.iata} - ${props.option.name}), ${props.option.country}`
                  }}
                </div>
              </div>
            </template>
          </b-autocomplete>
        </div>
        <div class="col-lg-3 mt-3">
          <b-autocomplete
            v-model="keywords[index].destinationLocationCode"
            @typing="simpleSuggestionList('destinationLocationCode', index)"
            placeholder="To"
            :data="locations[index].destinationLocationCode"
            :loading="fetchingLocations[index].destinationLocationCode"
            :disabled="fetchingLocations[index].destinationLocationCode"
            field="city"
            @select="
              (option) =>
                selectLocations('destinationLocationCode', index, option)
            "
            icon="airplane-landing"
            :ref="`destinationLocationCode_${index}`"
          >
            <template slot="empty"
              >No results for
              {{ keywords[index].destinationLocationCode }}</template
            >
            <template slot-scope="props">
              <div class="media">
                <div class="media-content">
                  {{
                    `${props.option.city} (${props.option.iata} - ${props.option.name}), ${props.option.country}`
                  }}
                </div>
              </div>
            </template>
          </b-autocomplete>
        </div>
        <div class="col-lg-3 mt-3">
          <b-form-datepicker
            style="font-size: 10px; height: 40px"
            v-model="multi.departureDate"
            hide-header
            locale="en"
            :min="new Date()"
            label-no-date-selected="Select Date"
          >
            <template slot="nav-prev-year"
              ><div style="display: none"></div
            ></template>
            <template slot="nav-next-year"
              ><div style="display: none"></div>
            </template>
            <template slot="nav-next-month" style="position: relative">
              <div style="position: absolute; right: 0px">
                <span
                  class="mdi mdi-arrow-right arrow-inner-calendar"
                ></span></div
            ></template>
            <template slot="nav-prev-month" style="position: relative"
              ><div style="position: absolute; left: 0px">
                <span class="mdi mdi-arrow-left arrow-inner-calendar"></span>
              </div>
            </template>
            <template slot="nav-this-month"
              ><div style="display: none"></div
            ></template>
          </b-form-datepicker>
        </div>
        <div
          class="col-lg-1 search-button"
          :class="[
            data.destinations.length <= 2
              ? 'display-none'
              : 'col-lg-1 col-md-6 col-sm-6 col-xs-12 search-button',
          ]"
        >
          <button
            class="btn btn-light"
            @click="removeFlight(index)"
            v-if="data.destinations.length > 2"
          >
            <span> </span>
            <i class="fa fa-close"></i>
          </button>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 search-button mt-4" @click.prevent="addFlight">
          <button class="btn btn-light arrow">
            <span> Add Flights</span>
            <i class="fa fa-plus"></i>
          </button>
        </div>
        <div class="col-lg-4 search-button mt-4">
          <b-dropdown  ref="passengers" aria-role="list">
            <template #trigger>
              <b-button class="btn btn-light arrow" style="width: 100%">
                <!-- <small>Cabin</small><br /> -->
                <small>
                  {{ totalPassengers }}  
                  <span class="mdi mdi-human-male"></span> 
                  
                </small>
                <small>
                  <span class="mdi mdi-seat-recline-normal"></span>
                  {{ travelClass(data.travelClass) }}
                </small>
              </b-button>
            </template>
            <div class="eqaul">
              <div class="select-contain">
                <b-form-select
                  v-model="data.includedAirline"
                  :options="allData.airlines"
                  value-field="iata"
                  text-field="name"
                  class="select-contain-select"
                >
                  <b-form-select-option class="select-contain-select" value="">ANY</b-form-select-option>
                </b-form-select>
              </div>
              <div class="select-contain">
                <select
                  class="select-contain-select"
                  v-model="data.travelClass"
                >
                  <option value="">Any Class</option>
                  <option value="ECONOMY">Economy</option>
                  <option value="PREMIUM_ECONOMY">Premium Economy</option>
                  <option value="BUSINESS">Business</option>
                  <option value="FIRST">First</option>
                </select>
              </div>
            </div>
            <div class="fix-adult">
              <div class="sipn-row">
                <div class="lable">
                  <h6>Adult</h6>
                </div>
                <div class="spin">
                  <b-form-spinbutton
                    id="sb-default"
                    min="1"
                    max="9"
                    placeholder="--"
                    v-model="data.adults"
                  ></b-form-spinbutton>
                </div>
              </div>
              <div class="sipn-row">
                <div class="lable">
                  <h6>Child</h6>
                </div>
                <div class="spin">
                  <b-form-spinbutton
                    id="sb-default"
                    min="0"
                    v-model="data.children"
                    placeholder="--"
                  ></b-form-spinbutton>
                </div>
              </div>
              <div class="sipn-row">
                <div class="lable">
                  <h6>Infant</h6>
                </div>
                <div class="spin">
                  <b-form-spinbutton
                    id="sb-default"
                    min="0"
                    v-model="data.infants"
                    placeholder="--"
                  ></b-form-spinbutton>
                </div>
              </div>
            </div>
          </b-dropdown>
        </div>
        <div class="col-lg-4 search-button mt-4">
            <button class="btn btn-light arrow"
            @click.prevent="save()"
            >
              <span>Search</span>
              <i class="fa fa-search"></i>
            </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      selectedOptions: [],
      calendarData: ["", ""],
      keywords: [
        {
          originLocationCode: "",
          destinationLocationCode: "",
        },
        {
          originLocationCode: "",
          destinationLocationCode: "",
        },
      ],
      oldKeywords: [
        {
          originLocationCode: "",
          destinationLocationCode: "",
        },
        {
          originLocationCode: "",
          destinationLocationCode: "",
        },
      ],
      locations: [
        {
          originLocationCode: [],
          destinationLocationCode: [],
        },
        {
          originLocationCode: [],
          destinationLocationCode: [],
        },
      ],
      fetchingLocations: [
        {
          originLocationCode: false,
          destinationLocationCode: false,
        },
        {
          originLocationCode: false,
          destinationLocationCode: false,
        },
      ],
      data: {
        adults: 1,
        travelClass: "",
        includedAirline: "",
        destinations: [
          {
            locations: {},
            departureDate: "",
            returnDate: null,
          },
          {
            locations: {},
            departureDate: "",
            returnDate: null,
          },
        ],
      },
    };
  },

  computed: {
    ...mapState("forAll", ["searchParams"]),
    ...mapState("data", ["allData"]),

    totalPassengers() {
      let totalPassengers = this.data.adults;
      if (this.data.children) {
        totalPassengers += this.data.children;
      }
      if (this.data.infants) {
        totalPassengers += this.data.infants;
      }
      return totalPassengers;
    },
  },

  created() {
    if (this.$route.name != "index") {
      if (this.searchParams && this.searchParams.type === "multi") {
        let data = { ...this.searchParams };
        // this.oldQuery = true;
        // this.type = data.type;
        for (var index in data.destinations) {
          if (!this.keywords[index]) {
            this.addFlight();
          }

          this.keywords[index].originLocationCode =
            data.destinations[index].locations.originLocationCode.city;
          this.keywords[index].destinationLocationCode =
            data.destinations[index].locations.destinationLocationCode.city;
        }
        this.data = { ...data };
        this.data.locations = { ...data.locations };
      }
    }
  },

  methods: {
    travelClass(classType) {
      switch (classType) {
        case "ECONOMY":
          return "ECO";
          break;
        case "FIRST":
          return "FIR";
          break;
        case "BUSINESS":
          return "BUS";
          break;
        case "PREMIUM_ECONOMY":
          return "PRE";
          break;
        default:
          return "ALL";
          break;
      }
    },

    choseDay(index) {
      let date = this.calendarData[index].selectedDate.split("/");
      date = `${date[2]}-${this.$isoDate(date[1])}-${this.$isoDate(date[0])}`;
      this.data.destinations[index].departureDate = new Date(
        date.replace(/-/g, "/")
      );
      // this.$refs[`calendar_${index}`][0].hide(true);
      let nextIndex = index + 1;
      if (this.$refs[`originLocationCode_${nextIndex}`]) {
        this.$refs[`originLocationCode_${nextIndex}`][0].focus();
      } else {
        this.$refs.passengers.show(true);
      }
    },

    addFlight() {
      if (this.data.destinations.length < 5) {
        this.$set(this.data.destinations, this.data.destinations.length, {
          locations: {},
          departureDate: null,
          returnDate: null,
        });
        this.$set(this.fetchingLocations, this.fetchingLocations.length, {
          originLocationCode: false,
          destinationLocationCode: false,
        });
        this.$set(this.oldKeywords, this.oldKeywords.length, {
          originLocationCode: "",
          destinationLocationCode: "",
        });
        this.$set(this.keywords, this.keywords.length, {
          originLocationCode: "",
          destinationLocationCode: "",
        });
        this.$set(this.locations, this.locations.length, {
          originLocationCode: [],
          destinationLocationCode: [],
        });
      }
    },

    removeFlight(index) {
      this.data.destinations.splice(index, 1);
      this.fetchingLocations.splice(index, 1);
      this.oldKeywords.splice(index, 1);
      this.keywords.splice(index, 1);
      this.locations.splice(index, 1);
    },

    selectLocations(type, index, option) {
      this.data.destinations[index].locations[type] = option;
      if (type === "destinationLocationCode") {
        // this.$refs[`calendar_${index}`][0].show(true);
      } else {
        this.$refs[`destinationLocationCode_${index}`][0].focus();
      }
    },

    simpleSuggestionList(type, index) {
      if (this.timer !== null) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(async () => {
        let keyword = this.keywords[index][type].toLowerCase();
        if (!keyword.length || keyword.length < 2) {
          this.locations[index][type] = [];
          return;
        }
        this.fetchingLocations[index][type] = true;

        if (
          this.locations[index][type].length < 1 ||
          this.oldKeywords[index][type].length > keyword.length
        ) {
          this.locations[index][type] = this.allData.airports.filter((x) =>
            x.iata.toLowerCase().includes(keyword)
          );
          if (this.locations[index][type].length < 1) {
            this.locations[index][type] = this.allData.airports.filter((x) =>
              x.name.toLowerCase().includes(keyword)
            );
          }
          if (this.locations[index][type].length < 1) {
            this.locations[index][type] = this.allData.airports.filter(
              (x) =>
                x.city.toLowerCase().includes(keyword) ||
                x.country.toLowerCase().includes(keyword)
            );
          }
        } else {
          this.locations[index][type] = this.locations[index][type].filter(
            (x) => x.iata.toLowerCase().includes(keyword)
          );
          if (this.locations[index][type] < 1) {
            this.locations[index][type] = this.locations[index][type].filter(
              (x) => x.name.toLowerCase().includes(keyword)
            );
          }
          if (this.locations[index][type] < 1) {
            this.locations[index][type] = this.locations[index][type].filter(
              (x) =>
                x.city.toLowerCase().includes(keyword) ||
                x.country.toLowerCase().includes(keyword)
            );
          }
        }

        if (
          this.locations[index][type].length < 1 ||
          this.oldKeywords[index][type].length > keyword.length
        ) {
          this.locations[index][type] = this.allData.airports.filter(
            (x) =>
              x.name.toLowerCase().includes(keyword) ||
              x.city.toLowerCase().includes(keyword) ||
              x.country.toLowerCase().includes(keyword) ||
              x.iata.toLowerCase().includes(keyword)
          );
        } else {
          this.locations[index][type] = this.locations[index][type].filter(
            (x) =>
              x.name.toLowerCase().includes(keyword) ||
              x.city.toLowerCase().includes(keyword) ||
              x.country.toLowerCase().includes(keyword) ||
              x.iata.toLowerCase().includes(keyword)
          );
        }
        this.oldKeywords[index][type] = keyword;
        this.fetchingLocations[index][type] = false;
      }, 100);
    },

    save() {
      for (var destination of this.data.destinations) {
        if (
          !destination.locations.originLocationCode ||
          !destination.locations.destinationLocationCode ||
          !destination.departureDate
        ) {
          return this.$parent.errorMessage();
        }
      }
      this.data.type = "multi";

      let totalPassengers = this.data.adults;
      if (this.data.children === 0) {
        delete this.data.children;
      } else {
        totalPassengers += this.data.children;
      }
      if (this.data.infants === 0) {
        delete this.data.infants;
      } else {
        totalPassengers += this.data.children;
      }
      if (totalPassengers >= 10) {
        return this.$bvToast.toast(
          "Total number of passengers should be less than or equal to 9.",
          {
            title: "GALA TRAVEL!",
            variant: "danger",
            toaster: "b-toaster-bottom-right",
            solid: true,
          }
        );
      }
      this.$emit("redirect", this.data);
    },
  },
};
</script>