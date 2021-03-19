import Vuex from "vuex";
import axios from "axios";
import Cookie from "js-cookie";

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
      loadedPost: null,
      token: null,
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
      setToken(state, payload) {
        state.token = payload;
      },
      clearToken(state) {
        state.token = null;
      },
    },

    actions: {
      nuxtServerInit(vuexContext) {
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
      setPosts(vuexContent, payload) {
        vuexContent.commit("setPosts", payload);
      },
      setPost(vuexContext, payload) {
        return axios
          .get(
            `https://nuxt-blog-ae3db-default-rtdb.europe-west1.firebasedatabase.app/posts/${payload}.json`
          )
          .then((response) => {
            const post = { ...response.data };
            vuexContext.commit("setPost", post);
          })
          .catch((error) => console.log(error));
      },
      createPost(vuexContext, payload) {
        const token = vuexContext.state.token;
        axios
          .post(
            `https://nuxt-blog-ae3db-default-rtdb.europe-west1.firebasedatabase.app/posts.json?auth=${token}`,
            payload
          )
          .then((result) => {
            console.log(result);
            vuexContext.commit("createPost", payload);
          })
          .catch((error) => console.log(error));
      },
      authenticateUser: function (vuexContext, payload) {
        const authUrl = payload.isLogin
          ? "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="
          : "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";

        return this.$axios
          .$post(`${authUrl}${process.env.firebaseApiKey}`, {
            email: payload.email,
            password: payload.password,
            returnSecureToken: true,
          })
          .then((result) => {
            vuexContext.commit("setToken", result.idToken);

            localStorage.setItem("token", result.idToken);
            localStorage.setItem(
              "tokenExpiration",
              new Date().getTime() + result.expiresIn * 1000
            );

            Cookie.set("jwt", result.idToken);
            Cookie.set(
              "expirationDate",
              new Date().getTime() + result.expiresIn * 1000
            );

            vuexContext.dispatch("setLogoutTimer", +result.expiresIn * 1000);
          })
          .catch((error) => console.log(error));
      },
      setLogoutTimer(vuexContext, duration) {
        setTimeout(() => {
          vuexContext.commit("clearToken");
        }, duration);
      },
      initAuth(vuexContext, request) {
        let token, expirationDate;

        if (request) {
          if (!request.header.cookie) {
            return;
          }
          const jwtCookie = request.header.cookie
            .split(";")
            .find((c) => c.trim().startsWith("jwt="));

          if (!jwtCookie) return;

          token = jwtCookie.split("=")[1];

          expirationDate = request.header.cookie
            .split(";")
            .find((c) => c.trim().startsWith("expirationDate="))
            .split("=")[1];
        } else {
          const token = localStorage.getItem("token");
          const expirationDate = localStorage.getItem("tokenExpiration");
        }

        if (new Date().getTime() > +expirationDate || !token) return;

        vuexContext.dispatch(
          "setLogoutTimer",
          +expirationDate - new Date().getTime()
        );
        vuexContext.commit("setToken", token);
      },
    },

    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      },
      loadedPost(state) {
        return state.loadedPost;
      },
      isAuthenticated(state) {
        return state.token != null;
      },
    },
  });
};

export default createStore;
