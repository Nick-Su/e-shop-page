import React from 'react'
import './styles.scss'
import { BackIcon } from '../icons/BackIcon'

export const ProductHeader = (props) => {
    return (
        <div className="product-header">
            <div>
            <h1>{props.title}</h1>
            <p>{props.price} руб.</p>
            </div>
            <a href="#">
                <BackIcon />
            </a>
        </div>
    )
}
