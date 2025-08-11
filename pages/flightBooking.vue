<template>
  <div class="container-fluid flight-list-body">
    <div class="container pt-3 pb-0">
    <div class="flights-page">¸
      <div class="flight-listing your-flight-outer">
        <div class="filter2">
          
          <div class="fare-summ" v-for="(passsenger, key, index) in confirmedItinerary[
                'passengers'
              ]"
              :key="index">
              <div class="lable">
                <h4>Fare Summary</h4>
              </div>
              <div class="price-section">
                <div>
                  <b>{{ key }}:</b>
                </div>
                <div>
                  <span><span
                    >{{ `${passsenger.totalAmount}` }} x
                    {{ passsenger.total }}</span
                  ></span>
                </div>
              </div>
              <div class="price-section">
                <div>
                  <b>Fare:</b>
                </div>
                <div>
                  <span>{{ `${confirmedItinerary.baseAmount}` }}</span>
                </div>
              </div>
              <div class="price-section">
                <div>
                  <b>Taxes & Fees:</b>
                </div>
                <div>
                  <span>{{ `${confirmedItinerary.taxAmount}` }}</span>
                </div>
              </div>
              <div class="luggage">
                <div class="price-section">
                  <div>
                    <b>1 Hand luggage</b>
                  </div>
                  <div>
                    <span>Free</span>
                  </div>
                </div>
                <div class="price-section2">
                  <div>
                    <b>1 30kg checked luggage</b>
                  </div>
                  <div>
                    <span>Included</span>
                  </div>
                </div>
              </div>
              <div class="total">
                <div class="price-section">
                  <div>
                    <b>GRAND TOTAL</b>
                  </div>
                  <div>
                    <span>
                      <small>{{ `${confirmedItinerary.currency}` }}</small
                      >{{ ` ${confirmedItinerary.totalAmount}` }}</span
                    >
                  </div>
                </div>
              </div>
            </div>
          <div class="col-xs-12 col-md-12">
            <div class="right-sidebar make-me-sticky">
              <div class="detail-block bg-red-3">
                <h4 class="color-white">details</h4>
                <div
                  class="details-desc"
                  v-for="(passsenger, key, index) in confirmedItinerary[
                    'passengers'
                  ]"
                  :key="index"
                >
                  <p class="color-pink">
                    {{ key }}:
                    <span class="color-white" style="margin-left: 3px"
                      >{{ `${passsenger.totalAmount}` }} x
                      {{ passsenger.total }}</span
                    >
                  </p>
                </div>
                <p class="color-pink">
                  Fare:
                  <span class="color-white" style="margin-left: 3px">{{
                    `${confirmedItinerary.baseAmount}`
                  }}</span>
                </p>
                <p class="color-pink">
                  TAXES & FEES:
                  <span class="color-white" style="margin-left: 3px">{{
                    `${confirmedItinerary.taxAmount}`
                  }}</span>
                </p>
                <hr />
                <p class="color-pink total-price-lable">Grand TOTAL</p>
                <span
                  class="color-white total-price-summry"
                  style="font-size: 22px"
                >
                  <small>{{ `${confirmedItinerary.currency}` }}</small
                  >{{ ` ${confirmedItinerary.totalAmount}` }}</span
                >
              </div>
            </div>
          </div>
        </div>
        <div class="flights-list">
          <div class="flight-box mb-2">
            <div class="Passenger-info mt-0">
              <div class="content-section">
                <div class="duble-check">
                  <div class="img">
                    <img src="../static/passport.png" alt />
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
              <div class="Passenger-info mt-2">
                <div class="heading">
                  <b>PERSONAL INFORMATION</b>
                </div>
                <div class ="row">
                  <div class ="col-lg-6 col-sm-12 form-box">
                    <div class="passenger-detail-form">
                      
                      <b-form-group label="Email Address" class="fileds">
                        <b-form-input
                          type="email"
                          class="form-control"
                          placeholder="Email Address"
                          data-vv-name="email"
                          v-validate="'required|max:190|email'"
                          v-model="data.contact.email"
                          id="email"
                          :state="errors.has('email') ? false : null"
                        ></b-form-input>
                        <b-tooltip
                          v-if="errors.has('email')"
                          :show="true"
                          triggers="focus"
                          target="email"
                          placement="bottom"
                          variant="danger"
                          >{{ errors.first("email") }}</b-tooltip
                        >
                      </b-form-group>
                      
                    </div>
                  </div>
                  <div class ="col-lg-6 col-sm-12">
                      <div class="passenger-detail-form">
                        <b-form-group label="Phone Number">
                          <b-form-input
                            type="text"
                            class="form-control"
                            data-vv-name="mobile"
                            placeholder="Phone Number"
                            v-validate="'required|max:190|numeric'"
                            v-model="data.contact.mobile"
                            id="mobile"
                            :state="errors.has('mobile') ? false : null"
                          ></b-form-input>
                          <b-tooltip
                            v-if="errors.has('mobile')"
                            :show="true"
                            triggers="focus"
                            target="mobile"
                            placement="bottom"
                            variant="danger"
                            >{{ errors.first("mobile") }}</b-tooltip
                          >
                        </b-form-group>
                      </div>
                  </div>
                  
                  

                </div>
              </div>
              <div
                class="passenger-detail-form"
                v-for="(traveler, index) in data.travellers"
                :key="index"
              >
                <div class="col-xs-12 col-sm-12">
                  <h3 class="small-title pt-2">
                    Traveler {{ `${traveler.number} - ${traveler.type}` }}
                  </h3>
                </div>
                <div class="col-xs-12 col-sm-12">
                  <div
                    class="form-block type-2 clearfix"
                    v-if="
                      confirmedItinerary['travellers'] &&
                      confirmedItinerary['travellers'][
                        $ucfirst(traveler.type)
                      ] &&
                      confirmedItinerary['travellers'][$ucfirst(traveler.type)]
                        .length > 0
                    "
                  >
                    <div class="form-label color-dark-2">Your Traveler</div>
                    <div>
                      <b-form-select
                        v-model="traveler.selected"
                        placeholder="Select a traveller"
                        @input="selectTraveller(index)"
                        class="drop-wrap drop-wrap-s-4 drop-down-list color-5"
                      >
                        <b-form-select-option
                          slot="first"
                          disabled
                          :value="undefined"
                          >Select Traveler</b-form-select-option
                        >
                        <b-form-select-option :value="-1"
                          >Add New Traveler</b-form-select-option
                        >
                        <b-form-select-option
                          v-for="(dbTraveler, key) in confirmedItinerary[
                            'travellers'
                          ][$ucfirst(traveler.type)]"
                          :key="key"
                          :value="key"
                          >{{
                            `${dbTraveler.first_name} ${dbTraveler.last_name}`
                          }}</b-form-select-option
                        >
                      </b-form-select>
                      <i class="fa fa-angle-down dropdown-icon"></i>
                    </div>
                  </div>
                </div>
                <!-- end of traveller Info -->
                <b-form-group label="Gender">
                  <b-form-select
                    :data-vv-name="`${traveler.number}${traveler.type}gender`"
                    :id="`${traveler.number}${traveler.type}gender`"
                    data-vv-as="gender"
                    v-validate="'required'"
                    aria-placeholder="Gender"
                    v-model="traveler.gender"
                    :state="
                      errors.has(`${traveler.number}${traveler.type}gender`)
                        ? false
                        : null
                    "
                    :disabled="
                      traveler.selected !== undefined || traveler.selected >= 0
                    "
                  >
                    <b-form-select-option
                      slot="first"
                      disabled
                      :value="undefined"
                      >Select Gender</b-form-select-option
                    >
                    <b-form-select-option
                      v-for="(gender, key) in genders"
                      :key="key"
                      :value="key"
                    >
                      {{ gender }}
                    </b-form-select-option>
                  </b-form-select>
                </b-form-group>
                <b-tooltip
                  v-if="errors.has(`${traveler.number}${traveler.type}gender`)"
                  :show="true"
                  triggers="focus"
                  :target="`${traveler.number}${traveler.type}gender`"
                  placement="bottom"
                  variant="danger"
                  >{{
                    errors.first(`${traveler.number}${traveler.type}gender`)
                  }}</b-tooltip
                >
                <b-form-group label="Title">
                  <b-form-select
                    :data-vv-name="`${traveler.number}${traveler.type}title`"
                    :id="`${traveler.number}${traveler.type}title`"
                    data-vv-as="title"
                    v-validate="'required'"
                    expanded
                    v-model="traveler.title"
                    :state="
                      errors.has(`${traveler.number}${traveler.type}title`)
                        ? false
                        : null
                    "
                    :disabled="
                      traveler.selected !== undefined || traveler.selected >= 0
                    "
                  >
                    <b-form-select-option
                      slot="first"
                      disabled
                      :value="undefined"
                      >Select title</b-form-select-option
                    >
                    <b-form-select-option
                      v-for="(title, key) in travellerTitles(traveler)"
                      :key="key"
                      :value="key"
                    ></b-form-select-option>
                  </b-form-select>
                </b-form-group>
                <b-tooltip
                  v-if="errors.has(`${traveler.number}${traveler.type}title`)"
                  :show="true"
                  triggers="focus"
                  :target="`${traveler.number}${traveler.type}title`"
                  placement="bottom"
                  variant="danger"
                  >{{
                    errors.first(`${traveler.number}${traveler.type}title`)
                  }}</b-tooltip
                >
                <b-form-group label="First Name">
                  <b-form-input
                    type="text"
                    placeholder="Enter Your First Name"
                    :data-vv-name="`${traveler.number}${traveler.type}first_name`"
                    :id="`${traveler.number}${traveler.type}first_name`"
                    data-vv-as="first_name"
                    v-validate="'required'"
                    v-model="traveler.firstName"
                    :state="
                      errors.has(`${traveler.number}${traveler.type}first_name`)
                        ? false
                        : null
                    "
                    :disabled="
                      traveler.selected !== undefined || traveler.selected >= 0
                    "
                  ></b-form-input>
                </b-form-group>
                <b-tooltip
                  v-if="
                    errors.has(`${traveler.number}${traveler.type}first_name`)
                  "
                  :show="true"
                  triggers="focus"
                  :target="`${traveler.number}${traveler.type}first_name`"
                  placement="bottom"
                  variant="danger"
                  >{{
                    errors.first(`${traveler.number}${traveler.type}first_name`)
                  }}</b-tooltip
                >
                <b-form-group label="Last Name">
                  <b-form-input
                    type="text"
                    class="form-control"
                    :data-vv-name="`${traveler.number}${traveler.type}last_name`"
                    :id="`${traveler.number}${traveler.type}last_name`"
                    data-vv-as="last_name"
                    v-validate="'required'"
                    placeholder="Enter Your Last Name"
                    expanded
                    v-model="traveler.lastName"
                    :state="
                      errors.has(`${traveler.number}${traveler.type}last_name`)
                        ? false
                        : null
                    "
                    :disabled="
                      traveler.selected !== undefined || traveler.selected >= 0
                    "
                  ></b-form-input>
                </b-form-group>
                <b-tooltip
                  v-if="
                    errors.has(`${traveler.number}${traveler.type}last_name`)
                  "
                  :show="true"
                  triggers="focus"
                  :target="`${traveler.number}${traveler.type}last_name`"
                  placement="bottom"
                  variant="danger"
                  >{{
                    errors.first(`${traveler.number}${traveler.type}last_name`)
                  }}</b-tooltip
                >
                <b-form-group label="Date Of Bith">
                  <b-datepicker
                    :date-formatter="(date) => $formatDate(date)"
                    :nearby-month-days="false"
                    :data-vv-name="`${traveler.number}${traveler.type}date_of_birth`"
                    data-vv-as="date of birth"
                    v-validate="'required'"
                    placeholder="Date of Birth"
                    @input="(date) => parseDate(date, index, 'dateOfBirth')"
                    :state="
                      errors.has(
                        `${traveler.number}${traveler.type}date_of_birth`
                      )
                        ? false
                        : null
                    "
                    v-model="traveler.date_of_birth"
                    :min-date="minDateofBirth(traveler.type)"
                    :max-date="maxDateofBirth(traveler.type)"
                    :date-creator="() => maxDateofBirth(traveler.type)"
                    :years-range="[-100, 10]"
                    :id="`${traveler.number}${traveler.type}date_of_birth`"
                    :disabled="
                      traveler.selected !== undefined || traveler.selected >= 0
                    "
                    class="drop-wrap drop-wrap-s-4 drop-down-list color-5"
                  ></b-datepicker>
                </b-form-group>
                <p
                  style="color: #d0291a"
                  v-if="
                    errors.has(
                      `${traveler.number}${traveler.type}date_of_birth`
                    )
                  "
                  :show="true"
                  triggers="focus"
                  :target="`${traveler.number}${traveler.type}date_of_birth`"
                  placement="bottom"
                  variant="danger"
                >
                  {{
                    errors.first(
                      `${traveler.number}${traveler.type}date_of_birth`
                    )
                  }}
                </p>
                <b-form-group label="Gender">
                  <b-form-select
                    :data-vv-name="`${traveler.number}${traveler.type}meal`"
                    :id="`${traveler.number}${traveler.type}meal`"
                    data-vv-as="meal"
                    expanded
                    :options="meals"
                    text-field="name"
                    value-field="code"
                    v-model="traveler.meal"
                    :state="
                      errors.has(`${traveler.number}${traveler.type}meal`)
                        ? false
                        : null
                    "
                  >
                    <b-form-select-option
                      slot="first"
                      disabled
                      :value="undefined"
                      >Select meal</b-form-select-option
                    >
                    <b-form-select-option value>- - -</b-form-select-option>
                  </b-form-select>
                </b-form-group>
                <b-tooltip
                  v-if="errors.has(`${traveler.number}${traveler.type}meal`)"
                  :show="true"
                  triggers="focus"
                  :target="`${traveler.number}${traveler.type}meal`"
                  placement="bottom"
                  variant="danger"
                  >{{
                    errors.first(`${traveler.number}${traveler.type}meal`)
                  }}</b-tooltip
                >
                <template v-if="traveler.passport">
                  <div class="form-box">
                    <div class="title">
                      <h5>
                        Select Nationality
                        <span>*</span>
                      </h5>
                    </div>
                    <div class="fileds">
                      <b-form-select
                        :data-vv-name="`${traveler.number}${traveler.type}nationality`"
                        :id="`${traveler.number}${traveler.type}nationality`"
                        data-vv-as="nationality"
                        v-validate="'required|max:190'"
                        expanded
                        :options="confirmedItinerary.countries"
                        text-field="nationality"
                        value-field="nationality"
                        v-model="traveler.nationality"
                        :state="
                          errors.has(
                            `${traveler.number}${traveler.type}nationality`
                          )
                            ? false
                            : null
                        "
                        :disabled="
                          traveler.selected !== undefined ||
                          traveler.selected >= 0
                        "
                        class="drop-wrap drop-wrap-s-4 drop-down-list color-5"
                      >
                        <b-form-select-option
                          slot="first"
                          disabled
                          :value="undefined"
                          >Select a passport nationality</b-form-select-option
                        >
                      </b-form-select>
                      <b-tooltip
                        v-if="
                          errors.has(
                            `${traveler.number}${traveler.type}nationality`
                          )
                        "
                        :show="true"
                        triggers="focus"
                        :target="`${traveler.number}${traveler.type}nationality`"
                        placement="bottom"
                        variant="danger"
                        >{{
                          errors.first(
                            `${traveler.number}${traveler.type}nationality`
                          )
                        }}</b-tooltip
                      >
                    </div>
                  </div>
                </template>
              </div>
              <div class="next-btn-section">
              <span
                @click="$router.push({ name: 'flightDetail' })"
                class="c-button bg-dr-blue-2 hv-dr-blue-2-o btn btn-light"
                ><span>Back</span></span
              >
              <span
                class="c-button bg-dr-blue-2 hv-dr-blue-2-o btn btn-light"
                @click.prevent="save()"
              >
                Confirm Booking
              </span>
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
import flightDetail from "@/components/flightDetail.vue";
// import flightModifySearchParams from "@/components/flightModifySearchParams.vue";

