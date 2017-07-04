"use strict";

import main from './css/main.css'
import Vue from 'vue';
import App from './App.vue';
import App2 from './App2.vue'
import Vuex from 'vuex';
import state from './store/state';
import mutations from './store/mutations';
import getters from './store/getters';
Vue.use(Vuex) // 注册到每一个组件当中

const store = new Vuex.Store({
    state,
    mutations,
    getters
})

new Vue({
    el : '#app',
    store,
    render : function(h){
        return h(App2);
    }
})