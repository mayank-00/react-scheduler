import ActionTypes from './types'

export const updateUserInSlotsData = (slotTime, user) => ({
    type: ActionTypes.UPDATE_USER_IN_SLOT,
    payload: { slotTime, user }
})

export const updateSlotsData = (slotTime, data) => ({
    type: ActionTypes.UPDATE_SLOTS_DATA,
    payload: { slotTime, data }
})

export const updateStatusInSlotsData = (slotTime, status) => {
    console.log("updateslotstatus ", slotTime, " ", status)
    return {
        type: ActionTypes.UPDATE_SLOT_STATUS,
        payload: { slotTime, status }
    }
}

export const updateSelectedSlotTime = (selectedSlotTime) => ({
    type: ActionTypes.UPDATE_SELECTED_SLOT_TIME,
    payload: { selectedSlotTime }
})