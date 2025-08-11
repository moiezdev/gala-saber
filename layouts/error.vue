<template>
  <b-row>
    <b-col>
      <div class="not-found" v-if="error.statusCode == 404">
        <h3>Oops <small> you're lost</small></h3>
        <span>
          <div class="not-found-section">
            <img src="/404.jpg" alt="" style="width:auto; max-height:400px"/>
          </div>
        </span>
      </div>
      <div class="not-found" v-if="error.statusCode != 404">
        <span>
          <div class="not-found-section">
            <img src="/500.gif" alt="" style="width: auto; max-height: 500px" />
          </div>
        </span>
      </div>
    </b-col>
  </b-row>
</template>

<script>
export default {
  layout: "error",

  props: ["error"],

  computed: {
    content() {
      let content = {};
      switch (this.error.statusCode) {
        case 404:
          content = {
            heading: "404",
            subheading: "Error!",
            description: "Sorry! The page you were looking for doesn't exist.",
          };
          break;

        default:
          content = {
            heading: "500",
            subheading: "Error!",
            description: "An error occurred!",
          };
          break;
      }
      return content;
    },
  },
};
</script>