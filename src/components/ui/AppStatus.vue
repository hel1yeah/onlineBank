<template>
  <span :class="['badge', className]">{{ type }}</span>
</template>

<script>
import { ref } from 'vue';

export default {
  props: {
    type: {
      type: String,
      required: true,
      validator(value) {
        return ['active', 'cancelled', 'done', 'pending'].includes(value);
      },
    },
  },
  setup(props) {
    const classesMap = {
      active: 'primary',
      cancelled: 'danger',
      done: 'primary',
      pending: 'warning',
    };

    const className = ref(classesMap[props.type]);

    return {
      className,
    };
  },
};
</script>

<style lang="scss" scoped></style>
