import React from "react";
import '../components/Image.css'
const Image = (props) => {
    const image = props.image.map(el => {
        return <img className="img  " src={el.urls.regular} key={el.id }/>
    })
    return (
        <div className="container">{image}</div>
    )
}
export default Image;