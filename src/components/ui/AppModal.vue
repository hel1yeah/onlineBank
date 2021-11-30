<template>
  <div class="modal-backdrop" @click="closeModal"></div>
  <div class="modal">
    <h3 v-if="title">{{ title }}</h3>

    <slot />
  </div>
</template>

<script>
export default {
  emits: ['closeModal'],
  props: {
    title: {
      type: String,
      required: false,
    },
  },
  setup(props, context) {
    function closeModal() {
      context.emit('closeModal');
    }
    return {
      closeModal,
    };
  },
};
</script>

<style lang="scss" scoped></style>
