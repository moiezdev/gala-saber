<template>
  <div class="container-fluid flight-list-body">
    <div class="flights-page">
      <div class="page-heading">
        <div class="container">
          <div class="flights-modify-section">
            <div class="left">
              <div
                class="flight-top-section"
                style="width: 100%; justify-content: center"
              >
                <h1>Terms & Conditions</h1>
                <!-- <span class="mdi mdi-airplane mdi-rotate-90"></span> -->
              </div>
              <h5>Home/Terms & Conditions</h5>
            </div>
            <!-- <div>
              <div class="right">
                <button class="btn btn-primary">Change your flight</button>
              </div>
            </div> -->
          </div>
        </div>
      </div>

      <!-- <div class="content-slogan">
        <h1>Cheap Flights</h1>
        <h6>
          Home
          <span class="mdi mdi-chevron-double-right"></span>
          <a href>Flights</a>
        </h6>
      </div> -->
      <div class="contact-content pt-2">
        <!-- <div class="cheap-deal">
        <h3>International / Domestic Flight Deals</h3>
        <h6>“The world is a book, and those who do not travel read only one page” Book a lavish flight to your dream destination. Fly with GALA TRAVEL anywhere in the world, at a competitive price.</h6>
        <small>
          Read more
          <span class="mdi mdi-chevron-down"></span>
        </small>
      </div> -->
        <div class="contact-main">
            <div class="row">
                <div class="col-lg-12">
                    <div class="terms-conditions" style="text-align: left">
                        
                        <span v-html="terms_conditions.description" class="color-grey" >
                        </span>
                    </div>
                </div>


                
            </div>
        </div>
        
      </div>
    </div>
    <div class="your-best-deal">
      <div class="heading">
      <div class="container">
              <h4>Your best deal in no time!</h4>
              </div>
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
              GALA TRAVEL is
              <br />a member of IATA
            </h6>
          </div>
        </div>
      </div>
    </div>
    <div class="payment-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 mb-4 mt-4">
            <div class="left">
              <h5>GALA TRAVEL is affiliated with</h5>
              <div class="cards">
                <div>
                  <img src="../static/tico.png" alt="IATA Logo" />
                </div>
                <div>
                  <img src="../static/sabre.png" alt="Sabre Logo" />
                </div>
                <div>
                  <img src="../static/amadeus.png" alt="Amadeus Logo" />
                </div>
                <div>
                  <a href="https://www.igoinsured.com/direct/manulifeglobal.aspx?ag=AATT01" target="_blanck"><img src="../static/menulife-logo.png" alt="MenuLife Logo" /></a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 mb-4 mt-4">
            <div class="right">
              <h5>Secure Payment with</h5>
              <div class="cards">
                <div>
                  <img src="../static/stripe.png" alt="Stripe Logo" />
                </div>
                <div>
                  <img src="../static/paypal.png" alt="PayPal Logo" />
                </div>
                <div>
                  <img src="../static/mastercard.png" alt="Mastercard Logo" />
                </div>
                <div>
                  <img src="../static/visa.png" alt="Visa Card" />
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
              <router-link
                :to="{ name: 'flightDetail'}"
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
    </b-sidebar>
    <!-- flight-detail-section -->
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  auth: false,
  
  data() {
    return {
      value: "250",
      limit: 50,
      terms_conditions: {},
      whyUs: {},
      feedBacks: [],
      our_story_bb_1: {},
      our_story_bb_2: {},
      our_story_bb_3: {},
      why_us_bwu_1: {'description': ''},
      why_us_bwu_2: {'description': ''},
      why_us_bwu_3: {'description': ''},
      why_us_bwu_4: {'description': ''},
      why_us_bwu_5: {'description': ''},
      why_us_bwu_6: {'description': ''},
      why_us_bwu_7: {'description': ''},
      why_us_bwu_8: {'description': ''},
      why_us_bwu_9: {'description': ''},
    };
  },

  computed: {
    ...mapGetters({
      siteSetting: "siteSetting/getSetting",
      Feedback: "siteSetting/getFeedback",
    }),
  },

  created() {
    if (this.Feedback == undefined) {
      this.$api.get(`/userfeedback`).then(({ data }) => {
        this.feedBacks = data.data;
        this.$store.commit("siteSetting/setFeedback", data.data);
      });
    } else {
      this.feedBacks = this.Feedback;
    }

    if (this.siteSetting == undefined) {
      this.loading = true;
      this.$api.get(`/setting`).then(({ data }) => {
        for (var i = 0; i < data.data.length; i++) {
          if (data.data[i].key == "terms_conditions") {
            this.terms_conditions = data.data[i];
          }
        }
        this.loading = false;
      });
    } else {
      for (var i = 0; i < this.siteSetting.length; i++) {
        if (this.siteSetting[i].key == "terms_conditions") {
          this.terms_conditions = this.siteSetting[i];
        }
      }
    }
    if (this.siteSetting == undefined) {
      this.$api.get(`/setting`).then(({ data }) => {
        for (var i = 0; i < data.data.length; i++) {
          if (data.data[i].key == "why_us") {
            this.whyUs = data.data[i];
          } else if (data.data[i].key == "our_story_bottom_box_1") {
            this.our_story_bb_1 = data.data[i];
          } else if (data.data[i].key == "our_story_bottom_box_2") {
            this.our_story_bb_2 = data.data[i];
          } else if (data.data[i].key == "our_story_bottom_box_3") {
            this.our_story_bb_3 = data.data[i];
          } else if (data.data[i].key == "why_book_with_us_box_1") {
            this.why_us_bwu_1 = data.data[i];
          } else if (data.data[i].key == "why_book_with_us_box_2") {
            this.why_us_bwu_2 = data.data[i];
          } else if (data.data[i].key == "why_book_with_us_box_3") {
            this.why_us_bwu_3 = data.data[i];
          } else if (data.data[i].key == "why_book_with_us_box_4") {
            this.why_us_bwu_4 = data.data[i];
          } else if (data.data[i].key == "why_book_with_us_box_5") {
            this.why_us_bwu_5 = data.data[i];
          } else if (data.data[i].key == "why_book_with_us_box_6") {
            this.why_us_bwu_6 = data.data[i];
          } else if (data.data[i].key == "why_book_with_us_box_7") {
            this.why_us_bwu_7 = data.data[i];
          } else if (data.data[i].key == "why_book_with_us_box_8") {
            this.why_us_bwu_8 = data.data[i];
          } else if (data.data[i].key == "why_book_with_us_box_9") {
            this.why_us_bwu_9 = data.data[i];
          }
        }
      });
    } else {
      for (var i = 0; i < this.siteSetting.length; i++) {
        if (this.siteSetting[i].key == "why_us") {
          this.whyUs = this.siteSetting[i];
        } else if (this.siteSetting[i].key == "our_story_bottom_box_1") {
          this.our_story_bb_1 = this.siteSetting[i];
        } else if (this.siteSetting[i].key == "our_story_bottom_box_2") {
          this.our_story_bb_2 = this.siteSetting[i];
        } else if (this.siteSetting[i].key == "our_story_bottom_box_3") {
          this.our_story_bb_3 = this.siteSetting[i];
        } else if (this.siteSetting[i].key == "why_book_with_us_box_1") {
          this.why_us_bwu_1 = this.siteSetting[i];
        } else if (this.siteSetting[i].key == "why_book_with_us_box_2") {
          this.why_us_bwu_2 = this.siteSetting[i];
        } else if (this.siteSetting[i].key == "why_book_with_us_box_3") {
          this.why_us_bwu_3 = this.siteSetting[i];
        } else if (this.siteSetting[i].key == "why_book_with_us_box_4") {
          this.why_us_bwu_4 = this.siteSetting[i];
        } else if (this.siteSetting[i].key == "why_book_with_us_box_5") {
          this.why_us_bwu_5 = this.siteSetting[i];
        } else if (this.siteSetting[i].key == "why_book_with_us_box_6") {
          this.why_us_bwu_6 = this.siteSetting[i];
        } else if (this.siteSetting[i].key == "why_book_with_us_box_7") {
          this.why_us_bwu_7 = this.siteSetting[i];
        } else if (this.siteSetting[i].key == "why_book_with_us_box_8") {
          this.why_us_bwu_8 = this.siteSetting[i];
        } else if (this.siteSetting[i].key == "why_book_with_us_box_9") {
          this.why_us_bwu_9 = this.siteSetting[i];
        }
      }
    }
  },
};
</script>
