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

        <div class="hotel-deatil-content">
          <div class="row">
            <div class="col-lg-3">
              <div class="hotel-name">
                <h5>Four Seasons Hotel.</h5>
                <div class="stars">
                  <span class="mdi mdi-star"></span>
                  <span class="mdi mdi-star"></span>
                  <span class="mdi mdi-star"></span>
                  <span class="mdi mdi-star"></span>
                  <span class="mdi mdi-star"></span>
                </div>
                <div class="location">
                  <span class="mdi mdi-map-marker"></span>
                  <span>
                    Calista Wise
                    7292 Dictum.
                    <br />San Antonio MI 47096.
                  </span>
                </div>
                <div class="location">
                  <span class="mdi mdi-account-multiple"></span>
                  <span>Deluxe Room</span>
                </div>
              </div>
              <div class="hotel-price">
                <h5>TOTAL PRICE</h5>
                <p>Starting from</p>
                <small>BHD</small>
                <span>499</span>
                <small>.79</small>
                <p>+BHD 156 taxes and charges</p>
                <hr />
                <b>Hotel Cancellation Policy</b>
              </div>
            </div>
            <div class="col-lg-9">
              <b-tabs>
                <b-tab>
                  <template v-slot:title>
                    <span class="mdi mdi-camera"></span>
                    <span>Photos</span>
                  </template>
                  <div class="img-slider">
                    <b-carousel
                      id="carousel-fade"
                      style="text-shadow: 0px 0px 2px #000"
                      fade
                      indicators
                      max-width="100%"
                    >
                      <b-carousel-slide img-src="../static/hotel-slide1.jpg"></b-carousel-slide>
                      <b-carousel-slide img-src="../static/hotel-slide2.jpg"></b-carousel-slide>
                      <b-carousel-slide img-src="../static/hotel-slide3.jpg"></b-carousel-slide>
                    </b-carousel>
                  </div>
                </b-tab>
                <b-tab>
                  <template v-slot:title>
                    <span class="mdi mdi-map-marker-multiple"></span>
                    <span>Map</span>
                  </template>
                  <div class="map-section">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2485.3536662439496!2d-0.45648418434443594!3d51.470022279628985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48767234cdc56de9%3A0x8fe7535543f64167!2sHeathrow%20Airport!5e0!3m2!1sen!2s!4v1594290011865!5m2!1sen!2s"
                      width="100%"
                      height="100%"
                      frameborder="0"
                      style="border:0;"
                      allowfullscreen
                      aria-hidden="false"
                      tabindex="0"
                    ></iframe>
                  </div>
                </b-tab>
              </b-tabs>
            </div>
          </div>
        </div>
        <div class="hotel-deatil-content">
          <div class="row margin-top">
            <div class="col-lg-3">
              <div class="your-flight">
                <span class="mdi mdi-hotel"></span>
                <h2>Hotel Details</h2>
                <h6>Availabil Rooms</h6>
              </div>
            </div>
            <div class="col-lg-9">
              <b-tabs>
                <b-tab>
                  <template v-slot:title>
                    <span>Availability</span>
                  </template>
                  <div class="tab-content-body">
                    <div class="hotel-rooms">
                      <div class="left">
                        <img src="../static/hotel-slide1.jpg" alt />
                      </div>
                      <div class="center pr-2">
                        <h5>DOUBLE EXECUTIVE ROOM</h5>
                        <small>MAX OCCUPANCY: 1 PERSONS</small>
                        <br />
                        <h6>Popular Amenities:</h6>
                        <span>Flat Screen LCD/LED, Wake up service, Private Bathroom, Hair Dryer, Slippers, Bathrobe, Shower, Bath,</span>
                      </div>
                      <div class="right">
                        <h6>TOTAL PRICE</h6>
                        <small>Starting from</small>
                        <br />
                        <small>BHD</small>
                        <span>332</span>
                        <small>.879</small>
                        <br />
                        <router-link :to="{name: 'hotelflightDetail>
                          <button class="btn">Select</button>
                        </router-link>
                      </div>
                    </div>
                    <hr />
                    <div class="hotel-rooms">
                      <div class="left">
                        <img src="../static/hotel-slide3.jpg" alt />
                      </div>
                      <div class="center pr-2">
                        <h5>DOUBLE EXECUTIVE ROOM</h5>
                        <small>MAX OCCUPANCY: 1 PERSONS</small>
                        <br />
                        <h6>Popular Amenities:</h6>
                        <span>Flat Screen LCD/LED, Wake up service, Private Bathroom, Hair Dryer, Slippers, Bathrobe, Shower, Bath,</span>
                      </div>
                      <div class="right">
                        <h6>TOTAL PRICE</h6>
                        <small>Starting from</small>
                        <br />
                        <small>BHD</small>
                        <span>332</span>
                        <small>.87</small>
                        <br />
                        <router-link :to="{name: 'hotelflightDetail>
                          <button class="btn">Select</button>
                        </router-link>
                      </div>
                    </div>
                    <hr />
                    <div class="hotel-rooms">
                      <div class="left">
                        <img src="../static/hotel-slide2.jpg" alt />
                      </div>
                      <div class="center pr-2">
                        <h5>DOUBLE EXECUTIVE ROOM</h5>
                        <small>MAX OCCUPANCY: 1 PERSONS</small>
                        <br />
                        <h6>Popular Amenities:</h6>
                        <span>Flat Screen LCD/LED, Wake up service, Private Bathroom, Hair Dryer, Slippers, Bathrobe, Shower, Bath,</span>
                      </div>
                      <div class="right">
                        <h6>TOTAL PRICE</h6>
                        <small>Starting from</small>
                        <br />
                        <small>BHD</small>
                        <span>332</span>
                        <small>.87</small>
                        <br />

                        <router-link :to="{name: 'hotelflightDetail>
                          <button class="btn">Select</button>
                        </router-link>
                      </div>
                    </div>
                  </div>
                </b-tab>
                <b-tab>
                  <template v-slot:title>
                    <span>Description</span>
                  </template>
                  <div class="tab-content-body">
                    <h5>Property Location</h5>
                    <p>With a stay at Ambassadors Hotel, you'll be centrally located in London, steps from Cromwell Road and 12 minutes by foot from Natural History Museum. This hotel is 0.7 mi (1.2 km) from Kensington High Street and 0.8 mi (1.3 km) from Victoria and Albert Museum.</p>
                    <hr />
                    <h5>Rooms</h5>
                    <p>Make yourself at home in one of the 150 guestrooms. Wireless Internet access (surcharge) keeps you connected, and cable programming is available for your entertainment. Bathrooms feature bathtubs or showers, complimentary toiletries, and hair dryers. Conveniences include phones, as well as desks and coffee/tea makers.</p>
                    <hr />
                    <h5>Amenities</h5>
                    <p>Make use of convenient amenities, which include complimentary wireless Internet access and tour/ticket assistance.</p>
                    <hr />
                    <h5>Dining</h5>
                    <p>Buffet breakfasts are served on weekdays from 7 AM to 10 AM for a fee.</p>
                  </div>
                </b-tab>
                <b-tab>
                  <template v-slot:title>
                    <span>Facilities</span>
                  </template>
                  <div class="tab-content-body">
                    <div class="row">
                      <div class="col-lg-4">
                        <div class="facilitie-box">
                          <div>
                            <img src="../static/restaurant.png" alt />
                          </div>
                          <div>
                            <h6>Restaurant</h6>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4">
                        <div class="facilitie-box">
                          <div>
                            <img src="../static/nosmoking.png" alt />
                          </div>
                          <div>
                            <h6>Non-smoking rooms</h6>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4">
                        <div class="facilitie-box">
                          <div>
                            <img src="../static/heating.png" alt />
                          </div>
                          <div>
                            <h6>Heating system</h6>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4">
                        <div class="facilitie-box">
                          <div>
                            <img src="../static/roomservice.png" alt />
                          </div>
                          <div>
                            <h6>Room Service</h6>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4">
                        <div class="facilitie-box">
                          <div>
                            <img src="../static/familyroom.png" alt />
                          </div>
                          <div>
                            <h6>Family rooms</h6>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4">
                        <div class="facilitie-box">
                          <div>
                            <img src="../static/airportipickup.png" alt />
                          </div>
                          <div>
                            <h6>Airport Pick & Drop</h6>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4">
                        <div class="facilitie-box">
                          <div>
                            <img src="../static/frontdesk.png" alt />
                          </div>
                          <div>
                            <h6>24-hour Front Desk</h6>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4">
                        <div class="facilitie-box">
                          <div>
                            <img src="../static/airconditioner.png" alt />
                          </div>
                          <div>
                            <h6>Air conditioning</h6>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4">
                        <div class="facilitie-box">
                          <div>
                            <img src="../static/internet.png" alt />
                          </div>
                          <div>
                            <h6>Internet</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <h5>Hotel Policies</h5>
                    <ul>
                      <li>Check in From: 14:00</li>
                      <li>Check Out Until: 12:00</li>
                      <li>Protection Against Accidental Bookings: Yes</li>
                    </ul>
                    <hr />
                    <h5>Child Age</h5>
                    <ul>
                      <li>Up to 8 years old</li>
                    </ul>
                    <hr />
                    <h5>House Rules</h5>
                    <ul>
                      <li>Photo identity Required</li>
                      <li>Out side Food not Allowed</li>
                      <li>Arms not Allowed</li>
                      <li>Cooking in Room not Allowed</li>
                      <li>Cancellation 48 Hours before check-in time,</li>
                    </ul>
                  </div>
                </b-tab>
              </b-tabs>
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