export default {
  auth: false,

  components: {
    flightDetail,
    //  flightModifySearchParams
  },

  data() {
    return {
      step: null,
      loading: false,
      notFoundError: false,
      isModifyActive: false,
      rules: {
        showModal: false,
        rules: null,
      },
      titles: {
        MR: "Mr",
        MRS: "Mrs",
        MS: "Ms",
      },
      maleTitles: {
        MR: "Mr",
        DR: "Dr",
      },
      femaleTitles: {
        MRS: "Mrs",
        MS: "Ms",
        DR: "Dr",
      },
      maleChildTitles: {
        MSTR: "Master",
      },
      femaleChildTitles: {
        MISS: "Miss",
      },
      maleInfantTitles: {
        INFANT: "Infant",
      },
      femaleInfantTitles: {
        INFANT: "Infant",
      },
      genders: {
        Male: "Male",
        Female: "Female",
      },
      data: {
        payment: "cash",
        credit: {},
        contact: {},
        travellers: [],
      },
    };
  },

  computed: {
    ...mapState("forAll", ["airlinesByKey", "airportsByKey", "meals"]),
    ...mapState("flights", ["confirmedItinerary", "bookingData"]),
    ...mapGetters({ params: "forAll/getSearchParams" }),
  },

  created() {
    if (process.env.NODE_ENV != "production" && process.env.CACHE == "true") {
      let confirmation = JSON.parse(localStorage.getItem("confirmedItinerary"));
      this.$store.commit("flights/setConfirmedItinerary", confirmation);
    }
    if (!this.confirmedItinerary) {
      return this.redirect();
    }
    if (this.confirmedItinerary.email) {
      this.data.contact.email = this.confirmedItinerary.email;
    }
    if (this.bookingData) {
      let travellers = [...this.bookingData.travellers];
      let contact = { ...this.bookingData.contact };
      let payment = this.bookingData.payment;
      for (var index in travellers) {
        travellers[index]["passport_expiration_date"] = new Date(
          travellers[index]["passport_expiration_date"]
        );
        travellers[index]["date_of_birth"] = new Date(
          travellers[index]["date_of_birth"]
        );
      }
      if (this.bookingData.credit) {
        this.data.credit = this.bookingData.credit;
      }
      this.data.travellers = travellers;
      this.data.contact = contact;
      this.data.payment = payment;
    } else {
      this.travelerDetail();
    }

    this.data.destinations = this.confirmedItinerary.segments;
  },

  methods: {
    ...mapMutations("flights", ["setBookingData"]),

    minDateofBirth(type) {
      var date = new Date();
      var year = 0;
      switch (type) {
        case "adult":
          return null;
          break;
        case "child":
          year = 12;
          break;
        case "infant":
          year = 2;
          break;
      }
      date.setFullYear(date.getFullYear() - year);
      return date;
    },

    maxDateofBirth(type) {
      var date = new Date();
      var year = 0;
      switch (type) {
        case "adult":
          year = 17;
          break;
        case "child":
          year = 2;
          break;
      }
      date.setFullYear(date.getFullYear() - year);
      return date;
    },

    formatCreditDate(value) {
      value = new Date(value);
      value = `${this.$months(value.getMonth())} ${value.getFullYear()}`;
      return value;
    },

    parseCreditDate(date) {
      this.data.credit.creditCardExpiry = `${date.getFullYear()}-${this.$isoDate(
        date.getMonth() + 1
      )}-${this.$isoDate(date.getDate())}`;
    },

    parseDate(date, index, key) {
      if (key === "dateOfBirth") {
        this.parseDocDate(date, index, "passportDateOfBirth");
      }
      date = `${date.getFullYear()}-${this.$isoDate(
        date.getMonth() + 1
      )}-${this.$isoDate(date.getDate())}`;
      this.data.travellers[index][key] = date;
    },

    parseDocDate(date, index, key) {
      date = new Date(date);
      date = `${this.$isoDate(date.getDate())}${this.$months(
        date.getMonth()
      )}${date.getFullYear().toString().substring(2)}`;
      this.data.travellers[index][key] = date;
    },

    selectTraveller(index) {
      if (this.data.travellers[index].selected >= 0) {
        let selected =
          this.confirmedItinerary["travellers"][
            this.$ucfirst(this.data.travellers[index].type)
          ][this.data.travellers[index].selected];

        this.data.travellers[index]["gender"] = selected["gender"];
        this.data.travellers[index]["title"] = selected["title"].toUpperCase();

        this.data.travellers[index]["firstName"] = selected["first_name"];
        this.data.travellers[index]["firstName"] = selected["first_name"];
        this.data.travellers[index]["lastName"] = selected["last_name"];
        this.data.travellers[index]["dateOfBirth"] = selected["date_of_birth"];
        this.data.travellers[index]["date_of_birth"] = new Date(
          selected["date_of_birth"]
        );
        if (selected["bookedtraveller_passport"]) {
          this.data.travellers[index]["passport"] = true;
          this.data.travellers[index]["passportIssuingCountry"] =
            selected["bookedtraveller_passport"]["issuing_country"][
              "en_short_name"
            ];
          this.data.travellers[index]["passportNo"] =
            selected["bookedtraveller_passport"]["number"];
          this.data.travellers[index]["nationality"] =
            selected["bookedtraveller_passport"]["nationality_country"][
              "nationality"
            ];
          this.data.travellers[index]["passportExpirationDate"] =
            selected["bookedtraveller_passport"]["expiry_date"];
          this.data.travellers[index]["passport_expiration_date"] = new Date(
            selected["bookedtraveller_passport"]["expiry_date"]
          );
        } else {
          this.data.travellers[index]["passport"] = null;
          this.data.travellers[index]["passportIssuingCountry"] = null;
          this.data.travellers[index]["passportNo"] = null;
          this.data.travellers[index]["nationality"] = null;
          this.data.travellers[index]["passportExpirationDate"] = null;
          this.data.travellers[index]["passport_expiration_date"] = null;
        }
      } else {
        this.data.travellers[index]["selected"] = undefined;
        this.data.travellers[index]["number"] =
          this.data.travellers[index].number;
        this.data.travellers[index]["type"] = this.data.travellers[index].type;

        this.data.travellers[index]["gender"] = null;
        this.data.travellers[index]["title"] = null;
        this.data.travellers[index]["firstName"] = null;
        this.data.travellers[index]["firstName"] = null;
        this.data.travellers[index]["lastName"] = null;
        this.data.travellers[index]["dateOfBirth"] = null;
        this.data.travellers[index]["date_of_birth"] = null;
        if (this.data.travellers[index]["passport"]) {
          this.data.travellers[index]["passport"] = null;
          this.data.travellers[index]["passportIssuingCountry"] = null;
          this.data.travellers[index]["passportNo"] = null;
          this.data.travellers[index]["nationality"] = null;
          this.data.travellers[index]["passportExpirationDate"] = null;
          this.data.travellers[index]["passport_expiration_date"] = null;
        }
      }

      // this.travellers[index] = { ...this.travellers[index].selected };
    },

    redirect() {
      this.$router.push({ name: "flights" });
    },

    save() {
      this.$validator.validate().then((result) => {
        if (result) {
          this.loading = true;
          if (this.data.payment === "cash") {
            delete this.data.credit;
          }
          this.setBookingData(this.data);
          if (
            process.env.NODE_ENV != "production" &&
            process.env.CACHE == "true"
          ) {
            localStorage.setItem("bookingData", JSON.stringify(this.data));
            this.$store.commit("flights/setBookingData", this.data);
          }
          return this.$router.push({ name: "confirmbooking" });
        } else {
          this.$root.$bvToast.toast("Provided data is not valid", {
            title: "GALA TRAVEL!",
            variant: "danger",
            solid: true,
            toaster: "b-toaster-top-center",
          });
        }
      });
    },

    travellerTitles(traveller) {
      if (traveller.type === "adult") {
        if (traveller.gender === "Male") {
          return this.maleTitles;
        }
        if (traveller.gender === "Female") {
          return this.femaleTitles;
        }
      } else if (traveller.type === "child") {
        if (traveller.gender === "Male") {
          return this.maleChildTitles;
        }
        if (traveller.gender === "Female") {
          return this.femaleChildTitles;
        }
      } else if (traveller.type === "infant") {
        if (traveller.gender === "Male") {
          return this.maleInfantTitles;
        }
        if (traveller.gender === "Female") {
          return this.femaleInfantTitles;
        }
      }
      return this.titles;
    },

    weight(weight) {
      let formatedWeight;
      if (weight["quantity"] !== undefined) {
        formatedWeight = `${weight["quantity"]} PC`;
      } else if (
        weight["weight"] !== undefined &&
        weight["weightUnit"] !== undefined
      ) {
        formatedWeight = `${weight["weight"]} ${weight["weightUnit"]}`;
      } else {
        formatedWeight = "";
      }
      return formatedWeight;
    },

    travelerDetail() {
      let travellers = [];
      let number = 1;
      for (var passenger in this.confirmedItinerary["passengers"]) {
        let traveler = {};
        let total = this.confirmedItinerary["passengers"][passenger].total;
        for (var i = 1; i <= total; i++) {
          traveler = { number, type: passenger };
          travellers.push(traveler);
          number++;
        }
      }
      this.data.travellers = travellers;
    },
  },
};
</script>