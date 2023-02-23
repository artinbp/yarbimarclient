import { createStore } from 'vuex';
import axios from '@/axios';
import products from '@/store/products';

export default createStore({
    state: {
        token: ''
    },
    getters: {
        getToken: (state) => state.token
    },
    mutations: {
        setToken: (state, payload) => {
            state.token = payload
        }
    },
    actions: {
        generateLogin: async ({ commit }, payload) => {
            await axios.post('/auth/login', payload, {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Credentials': true,
                    'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type',
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then((res) => {
                commit('setToken', res.data.token)
                sessionStorage.setItem('token',res.data.token)
            }).catch((error) => {
                console.log(error)
            })
        }
    },
    modules: {products}


})
