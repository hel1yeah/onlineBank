<template>
  <h4 v-if="requests.length === 0" class="text-center">No applications</h4>
  <table v-else class="table">
    <thead>
      <tr>
        <th>#</th>
        <th>Full name</th>
        <th>Telephone</th>
        <th>Amount</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in requests" :key="item.id">
        <td>{{ index + 1 }}</td>
        <td>{{ item.fullName }}</td>
        <td>{{ item.phone }}</td>
        <td>{{ currentcy(item.sum) }}</td>
        <!-- <td>{{ item.status }}</td> -->
        <td><app-status :type="item.status"></app-status></td>
        <td>
          <router-link
            v-slot="{ navigate }"
            custom
            :to="{ name: 'Request', params: { id: item.id } }"
          >
            <button @click="navigate" class="btn primary">Open</button>
          </router-link>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { currentcy } from './../../untils/currency.js';

import AppStatus from './../ui/AppStatus.vue';

export default {
  name: 'RequestTable',
  props: ['requests'],
  components: {
    AppStatus,
  },
  setup() {
    return { currentcy };
  },
};
</script>

<style lang="scss" scoped></style>
