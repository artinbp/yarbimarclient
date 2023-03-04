// eslint-disable-next-line no-unused-vars
import { cookie } from '@/assets/utils';
import store from '@/store';

const wishList = {
    state: {
        wishList: [
        ]
    },
    getters: {
        getWishList: (state) => state.wishList
    },
    mutations: {
        appendWishList: (state, data) => {
            state.wishList.push(data)
        },

        removeWishList: (state, data) => {
            state.wishList=state.wishList.filter((item)=>item.id!==data)
        }
    },
    actions: {
        generateWishList: ({ getters },e) => {
            const isFound = getters.getWishList.some(element => {
                if (element.id === e.id) {
                    return true;
                }

                return false;
            })
            if (isFound){
                store.commit('removeWishList',e.id)
            }else{
                store.commit('appendWishList',e)
            }
        }
    }
}
export default wishList
