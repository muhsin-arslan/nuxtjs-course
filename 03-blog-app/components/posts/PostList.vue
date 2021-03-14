<template>
  <section class="post-list">
    <PostPreview
      id="1"
      :is-admin="isAdmin"
      title="Blog Post 01"
      previewText="This is preview text..."
      thumbnail="https://images.unsplash.com/photo-1612831200091-c08595b18e6b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80"
    />
    <PostPreview
      id="2"
      :is-admin="isAdmin"
      title="Blog Post 02"
      previewText="This is preview text..."
      thumbnail="https://images.unsplash.com/photo-1615628362327-5f35b8adca5e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    />
    <PostPreview
      id="3"
      :is-admin="isAdmin"
      title="Blog Post 03"
      previewText="This is preview text..."
      thumbnail="https://images.unsplash.com/photo-1615561916422-7014e1078997?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    />
  </section>
</template>

<script>
import PostPreview from "@/components/posts/PostPreview.vue";
export default {
  components: {
    PostPreview,
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>