import Vue from 'vue'
import Vuex, { createNamespacedHelpers } from 'vuex'

import user from './user'
import words from './words'
import rules from './rules'
import game from './game'
import ranking from './ranking'
import sounds from './sounds'
import settings from './settings'
import profile from './profile'
import snackbar from './snackbar'
import hand from './hand'
import battle from './battle'
import background from './background'
import rewards from './rewards'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    background,
    user,
    game,
    words,
    rules,
    ranking,
    sounds,
    snackbar,
    hand,
    battle,
    settings,
    profile,
    rewards
  }
})

