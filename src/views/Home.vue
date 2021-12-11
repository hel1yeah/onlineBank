<template>
  <app-page title="Application list">
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
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import AppPage from './../components/ui/AppPage.vue';
import RequestTable from './../components/request/RequestTable.vue';
import RequestModal from './../components/request/RequestModal.vue';
import AppModal from './../components/ui/AppModal.vue';

export default {
  components: { AppPage, RequestTable, RequestModal, AppModal },
  setup() {
    const store = useStore();
    const modal = ref(false);

    const openModal = () => (modal.value = true);
    const closeModal = () => (modal.value = false);

    const requests = computed(() => store.getters['request/setRequest']);

    return {
      modal,
      requests,
      openModal,
      closeModal,
    };
  },
};
</script>
