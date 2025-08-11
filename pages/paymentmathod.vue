<template>
  <div class="container-fluid flight-list-body">
    <div class="height-38"></div>
    <div class="flights-page">
      <div class="flights-heading">
        <div class="container pb-3 pt-1" v-if="!notFoundError">
          <div class="flights-modify-section">
            <div class="left">
              <div class="flight-top-section">
                <h2 v-if="params && params.type !== 'multi'">
                  <span>
                    {{ `${params["locations"]["originLocationCode"]["city"]}` }}
                    <span class="mdi mdi-airplane mdi-rotate-90"></span>
                    {{
                      `${params["locations"]["destinationLocationCode"]["city"]}`
                    }}
                  </span>
                </h2>
                <h2 v-else>
                  <span>
                    <span
                      v-for="(destination, index) in params.destinations"
                      :key="index"
                    >
                      <span v-if="index != 0"> /</span>
                      <template
                        v-if="
                          destination['locations']['originLocationCode'] !==
                          undefined
                        "
                      >{{
                          `${destination["locations"]["originLocationCode"]["city"]} to ${destination["locations"]["destinationLocationCode"]["city"]}`
                        }}</template
                      >
                    </span>
                  </span>
                </h2>
              </div>
              <h5 v-if="params && params.type !== 'multi'">
                {{
                ` Travelling ${params["departureDate"].getDate()}/${$months(
                params["departureDate"].getMonth()
                )}/${params["departureDate"].getFullYear()}`
                }}
                {{
                params["returnDate"]
                ? `to ${params["returnDate"].getDate()}/${$months(
                params["returnDate"].getMonth()
                )}/${params["returnDate"].getFullYear()}`
                : ""
                }}
              </h5>
              <h5 v-else>
                <span
                  v-for="(destination, index) in params.destinations"
                  :key="index"
                >
                  <template
                    v-if="
                      destination['locations']['originLocationCode'] !==
                      undefined
                    "
                  >{{
                      `Travelling ${destination[
                        "departureDate"
                      ].getDate()}/${$months(
                        destination["departureDate"].getMonth()
                      )}/${destination["departureDate"].getFullYear()}`
                    }}
                    {{
                      destination["returnDate"]
                        ? `to ${destination["returnDate"].getDate()}/${$months(
                            destination["returnDate"].getMonth()
                          )}/${destination["returnDate"].getFullYear()}`
                        : ""
                    }}
                    /
                  </template>
                </span>
              </h5>
            </div>
            <div>
              <div class="right">
                <flightModifySearchParams></flightModifySearchParams>
                <!-- <button class="btn btn-primary">Change your flight</button> -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container pt-3 pb-0">
        <div class="flight-listing your-flight-outer">
          <div class="filter2">
            <div class="your-flight">
              <img src="../static/plane-select.png" alt/>
              <br/>
              <h2>Your flight</h2>
              <h6
                v-for="(passsenger, key, index) in confirmedItinerary[
                  'passengers'
                ]"
                :key="index"
              >
                {{ passsenger.total }} passengers
                {{
                `${params["locations"]["originLocationCode"]["city"]} to
                ${params["locations"]["destinationLocationCode"]["city"]}`
                }}
              </h6>
            </div>
          </div>
          <div class="flights-list">
            <div
              class="flight-box mb-2"

            >

              <div class="flight-result-box mt-0"
                   v-for="(segment, segmentIndex) in confirmedItinerary.itinerary.AirItinerary.OriginDestinationOptions.OriginDestinationOption"
                   :key="`${segmentIndex}`">

                <div class="center-box">
                  <div class="time-section">
                    <h5 class="mb-2 mt-2 pl-1">
                <span>
                  <b v-if="params.type !== 'multi'">
                    {{
                      segmentIndex === 0 ? "Outbound Flight" : "Inbound Flight"
                    }}

                  </b>

                  <b v-else>Departure</b>
                </span>
                      -
                      <strong v-if="airportsByKey">
                        {{segment.FlightSegment[0].DepartureAirport.LocationCode}}
                      </strong>
                      to
                      <strong v-if="airportsByKey">
                        {{segment.FlightSegment[segment.FlightSegment.length-1].ArrivalAirport.LocationCode}}
                      </strong>
                    </h5>
                    <div
                      class="time-section-top"
                    >
                      <input
                        class="radioButton"
                        type="radio"
                      />
                      <label
                        class="media no_selection"
                      >
                        <div class="logo-box h-100">
                          <div class="logo-section">
                            <div class="logo">
                              <img
                                style="max-width: 30px"
                                :src="require('./../assets/airline_logos/'+segment.FlightSegment[0].OperatingAirline.Code+'.png')"
                              />
                              <div>
                                <p>
                                  {{
                                  airlinesByKey[segment.FlightSegment[0].OperatingAirline.Code].name}}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="go-city">
                          <h5 v-if="airportsByKey">
                            {{airportsByKey[segment.FlightSegment[0].DepartureAirport.LocationCode].city}}
                          </h5>
                          <h6>
                            {{segment.FlightSegment[0].DepartureAirport.LocationCode}} <span v-if="segment.FlightSegment[0].DepartureAirport.TerminalID">-T{{segment.FlightSegment[0].DepartureAirport.TerminalID}}</span>
                          </h6>
                        </div>

                        <div class="duration">
                          <div class="time">
                            <h5>
                              {{convertFlightDate(segment.FlightSegment[0].DepartureDateTime,'time')}}
                            </h5>
                            <h6>
                              {{convertFlightDate(segment.FlightSegment[0].DepartureDateTime,'date')}}
                            </h6>
                          </div>
                          <div class="stops">
                            <small>
                              stops{{segment.FlightSegment.length-1}}
                            </small>
                            <div class="dott"></div>
                            <div class="hr"></div>
                            <small>
                              {{ parseInt(segment["ElapsedTime"]/60) }}H {{segment["ElapsedTime"]%60}}M
                            </small>
                          </div>
                          <div class="time">
                            <small></small>
                            <h5>
                              <!--                                                    {{ segment["arrivalTime"] }}-->
                              {{convertFlightDate(segment.FlightSegment[segment.FlightSegment.length-1].ArrivalDateTime,'time')}}
                            </h5>
                            <h6>
                              <!--                          {{ $formatDate(segments[0].arrivalDate) }}-->
                              {{convertFlightDate(segment.FlightSegment[segment.FlightSegment.length-1].ArrivalDateTime,'date')}}
                            </h6>
                          </div>
                        </div>
                        <div class="to-city">
                          <h5 v-if="airportsByKey">
                            {{airportsByKey[segment.FlightSegment[segment.FlightSegment.length-1].ArrivalAirport.LocationCode].city}}
                          </h5>
                          <h6>
                            {{segment.FlightSegment[segment.FlightSegment.length-1].ArrivalAirport.LocationCode}}
                            <span v-if="segment.FlightSegment[segment.FlightSegment.length-1].ArrivalAirport.TerminalID">
                            -T{{segment.FlightSegment[segment.FlightSegment.length-1].ArrivalAirport.TerminalID}}
                            </span>
                          </h6>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
                <div class="baggage detail-baggage" v-if="segmentIndex == confirmedItinerary.length -1">

                  <div class="flex-option">
                    <div class="icons">
                      <div>
                        <span class="mdi mdi-seat-recline-normal"></span>
                        <span class="mdi mdi-video"></span>
                        <span class="mdi mdi-wifi"></span>
                        <span class="mdi mdi-power-plug mdi-rotate-90"></span>
                        <span class="mdi mdi-food-fork-drink"></span>
                      </div>
                    </div>
                  </div>
                  <div class="flex-option"
                       @click="setDetail(confirmedItinerary,segmentsPricing[0].ItinTotalFare.TotalFare)"
                  >

                    <i class="fa fa-plane"></i>
                    <!--            {{itinerary.weightType}}-->
                    <small>
                      <a>
                        Flight Detail
                      </a>
                    </small>
                  </div>
                </div>
              </div>

              <div class="baggage" @click="testing">
                <div class="flex-option">
                  <div class="icons">
                    <div>
                      <span class="mdi mdi-seat-recline-normal"></span>
                      <span class="mdi mdi-video"></span>
                      <span class="mdi mdi-wifi"></span>
                      <span class="mdi mdi-power-plug mdi-rotate-90"></span>
                      <span class="mdi mdi-food-fork-drink"></span>
                    </div>
                  </div>
                </div>
                <div class="flex-option">
                  <i class="fa fa-suitcase"></i>
                  <small>Baggage Detail</small>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div class="container pt-4 pb-0">
        <div class="flight-listing your-flight-outer mb-4">
          <div class="filter2">
