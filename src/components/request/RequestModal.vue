<template>
  <form @submit.prevent="onSubmit">
    <div class="form-control" :class="{ invalid: fError }">
      <label>
        Full name
        <input type="text" v-model="fullName" @blur="fBlur" />
      </label>
      <small v-if="fError">{{ fError }}</small>
    </div>

    <div class="form-control" :class="{ invalid: pError }">
      <label>
        Phone
        <input type="text" v-model="phone" @blur="pBlur" />
      </label>
      <small v-if="fError">{{ pError }}</small>
    </div>

    <div class="form-control" :class="{ invalid: sError }">
      <label>
        Sum
        <input type="number" v-model="sum" @blur="sBlur" />
        <small v-if="sError">{{ sError }}</small>
      </label>
    </div>

    <div class="form-control">
      <label for="status"> Status</label>
      <select id="status">
        <option value="done">Finished</option>
        <option value="cancelled">Canceled</option>
        <option value="active">Active</option>
        <option value="Pending">Pending</option>
      </select>
    </div>

    <button class="btn primary" :disabled="isSubmitting">Created</button>
  </form>
</template>

<script>
import useRequestForm from './../../use/request-form';

export default {
  setup() {
    return {
      ...useRequestForm(),
    };
  },
};
</script>

<style lang="scss" scoped></style>
