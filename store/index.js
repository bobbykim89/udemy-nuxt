import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts;
      },
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            vuexContext.commit("setPosts", [
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
            ]);
            resolve();
          }, 1500);
        })
          .then((data) => {
            context.store.commit("setPosts", data.loadedPosts);
          })
          .catch((e) => {
            context.error(new Error(e));
          });
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit("setPosts", posts);
      },
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      },
    },
  });
};

export default createStore;
