import { FETCHED_USERS, SORT_BY_ID, SHOW_NEW_PAGE, ADD_USER, SHOW_USERS, UPDATE_PAGINATION, SHOW_ADD_FORM, CHANGE_ADD_FORM_INPUTS_VALUE, SET_INITIAL_ADD_FORM_INPUTS, UPDATE_USER_CONTAINER, RESET_USER_CONTAINER, FILTER_USER_ARRAY, CHANGE_FILTER_FORM_INPUT_VALUE, SHOW_SPINNER, HIDE_SPINNER, DISABLE_BUTTON, ENABLE_BUTTON } from "./types"

export function fetchedUsers (big) {
    const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https'
    const url = big ? protocol + '://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}'
                    : protocol + '://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}'
    return async (dispatch) => {
        dispatch(disableButton())
        dispatch(showSpinner())
        const response = await fetch(url)
        const json = await response.json()
        dispatch({type: FETCHED_USERS, payload: json})
        dispatch(updatePagination())
        dispatch(showUsers(1))
        dispatch(hideSpinner())
        dispatch(enableButton())
    }
}

export function sortById () {
    return {
        type: SORT_BY_ID
    }
}

export function showSpinner () {
    return {
        type: SHOW_SPINNER
    }
}

export function hideSpinner () {
    return {
        type: HIDE_SPINNER
    }
}


export function showNewPage (index) {
    return {
        type: SHOW_NEW_PAGE,
        payload: index
    }
}

export function addUser (user) {
    return (dispatch) => {
        dispatch({
            type: ADD_USER,
            payload: user
        })
        dispatch(showUsers(1))
        dispatch(updatePagination())
    }
}

export function showUsers (page) {
    return {
        type: SHOW_USERS,
        payload: page
    }
}

export function updatePagination () {
    return {
        type: UPDATE_PAGINATION,
    }
}

export function showAddForm () {
    return {
        type: SHOW_ADD_FORM,
    }
}

export function disableButton () {
    return {
        type: DISABLE_BUTTON,
    }
}

export function enableButton () {
    return {
        type: ENABLE_BUTTON,
    }
}


export function changeAddFormInputsValue (name, value) {
    return {
        type: CHANGE_ADD_FORM_INPUTS_VALUE,
        payload: {name, value}
    }
}

export function resetAddFormInputs () {
    return {
        type: SET_INITIAL_ADD_FORM_INPUTS,
    }
}

export function resetUserContainer () {
    return {
        type: RESET_USER_CONTAINER,
    }
}

export function updateUserContainer (user) {
    return (dispatch) => {
        dispatch(resetUserContainer());
        dispatch({
            type: UPDATE_USER_CONTAINER,
            payload: user
        })
    }
}

export function filterUserArray (request) {
    return (dispatch) => {
        dispatch({
            type: FILTER_USER_ARRAY,
            payload: request
        })
        dispatch(updatePagination())
        dispatch(showUsers(1))
        dispatch(resetUserContainer());

    }
}

export function changeFilterFormInputValue (name, value) {
    return {
        type: CHANGE_FILTER_FORM_INPUT_VALUE,
        payload: {name, value}
    }
}
