<template>
  <div class="post-page">
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
import PostList from "@/components/Posts/PostList.vue";
export default {
  name: "Blog",
  components: {
    PostList,
  },
  asyncData(context) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          loadedPosts: [
            {
              id: "1",
              title: "First Lovebird",
              previewText: "This is our first post!",
              thumbnail:
                "https://images.pexels.com/photos/10631001/pexels-photo-10631001.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            },
            {
              id: "2",
              title: "Second Lovebird",
              previewText: "This is our first post!",
              thumbnail:
                "https://images.pexels.com/photos/10631001/pexels-photo-10631001.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            },
          ],
        });
      }, 1500);
    })
      .then((data) => {
        return data;
      })
      .catch((e) => {
        context.error(new Error());
      });
  },
};
</script>

<style scoped>
.post-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
