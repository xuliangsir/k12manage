/**
 * Created by HarryLee on 2017/5/23.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {

  // tigerApi:process.env.NODE_ENV === 'build' ? 'http://q.socap1.com:60405' : 'http://10.16.40.94:60405'
};

let store = new Vuex.Store({
  state
});

export default store

