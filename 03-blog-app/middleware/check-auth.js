export default function (context) {
  if (context.hasOwnProperty("ssrContext")) {
    context.store.dispatch("initAuth", context.ssrContext.req);
  } else {
    context.store.dispatch("initAuth", null);
  }
}
