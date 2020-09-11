export const initialState = {
    allUsersData: [],
    usersForDisplay: [],
    arrayForFilter: [],
    pages: 0,
    currentPage: 1,
    fetchBtnDisabled: false,
    loaded: false,
    loading: false,
    addFormVisible: false,
    user: {
        id: '',
        firstName: '',
        lastName: '',
        description: '',
        address: {
            streetAddress: '',
			city: '',
			state: '',
			zip: ''
        }
    }
}