import axios from 'axios';


const cart = {
    state: {
        cart: [],
        cartProduct: [],
        cartTotal: 0
    },
    getters: {
        getCart: (state) => state.cart,
        getCartProduct: (state) => state.cartProduct,
        getCartTotal: (state) => state.cartTotal
    },
    mutations: {
        setCart: (state, data) => {
            state.cart = data
        },
        setCartProduct: (state, data) => {
            state.cartProduct = data
        },
        addCartProduct: (state, data) => {
            state.cartProduct.push(data)
        },
        setCartTotal: (state, data) => {
            state.cartTotal = data
        },
        addCartTotal: (state, data) => {
            state.cartTotal += data
        },
    },
    actions: {
        generateCart: async ({ commit }) => {
            const token = sessionStorage.getItem('token')
            commit('setCartProduct', [])
            commit('setCartTotal', 0)
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token ?? sessionStorage.getItem('token');
            const config = {
                header: {
                    header: {
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Credentials': true,
                        'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE, OPTIONS',
                        'Access-Control-Allow-Headers': 'Content-Type',
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    }
                }
            }
            await axios.get('cart/', config).then(async (res) => {
                await commit('setCart', res.data)
            }).catch((error) => {
                console.log(error)
            })

        },
        generateCartProducts: async ({ commit }, { data,count }) => {
            const token = sessionStorage.getItem('token')
            commit('setCartProduct', [])
            commit('setCartTotal', 0)
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token ?? sessionStorage.getItem('token');
            const config = {
                header: {
                    header: {
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Credentials': true,
                        'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE, OPTIONS',
                        'Access-Control-Allow-Headers': 'Content-Type',
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    }
                }
            }
            await axios.get('products/' + data, config).then((res) => {
                commit('addCartProduct', res.data)
                commit('addCartTotal', parseInt(res.data.price*count))
            }).catch((e) => console.log(e))

        },


        appendCart: async ({ getters }, payload) => {
            const token = sessionStorage.getItem('token')
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token ?? sessionStorage.getItem('token');
            const config = {
                header: {
                    header: {
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Credentials': true,
                        'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE, OPTIONS',
                        'Access-Control-Allow-Headers': 'Content-Type',
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    }
                }
            }
            await axios.post('cart/add', payload, config).then((res) => {
                console.log(res.data, getters)
            }).catch((error) => {
                console.log(error)
            })
        },
        removeCart: async ({ getters }, payload) => {
            const token = sessionStorage.getItem('token')
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token ?? sessionStorage.getItem('token');
            const config = {
                header: {
                    header: {
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Credentials': true,
                        'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE, OPTIONS',
                        'Access-Control-Allow-Headers': 'Content-Type',
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    }
                }
            }
            await axios.post('cart/remove', payload, config).then((res) => {
                console.log(res.data, getters)
            }).catch((error) => {
                console.log(error)
            })
        },
    }
}

export default cart
