import React, { useState } from "react";
import "./MovieRow.css";
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

export default ({title, items}) => {
    const [scrollX, setScrollX] = useState(0)

    const handleLeftArrow = () => {
        let xLeft = scrollX + Math.round(window.innerWidth / 1.1)
        if(xLeft > 0) {
            xLeft = 0
        }
        setScrollX(xLeft)
    }

    const handleRightArrow = () => {
        let xRight = scrollX - Math.round(window.innerWidth / 1.1)
        let listWidth = items.results.length * 160
        if((window.innerWidth - listWidth) > xRight) {
            xRight = (window.innerWidth - listWidth) - 80
        }
        setScrollX(xRight)
    }

    return (
        <div className="movieRow">
            <h2 style={{paddingLeft:20}}>{title}</h2>
            <div className="movieRow--left" onClick={handleLeftArrow}>
                <NavigateBeforeIcon style={{fontSize: 50}} />
            </div>
            <div className="movieRow--right" onClick={handleRightArrow}>
                <NavigateNextIcon style={{fontSize: 50}} />
            </div>

            <div className="movieRow--listarea ">
                <div className="movieRow--list" style={{
                    marginLeft: scrollX,
                    width: items.results.length * 160
                }}>
                    {items.results.length > 0 && items.results.map((item, key) => (
                        <div key={key} className="movieRow--item">
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.orginal_title} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}