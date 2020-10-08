import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        shopList: []
    },
    getters: {

    },
    mutations: {
        init(state, payload) {
            state.shopList = payload
        },
        add(state, payload) {
            for (let i = 0; i < state.shopList.length; i++) {
                if (state.shopList[i].name == payload.name) {
                    state.shopList[i].count++;
                    return;
                }
            }
        },
    },
    actions: {

    },

})
export default store