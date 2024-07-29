/** @format */
import image from "../images/drawers.jpg";
import imagemobile from "../images/drawers-mobile.jpg";
import "../style.css";
import Container2 from "./Container2";

export default function Container() {
  return (
    <div className='container'>
      <div className='image'>
        <img className='image2' src={image} />
        <img className='imagemobile' src={imagemobile} />
      </div>
      <div className='container2'>
        <Container2 />
      </div>
    </div>
  );
}
