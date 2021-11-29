import React, { useEffect, useState } from "react";
import './styles.scss'

export const AddToFavorite = (props) => {
    const [fillColor, setFillColor] = useState('black')

    useEffect(() => {
        function updateSize() {
            window.innerWidth < 900 ? setFillColor('white') : setFillColor('black')
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    
    return (
        <button className="add-to-favorite-btn">
            <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1_176)">
                <path fill={fillColor} d="M8.94617 17.001C8.64199 17.001 8.35502 16.8719 8.15414 16.6479C2.70464 10.5172 1.49072 9.13618 1.18367 8.74769L1.17798 8.75193C0.418949 7.79488 0 6.59966 0 5.3874C0 2.41701 2.44489 0.000976562 5.45086 0.000976562C6.791 0.000976562 8.03932 0.454702 9.01501 1.27422C10.0137 0.454702 11.2534 0.000976562 12.549 0.000976562C15.555 0.000976562 18 2.41701 18 5.3874C18 6.67622 17.5437 7.87428 16.7144 8.76327L9.74109 16.6479C9.53878 16.8719 9.25036 17.001 8.94617 17.001ZM2.85531 7.49288C3.15375 7.85443 6.40076 11.5182 8.94328 14.3808L15.1461 7.37095C15.6339 6.84776 15.8922 6.15162 15.8922 5.3874C15.8922 3.56546 14.3928 2.08236 12.549 2.08236C11.503 2.08236 10.5101 2.57013 9.8228 3.41942C9.61905 3.6718 9.31636 3.79798 8.98348 3.80932C8.65777 3.80507 8.35357 3.65193 8.15843 3.39247C7.52567 2.56019 6.53847 2.08097 5.45086 2.08097C3.6071 2.08097 2.10776 3.56403 2.10776 5.38597C2.10776 6.34727 2.50228 7.04624 2.83516 7.46592C2.8409 7.47443 2.84957 7.48296 2.85531 7.49288Z"/>
                </g>
                <defs>
                <clipPath id="clip0_1_176">
                <rect width="18" height="17" fill="white"/>
                </clipPath>
                </defs>
            </svg>
        </button>
    )
}
