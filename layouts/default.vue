<template>
  <div v-on:scroll="console.log('scrolled')">
    <div class="top-bar">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="top-bar-content" style="justify-content: flex-start;">
              <div>
                <span class="mdi mdi-email-outline"></span>
                <span>
                                <a :href="'mailto:' + email.value">{{ email.value }}</a>
                            </span>
                <span class="mdi mdi-phone"></span>
                <span class="nbr"> {{ phoneNo.value }}</span>
              </div>
            </div>
          </div>
          <div class="col-lg-5">
          </div>
          <div class="col-lg-3">
            <div class="top-bar-content-2">
              <div v-if="!$auth.loggedIn">
                <span class="mdi mdi-facebook"></span>
                <span class="mdi mdi-instagram"></span>
              </div>
              <div class="fr" v-else>dfdfdfd
                <div class="top-header-block fl" style="margin-top: -10px">
                  <b-dropdown aria-role="list">
                    <template #trigger="{ active }">
                      <b-button label="DashBoard" type="is-primary" :icon-right="active ? 'menu-up' : 'menu-down'"/>
                    </template>
                    <nuxt-link to="/dashboard">
                      <b-dropdown-item aria-role="listitem">DashBoard</b-dropdown-item>
                    </nuxt-link>
                    <nuxt-link to="/dashboard">
                      <b-dropdown-item aria-role="listitem" @click="$auth.logout()">Logout</b-dropdown-item>
                    </nuxt-link>
                  </b-dropdown>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="columns is-mobile">
      <div class="column is-4">
        <div class="top-bar-content">
          <div>
            <span class="mdi mdi-email-outline"></span>
            <span>
              <a :href="'mailto:' + email.value">{{ email.value }}</a>
            </span>
            <span class="mdi mdi-phone"></span>
            <span> {{ phoneNo.value }}</span>
          </div>
        </div>
      </div>
      <div class="column is-6"></div>
      <div class="column is-2">
       <div class="top-bar-content">
          <div v-if="!$auth.loggedIn">
            <span class="mdi mdi-account"></span>
            <span><a href="/login">Sign In</a></span>
            <span class="mdi mdi-account-plus"></span>
            <span><a href="/signup">Sign Up</a></span>
          </div>
          <div class="fr" v-else>
            <div class="top-header-block fl" style="margin-top: -10px">
              <b-dropdown aria-role="list">
                <template #trigger="{ active }">
                  <b-button
                    label="DashBoard"
                    type="is-primary"
                    :icon-right="active ? 'menu-up' : 'menu-down'"
                  />
                </template>
                <nuxt-link to="/dashboard"
                  ><b-dropdown-item aria-role="listitem"
                    >DashBoard</b-dropdown-item
                  ></nuxt-link
                >
                <nuxt-link to="/dashboard"
                  ><b-dropdown-item
                    aria-role="listitem"
                    @click="$auth.logout()"
                    >Logout</b-dropdown-item
                  ></nuxt-link
                >
              </b-dropdown>
            </div>
          </div>
        </div>
      </div>
    </div> -->
        </div>
      </div>
    </div>

    <div class="header">
      <div class="container p-0">
        <b-navbar toggleable="lg" variant="light" class="justify-content-between" :class="'main-navbar '+ onScroll">
          <template #brand class="navbar-brand w-sm-100">
            <router-link :to="{ name: 'index' }" class="search-button-outer">
              <img :src="headerLogo ? `${$config.ASSET_URL}/${headerLogo}` : ''" class="logo" alt/>
            </router-link>
          </template>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <template #start class="navbar-collapse collapse" id="nav-collapse">
            <b-nav-item class="nav-link" to="/">Home</b-nav-item>
            <b-nav-item class="nav-link" to="/about">About</b-nav-item>
