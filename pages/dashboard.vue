<template>
  <div>
    <div class="" style="padding-top: 200px; width: 100%; text-align: center">
      <h2 style="font-size: 28px">
        Please wait we are redirecting you to DASHBOARD
      </h2>
      <!-- <img src="/loading.gif" alt="" style="max-width: 450px" /> -->
    </div>
  </div>
</template>
<script>

export default {
  middleware: "auth",
  data() {
    return {
      data: {},
    };
  },
  computed: {
    DashboardUrl() {
      return this.$config.DASHBOARD_LINK;
    },
  },

  created() {
      return (window.location.href = this.DashboardUrl);
  }
};
</script>