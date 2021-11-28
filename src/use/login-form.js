import { computed, watch } from 'vue';
import { useField, useForm } from 'vee-validate';
import * as yup from 'yup';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export function useLoginForm() {
  const store = useStore();
  const router = useRouter();
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
      setTimeout(() => (submitCount.value = 0), 300000);
    }
  });

  const { value: password, errorMessage: pError, handleBlur: pBlur } = useField(
    'password',
    yup
      .string()
      .trim()
      .required('password is required')
      .min(6, 'minimum password length 6 letters')
  );

  const onSubmit = handleSubmit(async (values) => {
    await store.dispatch('auth/onLogin', values);
    router.push('/');
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
}
