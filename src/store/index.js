import { createStore } from 'vuex'
import users from '@/store/users';
import products from '@/store/products';
import axios from 'axios';
import dataSite from '@/config'
import banner1 from '@/assets/banners/banner-1.jpg'
import banner2 from '@/assets/banners/banner-2.jpg'
import banner3 from '@/assets/banners/banner-3.jpg'
import banner4 from '@/assets/banners/banner-4.jpg'
import banner5 from '@/assets/banners/banner-5.jpg'
const { requestUrl } = dataSite
export default createStore({
  state: {
    categories: [
      {
        id: 1,
        title: 'One',
        parent_id: null,
        description: null,
        disabled: false,
        depth: 0,
        created_at: '2022-12-28T20:59:14.000000Z',
        updated_at: '2022-12-28T20:59:14.000000Z',
        children_recursive: [
          {
            id: 4,
            title: 'One One',
            parent_id: 1,
            description: null,
            disabled: false,
            depth: 1,
            created_at: '2022-12-28T21:01:14.000000Z',
            updated_at: '2022-12-28T21:01:14.000000Z',
            children_recursive: [
              {
                id: 13,
                title: 'One One One',
                parent_id: 4,
                description: null,
                disabled: false,
                depth: 2,
                created_at: '2022-12-28T21:03:04.000000Z',
                updated_at: '2022-12-28T21:03:04.000000Z',
                children_recursive: []
              }
            ]
          },
          {
            id: 5,
            title: 'One Two',
            parent_id: 1,
            description: null,
            disabled: false,
            depth: 1,
            created_at: '2022-12-28T21:01:19.000000Z',
            updated_at: '2022-12-28T21:01:19.000000Z',
            children_recursive: []
          },
          {
            id: 6,
            title: 'One Three',
            parent_id: 1,
            description: null,
            disabled: false,
            depth: 1,
            created_at: '2022-12-28T21:01:23.000000Z',
            updated_at: '2022-12-28T21:01:23.000000Z',
            children_recursive: []
          }
        ]
      },
      {
        id: 2,
        title: 'Two',
        parent_id: null,
        description: null,
        disabled: false,
        depth: 0,
        created_at: '2022-12-28T20:59:45.000000Z',
        updated_at: '2022-12-28T20:59:45.000000Z',
        children_recursive: [
          {
            id: 7,
            title: 'Two One',
            parent_id: 2,
            description: null,
            disabled: false,
            depth: 1,
            created_at: '2022-12-28T21:01:42.000000Z',
            updated_at: '2022-12-28T21:01:42.000000Z',
            children_recursive: [
              {
                id: 14,
                title: 'Two One One',
                parent_id: 7,
                description: null,
                disabled: false,
                depth: 2,
                created_at: '2022-12-28T21:03:43.000000Z',
                updated_at: '2022-12-28T21:03:43.000000Z',
                children_recursive: []
              }
            ]
          },
          {
            id: 8,
            title: 'Two Two',
            parent_id: 2,
            description: null,
            disabled: false,
            depth: 1,
            created_at: '2022-12-28T21:01:47.000000Z',
            updated_at: '2022-12-28T21:01:47.000000Z',
            children_recursive: []
          },
          {
            id: 9,
            title: 'Two Thee',
            parent_id: 2,
            description: null,
            disabled: false,
            depth: 1,
            created_at: '2022-12-28T21:01:52.000000Z',
            updated_at: '2022-12-28T21:01:52.000000Z',
            children_recursive: []
          }
        ]
      },
      {
        id: 3,
        title: 'Three',
        parent_id: null,
        description: null,
        disabled: false,
        depth: 0,
        created_at: '2022-12-28T21:00:10.000000Z',
        updated_at: '2022-12-28T21:00:10.000000Z',
        children_recursive: [
          {
            id: 10,
            title: 'Theee One',
            parent_id: 3,
            description: null,
            disabled: false,
            depth: 1,
            created_at: '2022-12-28T21:02:11.000000Z',
            updated_at: '2022-12-28T21:02:11.000000Z',
            children_recursive: [
              {
                id: 15,
                title: 'Three One One',
                parent_id: 10,
                description: null,
                disabled: false,
                depth: 2,
                created_at: '2022-12-28T21:04:25.000000Z',
                updated_at: '2022-12-28T21:04:25.000000Z',
                children_recursive: []
              }
            ]
          },
          {
            id: 11,
            title: 'Three Two',
            parent_id: 3,
            description: null,
            disabled: false,
            depth: 1,
            created_at: '2022-12-28T21:02:23.000000Z',
            updated_at: '2022-12-28T21:02:23.000000Z',
            children_recursive: []
          },
          {
            id: 12,
            title: 'Three Three',
            parent_id: 3,
            description: null,
            disabled: false,
            depth: 1,
            created_at: '2022-12-28T21:02:27.000000Z',
            updated_at: '2022-12-28T21:02:27.000000Z',
            children_recursive: []
          }
        ]
      }
    ],
    subCategory: {  },
    subC: {  },
    banners: [
      {
        id: 1,
        title:  'title 1',
        url:  banner1,
        description: 'lorem All children like smashed blood oranges in bourbon and corn syrup. Fatalis, dexter messors tandem amor de neuter, pius danista.'
      },
      {
        id: 2,
        title:  'title 2',
        url:  banner2,
        description: 'lorem All children like smashed blood oranges in bourbon and corn syrup. Fatalis, dexter messors tandem amor de neuter, pius danista.'
      },
      {
        id: 3,
        title:  'title 3',
        url:  banner3,
        description: 'lorem All children like smashed blood oranges in bourbon and corn syrup. Fatalis, dexter messors tandem amor de neuter, pius danista.'
      },
      {
        id: 4,
        title:  'title 4',
        url:  banner4,
        description: 'lorem All children like smashed blood oranges in bourbon and corn syrup. Fatalis, dexter messors tandem amor de neuter, pius danista.'
      },
      {
        id: 5,
        title:  'title 5',
        url:  banner5,
        description: 'lorem All children like smashed blood oranges in bourbon and corn syrup. Fatalis, dexter messors tandem amor de neuter, pius danista.'
      }
    ]
  },
  getters: {
    getCategories: (state) => state.categories,
    getSubCategories: (state) => state.subCategory,
    getSubC: (state) => state.subC,
    getBanners: (state) => state.banners
  },
  mutations: {
    setCategories: (state, data) => {
      state.categories = data
    },
    setSubCategories: (state, data) => {
      state.subCategory = data
    },
    setSubC: (state, data) => {
      state.subC = data
    },
    setBanners: (state, data) => {
      state.banners = data
    }
  },
  actions: {
    generateCategories: ({ commit }) => {
      axios.get(requestUrl + '/categories').then((res) => {
        commit('setCategories',res.data.data.categories)
      }).catch((error) => {
        console.log(error)
      })
    },
    generateBanners: ({ commit }) => {
      axios.get( 'https://api.digikala.com/v1/categories/book/search/?page=1').then((res) => {
        commit('setBanners',res.data.data.products)
      }).catch((error) => {
        console.log(error)
      })
    }
  },
  modules: {
    users,
    products
  }
})

