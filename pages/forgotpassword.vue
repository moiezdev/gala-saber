<template>
  <div class="container-fluid flight-list-body">
    
    <div class="flights-page">
      

      
      <div class="signin-box pt-2">
        <div class="news-box" style="max-width: 1100px">
          <div class="row">
                <div class="col-lg-12">
                    <!-- Sing in  Form -->
                    <div class="signin-box">

                        <div class="main">
                          <!-- Sing in  Form -->
                          <section class="sign-in">
                              <div class="container">
                                  <div class="signin-content">
                                      <div class="signin-image">
                                          <figure><img src="../static/signin-image.jpg" alt="sing up image"></figure>
                                          <a href="/signup" class="signup-image-link">Create an account</a>
                                          <a href="/login" class="signup-image-link">Login</a>
                                      </div>

                                      <div class="signin-form">
                                          <h2 class="form-title">Reset Passowrd!</h2>
                                          <form @submit.prevent="onSubmit" class="register-form" id="login-form">
                                              <div class="form-group">
                                                  <label for="your_name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                                  <b-form-input
                                                    data-vv-name="email"
                                                    placeholder="Email Address"
                                                    v-validate="'required|max:190|email'"
                                                    class="form-control-rounded"
                                                    type="text"
                                                    v-model="data.email"
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
                                              </div>
                                              <div class="form-group form-button">
                                                  <input type="submit" class="form-submit" value="Reset Password"/>
                                              </div>
                                              <b-spinner
                                                class="ml-2 mt-1"
                                                v-once
                                                v-if="loading"
                                                variant="light"
                                                label="Spinning"
                                              ></b-spinner>
                                          </form>
                                      </div>
                                  </div>
                              </div>
                          </section>

                      </div>

                    </div>
                    
                </div>
          </div>
        </div>
      </div>
      <div class="your-best-deal">
        <div class="heading">
          <h4>Your best deal in no time!</h4>
        </div>
        <div class="container best-deal-outer">
          <div class="row">
            <div class="col-lg-3 best-deal-box">
              <img src="../static/USP_icon_1.png" width="120px" alt />
              <h6>
                Compare
                <br />800+ Airlines
              </h6>
            </div>
            <div class="col-lg-3 best-deal-box">
              <img src="../static/USP_icon_2.png" width="120px" alt />
              <h6>
                Easy and
                <br />fast booking
              </h6>
            </div>
            <div class="col-lg-3 best-deal-box">
              <img src="../static/USP_icon_3.png" width="120px" alt />
              <h6>
                English speaking
                <br />customer service
              </h6>
            </div>
            <div class="col-lg-3 best-deal-box">
              <img src="../static/USP_icon_4.png" width="120px" alt />
              <h6>
                GALA TRAVEL is a
                <br />member of IATA
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- flight-detail-section -->
    <!-- <b-sidebar
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
              <router-link
                :to="{ name: 'flightDetail"
                class="search-button-outer"
              >
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
            <span> 30kg Luggage </span>
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
    </b-sidebar> -->
    <!-- flight-detail-section -->
  </div>
</template>
<script>

import { mapState } from "vuex";


export default {

  middleware: ["auth"],
  auth: "guest",
  data() {
    return {
      value: "250",
      data: {},
    };
  },
  computed: {
    ...mapState(["loading"]),
  },
  mounted() {
    var date = new Date();
    this.year = date.getFullYear();
  },
  methods: {
    onSubmit() {
      this.$validator.validate().then(async (result) => {
        if (result) {
          this.$store.commit("setLoading");
          this.$api
            .post("/user/forgot", this.data)
            .then(({ data }) => {
              if (data == "Successfully") {
                this.$bvToast.toast(
                  "You will shortly receive an email to reset your password",
                  {
                    title: "GALA TRAVEL!",
                    variant: "success",
                    solid: true,
                    toaster: "b-toaster-top-center",
                  }
                );
              }
            })
            .catch((err) => {
              this.$bvToast.toast("Something went wrong", {
                title: "GALA TRAVEL!",
                variant: "danger",
                solid: true,
                toaster: "b-toaster-top-center",
              });
              if (err.response && err.response.status == 422) {
                var errors = err.response.data.errors;
                for (var error in errors) {
                  this.$validator.errors.add({
                    field: error,
                    msg: errors[error][0],
                  });
                }
              }
            })
            .finally(() => this.$store.commit("setLoading"));
        } else {
          this.$bvToast.toast("Provided data is not valid", {
            title: "GALA TRAVEL!",
            variant: "danger",
          });
        }
      });
    },
  },
};
</script>
