import * as types from "../types";

const state = {
  counter: 0
};
const getters = {
  [types.DOUBLE_COUNTER]: state => {
    return state.counter * 2;
  },
  [types.CLICK_COUNTER]: state => {
    return state.counter + " Clicks";
  }
};
const mutations = {
  increment: (state, payload) => {
    console.log("payload " + payload);
    state.counter += payload;
  },
  decrement: (state, payload) => {
    state.counter -= payload;
  }
};
const actions = {
  increment: ({ commit }, payload) => {
    commit("increment", payload);
  },
  decrement: (context, payload) => {
    context.commit("decrement", payload);
  },
  asyncIncrement: (context, payload) => {
    setTimeout(() => {
      context.commit("increment", payload.by);
    }, payload.duration);
  },
  asyncDecrement: (context, payload) => {
    setTimeout(() => {
      context.commit("decrement", payload.by);
    }, payload.duration);
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
