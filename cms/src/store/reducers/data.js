const initialState = {
    user: [],
    item: [],
    provinsi: [],
    biaya: [],
    promo: [],
    tabungan: [],
    wisata: [],
    editData: {},
    role: []
}

export default function data (state = initialState, action) {
    switch (action.type) {
        case 'SET_USER':
            return {...state, user: action.val}
        case 'SET_ITEM':
                return {...state, item: action.val}
        case 'SET_PROVINSI':
                return {...state, provinsi: action.val}
        case 'SET_BIAYA':
                return {...state, biaya: action.val}
        case 'SET_PROMO':
            return {...state, promo: action.val}
        case 'SET_TABUNGAN':
            return {...state, tabungan: action.val}
        case 'SET_WISATA':
            return {...state, wisata: action.val}
        case 'SET_EDITDATA':
            return {...state, editData: action.val}
        case 'SET_ROLE':
            return {...state, role: action.val}
        default:
            return state
    }
    
}