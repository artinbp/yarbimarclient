const products = {
    state:{
        products:[]
    },
    getters:{
        getProducts:(state)=>state.products
    },
    mutations:{
        setProducts:(state,payload)=>state.products=payload
    },
    actions:{
        generateProducts:({commit})=>{
            commit('setProducts',[])
        }
    }
}
export default products
