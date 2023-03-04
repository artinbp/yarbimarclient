import axios from 'axios';

const address = {
    state: {
        addresses: [],
        addressesUpdateTemp:{
            status:false,
            data:{}
        }
    },
    getters: {
        getAddress: (state) => {
            return state.addresses
        },
        getAddressesUpdateTemp: (state) => {
            return state.addressesUpdateTemp
        }
    },
    mutations: {
        setAddress: (state, data) => {
            state.addresses = data
        },
        setAddressUpdateTemp: (state, data) => {
            state.addressesUpdateTemp = data
        }
    },
    actions: {
        generateAddress: ({commit}) => {
            const token = sessionStorage.getItem('token')
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token??sessionStorage.getItem('token');
            const config = {
                header:{
                    header: {
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Credentials': true,
                        'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE, OPTIONS',
                        'Access-Control-Allow-Headers': 'Content-Type',
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                }
            }
            axios.get( 'profile/addresses/',config).then((res)=>{
                console.log(res.data.data);
                commit('setAddress',res.data?.data)
            }).catch((error)=>{
                commit('setUsersError',{
                    title: error.response.data.message,
                    desc: error.response.data.file,
                    type: 'error',
                    status: true
                })
            })
        },
        appendAddress: ({commit},payload) => {

            const token = sessionStorage.getItem('token')
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token??sessionStorage.getItem('token');
            const config = {
                header: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Credentials': true,
                    'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type',
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }
            axios.post( 'profile/addresses',payload, config).then((res) => {
                console.log(res)
            }).catch((error) => {
                commit('setUsersError',{
                    title: error.response.data.message,
                    desc: error.response.data.file,
                    type: 'error',
                    status: true
                })
                console.log(error)
            })
        },
        deleteAddress: ({commit}, data) => {
            console.log(data)
            const token = sessionStorage.getItem('token')
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token??sessionStorage.getItem('token');
            const config = {
                header:{
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
            axios.delete('profile/addresses/'  + data, config).then((res)=>{
                console.log(res.data.data);
                commit('setAddress',res.data?.data)
            }).catch((error)=>{
                commit('setUsersError',{
                    title: error.response.data.message,
                    desc: error.response.data.file,
                    type: 'error',
                    status: true
                })
            })
        },
        updateAddress: ({commit}, data) => {
            const token = sessionStorage.getItem('token')
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token??sessionStorage.getItem('token');
            const config = {
                header:{
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
            axios.patch('/dashboard/users/'+data.id+'/addresses/'+data.data.id, data.data.data,config).then((res)=>{
                console.log(res.data.data);
                commit('setAddressUpdateTemp', { status: false ,
                data:{}})
            }).catch((error)=>{
                commit('setUsersError',{
                    title: error.response.data.message,
                    desc: error.response.data.file,
                    type: 'error',
                    status: true
                })
            })
        },
        generateUpdateAddress: ({commit}, data) => {
            const token = sessionStorage.getItem('token')
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token??sessionStorage.getItem('token');
            const config = {
                header:{
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
            axios.get('/dashboard/users/'+data.id+'/addresses/'+data.data,config).then((res)=>{
                console.log(res.data);
                commit('setAddressUpdateTemp', {status:true,data: res.data })
            }).catch((error)=>{
                commit('setUsersError',{
                    title: error.response.data.message,
                    desc: error.response.data.file,
                    type: 'error',
                    status: true
                })
            })
        }

    },

    modules: {}
}
export default address
