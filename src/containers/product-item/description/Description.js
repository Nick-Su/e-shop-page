import React from 'react'
import { ProductHeader } from '../../../components/product-header/ProductHeader'
import { AddToCart } from '../../../components/buttons/add-to-cart/add-to-cart'
import { DropdownList } from '../../../components/dropdown-list/DropdownList'
import { AddToFavorite } from '../../../components/buttons/add-to-favorite/AddToFavorite'
import { SizeOptionButtonAvailable } from '../../../components/buttons/sizes/size-available/SizeOptionButtonAvailable'
import { SizeOptionButtonUnavailable } from '../../../components/buttons/sizes/SizeOptionButtonUnavailable/SizeOptionButtonUnavailable'
import { ProductBadges } from '../../../components/product-badges/ProductBadges'
import { PhotoGallery } from '../photo-gallery/PhotoGallery'

import './styles.scss'

export const Description = () => {
    return (
        <div className='item-description'>
            <ProductHeader title={"Пиджак CLASP"} price={"27 000"} />
            <div className="buy-section">
                <div>
                    <DropdownList />
                    <AddToCart />
                </div>
                <AddToFavorite />
            </div>
            <div className="size-options">
                <div className="options-btns">
                    <SizeOptionButtonUnavailable />
                    <SizeOptionButtonAvailable optionName={"S"} />
                    <SizeOptionButtonAvailable optionName={"M"} />
                </div>
                <a href="#">Как выбрать размер?</a>
            </div>
            <div className="text-description">
                <p>Безупречный пиджак с мужского плеча, на шелковой подкладке с ассиметричным поясом, подчеркивающим талию
                Прекрасно комбинируется с остальными изделиями из коллекции.</p>
                <p>Сочетайте с кожаным топом и брюками для рабочего дня в офисе, или же предайте образу дерзости, оставив его в расстегнутом виде</p>
            </div>
            <div className="product-badges-container">
                <ProductBadges />
            </div>
            <div className="mobile-photo-gallery">
                <PhotoGallery />
            </div>
        </div>
    )
}
