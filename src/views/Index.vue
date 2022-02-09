<template>
  <div>
    <h1>{{ textForMainPage }}</h1>
    <nav>
      <router-link to="/login">Login</router-link> |
      <router-link to="/register">Register</router-link> |
      <router-link to="/restore-password">RestorePassword</router-link> |
      <router-link to="/change-password">ChangePassword</router-link>
    </nav>
  </div>
</template>

<script>


export default {
  data: () => ({
    textForMainPage: null,
  }),
  mounted() {
    this.textForMainPage = this.$store.getters.getTextForMainPage;
  },
}
</script>

<style lang="scss">
nav {
  margin-top: 10px;
  
  a {
    text-decoration: none;
    color: green;
  }
}
</style>