import Vuex from 'vuex'
const store = new Vuex.Store({
    state: {
        prods: [
            {'name': '苹果', price: 10},
            {'name': '菠萝', price: 20}
        ]
    },
    getters: {
        getProdsByName: state => name => state.prods.find(prod => prod.name === name)
    }
})
export default () => store
