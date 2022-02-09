import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

//Vuex modules
import data from "./data";

const store = createStore({
  modules: {
    data
  },
  plugins: [createPersistedState()]
});

export default store;