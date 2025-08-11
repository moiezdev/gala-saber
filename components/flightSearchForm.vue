<template>
  <div class="flight-form bg-">
    <div v-if="pass_dropdown" class="position-fixed" style="width: 100%;height: 100%;left: 0px;top: 0px;z-index: 0;"
         @click="closeCollapse('pass_dropdown')"></div>
    <div v-if="calendar_view" class="position-fixed" style="width: 100%;height: 100%;left: 0px;top: 0px;z-index: 0;"
         @click="closeCollapse('calendar_view')"></div>
    <!--    <div class="duble-b">-->
    <!--      <div class="flight-radio-btns">-->
    <!--        <b-form-group>-->
    <!--          <div class="bv-no-focus-ring flight-search-detail">-->
    <!--            <b-form-radio-group-->
    <!--              v-model="type"-->
    <!--              :name="type"-->
    <!--              @input="typeChanged"-->
    <!--            >-->
    <!--              <b-form-radio name="some-radios" value="round" id="B"-->
    <!--              >Round Trip-->
    <!--              </b-form-radio-->
    <!--              >-->
    <!--              <b-form-radio name="some-radios" value="one"-->
    <!--              >One Way-->
    <!--              </b-form-radio-->
    <!--              >-->
    <!--              &lt;!&ndash; <b-form-radio name="some-radios" value="multi"-->
    <!--              >Multi City-->
    <!--              </b-form-radio &ndash;&gt;-->
    <!--              &lt;!&ndash; > &ndash;&gt;-->
    <!--            </b-form-radio-group>-->
    <!--          </div>-->
    <!--        </b-form-group>-->
    <!--      </div>-->

    <!--      <div class="flight-radio-btns nonstop">-->
    <!--        <b-form-group>-->
    <!--          <div class="bv-no-focus-ring mr-3">-->
    <!--            &lt;!&ndash; <b-form-checkbox v-model="data.nonStop" value="true">-->
    <!--              Non-Stop-->
    <!--            </b-form-checkbox> &ndash;&gt;-->
    <!--          </div>-->
    <!--        </b-form-group>-->
    <!--        <b-form-group>-->
    <!--          <div class="bv-no-focus-ring">-->
    <!--            &lt;!&ndash; <b-form-checkbox v-model="data.flex" v-if="type != 'multi'">-->
    <!--              Flexible Search-->
    <!--            </b-form-checkbox> &ndash;&gt;-->
    <!--          </div>-->
    <!--        </b-form-group>-->
    <!--      </div>-->
    <!--    </div>-->
    <div style="
    padding-right: 15px;
    padding-left: 15px;">
      <!-- below fields for round trip -->
      <div class="row p-2 bg-dark1 search-fileds" v-if="type == 'round' || type == 'one'">
        <div class="col-12">
          <!--          {{dateRange}}-->
          <!--          <button @click='this.$refs.Calendars.PreMonth()'>test</button>-->
        </div>
        <div class="col-lg-12">
          <div class="row">
            <div class="col-lg-5">
              <div class="row">
                <div class="col-lg-6 pt-1 bg-white px-0" @click="$emit('scroll')">
                  <div class="row">
                    <label class="form-label col-12 text-left"><span class="pl-2">Origin</span></label>
                    <div class="col-lg-12">
                      <div class="row">
                        <div v-if="data.locations.originLocationCode" class="col-3 pt-1 loc-code pr-0 text-left"><span
                          class="pl-2">{{data.locations.originLocationCode.iata?data.locations.originLocationCode.iata:''}}</span>
                        </div>
                        <div class="col " :class="data.locations.originLocationCode?'pl-0':''">
                          <!--                        icon="airplane-landing"-->
                          <b-autocomplete
                            class="rounded-0"
                            v-model="keywords.originLocationCode"
                            @typing="simpleSuggestionList('originLocationCode')"
                            placeholder="City,country or airport"
                            value="Lahore"
                            :data="locations.originLocationCode"
                            :loading="fetchingLocations.originLocationCode"
                            :disabled="fetchingLocations.originLocationCode"
                            field="city"
                            ref="destinationLocationCode"
                            keep-first
                            @select="
                  (option) => selectLocations('originLocationCode', option)
                "
                            @focus="emptyLocations('originLocationCode')"
                          >
                            <template slot="empty"
                            >No results for {{ keywords.originLocationCode }}
                            </template
                            >
                            <template slot-scope="props">
                              <div class="media align-items-center justify-content-between">
                                <span class="d-flex align-items-center">
                                <span class="mdi mdi-airplane-takeoff fa-2x mr-2"></span>
                                  <div class="media-content">
                                    <span class="top-heading">
                                    {{
                                    `${props.option.city},${props.option.country}`
                                    }}</span><br>
                                    {{
                                    `${props.option.city} ${props.option.name}`
                                    }}
                                  </div>
                                </span>
                                <span class="location-code">
                                  {{props.option.iata}}
                                </span>
                              </div>
                            </template>
                          </b-autocomplete>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 pt-1 bg-white px-0 border-left" @click="$emit('scroll')">
                  <div class="row">
                    <label class="form-label col-12 text-left"><span class="pl-2">Destination</span></label>
                    <div class="col-lg-12 destination-input">
                      <div class="row">
                        <div v-if="data.locations.destinationLocationCode"
                             class="col-3 pt-1 loc-code pr-0 text-left"><span
                          class="pl-2">{{data.locations.destinationLocationCode.iata}}</span></div>
                        <div class="col" :class="data.locations.destinationLocationCode?'pl-0':''">
                          <!--                        icon="airplane-landing"-->
                          <b-autocomplete
                            v-model="keywords.destinationLocationCode"
                            @typing="simpleSuggestionList('destinationLocationCode')"
                            placeholder="City,country or airport"
                            :data="locations.destinationLocationCode"
                            :loading="fetchingLocations.destinationLocationCode"
                            :disabled="fetchingLocations.destinationLocationCode"
                            ref="destinationLocationCode"
                            field="city"
                            keep-first
                            @select="
                  (option) => selectLocations('destinationLocationCode', option)
                "
                            @keyup="calendar_view = false"
                            @focus="emptyLocations('destinationLocationCode')"
                          >
                            <template slot="empty"
                            >No results for
                              {{ keywords.destinationLocationCode }}
                            </template
                            >
                            <template slot-scope="props">
                              <div class="media align-items-center justify-content-between">
                                <span class="d-flex align-items-center">
                                <span class="mdi mdi-airplane-landing fa-2x mr-2"></span>
                                  <div class="media-content">
                                    <span class="top-heading">
                                    {{
                                    `${props.option.city},${props.option.country}`
                                    }}</span><br>
                                    {{
                                    `${props.option.city} ${props.option.name}`
                                    }}
                                  </div>
                                </span>
                                <span class="location-code">
                                  {{props.option.iata}}
                                </span>
                              </div>
                            </template>
                          </b-autocomplete>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg col-6 pt-1 bg-white px-0 border-left">
              <div class="row">
                <label class="form-label col-12 text-left"><span class="pl-2">Outbound</span></label>
                <!--                <b-input :value="dateRange.dateRange.start==''? dateRange.selectedDate:dateRange.dateRange.start"-->
                <!--                         @click="toggleCalendar()" readonly class="ml-2 pt-3"-->
                <!--                         placeholder="DD/MM/YY"></b-input>-->
                <b-input-group class="col-12 pl-0" @click="toggleCalendar()">
                  <!--                  <b-form-input></b-form-input>-->
                  <b-form-input :value="dateRange.dateRange.start==''? dateRange.selectedDate:dateRange.dateRange.start"
                                readonly class="ml-2 input"
                                placeholder="DD/MM/YY"></b-form-input>
                  <b-input-group-append class="calendar-icon">
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                         xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                         viewBox="0 0 485 532.5"
                         style="enable-background:new 0 0 485 532.5;width: 18px;margin: 0 5px 0px 0"
                         xml:space="preserve">
