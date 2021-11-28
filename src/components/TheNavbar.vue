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
        <a href="#">exit</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style>
.navbar-menu__item-link {
  text-transform: uppercase;
}
</style>
