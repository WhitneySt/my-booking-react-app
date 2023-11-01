export const accommodationInitial = {
    accommodationList: [],
    filteredAccommodation:[]
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
                filteredAccommodation: action.payload
            }
        default:
            return state;
    }
}

export default accommodationReducer;