<template>
  <form class="card" @submit.prevent>
    <h1>Come in system</h1>

    <div class="form-control">
      <label class="form-control__label">
        <input class="form-control__input-email" type="email" />
      </label>

      <label class="form-control__label">
        <input class="form-control__input-email" type="password" />
      </label>
    </div>

    <button class="btn primary">Come in</button>
  </form>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
