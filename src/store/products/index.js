import axios from 'axios';
import dataSite from '@/config'

const token = sessionStorage.getItem('token')
const products = {
    state: {
        product: {},
        products: [],
    },
    getters: {
        getProduct: (state) => {
            return state.product
        },
        getProducts: (state) => {
            return state.products
        },

    },
    mutations: {
        setProduct: (state, data) => {
            state.product = data
        },
        setProducts: (state, data) => {
            state.products = data
        },

    },
    actions: {
        generateProducts: ({ commit }) => {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
            axios.get(dataSite.requestUrl + '/dashboard/products', {
                header: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Credentials': true,
                    'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type',
                    Authorization: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then((res) => {
                console.log(res)
                commit('setProducts', res.data.data)
            }).catch((error) => {
                console.log(error)
            })
        },
        generateProduct: ({ commit }, data) => {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
            axios.get(dataSite.requestUrl + '/dashboard/products/' + data, {
                header: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Credentials': true,
                    'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type',
                    Authorization: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then((res) => {
                console.log(res)
                commit('setProduct', res.data)
            }).catch((error) => {
                console.log(error)
            })
        }
    },
    modules: {}

}
export default products
