<template>
  <section class="post-list">
    <PostPreview
      id="1"
      thumbnail="https://www.pexels.com/photo/flight-sky-bird-blue-10631001/"
      title="Cute Lovebird"
      previewText="Manguito's Friends"
    />
    <PostPreview
      id="2"
      thumbnail="https://www.pexels.com/photo/flight-sky-bird-blue-10631001/"
      title="Cute Lovebird"
      previewText="Manguito's Friends"
    />
    <PostPreview
      id="3"
      thumbnail="https://www.pexels.com/photo/flight-sky-bird-blue-10631001/"
      title="Cute Lovebird"
      previewText="Manguito's Friends"
    />
  </section>
</template>

<script>
import PostPreview from "@/components/Posts/PostPreview.vue";
export default {
  name: "IndexPage",
  components: {
    PostPreview,
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
