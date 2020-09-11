import { FETCHED_USERS, SORT_BY_ID, SHOW_NEW_PAGE, ADD_USER, SHOW_USERS, UPDATE_PAGINATION, SHOW_ADD_FORM, CHANGE_ADD_FORM_INPUTS_VALUE, SET_INITIAL_ADD_FORM_INPUTS, UPDATE_USER_CONTAINER, RESET_USER_CONTAINER, FILTER_USER_ARRAY, CHANGE_FILTER_FORM_INPUT_VALUE, SHOW_SPINNER, HIDE_SPINNER, DISABLE_BUTTON, ENABLE_BUTTON } from "./types"
import { initialState } from "./initialState"

export function tableReducer (state = initialState, action) {
    switch (action.type) {
        case FETCHED_USERS:
            return {...state, allUsersData: [...action.payload, ...state.allUsersData], arrayForFilter: [...action.payload, ...state.allUsersData], loaded: true}
        case SHOW_USERS:
            if (action.payload !== state.pages) {
                return {...state, usersForDisplay: state.allUsersData.slice(state.allUsersData.length-(50*action.payload), state.allUsersData.length-(50*action.payload)+50), currentPage: action.payload}
            } else {
                return {...state, usersForDisplay: state.allUsersData.slice(0, state.allUsersData.length-(50*action.payload)+50), currentPage: action.payload}
            }
        case SORT_BY_ID:
            if (state.sortIdFlag) {
                return {...state, sortIdFlag: false, usersForDisplay: [...state.usersForDisplay].sort((a, b) => {return a.id - b.id})}
            } else {
                return {...state, sortIdFlag: true, usersForDisplay: [...state.usersForDisplay].sort((a, b) => {return b.id - a.id})}
            }
        case SHOW_NEW_PAGE:
            return {...state, users: state.pages[action.payload]}
        case SHOW_SPINNER:
            return {...state, loading: true}
        case HIDE_SPINNER:
            return {...state, loading: false}
        case ADD_USER:
            return {...state, allUsersData: [...state.allUsersData, action.payload], arrayForFilter: [...state.arrayForFilter, action.payload]}
        case UPDATE_PAGINATION:
            return {...state, pages: Math.ceil(state.allUsersData.length/50)}
        case SHOW_ADD_FORM:
            return {...state, addFormVisible: !state.addFormVisible}
        case CHANGE_ADD_FORM_INPUTS_VALUE:
            return {...state, addForm: {...state.addForm, [action.payload.name]: action.payload.value}}
        case CHANGE_FILTER_FORM_INPUT_VALUE:
            return {...state, filterForm: {...state.filterForm, [action.payload.name]: action.payload.value}}
        case SET_INITIAL_ADD_FORM_INPUTS:
            return {...state, addForm: {id: '', firstName: '', lastName: '', email: '', phone: ''}}
        case UPDATE_USER_CONTAINER:
            return {...state, user: {...state.user, ...action.payload}}
        case RESET_USER_CONTAINER:
            return {...state, user: {id: '', firstName: '', lastName: '', description: '', address: {streetAddress: '', city: '', state: '', zip: ''}}}
        case FILTER_USER_ARRAY:
            if (!action.payload) return {...state, allUsersData: state.arrayForFilter}
            const request = new RegExp(action.payload, 'i')
            const result = state.arrayForFilter.filter((user) => {
                return request.test(user.firstName+ ' ' + user.lastName + ' ' + user.description)
            })
            return {...state, allUsersData: result}
        case DISABLE_BUTTON:
            return {...state, fetchBtnDisabled: true}
        case ENABLE_BUTTON:
            return {...state, fetchBtnDisabled: false}
        default: 
            return state
    }
}
