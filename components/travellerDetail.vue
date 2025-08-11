<template>
  <div>
    <div class="Passenger-info mt-2">
      <div
        class="passenger-detail-form"
        v-for="(traveler, index) in data.travellers"
        :key="index"
      >
        <div class="heading">
          <b>Passenger {{ `${index+1} - ${traveler.type}` }}</b>
          <span v-if="traveler.type == 'adult'">Adult (12 years and older)</span>
        </div>

        <div class="row">
          <div class="col-lg-6 col-sm-12">
            <div class="form-box">
              <div class="title">
                <h5>
                  Gender
                  <span>*</span>
                </h5>
              </div>
              <div class="fileds">
                <b-form-select
                  class="select"
                  :expanded="true"
                  v-model="traveler.gender"
                  label="Select"
                  :disabled="
                    traveler.selected !== undefined || traveler.selected >= 0
                  "
                  :data-vv-name="`${traveler.number}${traveler.type}gender`"
                  :id="`${traveler.number}${traveler.type}gender`"
                  data-vv-as="Gender"
                  v-validate="'required'"
                  :state="
                    errors.has(`${traveler.number}${traveler.type}gender`)
                      ? false
                      : null
                  "
                >
                  <b-form-select-option :value="undefined" slot="first" disabled
                  >Select
                  </b-form-select-option
                  >
                  <b-form-select-option value="Male">Male</b-form-select-option>
                  <b-form-select-option value="Female">Female</b-form-select-option>
                </b-form-select>
                <b-tooltip
                  v-if="errors.has(`${traveler.number}${traveler.type}gender`)"
                  :show="true"
                  triggers="focus"
                  :target="`${traveler.number}${traveler.type}gender`"
                  placement="bottom"
                  variant="danger"
                >{{
                  errors.first(`${traveler.number}${traveler.type}gender`)
                  }}
                </b-tooltip
                >
              </div>
            </div>
          </div>
          <!--          <div>{{traveler.type}}</div>-->
          <div class="col-lg-6 col-sm-12">
            <div class="form-box">
              <div class="title">
                <h5>
                  Title
                  <span>*</span>
                </h5>
              </div>
              <!--              <div v-for="b in traveler">{{b}}</div>-->
              <div class="fileds">
                <b-form-group style="width: 100%">
                  <b-form-select
                    :expanded="true"
                    :id="`${traveler.number}${traveler.type}title`"
                    :data-vv-name="`${traveler.number}${traveler.type}title`"
                    data-vv-as="Title"
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
                    class="drop-wrap drop-wrap-s-4 drop-down-list color-5 select"
                  >
                    <b-form-select-option
                      slot="first"
                      disabled
                      :value="undefined"
                    >Select title
                    </b-form-select-option
                    >
                    <b-form-select-option
                      v-for="(title, key) in travellerTitles(traveler)"
                      :key="key"
                      :value="key"
                    >{{ title }}
                    </b-form-select-option
                    >
                  </b-form-select>
                  <b-tooltip
                    v-if="errors.has(`${traveler.number}${traveler.type}title`)"
                    :show="true"
                    triggers="focus"
                    :target="`${traveler.number}${traveler.type}title`"
                    placement="bottom"
                    variant="danger"
                  >{{
                    errors.first(`${traveler.number}${traveler.type}title`)
                    }}
                  </b-tooltip
                  >
                </b-form-group>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6 col-sm-12">
            <div class="form-box">
              <div class="title">
                <h5>
                  First Name
                  <span>*</span>
                </h5>
              </div>
              <div class="fileds">
                <b-form-group style="width: 100%">
                  <b-form-input
                    placeholder="Enter Your First Name"
                    :data-vv-name="`${traveler.number}${traveler.type}first_name`"
                    :id="`${traveler.number}${traveler.type}first_name`"
                    data-vv-as="First Name"
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
                    class="form-control input"
                  >
                  </b-form-input>
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
                    errors.first(
                    `${traveler.number}${traveler.type}first_name`
                    )
                    }}
                  </b-tooltip
                  >
                </b-form-group>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-sm-12">
            <div class="form-box">
              <div class="title">
                <h5>
                  Last Name
                  <span>*</span>
                </h5>
              </div>
              <div class="fileds">
                <b-form-group style="width: 100%">
                  <b-form-input
                    :data-vv-name="`${traveler.number}${traveler.type}last_name`"
                    :id="`${traveler.number}${traveler.type}last_name`"
                    data-vv-as="Last Name"
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
                    class="form-control input"
                  >
                  </b-form-input>
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
                    errors.first(
                    `${traveler.number}${traveler.type}last_name`
                    )
                    }}
                  </b-tooltip
                  >
                </b-form-group>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6 col-sm-12">
            <div class="form-box">
              <div class="title">
                <h5>
                  Date of birth
                  <span>*</span>
                </h5>
              </div>
              <div class="fileds">
                <b-datepicker
                  :date-creator="() => maxDateofBirth(traveler.type)"
                  :focused-date="maxDateofBirth(traveler.type)"
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
                  :years-range="[-100, 10]"
                  :id="`${traveler.number}${traveler.type}date_of_birth`"
                  :disabled="
                    traveler.selected !== undefined || traveler.selected >= 0
                  "
                  class="drop-wrap drop-wrap-s-4 drop-down-list color-5"
                ></b-datepicker>
                <b-tooltip
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
                >{{
                  errors.first(
                  `${traveler.number}${traveler.type}Date of birth`
                  )
                  }}
                </b-tooltip
                >
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-sm-12">
            <div class="form-box">
              <div class="title">
                <h5>
                  Select Meal
                  <span>*</span>
                </h5>
              </div>
              <div class="fileds">
                <b-form-select
                  :data-vv-name="`${traveler.number}${traveler.type}meal`"
                  :id="`${traveler.number}${traveler.type}meal`"
                  data-vv-as="Meal"
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
                  class="drop-wrap drop-wrap-s-4 drop-down-list color-5 select"
                >
                  <b-form-select-option slot="first" disabled :value="undefined"
                  >Select meal
                  </b-form-select-option
                  >
                </b-form-select>
                <b-tooltip
                  v-if="errors.has(`${traveler.number}${traveler.type}meal`)"
                  :show="true"
                  triggers="focus"
                  :target="`${traveler.number}${traveler.type}meal`"
                  placement="bottom"
                  variant="danger"
                >{{
                  errors.first(`${traveler.number}${traveler.type}meal`)
                  }}
                </b-tooltip
                >
              </div>
            </div>
          </div>
        </div>
        <div class="row">
