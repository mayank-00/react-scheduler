import ActionTypes from './types'

const initialState = {
    data: {}, // slotTime => user, status
    selectedSlotTime: "",
}

const slotsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.UPDATE_USER_IN_SLOT:
            return {
                ...state,
                data: {
                    ...state.data,
                    [payload.slotTime]: {
                        ...state.data[payload.slotTime],
                        user: payload.user
                    }
                }
            }
        case ActionTypes.UPDATE_SLOT_STATUS:
            let obj = {
                ...state,
                data: {
                    ...state.data,
                    [payload.slotTime]: {
                        ...state.data[payload.slotTime],
                        status: payload.status,
                    }
                }
            }
            console.log("boje  ", obj)
            return obj
        case ActionTypes.UPDATE_SELECTED_SLOT_TIME:
            return {
                ...state,
                selectedSlotTime: payload.selectedSlotTime
            }
        case ActionTypes.UPDATE_SLOTS_DATA:
            return {
                ...state,
                data: {
                    ...state.data,
                    [payload.slotTime]: payload.data
                }
            }
        default:
            return state
    }
}

export default slotsReducer