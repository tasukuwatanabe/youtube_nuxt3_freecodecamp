export default defineNuxtRouteMiddleware((to, from) => {
  console.log('hello from middleware');
  // const isLoggedIn = false;
  // console.log(to);
  // if (isLoggedIn) {
  //   return navigateTo(to.fullPath);
  // }

  // return navigateTo('/login');
});
