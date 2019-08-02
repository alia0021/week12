import Vue from "vue";
import Vuex from "vuex";
import axiosAuth from "./axios-auth";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null,
    error: ""
    // saves the authentication
  },
  mutations: {
    AUTH_USER(state, userData) {
      state.idToken = userData.token;
      state.userId = userData.userId;
    }
  },
  actions: {
    signUp({ commit }, authData) {
      axiosAuth
        .post("accounts:signUp?key=AIzaSyCCH7id-AA19GQq5SCIrp_4nKqDOrPEYiQ", {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        })
        .then(res => {
          console.log(res);
          commit("AUTH_USER", {
            token: res.data.idToken,
            userId: res.data.localId
          });
        })
        .catch(error => {
          if (error.response) {
            console.log(error.response.data.error.message);
          }
        });
    },
    signIn({ commit }, authData) {
      axiosAuth
        .post(
          "accounts:signInWithPassword?key=AIzaSyCCH7id-AA19GQq5SCIrp_4nKqDOrPEYiQ",
          {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true
          }
        )
        .then(res => {
          console.log(res);
          commit("AUTH_USER", {
            token: res.data.idToken,
            userId: res.data.localId
          });
        })
        .catch(error => {
          if (error.response) {
            console.log(error.response.data.error.message);
          }
        });
    }
  }
});
//AIzaSyCCH7id-AA19GQq5SCIrp_4nKqDOrPEYiQ
