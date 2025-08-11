<template>
  <div>
    <h2 style="position: absolute; top: 50px;left: 50%;transform: translate(-50%,-50%);font-size: larger;font-weight: bold;text-align: center">We are Sorry <small>No result found</small>
      <br><small>Modify your search by changing your flight</small> <span class="mdi mdi-arrow-top-right-bold-outline"></span>
    </h2>
    <span v-if="$route.name == 'flights'">
      <!-- <flightModifySearchParams @flightModify="flightModify" /> -->
      <div class="d-flex justify-content-center">
        <img src="/no-result-found.png" width="900px" alt="" />
      </div>
    </span>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

// import flightModifySearchParams from "@/components/flightModifySearchParams.vue";
// import hotelModifySearchParams from "@/components/hotelModifySearchParams.vue";
// import carModifySearchParams from "@/components/carModifySearchParams.vue";

export default {
  components: {
    // flightModifySearchParams,
    // hotelModifySearchParams,
    // carModifySearchParams,
  },

  computed: {
    ...mapGetters({ params: "forAll/getSearchParams" }),
  },

  methods: {
    ...mapMutations("flights", ["setFlexResponse"]),

    flightModify() {
      if (this.params.flex == true) {
        this.setFlexResponse(null);
        this.$emit("search");
      } else {
        this.$emit("search");
      }
    },
    hotelModify() {
      this.$emit("search");
    },
    carModify() {
      this.$emit("search");
    },
  },
};
</script>
