<template>
  <div>
    <h1>This is users page</h1>
    <input type="text" v-model="userId" />
    <button @click="onLoadUser">Hey</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userId: "",
    };
  },
  methods: {
    onLoadUser() {
      this.$router.push(`/users/${this.userId}`);
    },
  },
};
</script>