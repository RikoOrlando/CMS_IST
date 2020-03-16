const initialState = {
    login: false,
    loading: false,
    err: false,
    validate: false,
}

export default function user (state = initialState, action) {
    switch (action.type) {
        case 'SET_LOGIN':
            return {...state, login: action.val}
        case 'SET_LOADING':
                return {...state, loading: action.val}
        case 'SET_ERROR':
                return {...state, err: action.val}
        case 'SET_VALIDATE':
                return {...state, validate: action.val}
        default:
            return state
    }
    
}