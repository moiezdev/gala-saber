<template>
  <div v-if="PakageDetails" class="container-fluid flight-list-body">
    <div class="height-38"></div>
    <div class="flights-page">
      <div class="flights-heading">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
          <path class="elementor-shape-fill" opacity="0.33" d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"></path>
          <path class="elementor-shape-fill" opacity="0.66" d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"></path>
          <path class="elementor-shape-fill" d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"></path>
        </svg>
        <div class="container pb-3 pt-1">
          <div class="flights-modify-section">
            <div class="left">
              <div class="flight-top-section">
                <h1>{{PakageDetails.name}}</h1>
              </div>
              <h5>{{PakageDetails.day != '' ? PakageDetails.day+' DAYS': ''}} {{PakageDetails.night != '' ? '& '
                +PakageDetails.night+' NIGHTS': ''}}</h5>
            </div>
            <div>
              <div class="right">
                <button @click="$router.back()" class="btn btn-primary">Back</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container pt-3 pb-0">
        <div class="flight-listing your-flight-outer mb-4">
          <div class="filter2">
            <div class="fare-summ">
              <div class="lable">
                <h4>Fare Summary</h4>
              </div>
              <div class="price-section">
                <div>
                  <b>Tour Name:</b>
                </div>
                <div>
                  <span>{{PakageDetails.name}}</span>
                </div>
              </div>
              <div v-for="(day, index) in PakageDetails.days" class="price-section">
                <div>
                  <b>Day {{index + 1}} at:</b>
                </div>
                <div>
                  <span>{{day.location}}</span>
                </div>
              </div>
              <div class="price-section">
                <div>
                  <b>Tour Duration:</b>
                </div>
                <div>
                  <span>{{PakageDetails.day != '' ? PakageDetails.day+' DAYS': ''}} {{PakageDetails.night != '' ? '& ' +PakageDetails.night+' NIGHTS': ''}}</span>
                </div>
              </div>

              <div class="total">
                <div class="pax-no-section">
                  <div>
                    <b>Number of Passenger:</b>
                  </div>
                  <div>
                    <span>300 x {{data.length}}</span>
                  </div>
                </div>
                <div class="price-section">

                  <div>
                    <b>GRAND TOTAL</b>
                  </div>
                  <div>
                    <span>
                      <small>BHD</small> {{PakageDetails.price*data.length}}
                      <!-- <sup>.29</sup> -->
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flights-list">
            <div class="flight-box mb-2">
              <div class="Passenger-info mt-0">
                <div class="content-section">
                  <div class="duble-check">
                    <!--<div class="img">
                      <img src="../static/information.png" alt />
                    </div>-->
                    <div class="text-section">
                      <h5>Double check your personal details</h5>
                      <h6>
                        If the details are not correct, the passenger might be denied boarding.
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div class="Passenger-info mt-0">
                <div class="heading">
                  <b>Your Persnol Information</b>
                </div>

                <div class="passenger-detail-form">
                  <div v-for="(passenger,index) in this.data">
                    <h3 class="">Person {{index+1}}</h3>
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
                            <select id="1adultgender" class="select" v-model="data[index].contact.gender">
                              <option value="">Select</option>
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-6 col-sm-12">
                        <div class="form-box">
                          <div class="title">
                            <h5>
                              Title
                              <span>*</span>
                            </h5>
                          </div>
                          <div class="fileds">
                            <select id="1title" class="select" v-model="data[index].contact.title">
                              <option value="">Select</option>
                              <option value="MR">Mr</option>
                              <option value="MS">Ms</option>
                              <option value="MRS">Mrs</option>
                            </select>
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
                                data-vv-name="first_name"
                                placeholder="First Name"
                                v-validate="'required|max:190'"
                                class="form-control input"
                                v-model="data[index].contact.first_name"
                                id="first_name"
                                :state="errors.has('first_name') ? false : null"
                              ></b-form-input>
                              <b-tooltip
                                v-if="errors.has('first_name')"
                                :show="true"
                                triggers="focus"
                                target="first_name"
                                placement="bottom"
                                variant="danger"
                              >{{ errors.first("first_name") }}
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
                                data-vv-name="last_name"
                                placeholder="Last Name"
                                v-validate="'required|max:190'"
                                class="form-control input"
                                type="text"
                                v-model="data[index].contact.last_name"
                                id="last_name"
                                :state="errors.has('last_name') ? false : null"
                              ></b-form-input>
                              <b-tooltip
                                v-if="errors.has('last_name')"
                                :show="true"
                                triggers="focus"
                                target="last_name"
                                placement="bottom"
                                variant="danger"
                              >{{ errors.first("last_name") }}
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
                              Date of Birth
                              <span>*</span>
                            </h5>
                          </div>
                          <div class="fileds">
                            <b-datepicker
                              :date-formatter="(date) => $formatDate(date)"
                              data-vv-as="date of birth"
                              v-validate="'required'"
                              placeholder="Date of Birth"
                              v-model="data[index].contact.date_of_birth"
                              class="drop-wrap drop-wrap-s-4 drop-down-list color-5"
                            ></b-datepicker>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-6 col-sm-12 d-flex align-items-center">
                        <div class="form-box addPerson-btns">
                          <div class="title">
                            <h5></h5>
                          </div>
                          <div class="fileds">
                            <div class="ml-2 row">
                              <b-form-checkbox class="user-select-none col-5 find justify-content-end find d-flex align-items-center">Wheel Chair</b-form-checkbox>
                              <div class="col-7 justify-content-end find d-flex align-items-center">
                                <span v-if="index+1 == passengers">Add Pax</span>
                                <button class="btn btn-success m-0 arrow ml-2" v-if="index+1 == passengers"
                                        @click="addPerson()">

                                  <i class="fa fa-plus"></i></button>
                                <button class="btn btn-danger m-0 arrow pl-3 pr-3 ml-1" v-if="passengers > 1"
                                        @click="deletePerson(index)">
                                  <i class="fa fa-close p-0"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
