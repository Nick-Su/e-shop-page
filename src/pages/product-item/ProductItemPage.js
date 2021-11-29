import React from 'react'
import { PhotoGallery } from '../../containers/product-item/photo-gallery/PhotoGallery'
import { LeftSideBar } from '../../containers/product-item/left-side-bar/LeftSideBar'
import { Description } from '../../containers/product-item/description/Description'

import './styles.scss'

export const ProductItemPage = () => {
    return (
        <div className="product-item-container">
            <div className="sidebar-content">
                <LeftSideBar />
                <div className="photo-gallery-container">
                    <PhotoGallery />
                </div>
            </div>
            <Description />
        </div>
    )
}
