import axios from '@/axios';

const products = {
    state:{
        products:[],
        product:[]
    },
    getters:{
        getProducts:(state)=>state.products,
        getProduct:(state)=>state.product,
    },
    mutations:{
        setProducts:(state,payload)=>state.products=payload,
        setProduct:(state,payload)=>state.product=payload,
    },
    actions:{
        generateProducts:async ({commit})=>{
            await axios.get('products').then((res) => {
                commit('setProducts',res.data.data)
            }).catch((error) => {
                console.log(error)
            })

        },
        generateProduct:({commit},payload)=>{
            axios.get('products/'+payload).then((res) => {
                commit('setProduct',res.data[0])
            }).catch((error) => {
                console.log(error)
            })

        }
    }
}
export default products
