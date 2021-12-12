<template>
  <div class="navbar">
    <h3>Online Bank</h3>
    <ul class="navbar-menu">
      <li class="navbar-menu__item">
        <router-link to="/" class="navbar-menu__item-link"
          >Applications</router-link
        >
      </li>
      <li class="navbar-menu__item">
        <router-link to="/help">Help</router-link>
      </li>
      <li class="navbar-menu__item">
        <router-link :to="{ name: 'Messages' }">Messages</router-link>
      </li>
      <li class="navbar-menu__item">
        <a href="#" @click.prevent="onLogout">Exit</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

export default {
  setup() {
    const router = useRouter();
    const store = useStore();
    const onLogout = () => {
      router.push('/auth');
      store.dispatch('auth/onLogout');
    };
    return { onLogout };
  },
};
</script>

<style>
.navbar-menu__item-link {
  /* text-transform: uppercase; */
}

.navbar-menu__item-link::first-letter {
  text-transform: uppercase;
}
</style>
