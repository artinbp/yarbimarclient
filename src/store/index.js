import { createStore } from 'vuex';
import axios from '@/axios';
import products from '@/store/products';
import address from '@/store/address';
import banners from '@/store/banners';
import wishList from '@/store/wishList';
import cart from '@/store/cart';
import filter from '@/store/filter';
import orders from '@/store/orders';

export default createStore({
    state: {
        token: '',
        category:'',
        subCategory:'',
        user: {  },
    },
    getters: {
        getToken: (state) => state.token,
        getUser: (state) => state.user,
        getCategory: (state) => state.category,
        getSubCategory: (state) => state.subCategory
    },
    mutations: {
        setToken: (state, payload) => {
            state.token = payload
        },
        setUser: (state, payload) => {
            state.user = payload
        },
        setCategory: (state, payload) => {
            state.category = payload
        },
        setSubCategory: (state, payload) => {
            state.subCategory = payload
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
        },
        generateRegister: async ({ commit }, payload) => {
            await axios.post('/auth/register', payload, {
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
        },
        generateCategory: async ({ commit }) => {
            await axios.get('/categories', {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Credentials': true,
                    'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type',
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then((res) => {
                commit('setCategory', res.data)
            }).catch((error) => {
                console.log(error)
            })
        },
        generateUserInfo: ({ commit }) => {
            const token = sessionStorage.getItem('token')
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
            axios.get('/auth/user', {
                header: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Credentials': true,
                    'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type',
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            }).then((res) => {
                console.log(res)
                commit('setUser', res.data)

            }).catch((error) => {
                console.log(error.response.data.message)
                if (error.response.data.message === 'unauthenticated'){
                    // sessionStorage.removeItem('token')
                }
                // commit('setUserError',{
                //     title: error.message,
                //     code: error.status,
                //     desc: error.response.data.message,
                //     type: 'error',
                //     status: true
                // })
            })
        },
        generateLogOut: ({ getters }) => {
            const token = sessionStorage.getItem('token')
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
            axios.get('/auth/logout', {
                header: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Credentials': true,
                    'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type',
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            }).then((res) => {
                console.log(res, getters)
                sessionStorage.removeItem('token')
            }).catch((error) => {
                console.log(error.response.data.message)
                if (error.response.data.message === 'unauthenticated'){
                    // sessionStorage.removeItem('token')
                }
            })
        }
    },
    modules: {products,address,banners,wishList,cart,filter,orders}


})
