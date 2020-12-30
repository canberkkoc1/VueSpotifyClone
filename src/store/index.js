// import Vue from "vue";
// import Vuex from "vuex";

// Vue.use(Vuex);

// export default new Vuex.Store({
//   state: {
//     images: [],
//   },
//   mutations: {
//     stateImg(state, img) {
//       state.images = img;
//     },
//   },
//   actions: {
//     async getImg({ commit }) {
//       await fetch("https://picsum.photos/v2/list")
//         .then((res) => res.json())
//         .then((data) => {
//           commit("stateImg", data);
//           console.log(data);
//         });
//     },
//   },
//   getters: {
//     getterAlbums: (state) => {
//       return state.albums;
//     },
//     getterImg: (state) => {
//       state.images;
//       console.log(state.images);
//     },
//   },
//   modules: {},
// });
