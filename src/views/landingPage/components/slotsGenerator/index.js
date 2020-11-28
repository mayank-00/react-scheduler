import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

import Tab from "components/Tab";

import { selectSlotsData, } from 'store/slots/selector';
import { updateSelectedSlotTime, updateStatusInSlotsData } from 'store/slots/action';
import { SlotStates } from 'constants/index';

const slotTimes = ['9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm']

const SlotsGenerator = ({ state, slotData = {}, updateSelectedSlotTime, updateStatusInSlotsData }) => {

    const history = useHistory()

    const onTabClick = (event) => {
        let slotTime = event.target.id
        updateSelectedSlotTime(slotTime)

        if (!slotData[slotTime] || !slotData[slotTime].status) {
            updateStatusInSlotsData(slotTime, SlotStates.Free)
        }
        history.push("/slot")
    }
    console.log("SlotsGenerator -- state -- ", state, "  --  ", slotData);

    return <div className="slots-generator">
        {
            slotTimes.map(slotTime => {
                const status = slotData[slotTime] && slotData[slotTime].status ? slotData[slotTime].status === SlotStates.Free ? "bg-grey" : "bg-red" : "bg-grey";
                return <Tab key={slotTime} className={`mb-10 ${status}`} name={slotTime} onClick={onTabClick} />
            })
        }
    </div>
}

const mapStateToProps = (state) => ({
    slotData: selectSlotsData(state),
    state: state
})

const mapDispatchToProps = (dispatch) => ({
    updateSelectedSlotTime: data => dispatch(updateSelectedSlotTime(data)),
    updateStatusInSlotsData: (slotTime, status) => dispatch(updateStatusInSlotsData(slotTime, status)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SlotsGenerator);