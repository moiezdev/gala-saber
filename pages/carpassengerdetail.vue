<template>
  <div class="container-fluid flight-list-body">
    <div class="flights-page">
      <div class="flights-heading">
        <div class="container pb-3 pt-1">
          <div class="flights-modify-section">
            <div class="left">
              <div class="flight-top-section">
                <span>Lahore</span>
                <span class="mdi mdi-airplane mdi-rotate-90"></span>
                <span>London</span>
              </div>
              <h5>Wed 08 Jul - Sun 12 Jul, 1 passenger, Economy</h5>
            </div>
            <div>
              <div class="right">
                <button class="btn btn-primary">Change your flight</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container pt-3 pb-0">
        <div class="flight-listing your-flight-outer">
          <div class="filter2 hotel-deatil-content">
            <div class="your-flight">
              <span class="mdi mdi-car-side"></span>
              <h2>Your Car</h2>
              <h6>4 passenger to London</h6>
            </div>
          </div>
          <div class="flights-list">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container pt-3 pb-0">
        <div class="flight-listing your-flight-outer mb-4">
          <div class="filter2 hotel-deatil-content">
            <div class="your-flight">
              <span class="mdi mdi-account"></span>
              <br />
              <h2>Your details</h2>
              <h6>Enter passenger details</h6>
            </div>
          </div>
          <div class="flights-list">
            <div class="flight-box mb-2">
              <div class="Passenger-info mt-0">
                <div class="heading">
                  <b>Passenger 1</b>
                  <span>- Adult (12 years and older)</span>
                </div>
                <div class="content-section">
                  <div class="duble-check">
                    <div class="img">
                      <img src="../static/passport.png" alt />
                    </div>
                    <div class="text-section">
                      <h5>Double check your personal details</h5>
                      <h6>
                        If the details are not correct, the passenger might be denied boarding. Often you will then have
                        to
                        <span>buy a new (more expensive) ticket</span> or
                        <span>pay extra</span> to make changes.
                      </h6>
                    </div>
                  </div>
                </div>
                <div class="passenger-detail-form">
                  <div class="form-box">
                    <div class="title">
                      <h5>
                        Gender
                        <span>*</span>
                      </h5>
                    </div>
                    <div class="fileds">
                      <b-form-radio name="abc">Male</b-form-radio>
                      <b-form-radio name="abc">Female</b-form-radio>
                    </div>
                  </div>
                  <div class="form-box">
                    <div class="title">
                      <h5>
                        Title
                        <span>*</span>
                      </h5>
                    </div>
                    <div class="fileds">
                      <select name id>
                        <option value>- - -</option>
                        <option value>Mr</option>
                        <option value>Miss</option>
                        <option value>Mrs</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-box">
                    <div class="title">
                      <h5>
                        Full Name
                        <span>*</span>
                      </h5>
                    </div>
                    <div class="fileds">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="As written in the passport"
                      />
                    </div>
                  </div>
                  <div class="form-box">
                    <div class="title">
                      <h5>
                        Date of birth
                        <span>*</span>
                      </h5>
                    </div>
                    <div class="fileds">
                      <input type="text" class="form-control" placeholder="dd-mm-yyyy" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="Passenger-info mt-2">
                <div class="heading">
                  <b>Contact details</b>
                  <span>- Booker</span>
                </div>
                <div class="passenger-detail-form">
                  <div class="form-box">
                    <div class="title">
                      <h5>
                        Email
                        <span>*</span>
                      </h5>
                    </div>
                    <div class="fileds">
                      <input type="text" class="form-control" placeholder="Enter Email" />
                    </div>
                  </div>
                  <div class="form-box">
                    <div class="title">
                      <h5>
                        Mobile No
                        <span>*</span>
                      </h5>
                    </div>
                    <div class="fileds">
                      <input type="text" class="form-control" placeholder="Enter Mobile No" />
                    </div>
                  </div>
                </div>
                <div class="next-btn-section">
                  <router-link :to="{name: 'carpaymentmathod'}" class="search-button-outer">
                    <button class="btn btn-light">Next</button>
                  </router-link>
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
    >detail section</b-sidebar>
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
