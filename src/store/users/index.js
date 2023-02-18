import axios from 'axios';
import dataSite  from '@/config'
const token = sessionStorage.getItem('token')
const users = {
    state: {
        userInfo: {
            id:null,
            name:"",
            username:"",
            email:"",
            number:"",
            lang:"",
            date_of_create:"",
            date_of_join:"",
            password:"",
            status:"",
            token:""

        },
        token: ''
    },
    getters: {
        getUserInfo: (state) => {
            return state.userInfo
        },
        getUserToken: (state) => {
            return state.token
        }
    },
    mutations: {
        setUserInfo: (state, data) => {
            state.userInfo = data
        },
        setUserToken: (state, data) => {
            state.token = data
        }
    },
    actions: {
        generateUserLogin: ({ commit }, data) => {

            const payload = {
                email: data.username,
                password: data.password
            }
            axios.post(dataSite.requestUrl + '/auth/login', payload, {
                header: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Credentials': true,
                    'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type'
                }
            }).then((res) => {
                console.log(res)
                commit('setUserToken', res.data.token)
                sessionStorage.setItem('token',res.data.token)
            }).catch((error) => {
                console.log(error)
            })
        },
        generateUserInfo: ({ commit }) => {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
            axios.get(dataSite.requestUrl + '/auth/login', {
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
                commit('setUserInfo', res.data.userInfo)

            }).catch((error) => {
                console.log(error)
            })
        }
    },
    modules: {}

}
export default users
