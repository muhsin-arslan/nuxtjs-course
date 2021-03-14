<template>
  <div>
    <TheHeader @sidenavToggle="displaySidenav = !displaySidenav" />
    <TheSidenav :show="displaySidenav" @close="displaySidenav = false" />
    <Nuxt />
  </div>
</template>

<script>
import TheHeader from "@/components/navigation/TheHeader.vue";
import TheSidenav from "@/components/navigation/TheSidenav.vue";

export default {
  data() {
    return {
      displaySidenav: false,
    };
  },
  components: {
    TheHeader,
    TheSidenav,
  },
};
</script>

<style>
html {
  font-family: "Open Sans", sans-serif;
}
body {
  margin: 0;
}
</style>
