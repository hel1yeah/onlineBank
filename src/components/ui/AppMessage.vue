<template>
  <div v-if="message" :class="['alert', message.type]">
    <p class="alert-title" v-if="title">{{ title }}</p>
    <p>{{ message.value }}</p>
    <span class="alert-close" @click="closeMessage">&times;</span>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    const TITLE_MAP = {
      primary: 'Success',
      danger: 'Error',
      warning: 'Warning',
    };
    const message = computed(() => store.getters.getMessage);
    const title = computed(() =>
      message.value ? TITLE_MAP[message.value.type] : null
    );

    function closeMessage() {
      store.getters.clearMessage;
    }

    return { message, title, closeMessage };
  },
};
</script>

<style lang="scss" scoped></style>
