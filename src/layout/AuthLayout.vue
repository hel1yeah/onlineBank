<template>
  <div class="container">
    <app-message></app-message>
    <router-view></router-view>
  </div>
</template>

<script>
import AppMessage from '../components/ui/AppMessage.vue';
export default {
  components: {
    AppMessage,
  },

  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
