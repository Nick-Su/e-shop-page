import React from 'react'
import './styles.scss'
import arrowRightIcon from '../../assets/icons/nav/arrow-right.svg'

import { HomeIcon } from '../icons/HomeIcon'

export const Breadcrumbs = () => {
    return (
        <div className="breadcrumbs">
            <HomeIcon />
            <img src={arrowRightIcon} />
            <p>БРЮКИ</p>
            <img src={arrowRightIcon} />
        </div>
    )
}
