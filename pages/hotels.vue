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
      <div class="container">
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
        <div class="flight-listing">
          <div class="filter hotel-filter order1">
            <div class="heading">
              <img src="../static/filter.png" alt />
              <h5>Filter your results</h5>
            </div>
            <div class="collapse-box">
              <div class="filter-itom" v-b-toggle.collapse-1 variant="primary">
                <h5>Location</h5>
                <span>
                  <i class="fa fa-chevron-down"></i>
                </span>
              </div>
              <b-collapse visible id="collapse-1">
                <b-card>
                  <b-input-group size="sm" class="mb-2">
                    <b-form-input placeholder="City"></b-form-input>
                    <b-input-group-append>
                      <b-button variant="light">Search</b-button>
                    </b-input-group-append>
                  </b-input-group>
                </b-card>
                <b-card>
                  <b-input-group size="sm" class="mb-2">
                    <b-form-input placeholder="Hotel Name"></b-form-input>
                    <b-input-group-append>
                      <b-button variant="light">Search</b-button>
                    </b-input-group-append>
                  </b-input-group>
                </b-card>
              </b-collapse>
            </div>
            <div class="collapse-box">
              <div class="filter-itom" v-b-toggle.collapse-2 variant="primary">
                <h5>Hotel Category</h5>
                <span>
                  <i class="fa fa-chevron-down"></i>
                </span>
              </div>
              <b-collapse visible id="collapse-2">
                <b-card>
                  <b-form-rating
                    id="rating-sm-no-border"
                    v-model="value"
                    variant="warning"
                    no-border
                    size="lg"
                  ></b-form-rating>
                </b-card>
                <b-card>
                  <p class="rating-value">Value: {{ value }}</p>
                </b-card>
              </b-collapse>
            </div>
            <div class="collapse-box">
              <div class="filter-itom" v-b-toggle.collapse-3 variant="primary">
                <h5>Hotel Facilities</h5>
                <span>
                  <i class="fa fa-chevron-down"></i>
                </span>
              </div>
              <b-collapse visible id="collapse-3">
                <b-card>
                  <div>
                    <b-form-checkbox v-model="selected" name="some-radios" value="C">
                      <div class="text-overflow">Wifi</div>
                    </b-form-checkbox>
                  </div>
                </b-card>
                <b-card>
                  <div>
                    <b-form-checkbox v-model="selected" name="some-radios" value="C">
                      <div class="text-overflow">Parking</div>
                    </b-form-checkbox>
                  </div>
                </b-card>
                <b-card>
                  <div>
                    <b-form-checkbox v-model="selected" name="some-radios" value="C">
                      <div class="text-overflow">Bar (BAR)</div>
                    </b-form-checkbox>
                  </div>
                </b-card>
                <b-card>
                  <div>
                    <b-form-checkbox v-model="selected" name="some-radios" value="C">
                      <div class="text-overflow">Business Center</div>
                    </b-form-checkbox>
                  </div>
                </b-card>
                <b-card>
                  <div>
                    <b-form-checkbox v-model="selected" name="some-radios" value="C">
                      <div class="text-overflow">Laundry Service</div>
                    </b-form-checkbox>
                  </div>
                </b-card>
              </b-collapse>
            </div>
            <div class="collapse-box">
              <div class="filter-itom filter-bottom" v-b-toggle.collapse-5 variant="primary">
                <h5>Price</h5>
                <span>
                  <i class="fa fa-chevron-down"></i>
                </span>
              </div>
              <b-collapse visible class="filter-last-box" id="collapse-5">
                <b-card>
                  <div class="w-100">
                    <b-form-input id="range-1" v-model="value" type="range" min="0" max="5000"></b-form-input>
                    <div class="mt-2">Value: {{ value }}</div>
                  </div>
                </b-card>
              </b-collapse>
            </div>
          </div>
          <div class="flights-list order2">
            <div class="hotel-result-box mb-3">
              <div class="hotel-img">
                <img src="../static/hotel1.jpg" class="logo" alt />
                <span class="featured--tag">Excellent</span>
              </div>
              <div class="hotel-deatil">
                <div class="heading">
                  <div>
                    <label for>SMART HOTEL</label>
                  </div>
                  <div>
                    <div>
                      <span class="mdi mdi-map-marker-radius"></span>
                      <span class="mdi mdi-heart-outline"></span>
                    </div>
                  </div>
                </div>
                <div class="stars">
                  <span class="mdi mdi-star"></span>
                  <span class="mdi mdi-star"></span>
                  <span class="mdi mdi-star"></span>
                  <span class="mdi mdi-star"></span>
                  <span class="mdi mdi-star"></span>
                </div>
                <div class="location">
                  <span class="mdi mdi-map-marker"></span>
                  <span>36, Liberty Market, Gulberg 3.</span>
                </div>
                <div class="location">
                  <span class="mdi mdi-account-multiple"></span>
                  <span>Deluxe Room</span>
                </div>
                <p>Beds: 1 double or 2 singles</p>
                <p>
                  Smart hotel is one of the most popular destination for traveller while travelling to Lahore. With its prime location in downtown...
                  <span>Read more</span>
                </p>
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
                    <router-link :to="{name: 'hoteldetail'}" class="search-button-outer">
                      <button class="btn btn-dark">
                        Book Now
                        <i class="fa fa-arrow-right"></i>
                      </button>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
            <div class="hotel-result-box mb-3">
              <div class="hotel-img">
                <img src="../static/hotel2.jpg" class="logo" alt />
                <span class="featured--tag">Good</span>
              </div>
              <div class="hotel-deatil">
                <div class="heading">
                  <div>
                    <label for>Hollywood Hotel</label>
                  </div>
                  <div>
                    <div>
                      <span class="mdi mdi-map-marker-radius"></span>
                      <span class="mdi mdi-heart-outline"></span>
                    </div>
                  </div>
                </div>
                <div class="stars">
                  <span class="mdi mdi-star"></span>
                  <span class="mdi mdi-star"></span>
                  <span class="mdi mdi-star"></span>
                  <span class="mdi mdi-star"></span>
                  <span class="mdi mdi-star"></span>
                </div>
                <div class="location">
                  <span class="mdi mdi-map-marker"></span>
                  <span>36, Liberty Market, Gulberg 3.</span>
                </div>
                <div class="location">
                  <span class="mdi mdi-account-multiple"></span>
                  <span>Deluxe Room</span>
                </div>
                <p>Beds: 1 double or 2 singles</p>
                <p>
                  Smart hotel is one of the most popular destination for traveller while travelling to Lahore. With its prime location in downtown...
                  <span>Read more</span>
                </p>
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
                    <router-link :to="{name: 'hoteldetail'}" class="search-button-outer">
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
      value: 1
    };
  }
};
</script>