<style type="text/css">
	.calendar-icon .st0 {
    fill: #FFFFFF;
  }

  .calendar-icon .st1 {
    fill: none;
    stroke: #000000;
    stroke-width: 17;
    stroke-miterlimit: 10;
  }

  .calendar-icon .st2 {
    fill: none;
    stroke: #000000;
    stroke-width: 28;
    stroke-linecap: round;
    stroke-miterlimit: 10;
  }

  .calendar-icon .st3 {
    fill: #bc1d81;
    stroke: #000000;
    stroke-width: 0.5;
    stroke-linecap: round;
    stroke-miterlimit: 10;
  }
</style>
                      <g>
	<rect x="5.5" y="52" class="st0" width="474" height="138"/>
                        <path d="M474,57.5v127H11v-127H474 M485,46.5H0v149h485V46.5L485,46.5z"/>
</g>
                      <g>
	<rect x="5.5" y="201" class="st0" width="474" height="157"/>
                        <path d="M474,206.5v146H11v-146H474 M485,195.5H0v168h485V195.5L485,195.5z"/>
</g>
                      <g>
	<rect x="5.5" y="369" class="st0" width="474" height="158"/>
                        <path d="M474,374.5v147H11v-147H474 M485,363.5H0v169h485V363.5L485,363.5z"/>
</g>
                      <g>
	<line class="st1" x1="151.5" y1="195.5" x2="151.5" y2="532.5"/>
</g>
                      <line class="st1" x1="320.5" y1="195.5" x2="320.5" y2="532.5"/>
                      <g>
	<path d="M474,57.5v463H11v-463H474 M485,46.5H0v485h485V46.5L485,46.5z"/>
</g>
                      <line class="st2" x1="320.5" y1="14" x2="320.5" y2="85"/>
                      <line class="st2" x1="152" y1="14.5" x2="152" y2="85.5"/>
                      <rect x="326.5" y="202" class="st3" width="148" height="154"/>
</svg>
                  </b-input-group-append>
                </b-input-group>
              </div>
              <!-- departure date calendar -->
            </div>
            <!-- arrival date calendar -->
            <div class="col-lg col-6 pt-1 bg-white px-0">
              <Transition name="slide-fade">
                <div class="row round-animation" v-if="type == 'round'">
                  <label class="form-label col-12 text-left"><span class="pl-2">Inbound</span></label>
                  <b-input-group class="col-12 pl-0" @click="toggleCalendar()">
                    <!--                  <b-form-input></b-form-input>-->
                    <b-form-input v-model="dateRange.dateRange.end"
                                  readonly class="ml-2 input"
                                  placeholder="DD/MM/YY"></b-form-input>
                    <b-input-group-append class="calendar-icon" >
                      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                           xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                           viewBox="0 0 485 532.5"
                           style="enable-background:new 0 0 485 532.5;width: 18px;margin: 0 5px 0px 0"
                           xml:space="preserve">
<style type="text/css">
	.calendar-icon .st0 {
    fill: #FFFFFF;
  }

  .calendar-icon .st1 {
    fill: none;
    stroke: #000000;
    stroke-width: 17;
    stroke-miterlimit: 10;
  }

  .calendar-icon .st2 {
    fill: none;
    stroke: #000000;
    stroke-width: 28;
    stroke-linecap: round;
    stroke-miterlimit: 10;
  }

  .calendar-icon .st3 {
    fill: #bc1d81;
    stroke: #000000;
    stroke-width: 0.5;
    stroke-linecap: round;
    stroke-miterlimit: 10;
  }
</style>
                        <g>
	<rect x="5.5" y="52" class="st0" width="474" height="138"/>
                          <path d="M474,57.5v127H11v-127H474 M485,46.5H0v149h485V46.5L485,46.5z"/>
</g>
                        <g>
	<rect x="5.5" y="201" class="st0" width="474" height="157"/>
                          <path d="M474,206.5v146H11v-146H474 M485,195.5H0v168h485V195.5L485,195.5z"/>
</g>
                        <g>
	<rect x="5.5" y="369" class="st0" width="474" height="158"/>
                          <path d="M474,374.5v147H11v-147H474 M485,363.5H0v169h485V363.5L485,363.5z"/>
</g>
                        <g>
	<line class="st1" x1="151.5" y1="195.5" x2="151.5" y2="532.5"/>
</g>
                        <line class="st1" x1="320.5" y1="195.5" x2="320.5" y2="532.5"/>
                        <g>
	<path d="M474,57.5v463H11v-463H474 M485,46.5H0v485h485V46.5L485,46.5z"/>
</g>
                        <line class="st2" x1="320.5" y1="14" x2="320.5" y2="85"/>
                        <line class="st2" x1="152" y1="14.5" x2="152" y2="85.5"/>
                        <rect x="326.5" y="202" class="st3" width="148" height="154"/>
</svg>
                    </b-input-group-append>
                  </b-input-group>
                </div>
              </Transition>
              <!-- departure date calendar -->
            </div>
            <div class="col-lg-2 pt-1 bg-white px-0 border-left passenger">
              <!--              <b-dropdown ref="pass" reference="menu" aria-role="list">-->
              <!--                <template #trigger>-->
              <div class="pt-0 pl-2 user-select-none arrow" @click="opendropdown()" style="width: 100%">
                <div class="row">
                  <div class="form-label col-12">
                    <div class="d-flex">
                      <small>{{data.adults}}Adult</small> <small class="ml-2">{{data.children}}Children</small> <small
                      class="ml-2">{{data.infants}}Infants</small>
                    </div>
                  </div>
                  <div class="col-12 pass-input input text-left pt-2">
                    <div class="d-flex w-100 justify-content-between">
                      <small class="d-inline-flex w-100 justify-content-around">
                        {{ totalPassengers }}
                        <svg class="person-icon" v-if="totalPassengers <= 1" version="1.1" id="Layer_1"
                             xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                             y="0px"
                             viewBox="0 0 48 48"
                             style="enable-background:new 0 0 48 48;width: 26px;margin: 0 5px -2px 0"
                             xml:space="preserve">
