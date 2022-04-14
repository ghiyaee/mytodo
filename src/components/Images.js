import React from "react";
import '../components/Image.css'
const Image = (props) => {
    const image = props.image.map(({urls,id})=> {
        return <img className="img " src={urls.regular} key={id }/>
    })
    return (
        <div className="container">{image}</div>
    )
}
export default Image;