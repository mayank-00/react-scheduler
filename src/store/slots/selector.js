import { createSelector } from "reselect";

const slotsData = state => state.slots ? state.slots.data : "";
const selectedSlotTime = state => state.slots ? state.slots.selectedSlotTime : "";

export const selectSlotsData = createSelector(
    slotsData,
    slotsData => slotsData
)

export const selectSlotDataByTime = createSelector(
    [selectedSlotTime, slotsData],
    (selectedSlotTime, slotsData) => {
        return Object.assign({}, slotsData[selectedSlotTime])
    }
)

export const selectSelectedSlotTime = createSelector(
    selectedSlotTime,
    selectedSlotTime => selectedSlotTime
)