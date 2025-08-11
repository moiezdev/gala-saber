<template>
  <div @click="testing">
    <div class="thanku mb-6 pb-6" v-if="booking">
      <div class="container">

        <div class="slect-icon d-flex justify-content-between">
          <b-form-group
            @submit.prevent="onSubmit"
            class="form-label input-box w-100 color-dark-2 mb-2"
            :class="mailBoxOpen?'active':''"
          >
            <div class="row">
              <b-tooltip
                v-if="errors.has('email') && mailBoxOpen"
                :show="true"
                triggers="focus"
                target="email"
                placement="bottom"
                variant="danger"
              >{{ errors.first("email") }}
              </b-tooltip>
              <div class="col-12 pl-1">
                <div class="d-flex w-100 justify-content-end">
                  <div v-if="mailBoxOpen" class="position-fixed w-100 h-100" style="top:0;left: 0"
                       @click="mailBoxOpen=false">
                  </div>
                  <div class="pr-0 position-relative">
                    <b-form-input
                      data-vv-name="email"
                      placeholder="Email Address"
                      v-validate="'required|max:190|email'"
                      class="rounded-pill pl-4 h-100"
                      type="text"
                      v-model="data.email"
                      id="email"
                      :state="errors.has('email') ? false : null"
                    ></b-form-input>
                    <button
                      type="submit"
                      class="border rounded-circle send-btn position-absolute mr-1"
                      style="right: 0;top: 50%;transform: translateY(-50%);"
                      @click.prevent="onSubmit"
                    >
                      <span><span class="mdi mdi-send"></span></span>
                      <!--              <b-spinner-->
                      <!--                class="ml-2 mt-1"-->
                      <!--                v-once-->
                      <!--                small-->
                      <!--                v-if="loading"-->
                      <!--                variant="light"-->
                      <!--                label="Spinning"-->
                      <!--              ></b-spinner>-->
                      <!---->

                      <!---->
                    </button>
                    <button
                      v-if="!this.sent"
                      type="submit"
                      class="border rounded-circle mail-btn position-absolute mr-1"
                      style="right: 0;top: 50%;transform: translateY(-50%);"
                      @click="mailBoxOpen = true"
                    >
                      <span><span class="mdi mdi-email"></span></span>
                      <!--              <b-spinner-->
                      <!--                class="ml-2 mt-1"-->
                      <!--                v-once-->
                      <!--                small-->
                      <!--                v-if="loading"-->
                      <!--                variant="light"-->
                      <!--                label="Spinning"-->
                      <!--              ></b-spinner>-->
                      <!---->
                      <!---->
                    </button>
                    <button
                      v-if="this.sent"
                      type="submit"
                      class="border rounded-circle mail-btn position-absolute mr-1"
                      style="right: 0;top: 50%;transform: translateY(-50%);"
                      @click="mailBoxOpen = true"
                    >
                      <span><span class="mdi mdi-email-check"></span></span>
                      <!--              <b-spinner-->
                      <!--                class="ml-2 mt-1"-->
                      <!--                v-once-->
                      <!--                small-->
                      <!--                v-if="loading"-->
                      <!--                variant="light"-->
                      <!--                label="Spinning"-->
                      <!--              ></b-spinner>-->
                      <!---->
                      <!---->
                    </button>

                  </div>
                  <button class="border m-1 rounded-circle" name="lastname">
                    <span class="mdi mdi-home"></span>
                  </button>
                  <button class="border m-1 rounded-circle" name="lastname" @click="printPDF()">
                    <span class="mdi mdi-printer"></span>
                  </button>
                  <button class="border m-1 mr-4 rounded-circle" name="lastname" @click="exportToPDF"
                          icon="mdi mdi-printer">
                    <span class="mdi mdi-download"></span>
                  </button>
                </div>
              </div>
            </div>
          </b-form-group>
          <div>
          </div>
        </div>
        <div class="tickt-pack">
          <div class="bd-w">
            <div class="green-box">
              <div class="row h-100">
                <!--            <div class="col-lg-2 col-sm-12">-->
                <!--              <div class="bar-cod">-->
                <!--                <span class="mdi mdi-barcode"></span>-->
                <!--                <span class="mdi mdi-barcode"></span>-->
                <!--                <span class="mdi mdi-barcode"></span>-->
                <!--                <span class="mdi mdi-barcode"></span>-->
                <!--                <span class="mdi mdi-barcode"></span>-->
                <!--                <span class="mdi mdi-barcode"></span>-->
                <!--              </div>-->
                <!--            </div>-->
                <div class="col-sm-12 h-100 d-flex flex-column justify-content-between">
                  <div class="row">
                    <div class="col-lg-7 col-sm-12 pax-name">
                      <h5>Passanger Name</h5>
                      <h4
                        v-for="traveler in booking.CreatePassengerNameRecordRS.TravelItineraryRead.TravelItinerary.CustomerInfo.PersonName"
                      >
                        {{
                        `${traveler.GivenName} ${traveler.Surname}`
                        }}
                      </h4>
                    </div>
                    <div class="col-lg-5 col-sm-12 thnx">
                      <h1> THANKS FOR <br> BOOKING WITH <br> US</h1>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-8 col-sm-12 ref-pnr">
                      <div class="location-tickt">
                        <span>Reservation No:</span>
                        <span><b>{{ booking.CreatePassengerNameRecordRS.ItineraryRef.ID }}</b></span>
                      </div>
                      <div v-for="(segments,segmentsIndex) in bookingChunks">

                        <div
                          v-for="(segment, segmentIndex) in segments"
                          :key="`${segmentIndex}`"
                        >
                          <div v-if="segmentIndex == 0" class="location-tickt">
                          <span v-if="segment.OriginLocation.LocationCode == params.locations.originLocationCode.iata">
                            Outbound:
                          </span>
                            <span
                              v-else-if="segment.OriginLocation.LocationCode  == params.locations.destinationLocationCode.iata">
                            Inbound:
                          </span>
                            <span v-else></span>
                            <span>
                      <b>
                        <span v-for="(flight,flightIndex) in segments">
                          <span v-if="flightIndex==0">
                        {{
                          flight.OriginLocation.LocationCode !==
                          undefined
                            ? flights.airportsCity[
                        flight.OriginLocation.LocationCode
                        ].split(',')[0]
                            : ""
                        }}</span>
                          <span class="mdi mdi-airplane-takeoff"></span>
                        {{
                          flight.DestinationLocation.LocationCode !==
                          undefined
                            ? flights.airportsCity[
                        flight.DestinationLocation.LocationCode
                        ].split(',')[0]
                            : ""
                        }}
                        </span>
                      </b>
                    </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-sm-12 ref-pnr">
                      <div class="date-tickt">
                        <span>Date</span>
                        <span>Time</span>
                      </div>
                      <div v-for="(segments,segmentsIndex) in bookingChunks">
                        <div
                          v-for="(segment, segmentIndex) in segments"
                          v-if="segmentIndex == 0"

                          :key="`${segmentIndex}`">
                          <div class="from-lnd">
                            <div class="date-tickt"
                            >
                              <!--                                 v-if="segmentsIndex == 0 && segment.OriginLocation.LocationCode == params.locations.originLocationCode.iata"-->
                              <span>
                              <b>{{ convertTicketDate(segments[0]["DepartureDateTime"],'date') }}</b>
                            </span>
                              <span>
                              <b>{{ convertTicketDate(segments[0]["DepartureDateTime"],'time') }}</b>
                            </span>
                            </div>
                            <!--                            <div class="date-tickt"-->
                            <!--                                 v-if="segmentsIndex != 0 && segment.OriginLocation.LocationCode == params.locations.originLocationCode.iata">-->
                            <!--                            <span>-->
                            <!--                              <b>{{ convertTicketDate(segment["DepartureDateTime"],'date') }}</b>-->
                            <!--                            </span>-->
                            <!--                              <span>-->
                            <!--                              <b>{{ convertTicketDate(segment["DepartureDateTime"],'time') }}</b>-->
                            <!--                            </span>-->
                            <!--                            </div>-->
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="pic-box">
            <img src="/thanku-terminal.png" alt="">
          </div>
        </div>
        <div class="slect-icon">
          <!--          <button class="lname" name="lastname" @click="printPDF()" icon="mdi mdi-printer">Print E-Ticket</button>-->
          <!--          <button class="lname" name="lastname" @click="exportToPDF" icon="mdi mdi-printer">Download E-Ticket</button>-->
        </div>
      </div>
    </div>

    <!-- FlightPDF -->
    <div style="display:none">
      <div style="margin-top: -20px">
        <!-- <flightPDF /> -->
        <div class="container-fluid ticket-outer">
          <div class="logo-section">
            <img
              src="/logo.svg"
              class="main-logo"
              style="min-height: 50px;min-width: 50px"
            />
          </div>
          <div class="header1">
            <h3>YOUR TRIP</h3>
            <div class="header-content">
              <div class="header-text">Booking ref:</div>
              <div class="header-text" v-if="booking.CreatePassengerNameRecordRS.ItineraryRef.ID">
                {{ booking.CreatePassengerNameRecordRS.ItineraryRef.ID }}
              </div>
              <div class="header-text">Booking Date:</div>
              <div class="header-text"
                   v-if="booking.CreatePassengerNameRecordRS.ApplicationResults.Success[0].timeStamp">
                {{
                `${$days(
                new Date(booking.CreatePassengerNameRecordRS.ApplicationResults.Success[0].timeStamp).getDay()
                )},
                ${convertFlightDate(booking.CreatePassengerNameRecordRS.ApplicationResults.Success[0].timeStamp,'date')}`
                }}
              </div>
            </div>
          </div>
          <!--          <div class="header2">-->
          <!--            <div-->
          <!--              class="header-content2"-->
          <!--              v-for="(data, index) in booking.CreatePassengerNameRecordRS.TravelItineraryRead.TravelItinerary.CustomerInfo.PersonName"-->
          <!--              :key="index"-->
          <!--            >-->
          <!--              <div class="header-text2"><small>Traveler:</small></div>-->
          <!--              <div class="header-text2" style="text-align: right">-->
          <!--                <small v-if="data.GivenName && data.Surname"-->
          <!--                >{{ data.GivenName }}-->
          <!--                  {{ data.Surname }}</small-->
          <!--                >-->
          <!--              </div>-->
          <!--            </div>-->
          <!--            <div class="header-content2"-->
          <!--                 v-if="booking.CreatePassengerNameRecordRS.TravelItineraryRead.TravelItinerary.CustomerInfo.PersonName[0].Email[0].content">-->
          <!--              <div class="header-text2"><small>Email:</small></div>-->
          <!--              <div class="header-text2" style="text-align: right">-->
          <!--                <small>{{-->
          <!--                  booking.CreatePassengerNameRecordRS.TravelItineraryRead.TravelItinerary.CustomerInfo.PersonName[0].Email[0].content-->
          <!--                  }}</small>-->
          <!--              </div>-->
          <!--              <div class="header-text2"><small>Telephone:</small></div>-->
          <!--              <div class="header-text2" style="text-align: right">-->
          <!--                <small>{{-->
          <!--                  booking.CreatePassengerNameRecordRS.TravelItineraryRead.TravelItinerary.CustomerInfo.ContactNumbers.ContactNumber[0].Phone.replace('-M','')-->
          <!--                  }}</small>-->
          <!--              </div>-->
          <!--            </div>-->
          <!--          </div>-->
          <div class="other-deatils">
            <div
              class="other-deatils-content"
              v-for="(data, index) in booking.CreatePassengerNameRecordRS.AirBook.OriginDestinationOption.FlightSegment"
              :key="index"
            >
              <div class="other-deatils-text" style="width: 140%">
                <strong>Date</strong>
                <br/>
                <small v-if="data.DepartureDateTime">{{
                  `${convertTicketDate(
                  data.DepartureDateTime,'date'
                  )}`
                  }}</small>
              </div>
              <div class="other-deatils-text" style="width: 140%">
                <strong>City</strong>
                <br/>
                <small
                  v-if="
                    data.OriginLocation &&
                    data.DestinationLocation
                  "
                >{{flights.airportsCity[data.OriginLocation.LocationCode].split(',')[0] }} -
                  {{ flights.airportsCity[data.DestinationLocation.LocationCode].split(',')[0] }}
                </small>
              </div>
              <div class="other-deatils-text">
                <strong>Flight</strong>
                <br/>
                <small v-if="data.MarketingAirline && data.FlightNumber"
                >{{ flights.airlinesName[data.MarketingAirline.Code] }} - {{ data.FlightNumber }}</small
                >
              </div>
              <div class="other-deatils-text">
                <strong>From/To</strong>
                <br/>
                <small v-if="data.DepartureDateTime && data.ArrivalDateTime"
                >{{
                  `${convertTicketDate(
                  data.DepartureDateTime,'time'
                  )}` }} -
                  {{
                  `${convertTicketDate(
                  data.ArrivalDateTime,'time'
                  )}` }}
                </small>
              </div>
              <div
                v-if="booking.CreatePassengerNameRecordRS.TravelItineraryRead.TravelItinerary.ItineraryInfo.ReservationItems.Item[index].FlightSegment[0].Cabin"
                class="other-deatils-text">
                <strong>Class</strong>
                <br/>
                <small>{{
                  booking.CreatePassengerNameRecordRS.TravelItineraryRead.TravelItinerary.ItineraryInfo.ReservationItems.Item[index].FlightSegment[0].Cabin.Name
                  }}</small>
              </div>
              <div v-if="data.number_of_stops" class="other-deatils-text">
                <strong>Stop</strong>
                <br/>
                <small>
                  {{ data.number_of_stops }} Stop(s)
                </small>
              </div>
            </div>
          </div>

          <div class="other-deatils">
            <div class="other-deatils-content">
              <div class="other-deatils-text">
                <strong>Airline Booking Reference(s)</strong>
                <br/>
                <small>{{ booking.CreatePassengerNameRecordRS.ItineraryRef.ID }}</small>
              </div>
              <div class="other-deatils-text">
                <strong>Status</strong>
                <br/>
                <small>{{
                  booking.CreatePassengerNameRecordRS.TravelItineraryRead.TravelItinerary.ItineraryInfo.ReservationItems.Item[0].FlightSegment[0].Status
                  }}</small>
              </div>
            </div>
          </div>
          <div v-for="(flight, index) in booking.booked_flights" :key="index">
            <div
              v-for="(segment, segmentKey) in flight.booked_segments"
              :key="segmentKey"
            >
              <h5>
                <strong>{{
                  `${$days(
                  new Date(segment.origin.date).getDay()
                  )}, ${$formatDate(segment.origin["date"])}`
                  }}</strong>
              </h5>
              <div class="other-deatils" style="padding-bottom: 2px">
                <div class="other-deatils-content" style="align-items: center">
                  <div class="ticket-deatils-text" style="width: 200px">
                    <strong
                    >{{ segment.origin_airport_detail.city }}
                      {{ segment.airline }} {{ flight.flight_number }}</strong
                    >
                  </div>
                  <div class="ticket-deatils-text" style="width: 200px"></div>
                </div>
                <div class="other-deatils-content ticket-content">
                  <div class="ticket-deatils-text" style="width: 380px">
                    <b
                    >Departure:<span>
                        Departure: {{ `${$formatDate(segment.origin.date)}` }}
                        {{ segment.origin.time }}</span
                    ></b
                    >
                    <br/>
                    <b
                    >Arrival:<span>
                        Arrival: {{ $formatDate(segment.destination.date) }}
                        {{ segment.destination.time }}</span
                    ></b
                    >
                    <br/>
                    <small>Duration</small>
                    <br v-if="segment.origin.terminal"/>
                    <small v-if="segment.origin.terminal">Terminal</small>
                    <br/>
                    <small v-if="segment.baggage">Baggage</small>
                    <br v-if="segment.baggage"/>
                    <small>Cabin</small>
                    <br/>
                    <small>Class</small>
                    <br/>
                    <small>Number of Stops</small>
                    <br/>
                    <small>Boarding Time</small>
                    <br/>
                    <small>Equipment</small>
                  </div>
                  <div class="ticket-deatils-text" style="width: 300px">
                    <b v-if="segment.origin_airport_detail"
                    >{{ segment.origin_airport_detail.city }},
                      {{ segment.origin_airport_detail.country }}</b
                    >
                    <br/>
                    <b v-if="segment.destination_airport_detail"
                    >{{ segment.destination_airport_detail.city }},
                      {{ segment.destination_airport_detail.country }}</b
                    >
                    <br/>
                    <small v-if="segment.duration">{{
                      segment.duration
                      }}</small>
                    <br v-if="segment.origin.terminal"/>
                    <small v-if="segment.origin.terminal"
                    >T-{{ segment.origin.terminal }}</small
                    >
                    <br/>
                    <small v-if="segment.baggage">{{ segment.baggage }}</small>
                    <br v-if="segment.baggage"/>
                    <small v-if="segment.cabin">{{ segment.cabin }}</small>
                    <br/>
                    <small v-if="segment.class">{{ segment.class }}</small>
                    <br/>
                    <small v-if="segment.number_of_stops"
                    >{{ segment.number_of_stops }} Stop(s)</small
                    >
                    <br/>
                    <small>Please verify flight times prior to departure</small>
                    <br/>
                    <small>
                      <span v-if="segment.airline_detail">
                        {{ segment.airline_detail.name }}
                      </span>
                      {{ segment.equipment }} ({{ segment.airline }} -
                      {{ segment.flight_number }})</small
                    >
                  </div>
                </div>
                <p v-if="segment.stop_duration != '00H 00M'">
                  Connection time for next flight is {{ segment.stop_duration }}
                </p>
              </div>
            </div>
          </div>
          <div class="footor-content" style="margin-top: 10px">
            <b>Data Protection Notice : </b>
            <span>
              Your personal data will be processed in accordance with the
              applicable carrier’s privacy policy and, if your booking is made
              via a reservation system provider (“GDS”), with its privacy
              policy. These are available at
              http://www.iatatravelcenter.com/privacy or from the carrier or GDS
              directly. You should read this documentation, which applies to
              your booking and specifies, for example, how your personal data is
              collected, stored, used, disclosed and transferred. (applicable
              for interline carriage).
            </span>
          </div>
        </div>
      </div>
    </div>


    <div class="ticket-page container" ref="document">
      <div class="top-headr">
        <div>
          <!--          <img src="https://i.ibb.co/tZrNXJT/7q-Xo3-Iacz-Sk-Ovl-Gd-S9-Gt1-Hh-Un-Lyai-KZBXjuu-UYff.png"-->
          <!--               alt="7q-Xo3-Iacz-Sk-Ovl-Gd-S9-Gt1-Hh-Un-Lyai-KZBXjuu-UYff-1" border="0" alt="asdasd" height=" 105px"-->
          <!--          style="margin-top: 20px;" />-->
        </div>
        <!-- <div class=" bar-code">
            barcode
            <img src="https://i.ibb.co/Hh3vmv5/7q-Xo3-Iacz-Sk-Ovl-Gd-S9-Gt1-Hh-Un-Lyai-KZBXjuu-UYff-1.png"
                alt="7q-Xo3-Iacz-Sk-Ovl-Gd-S9-Gt1-Hh-Un-Lyai-KZBXjuu-UYff-1" border="0"" alt="" />
        </div> -->
      </div>
      <div class=" header-scnd">
        <div class="name-section">
          <table>
            <tr>
              <th>PREPAReR FOR:</th>
              <td>Habib/Yasir MR</td>
            </tr>
            <tr>
              <th>RESERVATION NO:</th>
              <td>Griffin</td>
            </tr>
            <tr>
              <th>AIRLINE CODE:</th>
              <td>Griffin</td>
            </tr>
          </table>
        </div>
        <div class="date-section">
          <table>
            <tr>
              <th>TRIP TO:</th>
              <td>tronoto on, canda</td>
            </tr>
            <tr>
              <th>Dates:</th>
              <td>20 jan 2022 - 02 mar 2022</td>
            </tr>
          </table>
        </div>

      </div>
      <div class="paraghp2">
        <div class="h5">
          <table>
            <tr>
              <td style="width: 21%;">Departure:</td>
              <th style="width: 79%;">saturday 20 jan 2022</th>
            </tr>
          </table>
        </div>
        <div class="h5" style="width: 50%;">
          <!-- <h5> -->
          <p style="float: right; font-size: 16px;margin: 0;">
            please verify flight time prior to depatrture
          </p>
          <!-- </h5> -->
        </div>
      </div>
      <!-- <div class="paraghp">
          <div class="h5" style="width: 60%;">
              <div class="strong">A Departure:</div>
              <div class="strong">saturday 20 jan 2022</div>
          </div>
          <div class="p">
              <p>please verify flight time prior to depatrture</p>
          </div>
      </div> -->
      <div class="ticket-section">
        <div class="blue-one">
          <div class="before"></div>
          <div class="airlin-logo">
            <div
              style="margin:auto;padding: 3px; background-color: white;display: inline-block; width: 75px;margin-left: 19px;">
              <img src="https://airhex.com/images/airline-logos/air-canada.png" width="89px!important" alt="">
            </div>
          </div>
          <ul>
            <li><strong> Duration:</strong></li>
            <li>
              <h6>3hr(s)30min(s)</h6>
            </li>
          </ul>
          <ul>
            <li><strong> Class:</strong></li>
            <li>
              <h6>Economy</h6>
            </li>
          </ul>
          <ul>
            <li><strong> Status:</strong></li>
            <li>
              <h6>Confrimed</h6>
            </li>
          </ul>
        </div>
        <div class="middle">
          <div class="airline-country">
            <div class="inner-container">
              <div class="lhr">
                <strong> LHR</strong>
                <h5>lahore,</h5>
                <h5>PAKISTAN</h5>
              </div>
              <div class="lhr">
                <strong> LHR</strong>
                <h5>lahore,</h5>
                <h5>PAKISTAN</h5>
              </div>
            </div>
          </div>
          <div class="airline-depatur">
            <div class="inner-container">
              <div class="arrivg">
                <h5>Departing at :</h5>
                <strong>04:30</strong>
                <div class="snd-arrive">
                  <h5>Terminal:</h5>
                  <strong>Terminal no:1</strong>
                </div>
              </div>
              <div class="deparue-at">
                <h5>Arriving at :</h5>
                <strong>04:30</strong>

                <div class="scnd-departur">
                  <h5>Terminal:</h5>
                  <strong>Terminal no:1</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="gray-last">
          <div class="aircrft">
            <div class="last-sctin">
              <strong> Aircraft:</strong>
              <h5>AIRBUS INDUSTFAIR,</h5>
              <h5>A232 JET</h5>
            </div>
            <div class="distance">
              <h5>Distance in (Miles)</h5>
              <strong>3141</strong>
              <h5>Stops:1</h5>
              <h5>Meals:</h5>
              <h5>Meals:1</h5>
            </div>
          </div>
        </div>

      </div>

      <div class="paraghp2 no2">
        <div class="h5">
          <table>
            <tr>
              <td style="width: 32%;">Passenger Name:</td>
              <th style="width: 68%;">HABIB/YASIR MR</th>
            </tr>
          </table>
        </div>
        <div class="h5" style="width: 50%;">
          <!-- <h5> -->
          <table>
            <tr>
              <td style="width: 61%;text-align:right">Seats:</td>
              <th style="width: 39%;padding-right: 18px;">Check in required</th>
            </tr>
          </table>
          <!-- </h5> -->
        </div>
      </div>
      <!-- <div class="btoom-heder" style="position: relative;">
          <div class="passenger-name">
              <strong> Passenger Name:</strong>
              <h5>HABIB/YASIR MR</h5>
          </div>
          <div class="passenger-name">
              <strong> Seats:</strong>
              <h5>Check in required</h5>
          </div>
      </div> -->
    </div>
  </div>