<style type="text/css">
	.person-icon .st0 {
    fill: #bc1d81;
    display: block
  }
</style>
                          <path d="M24,23.95c-2.2,0-4-0.7-5.4-2.1c-1.4-1.4-2.1-3.2-2.1-5.4s0.7-4,2.1-5.4c1.4-1.4,3.2-2.1,5.4-2.1s4,0.7,5.4,2.1
	c1.4,1.4,2.1,3.2,2.1,5.4s-0.7,4-2.1,5.4C28,23.25,26.2,23.95,24,23.95z M8,40v-4.7c0-1.27,0.32-2.35,0.95-3.25
	c0.63-0.9,1.45-1.58,2.45-2.05c2.23-1,4.38-1.75,6.43-2.25S21.93,27,24,27s4.12,0.26,6.15,0.77s4.17,1.26,6.4,2.23
	c1.03,0.47,1.87,1.15,2.5,2.05c0.63,0.9,0.95,1.98,0.95,3.25V40H8z M11,37h26v-1.7c0-0.53-0.16-1.04-0.47-1.52
	c-0.32-0.48-0.71-0.84-1.18-1.08c-2.13-1.03-4.08-1.74-5.85-2.12C27.73,30.19,25.9,30,24,30s-3.75,0.19-5.55,0.58
	c-1.8,0.38-3.75,1.09-5.85,2.12c-0.47,0.23-0.85,0.59-1.15,1.08C11.15,34.26,11,34.77,11,35.3V37z M24,20.95
	c1.3,0,2.38-0.43,3.23-1.28c0.85-0.85,1.27-1.92,1.27-3.22s-0.43-2.38-1.27-3.23c-0.85-0.85-1.92-1.28-3.23-1.28
	s-2.38,0.43-3.23,1.28c-0.85,0.85-1.27,1.93-1.27,3.23s0.43,2.37,1.27,3.22C21.62,20.52,22.7,20.95,24,20.95z M24,16.45L24,16.45
	L24,16.45L24,16.45L24,16.45L24,16.45L24,16.45L24,16.45L24,16.45z M24,37L24,37L24,37L24,37L24,37L24,37L24,37L24,37L24,37z"/>
                          <circle class="st0" cx="24" cy="16.45" r="4.31"/>
</svg>

                        <svg class="gperson-icon" v-else version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                             xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                             viewBox="0 0 48 48"
                             style="enable-background:new 0 0 48 48;width: 26px;margin: 0 5px -2px 0"
                             xml:space="preserve">
<style type="text/css">
	.gperson-icon .st0 {
    fill: #bc1d81;
    display: block
  }
</style>
                          <path d="M1.9,40v-4.7c0-1.17,0.3-2.22,0.9-3.17c0.6-0.95,1.43-1.66,2.5-2.12c2.43-1.07,4.62-1.83,6.57-2.3
	c1.95-0.47,3.96-0.7,6.02-0.7s4.07,0.23,6,0.7c1.93,0.47,4.12,1.23,6.55,2.3c1.07,0.47,1.91,1.18,2.52,2.12
	c0.62,0.95,0.93,2.01,0.93,3.17V40H1.9z M31.1,26.85c2.3,0.27,4.47,0.66,6.5,1.17c2.03,0.52,3.68,1.11,4.95,1.77
	c1.1,0.63,1.97,1.42,2.6,2.35c0.63,0.93,0.95,1.98,0.95,3.15V40h-9.2v-4.7c0-2.1-0.53-3.82-1.6-5.17
	C34.23,28.77,32.83,27.68,31.1,26.85z M17.9,23.95c-2.2,0-4-0.7-5.4-2.1c-1.4-1.4-2.1-3.2-2.1-5.4s0.7-4,2.1-5.4s3.2-2.1,5.4-2.1
	s4,0.7,5.4,2.1s2.1,3.2,2.1,5.4s-0.7,4-2.1,5.4C21.9,23.25,20.1,23.95,17.9,23.95z M35.9,16.45c0,2.2-0.7,4-2.1,5.4
	c-1.4,1.4-3.2,2.1-5.4,2.1c-0.37,0-0.77-0.02-1.23-0.08c-0.45-0.05-0.86-0.14-1.22-0.27c0.8-0.83,1.41-1.86,1.82-3.08
	c0.42-1.22,0.62-2.57,0.62-4.07s-0.21-2.83-0.62-3.98c-0.42-1.15-1.02-2.21-1.82-3.18c0.37-0.1,0.77-0.18,1.22-0.25
	c0.45-0.07,0.86-0.1,1.23-0.1c2.2,0,4,0.7,5.4,2.1S35.9,14.25,35.9,16.45z M4.9,37h26v-1.7c0-0.53-0.16-1.05-0.48-1.55
	s-0.71-0.85-1.17-1.05c-2.4-1.07-4.42-1.78-6.05-2.15C21.57,30.18,19.8,30,17.9,30c-1.9,0-3.68,0.18-5.32,0.55
	c-1.65,0.37-3.67,1.08-6.07,2.15c-0.47,0.2-0.85,0.55-1.15,1.05S4.9,34.77,4.9,35.3V37z M17.9,20.95c1.3,0,2.38-0.43,3.23-1.28
	s1.27-1.92,1.27-3.22s-0.42-2.38-1.27-3.23c-0.85-0.85-1.93-1.28-3.23-1.28s-2.37,0.43-3.22,1.28c-0.85,0.85-1.28,1.93-1.28,3.23
	c0,1.3,0.43,2.37,1.28,3.22S16.6,20.95,17.9,20.95z M17.9,16.45L17.9,16.45L17.9,16.45L17.9,16.45L17.9,16.45L17.9,16.45L17.9,16.45
	L17.9,16.45L17.9,16.45z M17.9,30L17.9,30L17.9,30L17.9,30L17.9,30L17.9,30L17.9,30L17.9,30L17.9,30z"/>
                          <circle class="st0" cx="17.9" cy="16.45" r="4.3"/>
</svg>
                        <!-- Adult, -->
                      </small>
                      <small class="d-inline-flex w-100 justify-content-around mr-1">
                        {{ travelClass(data.travelClass) }}

                        <svg class="seat-svg" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                             xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                             viewBox="0 0 48 48" style="enable-background:new 0 0 48 48;width: 26px;margin: 0 0 -2px 0"
                             xml:space="preserve">
<style type="text/css">
	.seat-svg .st0 {
    fill: #bc1d81;
  }
