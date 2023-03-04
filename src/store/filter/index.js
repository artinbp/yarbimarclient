const filter = {
    state: {
        temp: [],
        filters: {
            categories: [],
            brand:[]
        }

    },
    getters: {
        getTemp: (state) => state.temp,
        getFilterBrand: (state) => state.filters.brand,
        getFilterCategory: (state) => state.filters.categories
    },
    mutations: {
        setTemp: (state, data) => {
            state.temp = data
        },
        setFilterCategory: (state,data) => {
            state.filters.categories=[]
            for (let i = 0; i < data.length; i++) {
                state.filters.categories.push(...data[i]?.categories);
            }
        },
        setFilterBrand: (state,data) => {
            state.filters.brand=[]
            for (let i = 0; i < data.length; i++) {
                state.filters.brand.push(data[i]?.brand);
            }
        }
    },
    actions: {
        generateFilterTemp: async ({ commit },payload) => {
            await commit('setTemp', payload)
            await commit('setFilterCategory',payload)
            await commit('setFilterBrand',payload)
            console.log(payload)
        }
    }
}
export default filter