</template>

<script>
  import {mapState, mapGetters} from "vuex";
  import airports from '@/assets/airports.json';
  import html2pdf from "html2pdf.js";
  import jsPDF from "jspdf";

  export default {
    auth: false,

    data() {
      return {
        mailBoxOpen: false,
        bookingChunks: [],
        flights: {
          airportsCity: {},
          airlinesName: {},
          flightsList: [
            {
              AirItinerary: {
                OriginDestinationOptions: {
                  OriginDestinationOption: [
                    {
                      ElapsedTime: {},
                      FlightSegment: [
                        {
                          ArrivalAirport: {
                            LocationCode: '',
                            TerminalID: ''
                          },
                          ArrivalDateTime: '',
                          DepartureAirport: {
                            LocationCode: '',
                            TerminalID: ''
                          },
                          DepartureDateTime: '',
                          OperatingAirline: {
                            Code: ""
                          }
                        }
                      ]
                    }
                  ]
                },
              },
              AirItineraryPricingInfo: [
                {
                  ItinTotalFare: {
                    TotalFare: {
                      Amount: {}
                    }
                  }
                }
              ]

            },
          ],
        },
        data: {
          destinations: [],
        },
        loading: false,
        sent: false,
        headerLogo: "",
      };
    },

    computed: {
      ...mapState("forAll", [
        "airportsByKey",
        "booking"
      ]),
      ...mapState("flights", ["confirmedItinerary"]),
      ...mapGetters({
        siteLogos: "siteSetting/getLogos",
      }),
      ...mapGetters({params: "forAll/getSearchParams"}),
    },

    mounted() {
      if (this.booking) {
        this.booking.booked_flights = _.reverse(this.booking.booked_flights);

      }
    },

    // beforeCreate() {
    //   if (!this.$store.state.cache) {
    //     let booking = JSON.parse(localStorage.getItem("pnr"));
    //     this.$store.commit("forAll/setBooking", booking);
    //   }
    // },

    created() {
      this.$store.commit("setPnrGenerated", true)
      this.airportData();
      if (this.siteLogos) {
        this.headerLogo = this.siteLogos[0].header_logo;
      }
      if (this.$store.state.cache) {
        let booking = JSON.parse(localStorage.getItem("booking"));
        this.$store.commit("forAll/setBooking", booking);
        console.log(this.booking);
      }
      if (!this.booking) {
        return this.redirect();
      }
      this.data.destinations = this.confirmedItinerary.segments;
      this.createChunks();
    },

    methods: {
      airportData() {
        this.flights.airportsCity = airports.airportsCity;
        this.flights.airlinesName = airports.airlines;
      },
      redirect() {
        return this.$router.push("/");
      },

      convertFlightDate(dataDate, type) {
        let date = new Date(dataDate);
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let dt = date.getDate();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        let time = hours + ':' + minutes + '' + ampm;

        if (dt < 10) {
          dt = '0' + dt;
        }
        if (month < 10) {
          month = '0' + month;
        }

        let newdate = dt + '-' + month + '-' + year;
        if (type == 'date') {
          return newdate;
        } else if (type == 'time') {
          return time;
        } else {
          return 'error issue'
        }
      },
      convertTicketDate(dataDate, type) {
        let dateString1 = new Date().getFullYear() + '-' + dataDate
        let dateString2 = (new Date().getFullYear() + 1) + '-' + dataDate
        // console.log(new Date(dateString1))
        if (new Date(dateString1) > new Date()) {
          return this.convertFlightDate(dateString1, type)
        } else if (new Date(dateString1) <= new Date()) {
          return this.convertFlightDate(dateString2, type)
        }
        // if(type=='date'){
        //   // 02-01T11:10
        //   let currentDate = dataDate.split('T')[0]
        //   let date = currentDate.split('-')[1]+'-'+currentDate.split('-')[0]
        //   return date
        // }else if(type=='time'){
        //   let currentTime = dataDate.split('T')[1]
        //   return currentTime
        // }
      },
      testing() {
        // if(this.mailBoxOpen){
        //    this.mailBoxOpen=false
        // }
        // this.convertTicketDate("01-01T11:10", "date")
        // console.log('confirmedItinerary',this.confirmedItinerary)
        // console.log('bookingData', this.booking)
        // console.log('confirmed', this.confirmedItinerary)
        // console.log('confirmed', this.params.locations.destinationLocationCode)
        // console.log('confirmed', this.params.locations.destinationLocationCode.code)
        // console.log('bookingData',this.booking.CreatePassengerNameRecordRS.ItineraryRef.ID)
      },
      createChunks() {
        let bookingchunks = []
        let lastChunk = 0
        this.confirmedItinerary.itinerary.AirItinerary.OriginDestinationOptions.OriginDestinationOption.forEach((item, index) => {
          // if( index == 0 ){
          let a = item.FlightSegment.length
          bookingchunks.push(this.booking.CreatePassengerNameRecordRS.AirBook.OriginDestinationOption.FlightSegment.slice(lastChunk, lastChunk + a))
          lastChunk = a
          // }
        })
        this.bookingChunks = bookingchunks;
        console.log(this.bookingChunks)
      },
      onSubmit() {
        this.$validator.validate().then((result) => {
          if (result) {
            this.loading = true;
            this.$api({
              method: "post",
              url: `/booking/email/${this.booking.CreatePassengerNameRecordRS.ItineraryRef.ID}`,
              data: this.data,
            })
              .then(() => {
                this.sent = true;
                this.mailBoxOpen = false
              })
              .catch((err) => {
                console.log(err.response);
              })
              .then(() => (this.loading = false));
          } else {
            this.$bvToast.toast(`Provided data is not valid`, {
              title: "GALA TRAVEL!",
              variant: "danger",
            });
          }
        });
      },
      print() {
      },
      downloadPdf(file) {
        this.$api
          .get("booking/download/" + file, {responseType: "arraybuffer"})
          .then((res) => {
            let blob = new Blob([res.data], {type: "application/*"});
            let link = document.createElement("a");
            link.href = window.URL.createObjectURL(blob);
            link.download = "booking.pdf";
            link.click();
          });
      },

      printPDF() {
        // To Print PDF
        html2pdf()
          .from(this.$refs.document)
          .toPdf()
          .get("pdf")
          .then(function (pdf) {
            window.open(pdf.output("bloburl"), "_blank");
          });
      },

      exportToPDF() {
        html2pdf(this.$refs.document, {
          margin: 1,
          filename: `${this.booking.CreatePassengerNameRecordRS.TravelItineraryRead.TravelItinerary.CustomerInfo.PersonName[0].Surname}`,
          // filename: "hlw",
          image: {type: "jpeg", quality: 0.98},
          html2canvas: {dpi: 192, letterRendering: true},
          jsPDF: {
            unit: "px",
            format: "a4",
            orientation: "portrait",
            putOnlyUsedFonts: true,
            hotfixes: ["px_scaling"],
          },
        });
      },
    },
  };