</style>
                          <path d="M27.5,26c-0.97,0-1.79-0.34-2.48-1.02C24.34,24.29,24,23.47,24,22.5v-11c0-0.97,0.34-1.79,1.02-2.48
	C25.71,8.34,26.53,8,27.5,8h5c0.97,0,1.79,0.34,2.47,1.02C35.66,9.71,36,10.53,36,11.5v11c0,0.97-0.34,1.79-1.03,2.48
	C34.29,25.66,33.47,26,32.5,26H27.5z M27,23h6l0,0l0,0V11l0,0l0,0h-6l0,0l0,0V23L27,23L27,23z M18.6,36c-0.77,0-1.47-0.23-2.1-0.67
	c-0.63-0.45-1.05-1.06-1.25-1.83L10,15.85V8h3v8.15L18.25,33H36v3H18.6z M16,42v-3h20v3H16z M27,11h6l0,0l0,0l0,0l0,0H27L27,11
	L27,11L27,11L27,11z"/>
                          <rect x="27.19" y="11.24" class="st0" width="5.62" height="11.52"/>
</svg>
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              <!--                </template>-->
              <transition name="slide-fade">
                <div v-if="pass_dropdown" class="bnb-dropdown user-select-none position-absolute bg-white p-4 shadow"
                     :class="pass_dropdown?'shown':'hidden'">
                  <div class="row text-left">
                    <div class="col-lg-12 border-right">
                      <div class="eqaul">
                        <!--                  <b-form-select-->
                        <!--                    v-model="data.includedAirline"-->
                        <!--                    :options="allData.airlines"-->
                        <!--                    value-field="iata"-->
                        <!--                    text-field="name"-->
                        <!--                  >-->
                        <!--                    <b-form-select-option value="">ANY</b-form-select-option>-->
                        <!--                  </b-form-select>-->
                        <div class="select-contain">
                          <select
                            class="select-contain-select"
                            v-model="data.travelClass"
                          >
                            <option selected value="ECONOMY">Economy</option>
                            <!--                      <option value="PREMIUM_ECONOMY">Premium Economy</option>-->
                            <option value="BUSINESS">Business</option>
                            <!--                      <option value="FIRST">First</option>-->
                          </select>
                        </div>
                      </div>
                      <div class="fix-adult flex-wrap">
                        <div class="sipn-row">
                          <div>
                            <h6>Adult</h6>
                            <p>Above 12 years at the time of travel</p>
                          </div>
                          <div class="">
                            <b-form-spinbutton
                              id="sb-default"
                              min="1"
                              max="9"
                              placeholder="--"
                              v-model="data.adults"
                            ></b-form-spinbutton>
                          </div>
                        </div>
                        <div class="sipn-row">
                          <div class="">
                            <h6>Child</h6>
                            <p>2-12 years at the time of travel</p>
                          </div>
                          <div class="">
                            <b-form-spinbutton
                              id="sb-default"
                              min="0"
                              v-model="data.children"
                              placeholder="--"
                            ></b-form-spinbutton>
                          </div>
                        </div>
                        <div class="sipn-row">
                          <div class="">
                            <h6>Infant</h6>
                            <p>Under 2 years at the time of travel</p>
                          </div>
                          <div class="">
                            <b-form-spinbutton
                              id="sb-default"
                              min="0"
                              :max="data.adults"
                              v-model="data.infants"
                              placeholder="--"
                            ></b-form-spinbutton>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!--                  <div class="col-lg-6">-->
                    <!--                    <div class="row">-->
                    <!--                      <div class="col-12">-->

                    <!--                      </div>-->
                    <!--                      <div class="col-12">-->
                    <!--                        <b-alert show variant="success">-->
                    <!--                          <div class="row">-->
                    <!--                            <div class="col-2 text-left"><span class="mdi mdi-information"></span></div>-->
                    <!--                            <div class="col-10 px-0 text-left">You can indicate your Resident or Large Family status during the booking process. You don't need to indicate it here.</div>-->
                    <!--                          </div>-->
                    <!--                        </b-alert>-->
                    <!--                      </div>-->
                    <!--                    </div>-->
                    <!--                  </div>-->
                  </div>
                </div>
              </transition>
              <!--              </b-dropdown>-->
            </div>
            <div class="col-lg-2 pr-lg-0 search-button rounded-right overflow-hidden">
              <button class="btn rounded-0 btn-light h-100 one-btn d-flex align-items-center border-bottom-0"
                      @click="save">
                <i class="fa fa-search"></i>
                Search
              </button>
            </div>
          </div>
        </div>
        <div style="width: 100%;position: absolute; top: 100%;left: 0;z-index: 10" class="">
          <b-collapse v-model="calendar_view" class="w-100">
            <div class="col-lg-12">
              <div class="row shadow gala-secondary-bg">
                <div class="col-lg-12 py-4 round-trip">
                  <div class="row justify-content-center">
                    <div class="duble-b">
                      <div class="flight-radio-btns">
                        <b-form-group>
                          <div class="bv-no-focus-ring flight-search-detail">
                            <b-form-radio-group
                              v-model="type"
                              :name="type"
                              @input="typeChanged"
                            >
                              <b-form-radio name="some-radios" value="round" id="B"
                              >Round Trip
                              </b-form-radio
                              >
                              <b-form-radio name="some-radios" value="one"
                              >One Way
                              </b-form-radio
                              >
                              <!-- <b-form-radio name="some-radios" value="multi"
                              >Multi City
                              </b-form-radio -->
                              <!-- > -->
                            </b-form-radio-group>
                          </div>
                        </b-form-group>
                      </div>

                      <div class="flight-radio-btns nonstop">
                        <b-form-group>
                          <div class="bv-no-focus-ring mr-3">
                            <!-- <b-form-checkbox v-model="data.nonStop" value="true">
                              Non-Stop
                            </b-form-checkbox> -->
                          </div>
                        </b-form-group>
                        <b-form-group>
                          <div class="bv-no-focus-ring">
                            <!-- <b-form-checkbox v-model="data.flex" v-if="type != 'multi'">
                              Flexible Search
                            </b-form-checkbox> -->
                          </div>
                        </b-form-group>
                      </div>
                    </div>
                  </div>
                </div>
                <functional-calendar
                  ref="Calendars"
                  v-show="type == 'round'"
                  class="w-100 col-lg-12 pb-2"
                  v-model="dateRange"
                  :is-multiple="true"
                  @selectedDaysCount="handleDateRange($event)"
                  :calendars-count="3"
                  :limits="{min: convertminmaxDate(dateToShow.minDate,false), max: convertminmaxDate(dateToShow.minDate,true)}"
                  :is-date-range="true"
                  :is-date-picker="false"
                ></functional-calendar>
                <functional-calendar
                  v-show="type == 'one'"
                  :is-multiple="true"
                  v-model="dateRange"
                  class="w-100"
                  :calendars-count="3"
                  :is-date-picker="true"
                  @choseDay="handleDateRange($event)"
                ></functional-calendar>
              </div>
            </div>
          </b-collapse>
        </div>
      </div>
      <multiSearchForm v-else ref="multiCity" @redirect="redirect">
      </multiSearchForm>
    </div>
    <search-loading
      v-if="loading"
      :loadingParams="true"
      :params="data"
      title="We are Searching for the Best Flight Deals"
    >
    </search-loading>
  </div>