<!--          <div class="col-lg-6 col-sm-12">-->
<!--            <div class="form-box">-->
<!--              <div class="title">-->
<!--                <h5></h5>-->
<!--              </div>-->
<!--              <div class="fileds">-->
<!--                <div>-->
<!--                  <b-form-checkbox> Request Wheel Chair</b-form-checkbox>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
          <div class="col-lg-6 col-sm-12">
            <div class="form-box">
              <div class="title"></div>
              <div class="fileds">
                <div>
                  <b-form-checkbox @change="isOpen=!isOpen">
                    ID/Passport Detail
                  </b-form-checkbox>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="slide-down" v-if="isOpen">
          <div class="row">
            <div class="col-lg-6 col-sm-12">
              <div class="form-box">
                <div class="title">
                  <h5>Expiry date</h5>
                </div>
                <div class="fileds">
                  <b-datepicker
                    :date-formatter="(date) => $formatDate(date)"
                    :nearby-month-days="false"
                    :data-vv-name="`${traveler.number}${traveler.type}passport_expiration_date`"
                    data-vv-as="passport expiry date"
                    v-validate="'required'"
                    :mobile-native="false"
                    placeholder="Passport or ID Number Expiry date"
                    v-model="traveler.passport_expiration_date"
                    @input="
                              (date) =>
                                parseDate(date, index, 'passportExpirationDate')
                            "
                    :years-range="[-100, 10]"
                    :min-date="new Date()"
                    :ref="`passport_expiration_date${traveler.number}`"
                    :disabled="
                              traveler.selected !== undefined ||
                              traveler.selected >= 0
                            "
                    class="drop-wrap drop-wrap-s-4 drop-down-list color-5"
                  ></b-datepicker>
                  <b-tooltip
                    v-if="
                              errors.has(
                                `${traveler.number}${traveler.type}passport_expiration_date`
                              )
                            "
                    :show="true"
                    triggers="focus"
                    :target="`${traveler.number}${traveler.type}passport_expiration_date`"
                    placement="bottom"
                    variant="danger"
                  >{{
                    errors.first(
                    `${traveler.number}${traveler.type}passport_expiration_date`
                    )
                    }}
                  </b-tooltip
                  >
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-sm-12">
              <div class="form-box">
                <div class="title">
                  <h5>Passport No</h5>
                </div>
                <div class="fileds">
                  <b-form-input
                    :data-vv-name="`${traveler.number}${traveler.type}passportNo`"
                    :id="`${traveler.number}${traveler.type}passportNo`"
                    data-vv-as="passportNo"
                    v-validate="'required|max:20'"
                    v-model="traveler.passportNo"
                    placeholder="Passport No"
                    :state="
                              errors.has(
                                `${traveler.number}${traveler.type}passportNo`
                              )
                                ? false
                                : null
                            "
                    :disabled="
                              traveler.selected !== undefined ||
                              traveler.selected >= 0
                            "
                    class="drop-wrap drop-wrap-s-4 drop-down-list color-5 form-control input form-control"
                  >
                  </b-form-input>
                  <b-tooltip
                    v-if="
                              errors.has(
                                `${traveler.number}${traveler.type}passportNo`
                              )
                            "
                    :show="true"
                    triggers="focus"
                    :target="`${traveler.number}${traveler.type}passportNo`"
                    placement="bottom"
                    variant="danger"
                  >{{
                    errors.first(
                    `${traveler.number}${traveler.type}passportNo`
                    )
                    }}
                  </b-tooltip
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6 col-sm-12">
              <div class="form-box">
                <div class="title">
                  <h5>Nationality</h5>
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
                    class="drop-wrap drop-wrap-s-4 drop-down-list color-5 select custom-select"
                  >
                    <b-form-select-option
                      slot="first"
                      disabled
                      :value="undefined"
                    >Select a passport
                      nationality
                    </b-form-select-option
                    >
                    <!--                    <option-->
                    <!--                      v-for="country in countries"-->
                    <!--                      :value="country.alpha_2_code"-->
                    <!--                    >Select a passport-->
                    <!--                      {{country.nationality}}-->
                    <!--                    </option-->
                    <!--                    >-->

                    <option
                      v-for="country in countries"
                      :value="country.alpha_2_code"
                    >
                      <!--                      :key="option.id"-->
                      {{ country.nationality}}
                    </option>
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
                    }}
                  </b-tooltip
                  >
                </div>
              </div>
            </div>
