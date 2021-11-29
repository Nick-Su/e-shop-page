import React from "react"

import feature1 from '../../assets/icons/product-item/feature1.svg'
import feature2 from '../../assets/icons/product-item/feature2.svg'
import feature3 from '../../assets/icons/product-item/feature3.svg'

import './styles.scss'

export const ProductBadges = () => {
    return (
        <div className="product-badges">
            <img src={feature1} alt="feature 1" />
            <img src={feature2} alt="feature 2" />
            <img src={feature3} alt="feature 3" />
        </div>
    )
}
