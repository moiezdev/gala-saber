import { LocalScheme, RequestHandler } from '~auth/runtime'

export default class CustomScheme extends LocalScheme {
  // Override `fetchUser` method of `local` scheme
  constructor($auth, options, ...defaults) {
    $auth.request = (endpoint, defaults = {}) => {
      const _endpoint = typeof defaults === "object" ? Object.assign({}, defaults, endpoint) : endpoint;
      if (!$auth.ctx.app.$api) {
        console.error("[AUTH] add the @nuxtjs/axios module to nuxt.config file");
        return;
      }
      return $auth.ctx.app.$api.request(_endpoint).catch((error) => {
        $auth.callOnError(error, { method: "request" });
        return Promise.reject(error);
      });
    }
    super($auth, options, ...defaults);
    this.requestHandler = new RequestHandler(this, this.$auth.ctx.$api);
  }
}