<!--            <div class="col-lg-6 col-sm-12">-->
<!--              <div class="form-box">-->
<!--                <div class="title">-->
<!--                  <h5>Issuing Country</h5>-->
<!--                </div>-->
<!--                <div class="fileds">-->
<!--                  <b-form-select-->
<!--                    :data-vv-name="`${traveler.number}${traveler.type}passportIssuingCountry`"-->
<!--                    :id="`${traveler.number}${traveler.type}passportIssuingCountry`"-->
<!--                    data-vv-as="passportIssuingCountry"-->
<!--                    v-validate="'required|max:20'"-->
<!--                    expanded-->
<!--                    :options="confirmedItinerary.countries"-->
<!--                    text-field="en_short_name"-->
<!--                    value-field="en_short_name"-->
<!--                    v-model="traveler.passportIssuingCountry"-->
<!--                    :state="-->
<!--                              errors.has(-->
<!--                                `${traveler.number}${traveler.type}passportIssuingCountry`-->
<!--                              )-->
<!--                                ? false-->
<!--                                : null-->
<!--                            "-->
<!--                    :disabled="-->
<!--                              traveler.selected !== undefined ||-->
<!--                              traveler.selected >= 0-->
<!--                            "-->
<!--                    class="drop-wrap drop-wrap-s-4 drop-down-list color-5 select custom-select"-->
<!--                  >-->
<!--                    <b-form-select-option-->
<!--                      slot="first"-->
<!--                      disabled-->
<!--                      :value="undefined"-->
<!--                    >Select a passport issuing-->
<!--                      country-->
<!--                    </b-form-select-option-->
<!--                    >-->
<!--                  </b-form-select>-->
<!--                  <b-tooltip-->
<!--                    v-if="-->
<!--                              errors.has(-->
<!--                                `${traveler.number}${traveler.type}passportIssuingCountry`-->
<!--                              )-->
<!--                            "-->
<!--                    :show="true"-->
<!--                    triggers="focus"-->
<!--                    :target="`${traveler.number}${traveler.type}passportIssuingCountry`"-->
<!--                    placement="bottom"-->
<!--                    variant="danger"-->
<!--                  >{{-->
<!--                    errors.first(-->
<!--                    `${traveler.number}${traveler.type}passportIssuingCountry`-->
<!--                    )-->
<!--                    }}-->
<!--                  </b-tooltip-->
<!--                  >-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
          </div>
        </div>
      </div>
    </div>
    <div class="Passenger-info mt-2">
      <div class="heading">
        <b>Contact details</b>
        <span>Booker</span>
      </div>
      <div class="passenger-email-form">
        <div class="row">
          <div class="col-lg-6 col-sm-12">
            <div class="form-box">
              <div class="title">
                <h5>
                  Email
                  <span>*</span>
                </h5>
              </div>
              <div class="fileds">
                <b-form-group style="width: 100%">
                  <b-form-input
                    type="email"
                    class="form-control input"
                    data-vv-name="email"
                    placeholder="Email Address"
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
                  >{{ errors.first("email") }}
                  </b-tooltip
                  >
                </b-form-group>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-sm-12">
            <div class="form-box">
              <div class="title">
                <h5>
                  Mobile No
                  <span>*</span>
                </h5>
              </div>
              <div class="fileds">
                <b-form-group style="width: 100%">
                  <b-form-input
                    type="text"
                    class="form-control input"
                    data-vv-name="mobile"
                    data-vv-as="Mobile"
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
                  >{{ errors.first("mobile") }}
                  </b-tooltip
                  >
                </b-form-group>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="">
        <div class="next-btn-section">
          <nuxt-link to="/flights">
            <button class="btn btn-light">Back</button>
          </nuxt-link>
          <button class="btn btn-light" @click.prevent="save">Next</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapState, mapGetters, mapMutations} from "vuex";
  import Data from '@/assets/Data.json';

  export default {
    auth: false,

    data() {
      return {
        countries:[],
        totalTravelers: [],
        isOpen: false,
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
          // DR: "Dr",
        },
        femaleTitles: {
          MRS: "Mrs",
          MS: "Ms",
          // DR: "Dr",
        },
        maleChildTitles: {
          MR: "Mr",
        },
        femaleChildTitles: {
          MS: "Ms",
        },
        maleInfantTitles: {
          MR: "Mr",
        },
        femaleInfantTitles: {
          MS: "Ms",
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
        personalData: {
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
      ...mapState('flights', {
        segmentsPricing: 'segmentsPricing',
      }),
      ...mapGetters({params: "forAll/getSearchParams"}),
    },

    created() {
      this.generateTraveler();

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
        let contact = {...this.bookingData.contact};
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
        // this.travelerDetail();
      }

      // this.generateTravelersArr()
      this.data.destinations = this.confirmedItinerary.segments;
      this.countries=Data.countries;

    },

    methods: {
      ...mapMutations("flights", ["setBookingData"]),
      getNextDay(){
        let date = new Date();
        date.setDate(date.getDate() + 1);
        return date
      },
      generateTraveler() {
        let number = 1;
        let Travelers = this.segmentsPricing[0].PTC_FareBreakdowns.PTC_FareBreakdown
        Travelers.forEach((item, index) => {
          for (let i = 0; i < item.PassengerTypeQuantity.Quantity; i++) {
            number++
            this.totalTravelers.push({
              type: this.convertPassengerType(item.PassengerTypeQuantity.Code),
              price: item.PassengerFare.TotalFare.Amount,
              number: number,
              passport_expiration_date:'',
            })
          }
        })

        // alert('hlw')
        // console.log('data', this.personalData)
        // console.log(number)
        this.data.travellers=this.totalTravelers;
      },
      changeCollapse(index){
        let old = this.isOpen
        if(old[index] == '1'){
          old[index] = '0'
          // this.isOpen[1] = '0'
        }else{
          old[index] = '1'
        }
        this.isOpen = old
        console.log(old)
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
      travellerTitles(traveller) {
        // alert(traveller.gender)
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
            year = 12;
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
        // if (key === "dateOfBirth") {
          this.parseDocDate(date, index, key);
        // }
        // date = `${date.getFullYear()}-${this.$isoDate(
        //   date.getMonth() + 1
        // )}-${this.$isoDate(date.getDate())}`;
        // this.data.travellers[index][key] = date;
        // this.personalData.travellers[index][key] = date;
      },

      parseDocDate(date, index, key) {
        date = new Date(date);
        // date = `${this.$isoDate(date.getDate())}${this.$months(
        //   date.getMonth()
        // )}${date.getFullYear().toString().substring(2)}`;
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
        this.$router.push({name: "flights"});
      },

      save() {
        this.$validator.validate().then((result) => {
          if (result) {
            console.log('data', this.data)
            this.loading = true;
            if (this.data.payment === "cash") {
              delete this.data.credit;
            }
            this.setBookingData(this.data);
            if (
              process.env.NODE_ENV != "production" &&
              process.env.CACHE == "true"
            ) {
              console.log("data", this.data);
              localStorage.setItem("bookingData", JSON.stringify(this.data));
              this.$store.commit("flights/setBookingData", this.data);
            }
            console.log(this.data)
            return this.$router.push({name: "paymentmathod"});
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

      // travelerDetail() {
      //   let travellers = [this.confirmedItinerary];
      //   let number = 1;
      //   console.log()
      //   for (var passenger in this.confirmedItinerary["passengers"]) {
      //     let traveler = {};
      //     let total = this.confirmedItinerary["passengers"][passenger].total;
      //     for (var i = 1; i <= total; i++) {
      //       traveler = {number, type: passenger};
      //       travellers.push(traveler);
      //       number++;
      //     }
      //   }
      //   this.data.travellers = travellers;
      // },
    },
  };
</script>
