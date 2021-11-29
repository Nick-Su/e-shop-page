import React, { useLayoutEffect, useState } from "react";
import './styles.scss'

export const DropdownList = () => {
    const handleOpen = (e) => {
        document.getElementById("options-list").style.backgroundImage=`url("data:image/svg+xml;utf8,<svg width='12' height='7' viewBox='0 0 12 7' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M5.40001 0.279986L0.300012 5.59999C1.21645e-05 5.87999 1.2189e-05 6.43999 0.300012 6.85999C0.600012 7.27999 1.20001 7.13999 1.50001 6.85999L6.00001 2.23999L10.5 6.71999C10.8 6.99999 11.4 6.99999 11.7 6.71999C11.85 6.71999 12 6.29999 12 6.15999C12 6.01999 11.85 5.73999 11.7 5.59999L6.60001 0.279986C6.30001 -0.140014 5.70001 -0.140014 5.40001 0.279986Z' fill='black'/></svg>")`;
    }

    const handleClick = () => {
        document.getElementById("options-list").style.backgroundImage=`url("data:image/svg+xml;utf8,<svg width='12' height='7' viewBox='0 0 12 7' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M6.59999 6.72001L11.7 1.40001C12 1.12001 12 0.560014 11.7 0.140014C11.4 -0.279986 10.8 -0.139986 10.5 0.140014L5.99999 4.76001L1.49999 0.280013C1.19999 1.32254e-05 0.599989 1.31991e-05 0.299989 0.280013C0.149989 0.280013 -1.14802e-05 0.700013 -1.14863e-05 0.840013C-1.14924e-05 0.980013 0.149989 1.26001 0.299989 1.40001L5.39999 6.72001C5.69999 7.14001 6.29999 7.14001 6.59999 6.72001Z' fill='black'/></svg>")`;
    }
    return (
        <div className="dropdown-list">
            <select id="options-list" onFocus={handleOpen} onClick={handleClick}>
                <option value="volvo">РАЗМЕР: S</option>
                <option value="saab">РАЗМЕР: M</option>
                <option value="mercedes">РАЗМЕР: L</option>
            </select>
        </div>
    )
}
