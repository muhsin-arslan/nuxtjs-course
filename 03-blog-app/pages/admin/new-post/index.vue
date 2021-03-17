<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <AdminPostForm @submit="onSubmitted" />
    </section>
  </div>
</template>

<script>
import AdminPostForm from "@/components/admin/AdminPostForm.vue";

export default {
  layout: "admin",
  components: {
    AdminPostForm,
  },
  methods: {
    onSubmitted(formData) {
      this.$store.dispatch("createPost", formData);
    },
  },
};
</script>
