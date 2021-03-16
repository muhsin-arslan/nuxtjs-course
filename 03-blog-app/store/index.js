import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
    },
    mutations: {
      setPosts(state, payload) {
        state.loadedPosts = payload;
      },
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            vuexContext.commit("setPosts", [
              {
                id: 1,
                title: "Awesome Blog Post",
                previewText: "Perfect description short text.",
                thumbnail:
                  "https://live.staticflickr.com/2912/13981352255_fc59cfdba2_b.jpg",
              },
              {
                id: 2,
                title: "Another Blog Post",
                previewText: "Ordinary description short text.",
                thumbnail:
                  "https://live.staticflickr.com/2912/13981352255_fc59cfdba2_b.jpg",
              },
            ]);
            resolve();
          }, 1000);
        });
      },
      setPosts(context, payload) {
        context.commit("setPosts", payload);
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
