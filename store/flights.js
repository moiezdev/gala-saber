export const state = () => ({
  selected: {
    stops: [],
    airlines: [],
    airports: [],
    newFilter: [],
  },
  selectedStops: [],
  selectedAirlines: [],
  selectedAirports: [],
  selectedNewFilter: {
    price: [],
    priceCurrency: [],
    maxminPrices: [],
    duration: [],
    airlines: {},
    airport: {},
    stops: {},
    selectedStops: {},
    departureTime: [0, 24],
    arrivalTime: [0, 24]
  },
  directFlights: 'all',
  nonDirectFares: null,
  segmentsPricing: null,
  oldResponse: null,
  response: {
    quickCheapPrice: {},
    OTA_AirLowFareSearchRS: {
      PricedItineraries: {
        PricedItinerary: [
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
                    Amount: {},
                    CurrencyCode: ''
                  }
                }
              }
            ]
          }
        ]
      }
    }
  },
  pagination: {
    current: 1,
    chunks: [],
    perPage: 10,
    totalPage: null
  },
  sortBy: "cheap",
  filters: {
    price: [],
    priceCurrency: [],
    maxminPrices: [],
    airlines: {},
    airport: {},
    stops: {},
    selectedStops: {},
    departureTime: [0, 24],
    arrivalTime: [0, 24]
  },
  carousalAirlines: [],
  loadFares: true,
  detailFare: null,
  detailFares: null,

  // flight
  confirmedItinerary: null,
  bookingData: null
});
export const strict = false
export const mutations = {
  setAjaxResponse(state, {response, airlinesByKey}) {
    // alert('ajax')
    let min = _.minBy(response.OTA_AirLowFareSearchRS.PricedItineraries.PricedItinerary, o => parseFloat(o.AirItineraryPricingInfo[0].ItinTotalFare.TotalFare.Amount));
    let max = _.maxBy(response.OTA_AirLowFareSearchRS.PricedItineraries.PricedItinerary, o => parseFloat(o.AirItineraryPricingInfo[0].ItinTotalFare.TotalFare.Amount));

    let minTime = _.minBy(response.OTA_AirLowFareSearchRS.PricedItineraries.PricedItinerary, o => parseFloat(o.AirItinerary.OriginDestinationOptions.OriginDestinationOption[0].ElapsedTime));
    let maxTime = _.maxBy(response.OTA_AirLowFareSearchRS.PricedItineraries.PricedItinerary, o => parseFloat(o.AirItinerary.OriginDestinationOptions.OriginDestinationOption[0].ElapsedTime));
    state.filters.price = [
      parseFloat(min.AirItineraryPricingInfo[0].ItinTotalFare.TotalFare.Amount),
      parseFloat(max.AirItineraryPricingInfo[0].ItinTotalFare.TotalFare.Amount)
    ];
    state.filters.priceCurrency = [
      min.AirItineraryPricingInfo[0].ItinTotalFare.TotalFare.CurrencyCode,
      max.AirItineraryPricingInfo[0].ItinTotalFare.TotalFare.CurrencyCode
    ]
    console.log(state.filters.priceCurrency)
    state.filters.time = [
      parseFloat(minTime.AirItinerary.OriginDestinationOptions.OriginDestinationOption[0].ElapsedTime),
      parseFloat(maxTime.AirItinerary.OriginDestinationOptions.OriginDestinationOption[0].ElapsedTime)
    ]
    state.filters.quickCheapPrice = {
      currency: minTime.AirItineraryPricingInfo[0].ItinTotalFare.TotalFare.CurrencyCode,
      price: parseFloat(minTime.AirItineraryPricingInfo[0].ItinTotalFare.TotalFare.Amount)
    }
    state.filters.maxminTime = [...state.filters.time]
    state.filters.maxminPrices = [...state.filters.price];
    // state.filters.selectedStops = {};
    // state.filters.airlines = {};
    // state.filters.airports = {};
    // state.filters.departureTime = [0, 24];
    // state.filters.arrivalTime = [0, 24];
    // delete response.stops.dummyStop;
    // state.filters.stops = {...response.OTA_AirLowFareSearchRS.PricedItineraries};
    state.sortBy = 'cheap';

    let airlines = [];
    state.carousalAirlines = airlines;
    state.oldResponse = response;
    state.response = response;

    if (response.OTA_AirLowFareSearchRS.PricedItinCount == 0) {
      this.commit('flights/setPagination', response.OTA_AirLowFareSearchRS.PricedItineraries.PricedItinerary);
    }
    state.selected.newFilter = {...state.filters}
  },

  setFlexResponse(state, response) {
    state.response = response;
  },

  // updateSelectedFilters(state,{stops,airlines,airports,filters,directFlights}){
  //   if (stops) {
  //     state.selected.stops = stops
  //   }
  //   if (airlines) {
  //     state.selected.airlines = airlines
  //   }
  //   if (airports) {
  //     state.selected.airports = airports
  //   }
  //   if (filters) {
  //     state.selected.newFilter = filters
  //   }
  //   if (directFlights) {
  //     state.directFlights = directFlights
  //   }
  // },

  setPagination(state, fares) {
    // alert('fares')
    state.pagination.current = 1;
    state.pagination.fares = fares;
    state.pagination.total = fares.length;
    state.pagination.chunks = _.chunk(fares, state.pagination.perPage);
    state.pagination.totalPage = Math.ceil(fares.length / 10);
    // console.log(state.pagination.chunks)
  },

  setFilters(state, value) {
    state.filters = value
  },
  setDirectFlight(state, value) {
    state.directFlights = value
  },
  setStops(state, value) {
    state.selectedStops = value
  },
  setAirlines(state, value) {
    state.selectedAirlines = value
  },
  setAirports(state, value) {
    state.selectedAirports = value
  },
  setNewFilters(state, value) {
    state.selectedNewFilter['duration'] = value.duration
    state.selectedNewFilter['price'] = value.price
  },
  changeFilters(state, {stops, airlines, airports, filters, directFlights}) {
    // alert(directFlights)
    if (stops) {
      state.selectedStops = stops
    }
    if (airlines) {
      state.selectedAirlines = airlines
    }
    if (airports) {
      state.selectedAirports = airports
    }
    if (filters) {
      state.selectedNewFilter.price = filters.price
      state.selectedNewFilter.duration = filters.duration
      console.log('duration', state.selectedNewFilter.duration)
      //   state.selectedNewFilter = filters
    }
    if (directFlights) {
      state.directFlights = directFlights
    }
  },
  filterFares(state, {stops, airlines, airports, filters, directFlights}) {
    // console.log(state.selected)
    let fares = state.response.OTA_AirLowFareSearchRS.PricedItineraries.PricedItinerary.filter((x) => {
      if (
        x.AirItineraryPricingInfo[0].ItinTotalFare.TotalFare.Amount >= filters.price[0] &&
        x.AirItineraryPricingInfo[0].ItinTotalFare.TotalFare.Amount <= filters.price[1]
      ) {
        return true;
      }
    });

    // duration filters
    fares = fares.filter((x) => {
      if (
        x.AirItinerary.OriginDestinationOptions.OriginDestinationOption[0].ElapsedTime >= filters.duration[0] &&
        x.AirItinerary.OriginDestinationOptions.OriginDestinationOption[0].ElapsedTime <= filters.duration[1]
      ) {
        return true
      }
    })
    if (state.directFlights == 'direct') {
      stops = [0]
    }

    // stops filters
    if (stops.length > 0) {
      fares = fares.filter((x) => {
        let status = false
        x.AirItinerary.OriginDestinationOptions.OriginDestinationOption.forEach((segments, index) => {
          if (stops.includes(segments.FlightSegment.length - 1) && status == false && index == 0) {
            status = true
          }
        })
        if (status) {
          return status
        }
      });
    }

    // airlines filters
    if (airlines.length > 0) {
      fares = fares.filter((x) => {
        let status = false
        x.AirItinerary.OriginDestinationOptions.OriginDestinationOption.forEach((segment, index) => {
          if (airlines.includes(segment.FlightSegment[0].OperatingAirline.Code) && status == false) {
            status = true
          }
        })
        return status
      });
    }
    // if (airports.length > 0) {
    //   fares = fares.filter((x) => {
    //     for (var segments of x.segments) {
    //       for (var segment of segments) {
    //         for (var flight of segment.flights) {
    //           if (
    //             airports.includes(flight.departureLoc) ||
    //             airports.includes(flight.arrivalLocation)
    //           ) {
    //             return true;
    //           }
    //         }
    //       }
    //     }
    //   });
    // }
    this.commit('flights/setPagination', fares);
    if (state.sortBy === "cheap") {
      this.dispatch("flights/sortFares", "cheap");
    } else if (state.sortBy === "expensive") {
      this.dispatch("flights/sortFares", "expensive");
    } else if (state.sortBy == 'quick') {
      this.dispatch("flights/sortFares", "cheap");
      this.dispatch('flights/sortFares', state.sortBy)
    }
  },
  setFiltersAirline(state, airline) {
    state.filters.airlines = {};
    state.filters.airlines[airline] = true;
  },
  createFilters(state, response) {
    response = state.response.OTA_AirLowFareSearchRS.PricedItineraries.PricedItinerary
    // console.log(response)
    let stops = []
    let airlines = []
    let duration = []
    response.forEach((item) => {
      item.AirItinerary.OriginDestinationOptions.OriginDestinationOption.forEach((routeItem) => {
        if (!stops.includes(routeItem.FlightSegment.length - 1)) {
          stops.push(routeItem.FlightSegment.length - 1)
        }
        routeItem.FlightSegment.forEach((segmentsItem, segmentsItemIndex) => {
          if (!airlines.includes(segmentsItem.OperatingAirline.Code)) {
            if (segmentsItemIndex === 0) {
              airlines.push(segmentsItem.OperatingAirline.Code)
            }
          }
        })
      })
    })
    stops.sort(function (a, b) {
      return a - b
    });
    state.response['airlines'] = airlines
    state.response['stops'] = stops
    // console.log(stops)
    // console.log(airlines)
  },
  setSortBy(state, value) {
    // alert(value)
    state.sortBy = value
  },
  setLoadFares(state, value) {
    state.loadFares = value;
  },
  setDetailFare(state, value) {
    state.detailFare = value;
  },
  setDetailFares(state, value) {
    state.detailFares = value;
  },

  // Flight
  setConfirmedItinerary(state, {value, index}) {
    state.confirmedItinerary = value;
    state.segmentsPricing = index;
    // alert(state.segmentsPricing)
    // console.log(value)
    state.bookingData = null;
  },
  setBookingData: (state, value) => {
    state.bookingData = value
  },
  updatePaginate(state, value) {
    // alert(value)
    if (value <= state.pagination.totalPage) {
      state.pagination.current = value
    }
  }
}
export const getters = {
  getResponse: state => state.response,
  getPagination: state => state.pagination
}
export const actions = {
  filterFares({state, commit}) {
    console.log('selectedNewFilter', state.selectedNewFilter)
    let stops = state.selectedStops
    let airlines = state.selectedAirlines
    let filters = state.selectedNewFilter
    let airports = state.selectedAirports
    console.log(state.selected)
    let fares = state.response.OTA_AirLowFareSearchRS.PricedItineraries.PricedItinerary.filter((x) => {
      if (
        x.AirItineraryPricingInfo[0].ItinTotalFare.TotalFare.Amount >= filters.price[0] &&
        x.AirItineraryPricingInfo[0].ItinTotalFare.TotalFare.Amount <= filters.price[1]
      ) {
        return true;
      }
    });

    // duration filters
    fares = fares.filter((x) => {
      if (
        x.AirItinerary.OriginDestinationOptions.OriginDestinationOption[0].ElapsedTime >= filters.duration[0] &&
        x.AirItinerary.OriginDestinationOptions.OriginDestinationOption[0].ElapsedTime <= filters.duration[1]
      ) {
        return true
      }
    })
    if (state.directFlights == 'direct') {
      stops = [0]
    }

    // stops filters
    if (stops.length > 0) {
      fares = fares.filter((x) => {
        let status = false
        x.AirItinerary.OriginDestinationOptions.OriginDestinationOption.forEach((segments, index) => {
          if (stops.includes(segments.FlightSegment.length - 1) && status == false) {
            status = true
          }
        })
        if (status) {
          return status
        }
      });
    }

    // airlines filters
    if (airlines.length > 0) {
      fares = fares.filter((x) => {
        let status = false
        x.AirItinerary.OriginDestinationOptions.OriginDestinationOption.forEach((segment, index) => {
          if (airlines.includes(segment.FlightSegment[0].OperatingAirline.Code) && status == false) {
            status = true
          }
        })
        return status
      });
    }
    // if (airports.length > 0) {
    //   fares = fares.filter((x) => {
    //     for (var segments of x.segments) {
    //       for (var segment of segments) {
    //         for (var flight of segment.flights) {
    //           if (
    //             airports.includes(flight.departureLoc) ||
    //             airports.includes(flight.arrivalLocation)
    //           ) {
    //             return true;
    //           }
    //         }
    //       }
    //     }
    //   });
    // }
    commit('setPagination', fares);
    if (state.sortBy === "cheap") {
      this.dispatch("flights/sortFares", "cheap");
    } else if (state.sortBy === "expensive") {
      this.dispatch("flights/sortFares", "expensive");
    } else if (state.sortBy == 'quick') {
      this.dispatch("flights/sortFares", "cheap");
      this.dispatch('flights/sortFares', state.sortBy)
    }
  },
  async sortFares({state, commit}, sortBy) {
    // alert('hlw')
    // sortBy = 'expensive'
    let fares = [];
    if (sortBy === "cheap") {
      fares = _.sortBy(state.pagination.fares, [
        function (o) {
          let price = parseFloat(o.AirItineraryPricingInfo[0].ItinTotalFare.TotalFare.Amount);
          return price;
        }
      ]);
    }
      // else if (sortBy === "expensive") {
      //   fares = _.sortBy(state.pagination.fares, [
      //     function (o) {
      //       let price = parseFloat(o.totalAmount);
      //       return price;
      //     }
      //   ]).reverse();
    // }
    else if (sortBy === "expensive") {
      fares = _.sortBy(state.pagination.fares, [
        function (o) {
          let price = parseFloat(o.AirItineraryPricingInfo[0].ItinTotalFare.TotalFare.Amount);
          return price;
        }
      ]).reverse();
    } else if (sortBy === "quick") {
      fares = _.sortBy(state.pagination.fares, [
        function (o) {
          // let quickestSegment = 0;
          let durationSeconds = o.AirItinerary.OriginDestinationOptions.OriginDestinationOption[0].ElapsedTime
          // if (quickestSegment === 0 || segment.durationSeconds <= quickestSegment) {
          //   quickestSegment = segment.durationSeconds;
          // }

          return durationSeconds;
        }
      ]);
    }
    // console.log(state.response);
    commit('setPagination', fares);
  }
}
