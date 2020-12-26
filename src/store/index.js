import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    albums: [],
    images: [],
  },
  mutations: {
    stateAlbums(state, data) {
      state.albums = data;
    },
    stateImg(state, img) {
      state.albums = img;
    },
  },
  actions: {
    async getAlbums({ commit }) {
      await fetch("https://jsonplaceholder.typicode.com/albums")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          commit("setAlbums", data);
        })
        .catch((err) => console.log(err));
    },

    async getImage({ commit }) {
      await fetch("https://picsum.photos/v2/list")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          commit("stateImg", data);
        })
        .catch((err) => console.log(err));
    },
  },
  modules: {},
  getters: {
    getterAlbums: (state) => {
      return state.albums;
    },
    getterImg: (state) => state.images,
  },
});
