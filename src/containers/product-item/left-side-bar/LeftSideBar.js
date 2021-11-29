import React from 'react'
import { Breadcrumbs } from './../../../components/breadcrumbs/Breadcrumbs'
import { ProductBadges } from '../../../components/product-badges/ProductBadges'
import './styles.scss'

export const LeftSideBar = () => {
    return (
        <div className="left-side-bar">
            <Breadcrumbs />
            <div className="badges-container">
                <ProductBadges />
            </div>
        </div>
    )
}