<!--            <b-nav-item class="nav-link" to="/">Bahrain</b-nav-item>-->
            <b-nav-item class="nav-link" to="/packages">Packages</b-nav-item>
            <b-nav-item class="nav-link" to="/news">news</b-nav-item>
            <b-nav-item class="nav-link" to="/contact">Contact</b-nav-item>
            <li v-if="custom.menu == 'Header'" class="nav-item nav-link" v-for="(custom, index) in custom_pages"
                :key="index">
              <template v-if="custom.type == 'Page'">
                <nuxt-link class="nav-link" :to="{
                    name: `page-page`,
                    params: {
                      page: custom.slug,
                      id: custom.id,
                    },
                  }" v-if="custom.menu == 'Header'">{{ custom.title }}
                </nuxt-link>
              </template>

              <template v-if="
                  custom.type == 'External' &&
                  custom.menu == 'Header' &&
                  custom.target == 'same_window'
                ">
                <a class="nav-link" :href="custom.external_link">{{ custom.title }}</a>
              </template>
            </li>
<!--            <b-nav-item class="nav-link" href="/news">-->
<!--              <b-button type="is-warning is-light">-->
<!--                <i class="fa fa-user-circle-o" aria-hidden="true"></i>-->
<!--              </b-button>-->

<!--            </b-nav-item>-->
            <b-nav-item class="nav-link" href="/login">
              <b-button type="is-warning is-light" class="border-0">
                <span class="mdi mdi-account-circle text-black-50 x-large" aria-hidden="true"></span>
              </b-button>
            </b-nav-item>
          </template>
        </b-navbar>
      </div>
    </div>
    <nuxt/>
    <div class="footer">
      <div class="payment-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 mb-4 mt-4">
              <div class="left">
                <h5>GALA TRAVEL is affiliated with ...</h5>
                <div class="cards">
                  <div>
                    <img src="../static/tico.png" alt="IATA Logo" />
                  </div>
                  <div>
                    <img src="../static/sabre.png" alt="Sabre Logo" />
                  </div>
                  <div>
                    <img src="../static/amadeus.png" alt="Amadeus Logo" />
                  </div>
                  <div>
                    <a
                      href="https://www.igoinsured.com/direct/manulifeglobal.aspx?ag=AATT01"
                      target="_blanck"
                    ><img src="../static/menulife-logo.png" alt="MenuLife Logo"
                    /></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 mb-4 mt-4">
              <div class="right">
                <h5>Secure Payment with</h5>
                <div class="cards">
                  <div>
                    <img src="../static/stripe.png" alt="Stripe Logo" />
                  </div>
                  <div>
                    <img src="../static/paypal.png" alt="PayPal Logo" />
                  </div>
                  <div>
                    <img src="../static/mastercard.png" alt="Mastercard Logo" />
                  </div>
                  <div>
                    <img src="../static/visa.png" alt="Visa Card" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container px-6">
        <div class="inner-fot">
          <div class="row w-100 mx-0 px-5">
            <div class="col-lg-3">
              <div class="logo">
                <img :src="footerLogo ? `${$config.ASSET_URL}/${footerLogo}` : ''" class="logo" alt/>
              </div>
              <ul>
                <li class="elementor-icon-list-item">
                  <a href="tel:+97317243412">

                                    <span>
                                        <i aria-hidden="true" class="fa fa-phone"></i> </span>
                    <span class="nbr-text">+973 1724 3412</span>
                  </a>
                </li>
                <li class="elementor-icon-list-item">
                  <a href="mailto:info@galabahrain.com">

                                    <span>
                                        <i aria-hidden="true" class="fa fa-envelope"></i> </span>
                    <span class="nbr-text">info@galabahrain.com</span>
                  </a>
                </li>
                <li class="elementor-icon-list-item">
                  <a href="">
                                    <span>
                                        <i aria-hidden="true" class="fa fa-map-marker"></i> </span>
                    <span class="nbr-text">P.O.BOX 5890</span>
                  </a>
                </li>

              </ul>
            </div>
            <div class="col-lg-5">
              <div class="company-list">
                <div class="populated">
                  <div class="heading-top">
                    <div class="elementor-widget-container">
                      <h2>Company</h2>
                    </div>
                  </div>
                  <div class="name-list">
                    <div class="listing-container">
                      <ul>
                        <li class="elementor-icon-list-item">
                          <a href="/about">

                            <span class="elementor-icon-list-text">About Us</span>
                          </a>
                        </li>
                        <li class="elementor-icon-list-item">
                          <a href="/packages">

                            <span class="elementor-icon-list-text">Bahrain</span>
                          </a>
                        </li>
                        <li class="elementor-icon-list-item">
                          <a href="/packages">

                            <span class="elementor-icon-list-text">Packages</span>
                          </a>
                        </li>
                        <li class="elementor-icon-list-item">
                          <a href="/news">

                            <span class="elementor-icon-list-text">News</span>
                          </a>
                        </li>
                        <li class="elementor-icon-list-item">
                          <a href="/contact">

                            <span class="elementor-icon-list-text">Contact</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="populated">

                  <div class="heading-top">
                    <div class="elementor-widget-container">
                      <h2>Explore</h2>
                    </div>
                  </div>
                  <div class="name-list">
                    <div class="listing-container">
                      <ul class="">
                        <li class="elementor-icon-list-item">
                          <a href="/login">
                            <span class="elementor-icon-list-text">Account</span>
                          </a>
                        </li>

                      </ul>
                    </div>
                  </div>

                </div>
              </div>

            </div>
            <div class="col-lg-4">

              <div class="newsletter">
                <div class="heading-top">
                  <div class="elementor-widget-container">
                    <h2>Newsletter</h2>
                  </div>
                </div>
                <div class="news-text">
                  <div class="elementor-widget-container">
                    <div class="newsletter-form">
                      <div class="content-form">
                        <input type="email" name="EMAIL" placeholder="Email address" required="">
                        <span class="form-action">

                                                <b-button type="is-primary is-light">
                                                    <h6 class="text-center w-100 text-uppercase"> Subscribe</h6>
                                                </b-button>
                                            </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
