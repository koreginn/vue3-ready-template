export default {
  state: {
    textForMainPage: 'Welcome to the main page!'
  },
  getters: {
    getTextForMainPage(state) {
      return state.textForMainPage;
    }
  },
  mutations: {}
};