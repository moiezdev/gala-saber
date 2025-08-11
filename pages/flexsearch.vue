<template>
  <div class="container-fluid flight-list-body">
  
    <div class="flights-page">
      <div class="flights-heading">
        <div class="container">
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
          <div class="flex-top-filter">
            <div class="top-filter-section">
              <router-link :to="{name: 'flights'}">
                <div class="text-section">
                  <h5>Your search</h5>
                  <p>Best flights available</p>
                </div>
              </router-link>
            </div>
            <div class="top-filter-section center">
              <div class="text-section">
                <h5>Direct flights</h5>
                <p>No direct flights available</p>
              </div>
            </div>
            <div class="top-filter-section active">
              <router-link :to="{name: 'flexsearch'}">
                <div class="text-section">
                  <h5>Flex Search (+/- 3 days)</h5>
                  <p>From BHD 910.00</p>
                </div>
              </router-link>
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
        <div class="flex-table-section">
          <table class="table">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">
                  <small>Return</small>
                  <h6>Su 23 Sep</h6>
                </th>
                <th scope="col">
                  <small>Return</small>
                  <h6>Su 24 Sep</h6>
                </th>
                <th scope="col">
                  <small>Return</small>
                  <h6>Su 25 Sep</h6>
                </th>
                <th scope="col">
                  <small>Return</small>
                  <h6>Su 26 Sep</h6>
                </th>
                <th scope="col">
                  <small>Return</small>
                  <h6>Su 27 Sep</h6>
                </th>
                <th scope="col">
                  <small>Return</small>
                  <h6>Su 28 Sep</h6>
                </th>
                <th scope="col">
                  <small>Return</small>
                  <h6>Su 29 Sep</h6>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="first-box">
                  <small>Return</small>
                  <h6>Su 12 Sep</h6>
                </td>
                <td>
                  <span class="mdi mdi-magnify"></span>
                </td>
                <td>
                  <small>BHD</small>
                  <span>910</span>
                  <p>Our lowest price</p>
                </td>
                <td>
                  <span class="mdi mdi-magnify"></span>
                </td>
                <td>
                  <small>BHD</small>
                  <span>910</span>
                  <p>Our lowest price</p>
                </td>
                <td>
                  <span class="mdi mdi-magnify"></span>
                </td>
                <td>
                  <small>BHD</small>
                  <span>910</span>
                  <p>Our lowest price</p>
                </td>
                <td>
                  <span class="mdi mdi-magnify"></span>
                </td>
              </tr>
              <tr>
                <td class="first-box">
                  <small>Return</small>
                  <h6>Su 13 Sep</h6>
                </td>
                <td>
                  <small>BHD</small>
                  <span>910</span>
                  <p>Our lowest price</p>
                </td>
                <td>
                  <span class="mdi mdi-magnify"></span>
                </td>
                <td>
                  <small>BHD</small>
                  <span>910</span>
                  <p>Our lowest price</p>
                </td>
                <td>
                  <span class="mdi mdi-magnify"></span>
                </td>
                <td>
                  <small>BHD</small>
                  <span>910</span>
                  <p>Our lowest price</p>
                </td>
                <td>
                  <span class="mdi mdi-magnify"></span>
                </td>
                <td>
                  <small>BHD</small>
                  <span>910</span>
                  <p>Our lowest price</p>
                </td>
              </tr>
              <tr>
                <td class="first-box">
                  <small>Return</small>
                  <h6>Su 14 Sep</h6>
                </td>
                <td>
                  <span class="mdi mdi-magnify"></span>
                </td>
                <td>
                  <small>BHD</small>
                  <span>910</span>
                  <p>Our lowest price</p>
                </td>
                <td>
                  <span class="mdi mdi-magnify"></span>
                </td>
                <td>
                  <small>BHD</small>
                  <span>910</span>
                  <p>Our lowest price</p>
                </td>
                <td>
                  <span class="mdi mdi-magnify"></span>
                </td>
                <td>
                  <small>BHD</small>
                  <span>910</span>
                  <p>Our lowest price</p>
                </td>
                <td>
                  <span class="mdi mdi-magnify"></span>
                </td>
              </tr>
              <tr>
                <td class="first-box">
                  <small>Return</small>
                  <h6>Su 15 Sep</h6>
                </td>
                <td>
                  <small>BHD</small>
                  <span>910</span>
                  <p>Our lowest price</p>
                </td>
                <td>
                  <span class="mdi mdi-magnify"></span>
                </td>
                <td>
                  <small>BHD</small>
                  <span>910</span>
                  <p>Our lowest price</p>
                </td>
                <td>
                  <span class="mdi mdi-magnify"></span>
                </td>
                <td>
                  <small>BHD</small>
                  <span>910</span>
                  <p>Our lowest price</p>
                </td>
                <td>
                  <span class="mdi mdi-magnify"></span>
                </td>
                <td>
                  <small>BHD</small>
                  <span>910</span>
                  <p>Our lowest price</p>
                </td>
              </tr>
              <tr>
                <td class="first-box">
                  <small>Return</small>
                  <h6>Su 14 Sep</h6>
                </td>
                <td>
                  <span class="mdi mdi-magnify"></span>
                </td>
                <td>
                  <small>BHD</small>
                  <span>910</span>
                  <p>Our lowest price</p>
                </td>
                <td>
                  <span class="mdi mdi-magnify"></span>
                </td>
                <td>
                  <small>BHD</small>
                  <span>910</span>
                  <p>Our lowest price</p>
                </td>
                <td>
                  <span class="mdi mdi-magnify"></span>
                </td>
                <td>
                  <small>BHD</small>
                  <span>910</span>
                  <p>Our lowest price</p>
                </td>
                <td>
                  <span class="mdi mdi-magnify"></span>
                </td>
              </tr>
              <tr>
                <td class="first-box"></td>
                <td colspan="7" class="table-footer" style>
                  <small>Return fares per person, based on flights found by other visitors. Current fares may vary.</small>
                </td>
              </tr>
            </tbody>
          </table>
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
              <router-link :to="{name: 'flightDetail class="search-button-outer">
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
