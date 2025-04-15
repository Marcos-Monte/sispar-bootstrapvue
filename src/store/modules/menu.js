export default {
    state: {
        menu: false,
    },
    getters: {
        statusMenu(state){
            return state.menu
        }
    },
    mutations: {
        open(state, paylaod){
            state.menu = paylaod
        }
    },
    actions: {
        openMenu(context, payload){
            if(payload !== undefined){
                context.commit('open', payload)
            } else {
                context.commit('open', !context.state.menu);
            }
        }
    }
}