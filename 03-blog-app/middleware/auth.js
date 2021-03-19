export default function (context) {
  const isUserAuthenticated = context.store.getters.isAuthenticated;

  if (!isUserAuthenticated) context.redirect("/admin/auth");
}
