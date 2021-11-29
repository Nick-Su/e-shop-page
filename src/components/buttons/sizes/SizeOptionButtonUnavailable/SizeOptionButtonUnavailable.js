import React, { useEffect, useState} from "react";
import './styles.scss';
import line from '../../../../assets/icons/buttons/line.svg'
import shortLine from '../../../../assets/icons/buttons/line-short.svg'

export const SizeOptionButtonUnavailable = () => {
    const [currentLine, setCurrentLine] = useState(line)

    useEffect(() => {
        function updateSize() {
            window.innerWidth < 400 ? setCurrentLine(shortLine) : setCurrentLine(line)
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    return (
        <button className="size-option-unavailable-btn" >
            <img src={currentLine} />
            <span>XS</span>
        </button>
    )
}