<!--                  <div class="row">-->
<!--                    <div class="col-lg-6 add-button d-flex justify-content-end offset-lg-6 col-sm-12">-->
<!--                      <div class="fileds me-3 d-block">-->
<!--                        <button class="btn btn-light m-0 arrow pl-5 pr-5" @click="addPerson()">-->
<!--                          <span> Add Person</span>-->
<!--                          <i class="fa fa-plus"></i>-->
<!--                        </button>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </div>-->
                  <!--                  <div class="slide-down" v-if="isOpen">-->
                  <!--                    <div class="row">-->
                  <!--                      <div class="col-lg-6 col-sm-12">-->
                  <!--                        <div class="form-box">-->
                  <!--                          <div class="title">-->
                  <!--                            <h5>Nationality</h5>-->
                  <!--                          </div>-->
                  <!--                          <div class="fileds">-->
                  <!--                            <select class="select" name id>-->
                  <!--                              <option :value="undefined">Select a Passport Nationality</option>-->
                  <!--                              <option :value="undefined">-&#45;&#45;</option>-->
                  <!--                              <option :value="undefined">-&#45;&#45;</option>-->
                  <!--                            </select>-->
                  <!--                          </div>-->
                  <!--                        </div>-->
                  <!--                      </div>-->
                  <!--                      <div class="col-lg-6 col-sm-12">-->
                  <!--                        <div class="form-box">-->
                  <!--                          <div class="title">-->
                  <!--                            <h5>Passport No</h5>-->
                  <!--                          </div>-->
                  <!--                          <div class="fileds">-->
                  <!--                            <input-->
                  <!--                              type="text"-->
                  <!--                              class="form-control input"-->
                  <!--                              placeholder="Passport No"-->
                  <!--                            />-->
                  <!--                          </div>-->
                  <!--                        </div>-->
                  <!--                      </div>-->
                  <!--                    </div>-->
                  <!--                    <div class="row">-->
                  <!--                      <div class="col-lg-6 col-sm-12">-->
                  <!--                        <div class="form-box">-->
                  <!--                          <div class="title">-->
                  <!--                            <h5>Expiry date</h5>-->
                  <!--                          </div>-->
                  <!--                          <div class="fileds">-->
                  <!--                            <input-->
                  <!--                              type="text"-->
                  <!--                              class="form-control input"-->
                  <!--                              placeholder="Passport or ID Number Expiry date"-->
                  <!--                            />-->
                  <!--                          </div>-->
                  <!--                        </div>-->
                  <!--                      </div>-->
                  <!--                      <div class="col-lg-6 col-sm-12">-->
                  <!--                        <div class="form-box">-->
                  <!--                          <div class="title">-->
                  <!--                            <h5>Issuing Country</h5>-->
                  <!--                          </div>-->
                  <!--                          <div class="fileds">-->
                  <!--                            <select class="select" name id>-->
                  <!--                              <option :value="undefined">Select a Passport Issuing Country</option>-->
                  <!--                              <option :value="undefined">Female</option>-->
                  <!--                            </select>-->
                  <!--                          </div>-->
                  <!--                        </div>-->
                  <!--                      </div>-->
                  <!--                    </div>-->
                  <!--                  </div>-->
                </div>
                <div class="Passenger-info mt-0">
                  <div class="heading">
                    <b>CONTACT DETAILS</b>
                  </div>
                  <div class="passenger-detail-form">
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
                                data-vv-name="email"
                                placeholder="Email Address"
                                v-validate="'required|max:190|email'"
                                class="form-control input"
                                type="text"
                                v-model="data[0].contact.email"
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
                              Phone
                              <span>*</span>
                            </h5>
                          </div>
                          <div class="fileds">
                            <b-form-group style="width: 100%">
                              <b-form-input
                                data-vv-name="mobile"
                                placeholder="Phone Number"
                                v-validate="'max:190|numeric|min:8'"
                                class="form-control input"
                                v-model="data[0].contact.mobile"
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
                </div>
                <div class="next-btn-section">
                  <!-- <router-link to={}  class="search-button-outer"> -->
                  <button @click="$router.back()" class="btn btn-light">Back</button>
                  <button @click="bookPackage()" class="btn btn-light">Confirm Booking</button>
                  <!-- </router-link> -->
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- flight-detail-section -->
    <b-sidebar
      id="sidebar-backdrop"
      class="flight-detail-bar"
      :backdrop-variant="variant"
      backdrop
      right
      shadow
      title="Flight Detail"
    >
      <div class="flight-detail-fare-section">
        <div class="button-box">
          <div class="price">
            <small>BHD</small>
            <span>2,496</span>
            <sup>.75</sup>
            <h6>Per Person</h6>
            <div class="book-btn">
              <router-link :to="{name: 'flightDetail'}" class="search-button-outer">
                <button class="btn btn-dark">
                  Book this Flight
                  <i class="fa fa-arrow-right"></i>
                </button>
              </router-link>
            </div>
          </div>
        </div>
        <div class="luggage-detail">
          <div>
            <span class="mdi mdi-briefcase-check"></span>
          </div>
          <div>
            <span>
              30kg
              Luggage
            </span>
          </div>
          <div>
            <span class="mdi mdi-ticket-confirmation"></span>
          </div>
          <div>
            <span>Economy</span>
          </div>
        </div>
        <div class="outbound">
          <div class="icon">
            <span class="mdi mdi-airplane mdi-rotate-90"></span>
          </div>
          <div class="text">
            <h5>Outbound, We 05 Aug</h5>
            <span>Duration: 13h15m</span>
          </div>
        </div>
        <div class="flight-full-summary">
          <div class="time">
            <div>
              <strong>03:10</strong>
              <h6>05 Aug</h6>
            </div>
            <div>
              <strong>03:10</strong>
              <h6>05 Aug</h6>
            </div>
          </div>
          <div class="center-line">
            <div class="x-line-dot"></div>
            <div class="x-line"></div>
            <div class="x-line-dot"></div>
          </div>
          <div class="your-flight">
            <strong>Lahore</strong>
            <h6>(LHE), Pakistan</h6>
            <div class="facilities">
              <h6>Emirates EK623</h6>
              <div class="facilitie-box">
                <div>
                  <span class="mdi mdi-seat-recline-normal"></span>
                </div>
                <div>
                  <small>32" seat pitch</small>
                </div>
              </div>
              <div class="facilitie-box">
                <div>
                  <span class="mdi mdi-video"></span>
                </div>
                <div>
                  <small>Seatback on-demand video</small>
                </div>
              </div>
              <div class="facilitie-box">
                <div>
                  <span class="mdi mdi-wifi"></span>
                </div>
                <div>
                  <small>Basic web browsing (fee)</small>
                </div>
              </div>
              <div class="facilitie-box">
                <div>
                  <span class="mdi mdi-power-plug mdi-rotate-90"></span>
                </div>
                <div>
                  <small>Power & USB outlets</small>
                </div>
              </div>
              <div class="facilitie-box">
                <div>
                  <span class="mdi mdi-food-fork-drink"></span>
                </div>
                <div>
                  <small>Meal provided</small>
                </div>
              </div>
              <div class="flight-class">
                <div class="flight-class-box">
                  <div>
                    <label for>Class:</label>
                  </div>
                  <div>
                    <span>Economy</span>
                  </div>
                </div>
                <div class="flight-class-box">
                  <div>
                    <label for>Aircraft:</label>
                  </div>
                  <div>
                    <span>Boeing 777-300ER</span>
                  </div>
                </div>
                <div class="flight-class-box">
                  <div>
                    <label for>Distance</label>
                  </div>
                  <div>
                    <span>1988 Kms</span>
                  </div>
                </div>
              </div>
            </div>
            <strong>Lahore</strong>
            <h6>(LHE), Pakistan</h6>
          </div>
        </div>
        <div class="outbound">
          <div class="icon">
            <span class="mdi mdi-airplane mdi-rotate-90"></span>
          </div>
          <div class="text">
            <h5>Inbound, We 05 Aug</h5>
            <span>Duration: 13h15m</span>
          </div>
        </div>
        <div class="flight-full-summary">
          <div class="time">
            <div>
              <strong>03:10</strong>
              <h6>05 Aug</h6>
            </div>
            <div>
              <strong>03:10</strong>
              <h6>05 Aug</h6>
            </div>
          </div>
          <div class="center-line">
            <div class="x-line-dot"></div>
            <div class="x-line"></div>
            <div class="x-line-dot"></div>
          </div>
          <div class="your-flight">
            <strong>Lahore</strong>
            <h6>(LHE), Pakistan</h6>
            <div class="facilities">
              <h6>Emirates EK623</h6>
              <div class="facilitie-box">
                <div>
                  <span class="mdi mdi-seat-recline-normal"></span>
                </div>
                <div>
                  <small>32" seat pitch</small>
                </div>
              </div>
              <div class="facilitie-box">
                <div>
                  <span class="mdi mdi-video"></span>
                </div>
                <div>
                  <small>Seatback on-demand video</small>
                </div>
              </div>
              <div class="facilitie-box">
                <div>
                  <span class="mdi mdi-wifi"></span>
                </div>
                <div>
                  <small>Basic web browsing (fee)</small>
                </div>
              </div>
              <div class="facilitie-box">
                <div>
                  <span class="mdi mdi-power-plug mdi-rotate-90"></span>
                </div>
                <div>
                  <small>Power & USB outlets</small>
                </div>
              </div>
              <div class="facilitie-box">
                <div>
                  <span class="mdi mdi-food-fork-drink"></span>
                </div>
                <div>
                  <small>Meal provided</small>
                </div>
              </div>
              <div class="flight-class">
                <div class="flight-class-box">
                  <div>
                    <label for>Class:</label>
                  </div>
                  <div>
                    <span>Economy</span>
                  </div>
                </div>
                <div class="flight-class-box">
                  <div>
                    <label for>Aircraft:</label>
                  </div>
                  <div>
                    <span>Boeing 777-300ER</span>
                  </div>
                </div>
                <div class="flight-class-box">
                  <div>
                    <label for>Distance</label>
                  </div>
                  <div>
                    <span>1988 Kms</span>
                  </div>
                </div>
              </div>
            </div>
            <strong>Lahore</strong>
            <h6>(LHE), Pakistan</h6>
          </div>
        </div>

      </div>
    </b-sidebar>    <!-- flight-detail-section -->
    <!-- Booking Confirm Modal -->
    <b-modal
      id="booking-Modal"
      title="GALA TRAVEL"
      :no-close-on-backdrop="true"
      hide-footer
    >
      <div class="d-block text-center">
        <div style="background: white; padding: 20px">
          <h5 class="pb-4" v-if="bookedPakage">
            <b>
              Dear
              {{
              `${ucfirst(data[0].contact.first_name)} ${ucfirst(
              data[0].contact.last_name
              )}`
              }}
            </b>
            <p>
              Your Booking Request For <b>{{ bookedPakage.package_name }}</b> Have
              Been Received GALA TRAVEL Will Contact You Shorlty.
            </p>
          </h5>
        </div>
      </div>

      <template #modal-header-close>
        <div class="w-100">
          <b-button
            variant="white"
            size="sm"
            class="float-right"
            @click="$router.push('/packages')"
          >
            Ok
          </b-button>
        </div>
      </template>
    </b-modal>

  </div>

