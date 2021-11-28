<template>
  <form class="card" @submit.prevent="onSubmit">
    <h1>Come in system</h1>

    <div :class="['form-control', { invalid: eError }]">
      <label class="form-control__label">
        <h3>
          Email
        </h3>
        <input
          v-model="email"
          class="form-control__input-email"
          type="email"
          @blur="eBlur"
        />
      </label>
      <small v-if="eError">{{ eError }}</small>
    </div>

    <div class="form-control" :class="{ invalid: pError }">
      <label class="form-control__label">
        <h3>Password</h3>
        <input
          v-model="password"
          class="form-control__input-password"
          type="password"
          @blur="eBlur"
        />
      </label>
      <small v-if="pError">{{ pError }}</small>
    </div>
    <button
      class="btn primary"
      type="submit"
      :disabled="isSubmitting || isManyLoginAttempts"
    >
      Come in
    </button>
    <br />
    <span class="text-denger" v-if="isManyLoginAttempts">
      many Login Attempts
    </span>
  </form>
</template>

<script>
import { useLoginForm } from './../use/login-form.js';

export default {
  setup() {
    return { ...useLoginForm() };
  },
};
</script>

<style lang="scss" scoped></style>