<!--            <div-->
<!--              class="fare-summ"-->
<!--              v-for="(passsenger, key, index) in confirmedItinerary[-->
<!--                'passengers'-->
<!--              ]"-->
<!--              :key="index"-->
<!--            >-->
<!--              <div class="lable">-->
<!--                <h4>Fare Summary</h4>-->
<!--              </div>-->
<!--              <div class="price-section">-->
<!--                <div>-->
<!--                  <b>{{ key }}:</b>-->
<!--                </div>-->
<!--                <div>-->
<!--                  <span-->
<!--                  >{{ `${passsenger.totalAmount}` }} x-->
<!--                    {{ passsenger.total }}</span-->
<!--                  >-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="price-section">-->
<!--                <div>-->
<!--                  <b>Fare:</b>-->
<!--                </div>-->
<!--                <div>-->
<!--                  <span>{{ `${confirmedItinerary.baseAmount}` }}</span>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="price-section">-->
<!--                <div>-->
<!--                  <b>Taxes & Fees:</b>-->
<!--                </div>-->
<!--                <div>-->
<!--                  <span>{{ `${confirmedItinerary.taxAmount}` }}</span>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="total">-->
<!--                <div class="price-section">-->
<!--                  <div>-->
<!--                    <b>GRAND TOTAL</b>-->
<!--                  </div>-->
<!--                  <div>-->
<!--                    <span>-->
<!--                      <small>{{ `${confirmedItinerary.currency}` }}</small-->
<!--                      >{{ ` ${confirmedItinerary.totalAmount}` }}</span-->
<!--                    >-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->

            <div
              class="fare-summ"
            >
              <div class="lable">
                <h4>Fare Summary</h4>
              </div>
              <div class="price-section"
                   v-for="(price, key, index) in segmentsPricing[0].PTC_FareBreakdowns.PTC_FareBreakdown"
                   :key="index"
              >
                <div>
                  <b>{{convertPassengerType( price.PassengerTypeQuantity.Code) }} :{{ price.PassengerTypeQuantity.Quantity }}</b>

                </div>
                <div>
                  <span
                  >{{ `${price.PassengerFare.TotalFare.Amount}` }}<small>  {{price.PassengerFare.TotalFare.CurrencyCode}}</small></span
                  >
                </div>
              </div>
              <div class="price-section">
                <div>
                  <b>Fare</b>
                </div>
                <div>
                  <span>{{ segmentsPricing[0].ItinTotalFare.BaseFare.Amount }} <small>{{segmentsPricing[0].ItinTotalFare.BaseFare.CurrencyCode}}</small> </span>
                </div>
              </div>
              <div class="price-section">
                <div>
                  <b>Taxes & Fees</b>
                </div>
                <div>
                  <span>{{ `${segmentsPricing[0].ItinTotalFare.Taxes.Tax[0].Amount}` }} <small>{{ `${segmentsPricing[0].ItinTotalFare.Taxes.Tax[0].CurrencyCode}` }}</small></span>
                </div>
              </div>
              <div class="total">
                <div class="price-section">
                  <div>
                    <b>GRAND TOTAL</b>
                  </div>
                  <div>
                    <span>
                      {{ ` ${segmentsPricing[0].ItinTotalFare.TotalFare.Amount}` }}<small>{{ `${segmentsPricing[0].ItinTotalFare.TotalFare.CurrencyCode}` }}</small
                    ></span
                    >
                  </div>
                </div>
              </div>
              <div class="luggage">
                <div class="price-section">
                  <div>
                    <button
                      class="btn btn-primary"
                      @click="open = true"
                    >
                      Fare Rules
                    </button>
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
                    <div class="img">
                      <img src="../static/passport.png" alt/>
                    </div>
                    <div class="text-section">
                      <h5 @click="dataFormateArr('type')">Is everything the same as in your passport?</h5>
                      <h6>
                        Double check your personal details
                        <br/>If the details are not correct, the passenger
                        might be denied boarding.
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div class="Passenger-info mt-0">
                <div class="passenger-detail-form">
                  <div class="heading"><b>Passenger Details</b></div>
                </div>
                <div class="confirm-pax-detail" v-if="bookingData.travellers">

                  <div
                    v-for="(traveller, index) in bookingData.travellers"
                    :key="index"
                  >
                    <div class="row">
                      <div class="col-lg-3 col-6">
                        <h4>
                          {{ $ucfirst(traveller.type) }}-{{
                          traveller.number
                          }}
                        </h4>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-lg-3 col-6">
                        <label for>Gender:</label>
                      </div>
                      <div class="col-lg-3 col-6">
                        <span>{{ traveller.gender }}</span>
                      </div>
                      <div class="col-lg-3 col-6">
                        <label for>Name:</label>
                      </div>
                      <div class="col-lg-3 col-6">
                        <span>{{
                          `${$ucfirst(traveller.title)} ${
                            traveller.firstName
                          } ${traveller.lastName}`
                        }}</span>
                      </div>
                      <div class="col-lg-3 col-6">
                        <label for>Date of Birth:</label>
                      </div>
                      <div class="col-lg-3 col-6">
                        <span>{{ $formatDate(traveller.dateOfBirth) }}</span>
                      </div>
                      <div class="col-lg-3 col-6">
                        <label for>Meal:</label>
                      </div>
                      <div class="col-lg-3 col-6">
                        <span>{{
                          traveller.meal ? mealName[index] : "--"
                        }}</span>
                      </div>
                    </div>
                  </div>
                  <div v-if="bookingData">
                    <div class="row">
                      <div class="col-lg-3 col-6">
                        <label for>Email:</label>
                      </div>
                      <div class="col-lg-3 col-6">
                        <span>{{ bookingData.contact.email }}</span>
                      </div>
                      <div class="col-lg-3 col-6">
                        <label for>Number:</label>
                      </div>
                      <div class="col-lg-3 col-6">
                        <span>{{ bookingData.contact.mobile }}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="next-btn-section justify-content-start pl-3">
                  <b-form-checkbox
                    v-model="termsCheckbox"
                    class="mb-2 mr-sm-2 mb-sm-0"
                  >
                    I agree with the
                    <span>Terms and Conditions</span> and confirm all traveler
                    and payment data is correct.
                  </b-form-checkbox>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="flight-listing your-flight-outer mb-4">
          <div class="filter2">
            <div class="your-flight">
              <img src="../static/payment-icon.png" alt/>
              <br/>
              <h2>Payment</h2>
              <h6>Choose payment method</h6>
            </div>
          </div>
          <div class="flights-list">
            <div class="flight-box mb-2">
              <div class="Passenger-info mt-0">
                <div class="heading mb-0 border-bottom-0">
                  <b>Hold Booking <small>(24 Hours)</small></b>
                </div>
