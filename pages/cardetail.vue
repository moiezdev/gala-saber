<template>
  <div class="container-fluid flight-list-body">
    <div class="flights-page">
      <div class="flights-heading">
        <div class="container">
          <div class="flights-modify-section pb-3">
            <div class="left">
              <div class="flight-top-section">
                <span>London Heathrow</span>
                <span class="mdi mdi-hotel"></span>
              </div>
              <h5>4-Apr-2020 to 17-Apr-2020, Room (1) Adult (2).</h5>
            </div>
            <div>
              <div class="right">
                <button class="btn btn-primary">Change your Search</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container pb-5">
        <div class="sorting">
          <div class="left">
            <h5>28 Search results</h5>
          </div>
          <div class="right">
            <span>Sort on:</span>
            <select name id>
              <option value>Price</option>
              <option value>Duration</option>
            </select>
          </div>
        </div>

        <div class="car-deatil-content">
          <div class="row">
            <div class="col-lg-8">
              <div class="flights-list order2">
                <div class="car-result-box mb-3">
                  <div class="car-img">
                    <img src="../static/car2.jpg" class="logo" alt />
                    <span class="featured--tag">Excellent</span>
                  </div>
                  <div class="hotel-deatil">
                    <div class="heading">
                      <div>
                        <label for>Kia Rio</label>
                        <small>or Similar (XXAR)</small>
                      </div>
                      <div>
                        <div>
                          <span class="mdi mdi-map-marker-radius"></span>
                          <span class="mdi mdi-heart-outline"></span>
                        </div>
                      </div>
                    </div>
                    <div class="location">
                      <span class="mdi mdi-airplane-takeoff"></span>
                      <span>Toronto Airport Car Rental Centre</span>
                    </div>

                    <div class="location">
                      <span class="mdi mdi-speedometer"></span>
                      <span>
                        Mileage :
                        <small>Unlimited</small>
                      </span>
                    </div>
                    <div class="location">
                      <span class="mdi mdi-gas-station"></span>
                      <span>
                        Fuel policy :
                        <small>Free Tank</small>
                      </span>
                    </div>
                    <div class="capacity-section">
                      <div class="car-spec-box">
                        <img src="../static/01.svg" alt />
                        <span>2</span>
                      </div>
                      <div class="car-spec-box">
                        <img src="../static/02.svg" alt />
                        <span>5</span>
                      </div>
                      <div class="car-spec-box">
                        <img src="../static/03.svg" alt />
                        <span>4</span>
                      </div>
                      <div class="car-spec-box">
                        <img src="../static/04.svg" alt />
                        <span>M</span>
                      </div>
                    </div>
                    <div class="heading">
                      <div>
                        <span>
                          <small>BHD</small> 499
                          <small>.78</small>
                          <small>/Night</small>
                        </span>
                        <p>+BHD 156 taxes and charges</p>
                      </div>
                      <div>
                        <p class="cancellation">Free Cancellation</p>
                        <router-link :to="{name: 'carflightDetail class="search-button-outer">
                          <button class="btn btn-dark">
                            Book Now
                            <i class="fa fa-arrow-right"></i>
                          </button>
                        </router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="car-price">
                <h5>Price Detail</h5>
                <div class="fare-row">
                  <div>
                    <h6>Weekly:</h6>
                  </div>
                  <div>
                    <h6>334.22 CAD</h6>
                  </div>
                </div>
                <div class="fare-row">
                  <div>
                    <h6>Extra Day:</h6>
                  </div>
                  <div>
                    <h6>334.22 CAD</h6>
                  </div>
                </div>
                <div class="fare-row">
                  <div>
                    <h6>Extra Hour:</h6>
                  </div>
                  <div>
                    <h6>334.22 CAD</h6>
                  </div>
                </div>
                <div class="fare-row">
                  <div>
                    <h6>Total Base Price:</h6>
                  </div>
                  <div>
                    <h6>334.22 CAD</h6>
                  </div>
                </div>

                <hr />
                <div class="fare-row">
                  <div>
                    <h6>
                      <b>Total Price:</b>
                    </h6>
                  </div>
                  <div>
                    <h6>
                      <b>591.13 CAD</b>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="car-deatil-content">
          <div class="row margin-top">
            <div class="col-lg-8">
              <b-tabs>
                <b-tab>
                  <template v-slot:title>
                    <span>Rental Charges</span>
                  </template>
                  <div class="tab-content-body">
                    <h5>Surcharges</h5>
                    <p>
                      SCG - TRANSPORTATION FACILITY CHARGE Include in estimated total price 3.34 CAD Per Day
                      <br />Sales Tax Not Included in estimate total price 14.29 %
                      <br />SCG - CONCESSION RECOVERY FEE SURCHARGE Include in estimated total price 0.67 CAD Per Day
                    </p>
                    <h5>Coverages</h5>
                    <p>
                      CDW - COLLISION DAMAGE WAIVER Optional not include in estimated total price 12.03 CAD Per Day
                      <br />PEC - PERSONAL EFFECTS COVERAGE Optional not include in estimated total price 9.22 CAD Per Day
                      <br />EP - EP Optional not include in estimated total price 17.31 CAD Per Day
                      <br />CPP - PERSPRO Optional not include in estimated total price 0.00 CAD Per Day
                    </p>
                    <h5>Equipments</h5>
                    <p>
                      CSI - CHILD SEAT FOR INFANT Optional not include in estimated total price 99.81 CAD Per Rental
                      <br />CST - CHILD SEAT FOR TODDLER Optional not include in estimated total price 99.81 CAD Per Rental
                    </p>
                    <h5>Rate Guarantee Condition</h5>
                    <p>RATE GUARANTEED 55 DAYS FROM BOOKING</p>
                    <h5>Marketing Text</h5>
                    <p>KIOSK SERVICE AVAILABLEALLOWED - RETURN TO SPECIFIED LOCATION ONLY</p>
                    <h5>Remarks</h5>
                    <p>BASE RATE DOES NOT INCLUDE SURCHARGESBASE RATE DOES NOT INCLUDE TAXESKIOSK SERVICE AVAILABLEALLOWED - RETURN TO SPECIFIED LOCATION ONLYEXTRA DAY RATE APPLIES AFTER 7 DAYSA MINIMUM OF 8 DAYS WILL BE CHARGED</p>
                  </div>
                </b-tab>
                <b-tab>
                  <template v-slot:title>
                    <span>Other Details</span>
                  </template>
                  <div class="tab-content-body">
                    <h5>Contacts</h5>
                    <div class="row">
                      <div class="col-6">
                        <h6>Pick up</h6>
                        <p>Phone: 718 5538640</p>
                      </div>
                      <div class="col-6">
                        <h6>Pick up</h6>
                        <p>Phone: 718 5538640</p>
                      </div>
                    </div>
                    <h5>Opening Hours</h5>
                    <div class="row">
                      <div class="col-6">
                        <h6>Pick up</h6>
                        <p>
                          Mon
                          <span class="mdi mdi-arrow-right"></span>
                          00:01 00:00
                          <br />Tue
                          <span class="mdi mdi-arrow-right"></span>
                          00:01 00:00
                          <br />Wed
                          <span class="mdi mdi-arrow-right"></span>
                          00:01 00:00
                          <br />Thu
                          <span class="mdi mdi-arrow-right"></span>
                          00:01 00:00
                          <br />Fri
                          <span class="mdi mdi-arrow-right"></span>
                          00:01 00:00
                          <br />Sat
                          <span class="mdi mdi-arrow-right"></span>
                          00:01 00:00
                          <br />Sun
                          <span class="mdi mdi-arrow-right"></span>
                          00:01 00:00
                          <br />
                        </p>
                      </div>
                      <div class="col-6">
                        <h6>Drop off</h6>
                        <p>
                          Mon
                          <span class="mdi mdi-arrow-right"></span>
                          00:01 00:00
                          <br />Tue
                          <span class="mdi mdi-arrow-right"></span>
                          00:01 00:00
                          <br />Wed
                          <span class="mdi mdi-arrow-right"></span>
                          00:01 00:00
                          <br />Thu
                          <span class="mdi mdi-arrow-right"></span>
                          00:01 00:00
                          <br />Fri
                          <span class="mdi mdi-arrow-right"></span>
                          00:01 00:00
                          <br />Sat
                          <span class="mdi mdi-arrow-right"></span>
                          00:01 00:00
                          <br />Sun
                          <span class="mdi mdi-arrow-right"></span>
                          00:01 00:00
                          <br />
                        </p>
                      </div>
                    </div>
                  </div>
                </b-tab>
              </b-tabs>
            </div>
            <div class="col-lg-4">
              <div class="your-flight">
                <span class="mdi mdi-car-side"></span>
                <h2>Car Details</h2>
                <h6>Car Specification</h6>
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
    >detail section</b-sidebar>
    <!-- flight-detail-section -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: 1,
    };
  },
};
</script>