</template>
<script>
  import {mapGetters} from "vuex";

  export default {
    auth: "guest",

    data() {
      return {
        passengers: 1,
        isOpen: false,
        loading: false,
        data: [
          {
            contact: {
              gender: '',
              title: '',
              first_name: '',
              last_name: '',
              date_of_birth: '',
              email: '',
              mobile: '',
            },
          }
        ],
        bookedPakage: null,
        value: "250",
      };
    },
    created() {
      if (!this.PakageDetails) {
        this.$router.push("/packages");
      }
    },
    computed: {
      ...mapGetters({
        PakageDetails: "pakages/getPakageDetail",
      }),
    },

    methods: {
      convertDate(str) {
        var date = new Date(str),
          weekday = date.getDay(),
          mnth = ("0" + (date.getMonth()+1)).slice(-2),
          day = ("0" + date.getDate()).slice(-2);
        return [ date.getFullYear() + ' ', (mnth) + ' ', day].join(" ");
      },
      deletePerson(index) {
        this.passengers--;
        this.data.splice(index, 1);
      },
      addPerson() {
        this.passengers++;
        console.log(this.data);
        this.data.push({
          contact: {
            gender: '',
            title: '',
            first_name: '',
            last_name: '',
            date_of_birth: '',
          },
        })
      },
      ucfirst(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      },
      bookPackage() {
        this.$validator.validate().then((result) => {
          if (result) {
            console.log(this.data)
            this.loading = true;
            this.data.forEach((data) => {
              console.log(data);
              this.$api({
                method: "post",
                url: "packagebooking",
                data: {
                  package_id: this.PakageDetails.id,
                  gender: data.contact.gender,
                  title: data.contact.title,
                  first_name: data.contact.first_name,
                  last_name: data.contact.last_name,
                  date_of_birth: this.convertDate(data.contact.date_of_birth),
                  email: this.data[0].contact.email,
                  phone: this.data[0].contact.mobile,
                  package_name: this.PakageDetails.name
                },
              })
                .then(({data}) => {
                  // console.log(data);
                  if (data) {
                    this.bookedPakage = data;
                    this.loading = false;
                    this.$bvModal.show("booking-Modal");
                  }
                })
                .catch((err) => {
                  if (err) {
                    this.loading = false;
                    his.$root.$bvToast.toast(`Provided data is in valid`, {
                      title: "GALA TRAVEL!",
                      variant: "danger",
                      solid: true,
                      toaster: "b-toaster-top-center",
                    });
                  }
                  // console.log(err);
                  // console.log(err.response);
                })
                .finally(() => {
                  this.loading = false;
                  // console.log("finally");
                });
            })
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
    },
  };
</script>
