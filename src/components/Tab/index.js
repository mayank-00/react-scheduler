import React from 'react'

const Tab = ({ name = "", onClick = () => { }, className = "" }) => {
    return <div id={name} className={`${className} cursor-pointer w-100 br-12 py-10 px-30`} onClick={onClick}>
        <span id={name}>{name}</span>
    </div>
}

export default Tab;