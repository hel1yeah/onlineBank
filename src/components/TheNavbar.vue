<template>
  <div class="navbar">
    <h3>Online Bank</h3>
    <ul class="navbar-menu">
      <li class="navbar-menu__item">
        <router-link to="/" class="navbar-menu__item-link"
          >applications</router-link
        >
      </li>
      <li class="navbar-menu__item">
        <router-link to="/">help</router-link>
      </li>
      <li class="navbar-menu__item">
        <a href="#">messages</a>
      </li>
      <li class="navbar-menu__item">
        <a href="#" @click.prevent="onLogout">exit</a>
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
  text-transform: uppercase;
}
</style>
