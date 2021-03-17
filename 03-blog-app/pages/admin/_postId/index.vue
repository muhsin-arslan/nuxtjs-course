<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" />
    </section>
  </div>
</template>

<script>
import AdminPostForm from "@/components/admin/AdminPostForm.vue";
export default {
  layout: "admin",
  components: { AdminPostForm },
  data() {
    return {
      loadedPost: {
        author: "Muhsin",
        title: "My Awesome Post",
        content: "This is just content.",
        thumbnail:
          "https://images.unsplash.com/photo-1612831200091-c08595b18e6b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80",
      },
    };
  },
};
</script>
