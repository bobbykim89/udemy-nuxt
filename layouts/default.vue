<template>
  <div>
    <Header />
    <Nuxt />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  components: {
    Header,
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
