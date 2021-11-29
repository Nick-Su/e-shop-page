import React from "react"
import './styles.scss'

export const SizeOptionButtonAvailable = (props) => {
    return (
        <button className="size-option-button-available" >
            <span>{ props.optionName }</span>
        </button>
    )
}