<!--                <div class="payment-detail-form">-->
<!--&lt;!&ndash;                  <div class="form-box">&ndash;&gt;-->
<!--&lt;!&ndash;                    <div class="fileds pb-2">&ndash;&gt;-->
<!--&lt;!&ndash;                      <b-form-radio-group v-model="data.payment">&ndash;&gt;-->
<!--&lt;!&ndash;                        <b-form-radio value="credit" name="payment">Credit Card</b-form-radio>&ndash;&gt;-->
<!--&lt;!&ndash;                        <b-form-radio value="cash" name="payment"&ndash;&gt;-->
<!--&lt;!&ndash;                        >Hold Booking (24 Hours)&ndash;&gt;-->
<!--&lt;!&ndash;                        </b-form-radio&ndash;&gt;-->
<!--&lt;!&ndash;                        >&ndash;&gt;-->
<!--&lt;!&ndash;                      </b-form-radio-group>&ndash;&gt;-->
<!--&lt;!&ndash;                    </div>&ndash;&gt;-->
<!--&lt;!&ndash;                  </div>&ndash;&gt;-->
<!--&lt;!&ndash;                  <div class="form-box">&ndash;&gt;-->
<!--&lt;!&ndash;                    <div class="fileds">&ndash;&gt;-->
<!--&lt;!&ndash;                      <strong>&ndash;&gt;-->
<!--&lt;!&ndash;                      </strong>&ndash;&gt;-->
<!--&lt;!&ndash;                    </div>&ndash;&gt;-->
<!--&lt;!&ndash;                  </div>&ndash;&gt;-->
<!--                  <div class="row" v-if="data.payment == 'credit'">-->
<!--                    <div class="col-lg-6">-->
<!--                      <div class="form-box">-->
<!--                        <div class="title">-->
<!--                          <h5>-->
<!--                            Credit Number-->
<!--                            <span>*</span>-->
<!--                          </h5>-->
<!--                        </div>-->
<!--                        <div class="fileds">-->
<!--                          <b-form-group>-->
<!--                            <b-form-input-->
<!--                              type="text"-->
<!--                              v-model="data.credit.creditCardNumber"-->
<!--                              class="form-control"-->
<!--                              placeholder="Credit Number"-->
<!--                              data-vv-name="credit_number"-->
<!--                              id="credit_number"-->
<!--                              data-vv-as="Credit Number"-->
<!--                              :state="-->
<!--                                errors.has(`credit_number`) ? false : null-->
<!--                              "-->
<!--                            >-->
<!--                            </b-form-input>-->
<!--                            <b-tooltip-->
<!--                              v-if="errors.has(`credit_number`)"-->
<!--                              :show="true"-->
<!--                              triggers="focus"-->
<!--                              :target="`credit_number`"-->
<!--                              placement="bottom"-->
<!--                              variant="danger"-->
<!--                            >{{ errors.first(`credit_number`)}}-->
<!--                            </b-tooltip-->
<!--                            >-->
<!--                          </b-form-group>-->
<!--                        </div>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                    <div class="col-lg-6">-->
<!--                      <div class="form-box">-->
<!--                        <div class="title">-->
<!--                          <h5>-->
<!--                            CVC-->
<!--                            <span>*</span>-->
<!--                          </h5>-->
<!--                        </div>-->
<!--                        <div class="fileds">-->
<!--                          <b-form-input-->
<!--                            v-model="data.credit.creditCardCvcCode"-->
<!--                            type="text"-->
<!--                            class="form-control"-->
<!--                            placeholder="CVC"-->
<!--                            data-vv-name="cvc"-->
<!--                            id="cvc"-->
<!--                            data-vv-as="CVC"-->
<!--                            :state="-->
<!--                                errors.has(`cvc`) ? false : null-->
<!--                              "-->
<!--                          ></b-form-input>-->
<!--                          <b-tooltip-->
<!--                            v-if="errors.has(`cvc`)"-->
<!--                            :show="true"-->
<!--                            triggers="focus"-->
<!--                            :target="`cvc`"-->
<!--                            placement="bottom"-->
<!--                            variant="danger"-->
<!--                          >{{ errors.first(`cvc`) }}-->
<!--                          </b-tooltip-->
<!--                          >-->
<!--                        </div>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                    <div class="col-lg-6">-->
<!--                      <div class="form-box">-->
<!--                        <div class="title">-->
<!--                          <h5>-->
<!--                            Cardholder Name-->
<!--                            <span>*</span>-->
<!--                          </h5>-->
<!--                        </div>-->
<!--                        <div class="fileds">-->
<!--                          <b-form-input-->
<!--                            v-model="data.credit.creditCardHolder"-->
<!--                            type="text"-->
<!--                            class="form-control"-->
<!--                            placeholder="Cardholder Name"-->
<!--                            data-vv-name="card_holder_name"-->
<!--                            id="card_holder_name"-->
<!--                            data-vv-as="Card Holder Name"-->
<!--                            :state="-->
<!--                                errors.has(`card_holder_name`) ? false : null-->
<!--                              "-->
<!--                          ></b-form-input>-->
<!--                          <b-tooltip-->
<!--                            v-if="errors.has(`card_holder_name`)"-->
<!--                            :show="true"-->
<!--                            triggers="focus"-->
<!--                            :target="`card_holder_name`"-->
<!--                            placement="bottom"-->
<!--                            variant="danger"-->
<!--                          >{{ errors.first(`card_holder_name`) }}-->
<!--                          </b-tooltip-->
<!--                          >-->
<!--                        </div>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                    <div class="col-lg-6">-->
<!--                      <div class="form-box">-->
<!--                        <div class="title">-->
<!--                          <h5>-->
<!--                            Valid Through-->
<!--                            <span>*</span>-->
<!--                          </h5>-->
<!--                        </div>-->
<!--                        <div class="fileds">-->
<!--                          <b-form-input-->
<!--                            type="text"-->
<!--                            v-model="data.credit.creditCardExpiry"-->
<!--                            class="form-control"-->
<!--                            placeholder="Valid Through"-->
<!--                            data-vv-name="valid_through"-->
<!--                            id="valid_through"-->
<!--                            data-vv-as="Valid Through"-->
<!--                            :state="-->
<!--                                errors.has(`valid_through`) ? false : null-->
<!--                              "-->
<!--                          ></b-form-input>-->
<!--                          <b-tooltip-->
<!--                            v-if="errors.has(`valid_through`)"-->
<!--                            :show="true"-->
<!--                            triggers="focus"-->
<!--                            :target="`valid_through`"-->
<!--                            placement="bottom"-->
<!--                            variant="danger"-->
<!--                          >{{ errors.first(`valid_through`) }}-->
<!--                          </b-tooltip-->
<!--                          >-->
<!--                        </div>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
                <div class="next-btn-section">
                  <button class="btn btn-light" @click.prevent="save()">
                    Pay & Book Flight
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Get Password Modal -->
    <b-modal
      id="password_Modal"
      title="GALA TRAVEL"
      hide-footer
      :no-close-on-backdrop="true"
    >
      <div class="d-block text-center">
        <div style="background: white; padding: 20px">
          <h5 class="pb-4">
            You are registered member in our system. <br/>Please provide your
            password.
          </h5>
          <b-form-group class="form-label color-dark-2">
            <b-form-input
              data-vv-name="password"
              placeholder="Enter Password"
              v-validate="'required|max:190|min:8'"
              class="form-control-rounded"
              type="password"
              v-model="data.password"
              id="password"
              :state="errors.has('password') ? false : null"
            ></b-form-input>
            <b-tooltip
              v-if="errors.has('password')"
              :show="true"
              triggers="focus"
              target="password"
              placement="bottom"
              variant="danger"
            >{{ errors.first("password") }}
            </b-tooltip
            >
          </b-form-group>
          <p><a href="/forgotPassword" target="_blank">Forgot Password?</a></p>
          <b-button
            class="mt-2"
            variant="outline-success"
            block
            @click="checkPassField"
          >Okay
          </b-button
          >
        </div>
      </div>
    </b-modal>
    <!-- Fare Rules Modal --> <!-- Get Password Modal -->
    <b-modal
      id="password_Modal"
      title="GALA TRAVEL"
      hide-footer
      :no-close-on-backdrop="true"
    >
      <div class="d-block text-center">
        <div style="background: white; padding: 20px">
          <h5 class="pb-4">
            You are registered member in our system. <br/>Please provide your
            password.
          </h5>
          <b-form-group class="form-label color-dark-2">
            <b-form-input
              data-vv-name="password"
              placeholder="Enter Password"
              v-validate="'required|max:190|min:8'"
              class="form-control-rounded"
              type="password"
              v-model="data.password"
              id="password"
              :state="errors.has('password') ? false : null"
            ></b-form-input>
            <b-tooltip
              v-if="errors.has('password')"
              :show="true"
              triggers="focus"
              target="password"
              placement="bottom"
              variant="danger"
            >{{ errors.first("password") }}
            </b-tooltip
            >
          </b-form-group>
          <p><a href="/forgotPassword" target="_blank">Forgot Password?</a></p>
          <b-button
            class="mt-2"
            variant="outline-success"
            block
            @click="checkPassField"
          >Okay
          </b-button
          >
        </div>
      </div>
    </b-modal>
    <FlightsLoading
      v-if="loading"
      :loadingParams="true"
      title="We are confirming your request"
    />
    <!-- Fare Rules Modal -->
  </div>
