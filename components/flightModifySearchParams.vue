<template>
    <div>
  <div v-if="params" class="w-100">
    <div class="right">
      <button class="btn btn-primary" @click="showModal">
        Change your flight
      </button>
    </div>
    </div>
      <b-modal id="modifySearchModal" size="xl"
      title="GALA TRAVEL"
      hide-footer
      hide-header>
      <div class="modify-modal"  style="background-color:rgb(0, 102, 180) !important;margin:0px 10px;">
        <a
          class="delete modal-close-btn"
          @click="$bvModal.hide('modifySearchModal')"
        ></a>
      <flightSearchForm @search="search()"></flightSearchForm>
      </div>
      </b-modal>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import flightSearchForm from "@/components/flightSearchForm.vue";
export default {
  components: {
    flightSearchForm,
  },

  data() {
    return {
      isModifySearch: false,
    };
  },

  computed: {
    ...mapGetters({ params: "forAll/getSearchParams" }),

    traveler() {
      let traveler = this.params.adults;
      if (this.params.children) {
        traveler += this.params.children;
      }
      if (this.params.infants) {
        traveler += this.params.infants;
      }
      return traveler;
    },
  },

  methods: {
    showModal() {
      this.$bvModal.show("modifySearchModal")
      this.isModifySearch = true;
    },
    search() {
      this.$bvModal.hide("searchModal");
      if (this.$route.name === "flights") {
        this.$emit("flightModify");
        this.$router.go()
      } else {
        this.$router.push("flights");
      }
    },
  },
};
</script>
<style lang="scss">
.modal .modal-content {
  height: 600px !important;
  background: transparent !important;
  border: none;
  box-shadow: none;
  z-index: 99999999999999999 !important;
}
.modal-body {
  padding: 0px !important;
}
.modify-modal {
  background: #d0291a;
  padding: 20px 20px 40px;
}
.modal-body .c-button {
  background: white;
  color: #0080c8;
  width: 100%;
}
.modal-content .c-button .btn {
  color: #0080c8 !important;
}
.modal-content .c-button .selected-date-box .mdi {
  color: #0080c8 !important;
}
.modal-body .c-button:hover {
  color: white;
  width: 100%;
}
.modal-content .c-button:hover .btn {
  color: white !important;
}
.modal-content .c-button:hover .selected-date-box .mdi {
  color: white !important;
}

.modal-header {
  background: #d0291a;
  color: white;
}
.modal-header .close {
  color: white;
  opacity: 1;
}
</style>
