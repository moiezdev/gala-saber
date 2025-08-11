<template>
  <div class="container-fluid flight-list-body">
    
    <div class="flights-page">
      <div class="flights-heading packages-heading">
        <div class="container">
          <div class="flights-modify-section">
            <div class="left">
              <div
                class="flight-top-section"
                style="width: 100%; justify-content: center"
              >
                <span>FAQ's</span>
                <!-- <span class="mdi mdi-airplane mdi-rotate-90"></span> -->
              </div>
              <h5>Home/FAQ's</h5>
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
      <div class="deals pt-2">
        <!-- <div class="cheap-deal">
        <h3>International / Domestic Flight Deals</h3>
        <h6>Fancy flights to Venice for a romantic weekend away or how about flights to Oslo in Norway to see how a nation deals with a real winter? Wherever you want to fly in the world, GALA TRAVEL Canada offers you the lowest prices on the web, and all it takes is just a few clicks.</h6>
        <small>
          Read more
          <span class="mdi mdi-chevron-down"></span>
        </small>
      </div> -->
        <div class="news-box">
          <div class="row">
                <div class="col-lg-12">
                    <div class="row">
                        <div class="container">
                          
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
export default {
  data() {
    return {
      value: "250",
    };
  },
};
</script>