<!--        <div class="footer-baner">-->

<!--          <div class="elementor-widget-container">-->
<!--            <div class="elementor-icon-wrapper">-->


<!--              <a class="elementor-icon" href="#">-->
<!--                <b-button type="is-primary is-light">-->
<!--                  <i aria-hidden="true" class=" las la-arrow-up"></i>-->
<!--                </b-button>-->
<!--              </a>-->
<!--            </div>-->
<!--          </div>-->

<!--          <div class="social-icn">-->
<!--            <div class="elementor-widget-container">-->
<!--              <div class="social-icons">-->
<!--                            <span class="elementor-grid-item">-->
<!--                              <b-button type="is-warning is-light">-->

<!--                           <i class="fa fa-facebook-square"></i>-->
<!--                        </b-button>-->



<!--                            </span>-->
<!--                <span class="elementor-grid-item">-->
<!--                              <b-button type="is-warning is-light">-->

<!--                              <i class="fa fa-instagram"></i>-->
<!--                        </b-button>-->



<!--                            </span>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->

<!--          <div class="text-eidtr">-->
<!--            <div class="elementor-widget-container">-->

<!--              <p>Copyright 2021, Gala Travel &amp; Tourism, All rights reserved. | By <a href="#" target="_blank"-->
<!--                                                                                         rel="noopener">Creative Inter-->
<!--                Tech</a></p>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
      </div>
    </div>

  <div class="bottom">
    <div class="container">
    <div class="bottom-links d-flex justify-content-between">
      <div class="social-box">
        <a href="#"><span><i aria-hidden="true" class="fa fa-facebook"></i></span></a>
        <a href="#"><span><i aria-hidden="true" class="fa fa-instagram"></i></span></a>
      </div>
      <div class="text-box">
        Copyright 2022, Gala Travel & Tourism, All rights reserved.
      </div>
      <div class="text-box">
        by <span style="color:red;"><i aria-hidden="true" class="fa fa-heart"></i></span> <a href="https://creativeintertech.com" target="_blanck">Creative InterTech</a>
      </div>
    </div>
    </div>
  </div>
  </div>
</template>

