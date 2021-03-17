import Vuex from "vuex";
import axios from "axios";

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
      loadedPost: null,
    },
    mutations: {
      setPosts(state, payload) {
        state.loadedPosts = payload;
      },
      setPost(state, payload) {
        state.loadedPost = payload;
      },
      createPost(state, payload) {
        state.loadedPosts = [...state.loadedPosts, payload];
      },
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return axios
          .get(
            "https://nuxt-blog-ae3db-default-rtdb.europe-west1.firebasedatabase.app/posts.json"
          )
          .then((response) => {
            const posts = [];
            for (const key in response.data) {
              posts.push({ ...response.data[key], id: key });
            }
            vuexContext.commit("setPosts", posts);
          })
          .catch((error) => console.log(error));
      },
      setPosts(context, payload) {
        context.commit("setPosts", payload);
      },
      setPost(vuexContext, payload) {
        axios
          .get(
            `https://nuxt-blog-ae3db-default-rtdb.europe-west1.firebasedatabase.app/posts/${payload}.json`
          )
          .then((response) => {
            const post = { ...response.data };
            vuexContext.commit("setPost", post);
          })
          .catch((error) => console.log(error));
      },
      createPost(context, payload) {
        axios
          .post(
            "https://nuxt-blog-ae3db-default-rtdb.europe-west1.firebasedatabase.app/posts.json",
            payload
          )
          .then((result) => {
            console.log(result);
            context.commit("createPost", payload);
          })
          .catch((error) => console.log(error));
      },
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      },
      loadedPost(state) {
        return state.loadedPost;
      },
    },
  });
};

export default createStore;
