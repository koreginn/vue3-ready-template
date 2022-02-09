<template>
  <component :is="layout" />
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  components: {
    DefaultLayout: defineAsyncComponent(() => import('@/layouts/DefaultLayout.vue')),
    LoginLayout: defineAsyncComponent(() => import('@/layouts/LoginLayout.vue')),
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || "login") + "-layout";
    },
  },
};
</script>

<style lang="scss">
@import "./assets/styles/style.scss";
</style>