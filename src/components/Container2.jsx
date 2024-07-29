/** @format */

import image2 from "../images/avatar-michelle.jpg";
import Facebook from "./Facebook";
import Pinterest from "./Pinterest";
import Share from "./Share";
import Twitter from "./Twitter";

export default function Container2() {
  return (
    <>
      <div className='shift'>
        <span>
          Shift the overall look and feel by adding these wonderful touches to
          furniture in your home
        </span>
      </div>
      <div>
        <p className='ever'>
          Ever been in a room and felt like something was missing? Perhaps it
          felt slightly bare and uninviting. I’ve got some simple tips to help
          you make any room feel complete.
        </p>
      </div>
      <footer className='michelle-share'>
        <div>
          <img className='img' src={image2} alt='Michelle Appleton' />
        </div>

        <div className='michelle'>
          <div>
            <span>Michelle Appleton</span>
          </div>
          <div>
            <span className='june'> 28 Jun 2020</span>
          </div>
        </div>
        <div className='share'>
          <Share />
        </div>
      </footer>
      <div className='share-container'>
        <div className='triangle'></div>
        <label className='label'>SHARE</label>
        <Facebook />
        <Twitter />
        <Pinterest />
        <div className='share2'>
          <Share />
        </div>
      </div>
    </>
  );
}
