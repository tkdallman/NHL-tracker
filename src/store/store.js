/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'

const axios = require('axios').default;

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loading: true,
    schedule: {},
    games: [],
  },
  mutations: {
    UPDATE_SCHEDULE (state, schedule) { state.schedule = schedule },
    UPDATE_GAMES (state, game) { state.games.push(game) },
    SET_LOADING (state, loading) { state.loading = loading },
  },
  getters: {
    getSchedule: state => state.schedule,
    getLoading: state => state.loading,
    getGame: state => gameId => {
      const game =  state.games.find(game => game.gameId === gameId);
      if (!game) return false;
      return game;
    },
  },
  actions: {
    getSchedule(context) {
      context.commit('SET_LOADING', true);
      axios.get('https://statsapi.web.nhl.com/api/v1/schedule').then(res => {
        context.commit('UPDATE_SCHEDULE', res.data.dates[0].games);
      });
      context.commit('SET_LOADING', false);
    },
    getGame(context, gameId) {
      axios.get(`https://statsapi.web.nhl.com/api/v1/game/${gameId}/feed/live`).then(res => {
        context.commit('UPDATE_GAMES', { ...res.data, gameId });
      });
    },
  }
});