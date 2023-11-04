export const accommodationInitial = {
    accommodationList: [],
    filteredAccommodation: [],
    activeFilter: null
}

const accommodationReducer = (state = accommodationInitial, action) => {
    switch (action.type) {
        case 'FILL':
            return {
                ...state,
                accommodationList: action.payload
            }
        case 'FILTER':
            return {
                ...state,
                filteredAccommodation: action.payload.filter,
                activeFilter: action.payload.active
            }
        default:
            return state;
    }
}

export default accommodationReducer;