<template>
 <div class="bg-tour-pc">
 <div class="tp-s">
   <div class="second-title top-services">
          <h2> TOP SERVICES</h2>
          </div>
   <!-- <div class="container-fluid mt-3 mb-3"> -->
   <b-carousel-list :data="countries" :items-to-show="1">
    <template slot="item" slot-scope="list">
      <div
        v-if="list.image"
        class="container-fluid tp-servirc">
      
        <div class="row">
          <div class="col-lg-6">
            <div class="slider-tour padd-90-90 ">
              <div class="slider-block-left background-block">
               
              </div>
          
              <!-- <h5>
                <b>{{
                  `From ${$days(
                    new Date(list.date_from).getDay()
                  )} - ${$formatDate(new Date(list.date_from))} to ${$days(
                    new Date(list.date_to).getDay()
                  )} - ${$formatDate(new Date(list.date_to))}`
                }}</b>
              </h5> -->
            </div>
          </div>
            <div class="col-lg-6">
            <div class="slider-tour padd-90-90 ">
               
              <div class=" slider-block clearfix">
            <h2> leisure travel</h2> 
               <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
              </div>
           
              <!-- <h5>
                <b>{{
                  `From ${$days(
                    new Date(list.date_from).getDay()
                  )} - ${$formatDate(new Date(list.date_from))} to ${$days(
                    new Date(list.date_to).getDay()
                  )} - ${$formatDate(new Date(list.date_to))}`
                }}</b>
              </h5> -->
            </div>
          </div>
        </div>
      </div>
    </template>
  </b-carousel-list>
  </div>
   </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
       countries:[
        {
          id:1,
          image:"/asia-indonesia.png",
          rating:4,
          amount:100,
          description:"",
          name:""
        },
        {
          id:2,
          image:"/asia-united.jpg",
          rating:5,
          amount:200,
          description:"",
          name:""
        },
        {
          id:3,
          image:"/canals-spring2.jpg",
          amount:450,
          rating:2,
          description:"",
          name:""
        },
        {
          id:4,
          image:"/hotel1.jpg",
          amount:230,
       
        },
      ]
    };
  },
};
</script>

<style lang="scss">
.carousel {
  width: 100%;
}
.circle-indicators {
  .carousel-indicators {
    li {
      width: 10px;
      height: 10px;
      border: 1px solid rgba(255, 255, 255, 0.6);
      border-radius: 25px;
      outline: none;
    }
    .active {
      border:none;
    }
  }
}

</style>