<script>
  import {
    mapGetters
  } from "vuex";
  import moment from "moment";

  export default {

    data() {
      // window.onscroll = function() {scrollFunction()};
      return {
        onScroll: '',
        isImageModalActive: false,
        year: "",
        countries: [],
        phoneNo: "",
        faxNo: "",
        email: "",
        siteUrl: "",
        address: "",
        footerDescription: "",
        headerLogo: "",
        footerLogo: "",
        facebook_url: "",
        linkedin_url: "",
        twitter_url: "",
        instagram_url: "",
        favIcon: "",
        allNews: [],
        seoSetting: [],
        custom_pages: [],
        seo: {
          title: null,
          keyword: null,
          description: null,
          facebook_title: null,
          facebook_Url: null,
          facebook_description: null,
          twitter_title: null,
          twitter_Url: null,
          twitter_description: null,
        },
        permotion: {},
      };
    },
    computed: {
      ...mapGetters({
        siteSetting: "siteSetting/getSetting",
        siteLogos: "siteSetting/getLogos",
        siteNews: "news/getNews",
        seo_setting: "siteSetting/getSEO",
      }),
    },
    created() {
    },
    head() {
      return {
        title: this.seo.title,
        link: [{
          rel: "icon",
          type: "image/x-icon",
          href: `${
            "https://fse.galabahrain.com/assets/" + this.favIcon
          }`,
        },],
      };
    },
    created() {
      window.addEventListener('scroll', this.scrollFunction);
      var d = new Date();
      this.year = d.getFullYear();

      this.$api.get(`permotion`).then(({
                                         data
                                       }) => {
        this.permotion = data;
        if (data != "") {
          this.isImageModalActive = true;
        }
      });

      this.$api.get(`/page`).then(({
                                     data
                                   }) => {
        this.custom_pages = data.data;
      });

      if (this.seo_setting == undefined) {
        this.$api.get(`/seosetting`).then(({
                                             data
                                           }) => {
          this.seoSetting = data.data;
          this.$store.commit("siteSetting/setSEO", data.data);
          for (var i = 0; i < data.data.length; i++) {
            if (data.data[i].static_page_id == "index")
              this.page_seoSetting = data.data[i];
          }
          this.seo.title = this.page_seoSetting ?
            this.page_seoSetting.meta_title :
            "AA Travel and Tourism | Home";
          this.seo.keyword = this.page_seoSetting ?
            this.page_seoSetting.meta_keywords :
            null;
          this.seo.description = this.page_seoSetting ?
            this.page_seoSetting.meta_description :
            null;
          this.seo.facebook_title = this.page_seoSetting ?
            this.page_seoSetting.facebook_title :
            null;
          this.seo.facebook_url = this.page_seoSetting ?
            this.page_seoSetting.facebook_link :
            null;
          this.seo.facebook_description = this.page_seoSetting ?
            this.page_seoSetting.facebook_description :
            null;
          this.seo.twitter_title = this.page_seoSetting ?
            this.page_seoSetting.twitter_title :
            null;
          this.seo.twitter_Url = this.page_seoSetting ?
            this.page_seoSetting.twitter_link :
            null;
          this.seo.twitter_description = this.page_seoSetting ?
            this.page_seoSetting.twitter_description :
            null;
        });
      } else {
        for (var i = 0; i < this.seo_setting.length; i++) {
          if (this.seo_setting[i].static_page_id == "index")
            this.page_seoSetting = this.seo_setting[i];
        }

        this.seo.title = this.page_seoSetting ?
          this.page_seoSetting.meta_title :
          "AA Travel and Tourism | Home";
        this.seo.keyword = this.page_seoSetting ?
          this.page_seoSetting.meta_keywords :
          null;
        this.seo.description = this.page_seoSetting ?
          this.page_seoSetting.meta_description :
          null;
        this.seo.facebook_title = this.page_seoSetting ?
          this.page_seoSetting.facebook_title :
          null;
        this.seo.facebook_url = this.page_seoSetting ?
          this.page_seoSetting.facebook_link :
          null;
        this.seo.facebook_description = this.page_seoSetting ?
          this.page_seoSetting.facebook_description :
          null;
        this.seo.twitter_title = this.page_seoSetting ?
          this.page_seoSetting.twitter_title :
          null;
        this.seo.twitter_Url = this.page_seoSetting ?
          this.page_seoSetting.twitter_link :
          null;
        this.seo.twitter_description = this.page_seoSetting ?
          this.page_seoSetting.twitter_description :
          null;
      }

      if (this.siteSetting == undefined) {
        this.$api.get(`/setting`).then(({
                                          data
                                        }) => {
          this.$store.commit("siteSetting/setSetting", data);
          for (var i = 0; i < data.data.length; i++) {
            if (data.data[i].key == "phoneNo") {
              this.phoneNo = data.data[i];
            } else if (data.data[i].key == "fax") {
              this.faxNo = data.data[i];
            } else if (data.data[i].key == "email") {
              this.email = data.data[i];
            } else if (data.data[i].key == "siteUrl") {
              this.siteUrl = data.data[i];
            } else if (data.data[i].key == "address") {
              this.address = data.data[i];
            } else if (data.data[i].key == "footerDescription") {
              this.footerDescription = data.data[i];
            } else if (data.data[i].key == "facebook_url") {
              this.facebook_url = data.data[i];
              this.$store.commit("siteSetting/setfacebookDetails", data.data[i]);
            } else if (data.data[i].key == "linkedin_url") {
              this.linkedin_url = data.data[i];
            } else if (data.data[i].key == "twitter_url") {
              this.twitter_url = data.data[i];
            } else if (data.data[i].key == "instagram_url") {
              this.instagram_url = data.data[i];
            }
          }
        });
      } else {
        for (var i = 0; i < this.siteSetting.length; i++) {
          if (this.siteSetting[i].key == "phoneNo") {
            this.phoneNo = this.siteSetting[i];
          } else if (this.siteSetting[i].key == "fax") {
            this.faxNo = this.siteSetting[i];
          } else if (this.siteSetting[i].key == "email") {
            this.email = this.siteSetting[i];
          } else if (this.siteSetting[i].key == "siteUrl") {
            this.siteUrl = this.siteSetting[i];
          } else if (this.siteSetting[i].key == "address") {
            this.address = this.siteSetting[i];
          } else if (this.siteSetting[i].key == "footerDescription") {
            this.footerDescription = this.siteSetting[i];
          }
        }
      }
      if (this.siteLogos == undefined) {
        this.$api.get(`/sitelogo`).then(({
                                           data
                                         }) => {
          if (data) {
            this.$store.commit("siteSetting/setLogos", data);
            this.headerLogo = data.data[0].header_logo;
            this.footerLogo = data.data[0].footer_logo;
            this.favIcon = data.data[0].favicon;
          }
        });
      } else {
        this.headerLogo = this.siteLogos[0].header_logo;
        this.footerLogo = this.siteLogos[0].footer_logo;
        this.favIcon = this.siteLogos[0].favicon;
      }
    },
    destroyed() {
      window.removeEventListener('scroll', this.scrollFunction);
    },
    methods: {
      scrollFunction() {
        // console.log(document.documentElement.scrollTop)

        if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
          // document.getElementsByClassName("daterangepicker").style.top = "-100%";
          this.onScroll = 'minimize'
          // var element = document.getElementsByClassName("main-navbar");
          // element.classList.add(" smallNav");
          // console.log(document.getElementsByClassName("daterangepicker").scrollTop)
        } else {
          this.onScroll = ''
          // console.log(elem.scrollTop)
          // console.log(document.getElementsByClassName("daterangepicker").scrollTop)

          // console.log('bbb')
          // document.getElementById("navbar").style.top = "-50px";
        }
        // console.log(screen.height)
      },
      is_expired(expiry_date) {
        if (expiry_date == null) return false;
        return !moment().isBefore(expiry_date);
      },
    },
  };
</script>

<style>
  html {
    font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
  }

  .button--green {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #3b8070;
    color: #3b8070;
    text-decoration: none;
    padding: 10px 30px;
  }

  .button--green:hover {
    color: #fff;
    background-color: #3b8070;
  }

  .button--grey {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #35495e;
    color: #35495e;
    text-decoration: none;
    padding: 10px 30px;
    margin-left: 15px;
  }

  .button--grey:hover {
    color: #fff;
    background-color: #35495e;
  }
</style>