</template>
<script>
  import {mapState, mapMutations} from "vuex";
  import multiSearchForm from "@/components/multiSearchForm.vue";
  // import DateRangePicker from "vue2-daterange-picker";
  // import "vue2-daterange-picker/dist/vue2-daterange-picker.css";
  import searchLoading from "@/components/searchLoading";
  import {FunctionalCalendar} from "vue-functional-calendar";

  // import { mdiCalendarBlank } from '@mdi/js';

  export default {
    components: {
      multiSearchForm,
      // DateRangePicker,
      searchLoading,
      FunctionalCalendar,
    },

    data() {
      let today = new Date();
      let yesterday = new Date();
      yesterday.setDate(today.getDate() + 1);
      return {
        pass_dropdown: false,
        searchParam: {},
        loading: false,
        // calendar data
        calendar_view: false,
        datePic: {},
        dateRange: {
          dateRange: {
            start: '',
            end: ''
          }
        },
        dateToShow: {
          departureDate: undefined,
          noDepartureDate: "Departure",
          returnDate: undefined,
          noReturnDate: "Arrival",
          dateRange: {
            startDate: undefined,
            endDate: undefined,
          },
          minDate: yesterday,
          maxDate: "2022-12-26",
          weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          monthNames: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
        },

        activeTab: "",
        calendarData: {},
        selected: null,
        options: [
          {value: null, text: "Select Airline"},
          {value: "ALL", text: "Any class"},
          {value: "ECO", text: "Economy"},
          {value: "FIR", text: "First"},
          {value: "BUS", text: "Business"},
          {value: "PRE", text: "PREMIUM_ECONOMY"},
        ],
        loading: false,
        type: "round",
        data: {
          adults: 1,
          children: 0,
          infants: 0,
          locations: {},
          travelClass: "ECONOMY",
          includedAirline: "",
          flex: false,
          nonStop: false,
          returnDate: [],
        },
        keywords: {
          originLocationCode: "",
          destinationLocationCode: "",
        },
        oldKeywords: {
          originLocationCode: "",
          destinationLocationCode: "",
        },
        locations: {
          originLocationCode: [],
          destinationLocationCode: [],
        },
        fetchingLocations: {
          originLocationCode: false,
          destinationLocationCode: false,
        },
      };
    },

    watch: {
      calendarData: {
        handler(latest) {
          if (this.type === "round") {
            if (latest.dateRange.end) {
              let date = latest.dateRange.end.split("/");
              date = `${date[2]}-${this.$isoDate(date[1])}-${this.$isoDate(
                date[0]
              )}`;
              this.data.returnDate = new Date(date.replace(/-/g, "/"));
              this.$refs.calendar.hide(true);
              this.$refs.passengers.show(true);
              return;
            }
            if (latest.dateRange.start) {
              let date = latest.dateRange.start.split("/");
              date = `${date[2]}-${this.$isoDate(date[1])}-${this.$isoDate(
                date[0]
              )}`;
              this.data.departureDate = new Date(date.replace(/-/g, "/"));
              this.data.returnDate = null;
            }
          }
        },
        deep: true,
      },
    },

    beforeCreate() {
      let params = this.$store.state.forAll.searchParams;
      if (params && params.type !== "multi") {
        let start = params["departureDate"];
        start = `${start.getFullYear()}/${
          start.getMonth() + 1
        }/${start.getDate()}`;
        if (params.type === "round") {
          console.log(params["returnDate"])
          params["returnDate"] = params["returnDate"];
          let end = params["returnDate"];
          this.data
          end = `${end.getFullYear()}/${end.getMonth() + 1}/${end.getDate()}`;
          this.$store.commit("form/setMarkedDateRange", {start, end});
        } else if (params.type === "one") {
          this.$store.commit("form/setMarkedDates", [start]);
        }
      }
    },

    created() {
      if (this.$route.name != "index") {
        if (this.searchParams) {
          if (this.searchParams.type !== "multi") {
            let data = {...this.searchParams};
            this.type = data.type;
            this.keywords.originLocationCode =
              data.locations.originLocationCode.city;
            this.keywords.destinationLocationCode =
              data.locations.destinationLocationCode.city;
            this.data = {...data};
            this.data.locations = {...data.locations};
          } else {
            this.type = "multi";
          }
        }
      }
      // let option = {
      //   city: "Lahore",
      //   country: "Pakistan",
      //   iata: "LHE",
      //   name: "Alama Iqbal International",
      // }
      // this.selectLocations('default', option)
      console.log('params', this.data)
      // this.params
      if (this.data.departureDate instanceof Date) {
        console.log('departureDate', this.data.departureDate)
        this.dateRange.dateRange.start = `${this.data.departureDate.getDate()}/${this.data.departureDate.getMonth() + 1}/${this.data.departureDate.getFullYear()}`;
      }
      if (this.data.returnDate instanceof Date) {
        console.log('returnDate', this.data.returnDate)
        this.dateRange.dateRange.end = `${this.data.returnDate.getDate()}/${this.data.returnDate.getMonth() + 1}/${this.data.returnDate.getFullYear()}`;
      }

      // console.log(JSON.parse(JSON.parse("{\"status\":\"Complete\",\"reportingSystem\":\"RAF\",\"timeStamp\":\"2022-01-10T11:52:00+00:00\",\"type\":\"Application\",\"errorCode\":\"WARN.RAF.APPLICATION\",\"instance\":\"raf-darhlp048.sabre.com-8080\",\"message\":\"{\\\"OTA_AirLowFareSearchRS\\\":{\\\"PricedItinCount\\\":0,\\\"BrandedOneWayItinCount\\\":0,\\\"SimpleOneWayItinCount\\\":0,\\\"DepartedItinCount\\\":0,\\\"SoldOutItinCount\\\":0,\\\"AvailableItinCount\\\":0,\\\"Version\\\":\\\"4.3.0\\\",\\\"Errors\\\":{\\\"Error\\\":[{\\\"Type\\\":\\\"IF2\\\",\\\"ShortText\\\":\\\"No complete journey can be built in IF2/ADVJR1.\\\",\\\"Code\\\":\\\"PROCESS\\\",\\\"content\\\":\\\"\\\"},{\\\"Type\\\":\\\"WORKERTHREAD\\\",\\\"ShortText\\\":\\\"4335643224154333116\\\",\\\"Code\\\":\\\"TRANSACTIONID\\\",\\\"MessageClass\\\":\\\"I\\\",\\\"content\\\":\\\"\\\"},{\\\"Type\\\":\\\"SERVER\\\",\\\"ShortText\\\":\\\"27041\\\",\\\"Code\\\":\\\"ASE032LPSPIL40C.IDM.SGDCPROD.SABRE.COM\\\",\\\"MessageClass\\\":\\\"I\\\",\\\"content\\\":\\\"\\\"},{\\\"Type\\\":\\\"DRE\\\",\\\"ShortText\\\":\\\"15863\\\",\\\"Code\\\":\\\"RULEID\\\",\\\"MessageClass\\\":\\\"I\\\",\\\"content\\\":\\\"\\\"},{\\\"Type\\\":\\\"DEFAULT\\\",\\\"ShortText\\\":\\\"28096\\\",\\\"Code\\\":\\\"RULEID\\\",\\\"MessageClass\\\":\\\"I\\\",\\\"content\\\":\\\"\\\"},{\\\"Type\\\":\\\"SCHEDULES\\\",\\\"ShortText\\\":\\\"NO FLIGHT SCHEDULES FOR QUALIFIERS USED\\\",\\\"Code\\\":\\\"MSG\\\",\\\"MessageClass\\\":\\\"I\\\",\\\"content\\\":\\\"\\\"},{\\\"Type\\\":\\\"ERR\\\",\\\"ShortText\\\":\\\"Error during Processing\\\",\\\"Code\\\":\\\"ERR\\\",\\\"content\\\":\\\"\\\"}]}},\\\"Links\\\":[{\\\"rel\\\":\\\"self\\\",\\\"href\\\":\\\"https://api.havail.sabre.com/v4.3.0/shop/flights?mode=live\\\"},{\\\"rel\\\":\\\"linkTemplate\\\",\\\"href\\\":\\\"https://api.havail.sabre.com/<version>/shop/flights?mode=<mode>&limit=<limit>&offset=<offset>&enabletagging=<enabletagging>\\\"}]}\"}").message))
    },

    computed: {
      ...mapState("forAll", ["searchParams", "airports", "airlines"]),
      ...mapState("data", ["allData"]),
      ...mapState("form", ["markedDateRange", "markedDates"]),

      totalPassengers() {
        let totalPassengers = this.data.adults;
        if (this.data.children) {
          totalPassengers += this.data.children;
        }
        if (this.data.infants) {
          totalPassengers += this.data.infants;
        }
        return totalPassengers;
      },

      minReturnDate() {
        let startDate = new Date();
        if (this.data.departureDate) {
          return this.data.departureDate;
        } else {
          return startDate;
        }
      },

      maxDepartDate() {
        if (this.data.returnDate) {
          return this.data.returnDate;
        } else {
          return;
        }
      },
    },

    methods: {
      ...mapMutations("forAll", ["setSearchParams"]),
      ...mapMutations("flights", ["setFlexResponse", "setAjaxResponse"]),

      closeCollapse(box) {
        this[box] = false
      },

      opendropdown() {
        this.calendar_view = false
        this.pass_dropdown = !this.pass_dropdown
      },
      toggleCalendar() {
        this.calendar_view = !this.calendar_view
        this.pass_dropdown = false
      },
      typeChanged: function () {
        this.data.departureDate = null;
        this.data.returnDate = null;
        this.dateRange.dateRange.start = '';
        this.dateRange.dateRange.end = '';
        if (this.dateRange.selectedDate) this.dateRange.selectedDate = ''
      },

      scrollFunction() {
        if (
          document.body.scrollTop > screen.height - 400 ||
          document.documentElement.scrollTop > screen.height - 400
        ) {
          // document.getElementById("navbar").style.top = "0";
          console.log("aaa");
        } else {
          console.log("bbb");
          // document.getElementById("navbar").style.top = "-50px";
        }
      },

      travelClass(classType) {
        switch (classType) {
          case "ECONOMY":
            return "ECO";
            break;
          case "FIRST":
            return "FIR";
            break;
          case "BUSINESS":
            return "BUS";
            break;
          case "PREMIUM_ECONOMY":
            return "PRE";
            break;
          default:
            return "ALL";
            break;
        }
      },

      emptyLocations(type) {
        this.data.locations[type] = null;
        this.keywords[type] = null;
        this.calendar_view = false
        this.pass_dropdown = false
      },

      dayClicled(date, key) {
        if (date && date.length > 1 && typeof date == "object") {
          this.data.departureDate = date[0];
          this.data.returnDate = date[1];
        } else {
          if (key == "departureDate") {
            this.data.departureDate = new Date(date.replace(/-/g, "/"));
          }
          if (key == "returnDate") {
            this.data.returnDate = new Date(date.replace(/-/g, "/"));
          }
        }
      },

      handleDateRange(e) {
        if (this.type == "round") {
          this.data.departureDate = new Date(this.dateRange.dateRange.start.split('/').reverse().join('-'));
          this.data.returnDate = new Date(this.dateRange.dateRange.end.split('/').reverse().join('-'));
        } else {
          this.data.departureDate = new Date(this.dateRange.selectedDate.split('/').reverse().join('-'));
        }
        this.calendar_view = false
        this.pass_dropdown = false

        this.pass_dropdown = true
      },
      calendarValue(value) {
        return value ? this.convertDate(value) : "";
      },

      // handleDateRange(values){
      //   this.data.departureDate = values[0];
      //   this.dateToShow.departureDate=this.convertDate(values[0])
      //   // alert(this.convertDate(values[0]))
      //   this.data.returnDate = values[1];
      //   this.dateToShow.returnDate=this.convertDate(values[1])
      // },
      //
      convertDate(str) {
        var date = new Date(str),
          weekday = date.getDay(),
          mnth = date.getMonth(),
          day = ("0" + date.getDate()).slice(-2);
        return [
          this.dateToShow.weekdays[weekday] + ",",
          this.dateToShow.monthNames[mnth],
          day + ",",
          date.getFullYear(),
        ].join(" ");
      },


      convertminmaxDate(cdate, max) {
        let str = new Date(cdate)
        // alert(str)
        let mm = str.getMonth() + 1; // Months start at 0!
        let dd = str.getDate();
        let yyyy = str.getFullYear()

        if (max) yyyy = parseInt(yyyy) + 2
        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;

        let date = dd + '/' + mm + '/' + yyyy;

        return date;
      },

      selectLocations(type, option) {
        console.log('test', option)
        this.data.locations[type === 'default' ? 'originLocationCode' : type] = option;
        // console.log(this.data.locations);
        if (type === "destinationLocationCode") {
          this.calendar_view = true
        } else if (type === 'default') {
          return null
        } else {
          this.calendar_view = false
          this.$refs.destinationLocationCode.focus();
        }
        this.pass_dropdown = false
      },

      simpleSuggestionList(type) {
        this.data.locations[type] = null;
        if (this.timer !== null) {
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(async () => {
          let keyword = this.keywords[type].toLowerCase();
          if (!keyword.length || keyword.length < 2) {
            this.locations[type] = [];
            return;
          }
          this.fetchingLocations[type] = true;

          if (
            this.locations[type].length < 1 ||
            this.oldKeywords[type].length > keyword.length
          ) {
            this.locations[type] = this.allData.airports.filter((x) =>
              x.iata.toLowerCase().includes(keyword)
            );
            if (this.locations[type].length < 1) {
              this.locations[type] = this.allData.airports.filter((x) =>
                x.name.toLowerCase().includes(keyword)
              );
            }
            if (this.locations[type].length < 1) {
              this.locations[type] = this.allData.airports.filter(
                (x) =>
                  x.city.toLowerCase().includes(keyword) ||
                  x.country.toLowerCase().includes(keyword)
              );
            }
          } else {
            this.locations[type] = this.locations[type].filter((x) =>
              x.iata.toLowerCase().includes(keyword)
            );
            if (this.locations[type] < 1) {
              this.locations[type] = this.locations[type].filter((x) =>
                x.name.toLowerCase().includes(keyword)
              );
            }
            if (this.locations[type] < 1) {
              this.locations[type] = this.locations[type].filter(
                (x) =>
                  x.city.toLowerCase().includes(keyword) ||
                  x.country.toLowerCase().includes(keyword)
              );
            }
          }

          if (
            this.locations[type].length < 1 ||
            this.oldKeywords[type].length > keyword.length
          ) {
            this.locations[type] = this.allData.airports.filter(
              (x) =>
                x.name.toLowerCase().includes(keyword) ||
                x.city.toLowerCase().includes(keyword) ||
                x.country.toLowerCase().includes(keyword) ||
                x.iata.toLowerCase().includes(keyword)
            );
          } else {
            this.locations[type] = this.locations[type].filter(
              (x) =>
                x.name.toLowerCase().includes(keyword) ||
                x.city.toLowerCase().includes(keyword) ||
                x.country.toLowerCase().includes(keyword) ||
                x.iata.toLowerCase().includes(keyword)
            );
          }
          this.oldKeywords[type] = keyword;
          this.fetchingLocations[type] = false;
        }, 100);
      },

      mount() {
        if (this.loadFares) {
          this.loading = true;
          if (!this.params) {
            return this.redirect();
          }
          let data = {...this.params};
          if (this.params.type !== "multi") {
            let soapData = {destinations: []};
            soapData.destinations[0] = {};
            soapData.destinations[0]["departureLocation"] =
              data.locations.originLocationCode.iata;
            soapData.destinations[0]["arrivalLocation"] =
              data.locations.destinationLocationCode.iata;
            if (data["returnDate"]) {
              soapData.destinations[1] = {};
              soapData.destinations[1]["departureLocation"] =
                soapData.destinations[0]["arrivalLocation"];
              soapData.destinations[1]["arrivalLocation"] =
                soapData.destinations[0]["departureLocation"];
              let date = new Date(data["returnDate"]);
              soapData.destinations[1]["date"] = data[
                "returnDate"
                ] = `${date.getFullYear()}-${this.$isoDate(
                date.getMonth() + 1
              )}-${this.$isoDate(date.getDate())}`;
            }
            let date = new Date(data["departureDate"]);
            soapData.destinations[0][
              "date"
              ] = `${date.getFullYear()}-${this.$isoDate(
              date.getMonth() + 1
            )}-${this.$isoDate(date.getDate())}`;
            soapData.nonStop = data.nonStop;
            soapData.travelClass = data.travelClass;
            soapData.includedAirline = data.includedAirline;
            soapData["passengers"] = _.pick(data, [
              "adults",
              "children",
              "infants",
            ]);
            soapData["flex"] = data.flex || false;
            this.ajax(soapData);
          } else {
            let soapData = {destinations: []};
            for (var index in data.destinations) {
              soapData["destinations"][index] = {};
              soapData["destinations"][index]["departureLocation"] =
                data.destinations[index].locations.originLocationCode.iata;
              soapData["destinations"][index]["arrivalLocation"] =
                data.destinations[index].locations.destinationLocationCode.iata;
              let date = new Date(data.destinations[index]["departureDate"]);
              date = `${date.getFullYear()}-${this.$isoDate(
                date.getMonth() + 1
              )}-${this.$isoDate(date.getDate())}`;
              soapData["destinations"][index].date = date;
            }
            soapData.nonStop = data.nonStop;
            soapData.travelClass = data.travelClass;
            soapData.includedAirline = data.includedAirline;
            soapData["passengers"] = _.pick(data, [
              "adults",
              "children",
              "infants",
            ]);
            this.ajax(soapData);
          }
        } else {
          this.setLoadFares(true);
        }
      },

      redirect() {
        this.$router.push("/");
      },
      // reformateType(data) {
      //   if (data == 'round') {
      //     return 'ROUND_TRIP'
      //   } else if (data == 'one') {
      //     return 'ONE_WAY'
      //   } else if (data == 'multi') {
      //     return 'MULTI_DIRECTIONAL'
      //   } else {
      //     return 'ROUND_TRIP'
      //   }
      // },
      // convertApiDate(dataDate) {
      //   let date = new Date(dataDate);
      //   let year = date.getFullYear();
      //   let month = date.getMonth() + 1;
      //   let dt = date.getDate();
      //
      //   if (dt < 10) {
      //     dt = '0' + dt;
      //   }
      //   if (month < 10) {
      //     month = '0' + month;
      //   }
      //
      //   let newdate = year + '-' + month + '-' + dt;
      //   return newdate;
      // },
      // reformateData(thisData) {
      //   let data = thisData;
      //   // console.log(data)
      //   return {
      //     trip: this.reformateType(data.type),
      //     origion_name:
      //       data.locations.originLocationCode.city + " (" + data.locations.originLocationCode.iata + " - " +
      //       data.locations.originLocationCode.name + "), " + data.locations.originLocationCode.country,
      //     origion_code: data.locations.originLocationCode.iata,
      //     distination_name:
      //       data.locations.destinationLocationCode.city + " (" + data.locations.destinationLocationCode.iata + " - " +
      //       data.locations.destinationLocationCode.name + "), " + data.locations.destinationLocationCode.country,
      //     distination_code: data.locations.destinationLocationCode.iata,
      //     depart_date: this.convertApiDate(data.departureDate),
      //     return_date: this.convertApiDate(data.returnDate),
      //     adult: data.adults,
      //     child: data.children ? data.children : null,
      //     infant: data.infants ? data.infants : null,
      //     cabin_class: data.travelClass == '' ? 'ECONOMY' : data.travelClass,
      //   }
      //   // console.log(data.travelClass)
      // },
      //
      // ajax(params) {
      //
      //   // console.log(this.searchParams)
      //   // if (process.env.NODE_ENV != "production" && process.env.CACHE == "true") {
      //   //   if (this.params.flex) {
      //   //     let flightResponse = JSON.parse(
      //   //       localStorage.getItem("flexSearchResponse")
      //   //     );
      //   //     // console.log(flightResponse),
      //   //     this.setFlexResponse(flightResponse);
      //   //   } else {
      //   //     this.setAjaxResponse({
      //   //       response: flightResponse,
      //   //       airlinesByKey: this.airlinesByKey,
      //   //     });
      //   //   }
      //   //   this.loading = false;
      //   // } else {
      //   // localStorage.removeItem('searchResponse')
      //   this.loading = true
      //   // alert('run')
      //   this.$api({
      //     method: "post",
      //     url: "flight_search_api",
      //     data: this.reformateData(params),
      //   })
      //     .then(({data}) => {
      //       this.searchData = data
      //       localStorage.setItem("searchResponse", JSON.stringify(data));
      //       this.setAjaxResponse({
      //         response: data,
      //         airlinesByKey: this.airlinesByKey,
      //       });
      //       // console.log(this.searchData)
      //       // console.log('params',this.params)
      //       if (
      //         process.env.NODE_ENV != "production" &&
      //         process.env.CACHE == "true"
      //       ) {
      //         localStorage.setItem("flexSearchResponse", JSON.stringify(data));
      //       }
      //       // if (this.params.flex) {
      //       //   this.setFlexResponse(data);
      //       // } else {
      //       //   this.setFlexResponse({
      //       //     response: data,
      //       //     airlinesByKey: this.airlinesByKey,
      //       //   });
      //       // }
      //       this.notFoundError = false;
      //       this.timer = setTimeout(() => {
      //         this.$bvModal.show("search_expired");
      //       }, 3600000);
      //     })
      //     .catch((err) => {
      //       this.notFoundError = true;
      //       console.log("error", err);
      //       let data = err.response.data;
      //       if (data.messages) {
      //         for (var message of data.messages) {
      //           this.$bvToast.toast(
      //             `Code: ${message.code}, Message ${message.text}`,
      //             {
      //               title: "AATourism",
      //               variant: "danger",
      //               solid: true,
      //               toaster: "b-toaster-top-center",
      //             }
      //           );
      //         }
      //       }
      //     })
      //     .finally(
      //       () => {
      //         if (this.$route.name != "flights") {
      //           // alert(this.$route.name)
      //           if (params.flex == true) {
      //             // this.setFlexResponse(null);
      //             this.$router.push("flights");
      //             // this.loading = false;
      //           }
      //           if (params.flex == false) {
      //             this.$router.push("flights");
      //             // this.loading = false;
      //           }
      //           if (params.flex == undefined) {
      //             this.$router.push("flights");
      //             // this.loading = false;
      //           }
      //         }
      //         // this.loading = false;
      //         // if (this.$route.name === "flights") {
      //         //   this.$emit("search");
      //         // } else {
      //         //   if (params.flex == true) {
      //         //     this.setFlexResponse(null);
      //         //     this.$router.push("flights");
      //         //   }
      //         //   if (params.flex == false) {
      //         //     this.$router.push("flights");
      //         //   }
      //         //   if (params.flex == undefined) {
      //         //     this.$router.push("flights");
      //         //   }
      //         // }
      //         // this.redirect(params)
      //       }
      //       //  {
      //       //       if(this.$store.state.loading){
      //       // this.$store.commit("setLoading")
      //       //       }
      //       // }
      //     );
      //   // }
      // },
      save() {
        // alert('tested')
        this.pass_dropdown = false
        this.calendar_view = false
        if (
          !this.data.locations.originLocationCode ||
          !this.data.locations.destinationLocationCode
        ) {
          return this.errorMessage();
        }
        if (this.type === "one") {
          if (!this.data.departureDate) {
            return this.errorMessage();
          }
        }
        if (this.type === "round") {
          if (!this.data.departureDate || !this.data.returnDate) {
            return this.errorMessage();
          }
        }
        this.data.type = this.type;

        let totalPassengers = this.data.adults;
        if (this.data.children === 0) {
          delete this.data.children;
        } else {
          totalPassengers += this.data.children;
        }
        if (this.data.infants === 0) {
          delete this.data.infants;
        } else {
          totalPassengers += this.data.children;
        }
        // if (totalPassengers >= 10) {
        //   return this.$bvToast.toast(
        //     "Total number of passengers should be less than or equal to 9.",
        //     {
        //       title: "AATourism!",
        //       variant: "danger",
        //       toaster: "b-toaster-bottom-right",
        //       solid: true,
        //     }
        //   );
        // }
        // if (this.data.infants > this.data.adults) {
        //   return this.$bvToast.toast(
        //     "Infant passengers should be less than or equal to adult passengers",
        //     {
        //       title: "AATourism!",
        //       variant: "danger",
        //       toaster: "b-toaster-bottom-right",
        //       solid: true,
        //     }
        //   );
        // }
        // localStorage.setItem("offerType", "offer");
        this.redirect(this.data)
      },
      redirect(data) {
        data.nonStop = this.data.nonStop;
        localStorage.setItem("offerParams", JSON.stringify(data));
        localStorage.setItem("searchParams", JSON.stringify(data));
        if (this.$route.name === "flights") {
          this.$emit("search");
        } else {
          if (data.flex == true) {
            this.$router.push("flights");
          }
          if (data.flex == false) {
            this.$router.push("flights");
          }
          if (data.flex == undefined) {
            this.$router.push("flights");
          }
        }
      },

      errorMessage() {
        this.$bvToast.toast("Provided data is not valid", {
          title: "GALA TRAVEL!",
          variant: "danger",
          toaster: "b-toaster-top-center",
          solid: true,
        });
      },
    },
  };

  // function
</script>
<style scoped>


  .slide-fade-enter-active {
    transition: all 0.3s ease-out;
  }

  .slide-fade-leave-active {
    transition: all 0.3s ease-out;
  }

  .round-animation.slide-fade-enter-from,
  .round-animation.slide-fade-leave-to {
    transform: translateX(60px);
    opacity: 0;
  }

  .bnb-dropdown.slide-fade-enter-from,
  .bnb-dropdown.slide-fade-leave-to {
    transform: translateX(20);
    opacity: 0 !important;
  }
  .vfc-popover-container{
    z-index: 10;
  }
  .custom-control-label::before {
    background-color: #bc1d81;
  }
  .custom-control-label::after {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
</style>
