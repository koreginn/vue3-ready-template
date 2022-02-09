<template>
  <main>
    <router-view />
    <ScalableVectorGraphics />
  </main>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  components: {
    ScalableVectorGraphics: defineAsyncComponent(() => import('@/components/atoms/ScalableVectorGraphics.vue'))
  },
};
</script>