</template>
<script>
  import {mapState, mapGetters, mapMutations} from "vuex";
  import flightDetail from "@/components/flightDetail.vue";
  import flightModifySearchParams from "@/components/flightModifySearchParams.vue";
  import FlightsLoading from "@/components/FlightsLoading.vue";

  export default {
    auth: false,

    components: {flightDetail, flightModifySearchParams, FlightsLoading},

    data() {
      return {
        value: "250",
        screenshot: "",
        loading: false,
        notFoundError: false,
        rules: {
          showModal: false,
          rules: null,
        },
        step: null,
        mealName: [],
        notLoggedIn: false,
        termsCheckbox: true,
        isModifyActive: false,
        free_Text: null,
        rules: {
          showModal: false,
          rules: null,
        },
        terms: true,
        titles: {
          mr: "Mr",
          mrs: "Mrs",
          ms: "Ms",
        },
        genders: {
          M: "Male",
          F: "Female",
        },
        data: {
          payment: "cash",
          credit: {
            creditCardNumber: "",
            creditCardExpiry: "",
            creditCardCvcCode: "",
            creditCardHolder: "",
            freeText: "",
          },
          contact: {
            email: "",
            mobile: "",
          },
          travellers: [],
        },
      };
    },

    computed: {
      ...mapState([
        "pnrGenerated"
      ]),
      ...mapState("forAll", [
        "airlinesByKey",
        "airportsByKey",
        "setLoggedIn",
        "meals",
      ]),
      ...mapState("flights", ["confirmedItinerary", "bookingData"]),
      ...mapState("flights",{
        segmentsPricing:'segmentsPricing',
      }),
      ...mapGetters({params: "forAll/getSearchParams"}),
    },

    async created() {
      if(this.pnrGenerated){
        return this.$router.push({name: "index"});
      }
      if (process.env.NODE_ENV != "production" && process.env.CACHE == "true") {
        let confirmation = JSON.parse(localStorage.getItem("confirmedItinerary"));
        this.$store.commit("flights/setConfirmedItinerary", confirmation);
        setTimeout(() => {
          this.$store.commit("flights/setDetailFare", confirmation);
        }, 2000);
      }
      if (!this.confirmedItinerary) {
        return this.redirect();
      }
      this.travelerDetail();
      this.data.destinations = this.confirmedItinerary.segments;

      if (this.bookingData.travellers) {
        for (var meal of this.bookingData.travellers) {
          if (meal.meal) {
            var index = this.meals.findIndex((x) => x.code == meal.meal);
            this.mealName.push(this.meals[index].name);
          }
        }
      }
      console.log('confirmation',
        this.confirmedItinerary
      )
    },

    methods: {
      ...mapMutations("forAll", ["setBooking"]),
      redirect404() {
        this.$bvModal.hide("unavailableModal");
        return this.$router.push({name: "flights"});
      },

      redirect404Free_Text() {
        this.$bvModal.hide("unavailableModal");
        return this.$router.push({name: "flightBooking"});
      },

      testing(){
        console.log(this.confirmedItinerary)
      },
      redirect500() {
        this.$bvModal.hide("server_down_modal");
        return this.$router.push({name: "index"});
      },

      convertPassengerType(type){
        if(type == 'ADT'){
          return 'Adult'
        }else if(type == 'CNN'){
          return 'Child'
        }else if(type == 'INF'){
          return 'Infant'
        }
      },
      checkPassField() {
        this.$validator.validate().then((result) => {
          if (result) {
            this.$bvModal.hide("password_Modal");
            this.save();
          }
        });
      },
      redirect() {
        return this.$router.push({name: "flights"});
      },

      toBooking() {
        this.$router.push({name: "flightBooking"});
      },

      weight(weight) {
        let formatedWeight;
        if (weight["quantity"] !== undefined) {
          formatedWeight = `${weight["quantity"]} PC`;
        } else if (
          weight["weight"] !== undefined &&
          weight["weightUnit"] !== undefined
        ) {
          formatedWeight = `${weight["weight"]} ${weight["weightUnit"]}`;
        } else {
          formatedWeight = "";
        }
        return formatedWeight;
      },
      revertPassengerType(type) {
        if (type == 'adult') {
          return 'ADT'
        } else if (type == 'child') {
          return 'CNN'
        } else if (type == 'infant') {
          return 'INF'
        }
      },
      dataFormateArr(prop) {
        let data = []

        console.log('bookingData', this.bookingData)
        // let prop = 'type'
        this.bookingData.travellers.forEach((item) => {
          if (prop == 'type') {
            data.push(this.revertPassengerType(item[prop]))
          }
          else if(prop == 'gender'){
            data.push(item[prop]=='Male'?'M':'F')
          }
          else if(prop == 'passportNo'){
            if(item[prop]){
              data.push(item[prop])
            }
            else {
              data.push(null)
            }
          }
          else if(prop == 'nationality'){
            if(item[prop]){
              data.push(item[prop])
            }
            else {
              data = null
            }
          }
          else if(prop == 'passport_expiration_date'){
            if(item[prop] != ''){
              data.push(this.convertApiDate(item[prop]))
            }
            else {
              data.push(null)
              // data = undefined
            }
          }else if(prop == 'passportExpirationDate'){
            if(item[prop] != ''){
              data.push(this.convertApiDate(item[prop]))
            }
            else {
              // data = undefined
              data.push('null')
            }
          }else if(prop == 'passport'){
            if(item[prop]){
              data.push(item[prop])
            }
            else {
              data.push('null')
            }
          }else {
            data.push(item[prop])
          }
        })
        return data
        console.log(data)
        console.log('bookingData', this.bookingData)
      },

      convertApiDate(dataDate) {
        let date = new Date(dataDate);
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let dt = date.getDate();

        if (dt < 10) {
          dt = '0' + dt;
        }
        if (month < 10) {
          month = '0' + month;
        }

        let newdate = year + '-' + month + '-' + dt;
        return newdate;
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
      save() {
        this.$validator.validate().then((result) => {
          // console.log('result',result)
          // console.log('bookingData', this.confirmedItinerary)
          // console.log('bookingData', this.bookingData)
          if (result) {
            // console.log('data', this.data)
            if (!this.termsCheckbox) {
              return this.$root.$bvToast.toast(
                "You have to agree with our terms and conditions",
                {
                  title: "GALA TRAVEL!",
                  variant: "danger",
                  solid: true,
                  toaster: "b-toaster-top-center",
                }
              );
            }
            this.loading = true;
            let data = {
              'pnr_segments': JSON.stringify(this.confirmedItinerary.itinerary.AirItinerary.OriginDestinationOptions.OriginDestinationOption),
              'gds': this.bookingData.travellers[0].gds?this.bookingData.travellers[0].gds:'SABRE',
              'trip': this.bookingData.travellers[0].trip,
              'airline': this.bookingData.travellers[0].airline,
              'email': this.bookingData.contact.email,
              'phone': this.bookingData.contact.mobile,
              'type': this.dataFormateArr('type'),
              'title': this.dataFormateArr('title'),
              'fname': this.dataFormateArr('firstName'),
              'lname': this.dataFormateArr('lastName'),
              'dob': this.dataFormateArr('dateOfBirth'),
              'gender': this.dataFormateArr('gender'),
              'nationality': this.dataFormateArr('nationality'),
              'passport': this.dataFormateArr('passportNo'),
              'expiry': this.dataFormateArr('passport_expiration_date'),
              'departure': this.bookingData.travellers[0].depart_date,
              'return': this.bookingData.travellers[0].return_date,
            }

            // let travellermarkups = {};
            // for (var passenger in this.confirmedItinerary.passengers) {
            //   travellermarkups[passenger] =
            //     this.confirmedItinerary.passengers[passenger]["totalAmount"];
            // }
            // data.travellermarkups = travellermarkups;
            this.$api({
              method: "post",
              url: "flight_booking_apii",
              data,
            })
              .then(({data}) => {
                if (data.notLoggedIn) {
                  this.$store.commit("forAll/setLoggedIn", false);
                  this.$bvModal.show("password_Modal");
                } else {
                  this.$store.commit("forAll/setLoggedIn", true);
                  if (
                    process.env.NODE_ENV != "production" &&
                    process.env.CACHE == "true"
                  ) {
                    localStorage.setItem("pnr", JSON.stringify(data));
                  }
                  this.$store.commit("forAll/setBooking", data);
                  this.$router.push({name: "thankyou"});
                  // this.$root.$bvToast.toast(
                  //   `Order has successfully booked with id of ${data.CreatePassengerNameRecordRS.ItineraryRef.ID}`,
                  //   {
                  //     title: "GALA TRAVEL!",
                  //     variant: "success",
                  //     solid: true,
                  //     toaster: "b-toaster-top-center",
                  //   }
                  // );
                  // localStorage.setItem("pnr", JSON.stringify(data));
                  if (!this.$auth.loggedIn) {
                    this.$auth.setUser(data.user);
                    this.$auth.setUserToken(data.token);
                  }
                }
              })
              .catch((err) => {
                if (
                  err.response.status == 422 &&
                  err.response.data.errors.password[0] ==
                  "The selected password is not valid"
                ) {
                  this.$root.$bvToast.toast(`password is not valid`, {
                    title: "GALA TRAVEL!",
                    variant: "danger",
                    solid: true,
                    toaster: "b-toaster-top-center",
                  });
                  this.$bvModal.show("password_Modal");
                } else if (err.response.status == 422) {
                  this.$root.$bvToast.toast(`Provided data is not valid`, {
                    title: "GALA TRAVEL!",
                    variant: "danger",
                    solid: true,
                    toaster: "b-toaster-top-center",
                  });
                } else if (err.response.status == 404) {
                  if (err.response.data.messages[0].user_message) {
                    this.free_Text = err.response.data.messages[0].user_message;
                    this.$bvModal.show("unavailableModal");
                  } else {
                    this.free_Text =
                      "The Flight you selected is no longer available, please select a different Flights option.";
                    this.$bvModal.show("unavailableModal");
                  }
                } else if (err.response.status == 500) {
                  this.$bvModal.show("server_down_modal");
                } else {
                  let data = err.response.data;
                  if (data.messages) {
                    for (var message of data.messages) {
                      this.$root.$bvToast.toast(
                        `Code: ${message.code}, Message ${message.text}`,
                        {
                          title: "GALA TRAVEL!",
                          variant: "danger",
                          solid: true,
                          toaster: "b-toaster-top-center",
                        }
                      );
                    }
                  }
                }
              })
              .finally(() => {
                setTimeout(() => {
                  this.loading = false;
                }, 3000);
              });
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
      formatCreditDate(value) {
        value = new Date(value);
        value = `${this.$months(value.getMonth())} ${value.getFullYear()}`;
        return value;
      },
      backToFlights() {
        this.$store.commit("flights/setLoadFares", false);
        this.$store.commit("flights/setDetailFare", null);
        this.$router.push({name: "flights"});
      },

      travelerDetail() {
        let travellers = [];
        let number = 1;
        for (var passenger in this.confirmedItinerary["passengers"]) {
          let traveler = {};
          let total = this.confirmedItinerary["passengers"][passenger].total;
          for (var i = 1; i <= total; i++) {
            traveler = {number, type: passenger};
            travellers.push(traveler);
            number++;
          }
        }
        this.data.travellers = travellers;
      },
    },
  };
</script>
