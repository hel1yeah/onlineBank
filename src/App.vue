<template>
  <component :is="layout + '-layout'" v-if="layout"></component>
</template>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import MainLayout from './layout/MainLayout.vue';
import AuthLayout from './layout/AuthLayout.vue';

export default {
  components: {
    MainLayout,
    AuthLayout,
  },
  setup() {
    const route = useRoute();
    return {
      layout: computed(() => route.meta.layout),
    };
  },
};
</script>

<style lang="scss" scoped></style>
