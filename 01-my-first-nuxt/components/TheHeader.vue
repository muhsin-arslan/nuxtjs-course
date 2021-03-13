<template>
  <header>
    <ul class="nav-items">
      <li><nuxt-link to="/">Homepage</nuxt-link></li>
      <li><nuxt-link to="/users">Users</nuxt-link></li>
    </ul>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  background-color: #333333;
}
.nav-items {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80%;
}
.nav-items a {
  text-decoration: none;
  color: #ffffff;
}
</style>