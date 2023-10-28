export const accommodationInitial = {
    accommodationList: []
}

const accommodationReducer = (state = accommodationInitial, action) => {
    switch (action.type) {
        case 'FILL':
            return action.payload;
        default:
            return state;
    }
}

export default accommodationReducer;