</script>

<style scoped>

  .ticket-page {
    background-color: rgb(255, 255, 255);
    width: 1000px;
    margin: auto;
  }

  .ticket-page .top-headr {
    position: relative;
    margin: auto;
  }

  .header-scnd {
    width: 100%;
    position: relative;
    margin: auto;
    margin-bottom: 10px;
  }

  .header-scnd table,
  th,
  td {
    text-transform: uppercase;
    align-items: baseline;
    text-transform: uppercase;
  }

  .header-scnd table,
  tr {
    line-height: 34px;
  }

  .header-scnd table,
  th {
    width: 30%;
    text-align: -webkit-left;
  }

  .name-section {
    width: 50%;
  }

  .header-scnd table {
    width: 100%;
  }

  .date-section span h5 {
    text-transform: uppercase;
    line-height: 34px;
  }

  .date-section span {
    text-transform: uppercase;
    font-weight: bold;
    line-height: 14px;
  }

  .date-section h5 {
    margin: 0px;
    line-height: 39px;
    font-size: 20px;
    font-weight: lighter;
  }

  .parghp {
    width: 100%;
    margin: 15px auto 0px auto;
    padding-top: 10px;
    position: relative;
  }

  .parghp .h5 {
    font-size: 18px;
    font-weight: 100;
    text-transform: uppercase;
    /* padding-left: 47px; */
    margin: 0px;
    position: relative;
    /* display: inline; */
    width: 60%;
    position: absolute;
    top: 0;
    left: 0;
    height: 30px;
  }

  .parghp .h5 h5,
  .parghp .p p {
    margin: 0;
  }

  .parghp .p p {
    margin-top: 5px;
  }

  .parghp .p {
    color: gray;
    /* margin-left: 20px; */
    width: 39.5%;
    text-align: right;
    /* display: inline; */
    position: absolute;
    top: 0;
    right: 0;
  }


  .parghp .h5 .strong:first-child {
    font-weight: 100;
    /* overflow: hidden; */
    /* width: 100%; */
  }

  .parghp .h5 .strong:last-child {
    /* margin-left: 7px; */
    text-transform: uppercase;
    width: 80%;
    position: absolute;
    top: 0;
    left: 20%;
  }

  .ticket-section {
    position: relative;
    width: 100%;
    margin: 0 -5px;
    height: 305px;
    border: 1px solid rgb(187, 183, 183);
    border-radius: 30px;
    overflow: hidden;
  }

  .blue-one .before {
    width: 13px;
    height: 13px;
    content: '';
    background: #0a67a5;
    position: absolute;
    transform: rotateZ(45deg) translate(20%, -50%);
    left: calc(100% - 12px);
    top: 50%;
    z-index: 1;
  }

  .ticket-section .blue-one {
    position: absolute;
    top: 0;
    left: 0;
    width: 15%;
    height: 305px;
    background-color: #0a67a5;
    color: white;
    border-bottom-left-radius: 12px;
    border-top-left-radius: 12px;
  }

  .ticket-section .middle {
    position: absolute;
    height: 305px;
    top: 0;
    left: 15%;
    width: 55%;
    background-color: white;
  }

  .ticket-section .gray-last {
    position: absolute;
    top: 0;
    height: 305px;
    left: 70%;
    width: 30%;
    background-color: #e8e9ea;
    border-bottom-right-radius: 12px;
    border-top-right-radius: 12px;
  }

  .blue-one h6 {
    margin: 0px;
    line-height: 20px;
    font-size: 16px;
    font-weight: normal;
  }

  .blue-one ul {
    list-style-type: none;
    /* padding-inline-start: 20px; */
    padding-top: 12px;
    padding-left: 30px;
    margin: 0px;
  }

  .blue-one strong {
    font-size: 18px;
  }

  .airline-country {
    height: 110px;
    border-bottom: 1px dashed;
    border-color: #cccdd0;
  }

  .airline-depatur .inner-container,
  .airline-country .inner-container {
    position: relative;
    width: 100%;
    margin: auto;
  }

  .lhr {
    position: absolute;
    left: 0;
    top: 0;
    padding-top: 20px;
    width: 50%;
    padding-left: 30px;
  }

  .lhr:last-child {
    position: absolute;
    left: 50%;
    top: 0;
  }

  .lhr h5 {
    margin: 0px;
    font-size: 18px;
    text-transform: capitalize;
    font-weight: lighter;
    margin-top: 15px;
    line-height: 10px;
  }

  .airline-depatur {
    position: relative;
    height: 189px;
  }

  .arrivg,
  .deparue-at {
    position: absolute;
    width: 50%;
    height: 160px;
  }


  .arrivg {
    padding-top: 30px;
    left: 0;
    padding-left: 30px;
    top: 0;
  }

  .arrivg h5 {
    margin: 0px;
    font-size: 20px;
    font-weight: lighter;
    margin-bottom: 8px;
  }

  .deparue-at {
    left: 50%;
    top: 0;
    padding-top: 30px;
    padding-left: 30px;
    margin: 0px -3px;
    border-left: 1px dashed;
    border-color: lightgray;
  }

  .deparue-at h5 {
    margin: 0px;
    font-size: 20px;
    font-weight: lighter;


    margin-bottom: 8px;
  }

  .deparue-at strong {
    font-size: 20px;

  }

  .snd-arrive h5 {
    margin: 0px;
    font-size: 20px;
    font-weight: lighter;
    margin-bottom: 8px;
  }

  .snd-arrive {
    padding-top: 20px;
  }

  .snd-arrive strong {
    font-size: 20px;
  }

  .arrivg strong {
    font-size: 20px;
  }

  .date-section {
    position: absolute;
    top: 0;
    left: 63%;
    width: 37%;
  }

  .scnd-departur h5 {
    margin: 0px;
    font-size: 20px;
    font-weight: lighter;
    margin-bottom: 8px;
  }

  .parghp-btm *,
  .parghp * {
    display: inline-block;
  }

  .scnd-departur {
    padding-top: 20px;
  }

  .aircrft {
    padding-left: 63px;
    padding-top: 20px;
  }

  .last-sctin h5 {
    margin: 0px;
    font-size: 18px;
    font-weight: lighter;
    margin-top: 11px;
    line-height: 10px;
  }

  .last-sctin strong {
    font-size: 20px;
  }

  .last-sctin {
    height: 100px;
  }

  .distance h5 {
    margin: 0px;
    font-size: 20px;
    font-weight: lighter;
    margin-top: 4px;
  }

  .distance strong {
    font-size: 20px;
  }

  .distance {
    margin-top: 18px;
  }

  .btoom-heder {
    width: 100%;
    margin: auto;
    border-bottom: 2px solid lightslategray;
    height: 70px;
  }

  .passenger-name {
    padding-top: 10px;
    padding-bottom: 6px;
  }

  .passenger-name h5 {
    margin: 0px;
    font-size: 20px;
    font-weight: normal;
    margin-left: 5px;
  }

  .passenger-name strong {
    font-size: 20px;
  }

  .airlin-logo {
    padding: 16px;
    height: 90px;
    border-radius: 70px;
    overflow: hidden;
  }

  .airlin-logo img {
    width: 75px;
  }

  .paraghp {
    position: relative;
    padding: 9px 18px;
    border-top: 2px dashed;
    border-color: lightgray;
  }

  .paraghp .h5 {
    width: 60%;
    position: relative;
    margin: 0;
    font-size: 19px;
    text-transform: uppercase;
  }

  .paraghp .h5 .strong:first-child {
    font-weight: 200;
    width: 25%;
  }

  .paraghp .h5 .strong:last-child {
    position: absolute;
    padding-left: 0px;
    top: 0;
    left: 25%;
    /* font-weight: 100; */
    width: 75%;
  }

  .paraghp .p {
    position: absolute;
    top: 0;
    right: 0;
    width: 40%;
    padding: 9px 18px;
    text-align: right;
  }

  .paraghp .p p {
    margin: 0;
  }


  .paraghp2 {
    position: relative;
    padding: 0px 18px;
    border-top: 2px dashed;
    border-color: lightgray;
    /* font-size: 19px; */
  }

  .paraghp2 table {
    width: 100%;
  }

  .paraghp2.no2 {
    border-top: 0px;
  }

  .paraghp2 .h5 {
    width: 50%;
  }

  .paraghp2 .h5:last-child {
    position: absolute;
    top: 0;
    right: 0;
  }

  .paraghp2 .h5:last-child p {
    padding: 9px 18px;
  }

  .paraghp2 .h5:last-child table {
    float: right;
  }

  .paraghp2 table th {
    width: auto;
  }

  .passenger-name {
    position: absolute;
    width: 50%;
    display: inline-block;
  }

  .passenger-name:last-child {
    float: right;
    position: absolute;
    left: 50%;
    top: 0;
  }

  body {
    background: rgb(233, 231, 231);
    font-family: arial;
    padding-top: 20px;
  }

  .ticket-outer {
    min-height: 200px;
    max-width: 800px;
    padding: 25px;
    margin: auto;
    background-color: white;
  }

  .header1 {
    min-height: 80px;
    background: #d73240;
    width: 100%;
    margin-bottom: 10px;
    padding-top: 5px;
  }

  .header1 h3 {
    margin: 5px 10px;
    color: white;
  }

  .header-content {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .header-text {
    padding: 5px 10px;
    color: white;
  }

  .header2 {
    background: #f5f5f5;
    width: 100%;
    margin-bottom: 10px;
    padding: 8px 0px;
  }

  .header-content2 {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .header-text2 {
    padding: 0px 10px;
    text-align: left;
    color: white;
    width: 100%;
  }

  .header-text2 small {
    font-weight: bold;
    color: #2b376e;
  }

  .other-deatils {
    min-height: 40px;
    background: #f8f8f8;
    width: 100%;
    margin-bottom: 10px;
    padding-top: 5px;
  }

  .other-deatils h3 {
    margin: 5px 10px;
    color: white;
  }

  .other-deatils-content {
    width: 100%;
    display: flex;
    flex-direction: row;
  }

  .other-deatils-text {
    padding: 5px 10px;
    width: 100%;
    color: #2b376e;
    font-size: 12px;
  }

  .other-deatils-text strong {
    font-size: 12px;
    color: #2b376e;
  }

  .other-deatils-text small {
    color: #2b376e;
  }

  .ticket-outer h5 {
    margin: 0px;
    margin-bottom: 5px;
    font-size: 14px;
    font-weight: lighter;
    color: #2b376e;
  }

  .ticket-content {
    padding-bottom: 0px;
  }

  .ticket-deatils-text {
    padding: 5px 10px 0px;
    width: 100%;
    color: #2b376e;
    font-size: 12px;
  }

  .logo-section {
    text-align: center;
  }

  .ticket-deatils-text strong {
    font-size: 14px;
    color: #2b376e;
  }

  .ticket-deatils-text small {
    color: #2b376e;
    font-size: 12px;
  }

  .other-deatils p {
    color: #2b376e;
    margin-left: 15px;
    font-size: 12px;
    font-weight: bold;
  }

  .footor-content {
    min-height: 200px;
    background: #f8f8f8;
    width: 100%;
    padding: 10px 10px 15px;
  }

  .footor-content b {
    font-size: 12px;
    color: #2b376e !important;
  }

  .footor-content span {
    color: #2b376e !important;
    font-size: 12px;
    text-align: justify;
  }

  .logo-section {
    width: 100%;
    padding-bottom: 20px;
    text-align: center;
  }

  .logo-section img {
    max-width: 150px;
  }
</style>
