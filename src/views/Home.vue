<template>
  <app-loader v-if="loading"></app-loader>
  <app-page v-else title="Application list">
    <template #header>
      <button class="btn primary" @click="openModal">Created</button>
    </template>
    <request-table :requests="requests"></request-table>

    <teleport to="body">
      <app-modal v-if="modal" title="Created request" @closeModal="closeModal">
        <request-modal @created="closeModal"></request-modal>
      </app-modal>
    </teleport>
  </app-page>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import AppPage from './../components/ui/AppPage.vue';
import AppLoader from './../components/ui/AppLoader.vue';
import RequestTable from './../components/request/RequestTable.vue';
import RequestModal from './../components/request/RequestModal.vue';
import AppModal from './../components/ui/AppModal.vue';

export default {
  components: {
    AppPage,
    RequestTable,
    RequestModal,
    AppModal,
    AppLoader,
  },
  setup() {
    const store = useStore();
    const modal = ref(false);
    const loading = ref(false);

    const openModal = () => (modal.value = true);
    const closeModal = () => (modal.value = false);

    onMounted(async () => {
      loading.value = true;
      await store.dispatch('request/onLoad');
      loading.value = false;
    });

    const requests = computed(() => store.getters['request/requests']);

    return {
      modal,
      requests,
      openModal,
      closeModal,
      loading,
    };
  },
};
</script>
