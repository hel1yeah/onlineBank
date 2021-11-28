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
import { computed, watch } from 'vue';
import { useField, useForm } from 'vee-validate';
import * as yup from 'yup';

export default {
  setup() {
    const { handleSubmit, isSubmitting, submitCount } = useForm();
    const { value: email, errorMessage: eError, handleBlur: eBlur } = useField(
      'email',
      yup
        .string()
        .trim()
        .required('email is required')
        .email('incorrect email')
        .min(3)
    );

    const isManyLoginAttempts = computed(() => submitCount.value >= 3);

    watch(isManyLoginAttempts, (val) => {
      if (val) {
        setTimeout(() => (submitCount.value = 0), 1500);
      }
    });

    const {
      value: password,
      errorMessage: pError,
      handleBlur: pBlur,
    } = useField(
      'password',
      yup
        .string()
        .trim()
        .required('password is required')
        .min(6, 'minimum password length 6 letters')
    );

    const onSubmit = handleSubmit((values) => {
      console.log(form);
    });

    return {
      email,
      password,
      eError,
      pError,
      eBlur,
      pBlur,

      onSubmit,
      isSubmitting,
      isManyLoginAttempts,
    };
  },
};
</script>

<style lang="scss" scoped></style>
