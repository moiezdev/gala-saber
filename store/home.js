export const state = () => ({
  homeSlider: [],
  homeSlides: [],
  homeTopSlider: [],
  homeBottomSlides: [],
  homeTopSlides: [],
  countries: [],
  sliderId: '',
  sliderBottomCoverPhoto: '',
  sliderTopCoverPhoto: '',
  sliderBottomId: '',
  sliderTopId: '',
})

export const mutations = {
  setHomeBottomSlider(state, value) {
    state.sliderBottomCoverPhoto = value
  },
  setHomeTopSlider(state, value) {
    state.homeTopSlider = value
  },
  setHomeBottomSlides(state, value) {
    state.homeBottomSlides = value
  },
  setHomeTopSlides(state, value) {
    state.homeTopSlides = value
  },
  setCountries(state, value) {
    state.countries = value
  },
}

export const getters = {

  getHomeBottomSlides(state) {
    return state.homeBottomSlides;
  },
  getBottomSliderCoverPhoto(state) {
    return state.sliderBottomCoverPhoto;
  },
  getHomeTopSlides(state) {
    return state.homeTopSlides;
  },
  getTopSliderCoverPhoto(state) {
    return state.sliderTopCoverPhoto;
  },
  getCountries(state) {
    return state.countries;
  },
  getSliderId(state) {
    return state.sliderId;
  },


}
