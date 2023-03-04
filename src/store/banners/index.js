import axios from '@/axios';

const banners = {
    state: {
        banners: [
        ]
    },
    getters: {
        getBanners: (state) => state.banners
    },
    mutations: {

        setBanners: (state, data) => {
            state.banners = data
        }
    },
    actions: {
        generateBanners: ({ commit }) => {
            axios.get('carousel').then((res) => {
                commit('setBanners',res.data)
            }).catch((error) => {
                console.log(error)
            })
        }
    }
}
export default banners
