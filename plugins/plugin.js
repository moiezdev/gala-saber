 window._ = require('lodash');

import Vue from 'vue'
import { Autocomplete, Slider, Progress, Datepicker,Carousel,Tabs,Navbar,Dropdown } from 'buefy'
import VueLazyLoad from 'vue-lazyload'
import 'buefy/dist/buefy.css'

Vue.use(VueLazyLoad)
Vue.use(Autocomplete)
Vue.use(Slider)
Vue.use(Progress)
Vue.use(Carousel)
Vue.use(Datepicker)
Vue.use(Tabs)
Vue.use(Navbar)
Vue.use(Dropdown)

let today = new Date();
// Vue.use(FunctionalCalendar, {
//     dayNames: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
//     calendarsCount: 2,
//     limits: { min: `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`, max: '' },
//     isMultiple: true,
//     hiddenElements: ['leftAndRightDays']
// });


// Global Function
Vue.prototype.$ucfirst = (value) => {
    return value && value[0].toUpperCase() + value.slice(1);
}

Vue.prototype.$formatDate = (value) => {
    if (typeof value === 'string') {
        value = value.replace(/-/g, "/");
        value = value.replace(/T/g, " ");
        value = new Date(value);
    } else {
        value = new Date(value);
    }
    value = `${value.getDate()} ${Vue.prototype.$months(value.getMonth())} ${value.getFullYear()}`;
    return value;
}

Vue.prototype.$24hours = (value) => {
    let date = new Date(value);
    return date.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' })
}
Vue.prototype.$days = (value) => {
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    return days[value]
}
Vue.prototype.$months = (value) => {
    let months = [
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
        "Dec"
    ];
    return months[value];
}
Vue.prototype.$formatDate = (value) => {
    if (typeof value === 'string') {
        value = value.replace(/-/g, "/");
        value = value.replace(/T/g, " ");
        value = new Date(value);
    } else {
        value = new Date(value);
    }
    value = `${value.getDate()} ${Vue.prototype.$months(value.getMonth())} ${value.getFullYear()}`;
    return value;
}
Vue.prototype.$isoDate = (entity) => entity = entity < 10 ? `0${entity}` : entity;
