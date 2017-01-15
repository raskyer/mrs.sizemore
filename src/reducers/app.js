import { WORD_COUNT_ADD, WORD_COUNT_LESS, HELP, DEFAULT_APP } from '../constants'

const appReducer = (state = DEFAULT_APP, action) => {
    switch(action.type) {
        case HELP:
            return Object.assign({}, state, {})
        case WORD_COUNT_ADD:
            return Object.assign({}, state, {
                wordcount: state.wordcount + 1
            })
        case WORD_COUNT_LESS:
            return Object.assign({}, state, {
                wordcount: state.wordcount - 1
            })
        default:
            return state
    }
}

export default appReducer
