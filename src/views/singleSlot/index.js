import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from "react-router-dom"

import { SlotStates } from 'constants/index'
import { updateSelectedSlotTime, updateSlotsData } from 'store/slots/action'
import { selectSlotDataByTime, selectSelectedSlotTime } from 'store/slots/selector'
import UserForm from './components/userForm'

const TwoCellRow = ({ left = "", right = "" }) => {
    return <div className="display-flex justify-between font-size-16 mb-10">
        <span className="display-inline-block fw-500">{left}</span>
        <span className="isplay-inline-block">{right}</span>
    </div>
}

const SingleSlot = ({ selectedSlotTime = "", slotData = {}, updateSelectedSlotTime, updateSlotsData }) => {

    const [isEditable, setIsEditable] = useState(false)

    const history = useHistory()

    const { user = {}, status = "" } = slotData

    const onEditButtonClick = () => {
        setIsEditable(true)
    }

    const onSubmit = user => {
        updateSlotsData(selectedSlotTime, { user, status: SlotStates.Engaged })
        updateSelectedSlotTime("")
        history.push("/")
    }

    const onCancel = () => {
        updateSelectedSlotTime("")
        history.push("/")
    }

    console.log("SingleSlot -- ", slotData)

    return <div className="mw-500 m-auto p-50">
        {
            selectedSlotTime == ""
                ?
                <span className="fw-500 font-size-16">Oops!! Something went wrong</span>
                :
                <>
                    <span className="display-inline-block font-size-16 fw-500 mb-20">Selected slot: <span className="ml-10 display-inline-block">{selectedSlotTime}</span></span>
                    {
                        status === SlotStates.Free || (status === SlotStates.Engaged && isEditable === true)
                            ?
                            <UserForm onSubmit={onSubmit} onCancel={onCancel} user={user} />
                            :
                            <div className="">
                                <div className="display-flex justify-between mb-20">
                                    <button className="button secondary small" onClick={onCancel}>Back</button>
                                    <button className="button secondary small" onClick={onEditButtonClick}>Edit</button>
                                </div>
                                <TwoCellRow left="First Name" right={user.firstName} />
                                <TwoCellRow left="Last Name" right={user.lastName} />
                                <TwoCellRow left="Phone Number" right={user.phoneNumber} />
                            </div>
                    }
                </>
        }

    </div>
}

const mapStateToProps = (state) => ({
    selectedSlotTime: selectSelectedSlotTime(state),
    slotData: selectSlotDataByTime(state),
})

const mapDispatchToProps = (dispatch) => ({
    updateSelectedSlotTime: data => dispatch(updateSelectedSlotTime(data)),
    updateSlotsData: (slotTime, data) => dispatch(updateSlotsData(slotTime, data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleSlot)