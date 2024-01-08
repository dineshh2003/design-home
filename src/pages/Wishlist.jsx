import React from "react";
import Navbar from "../component/Navbar";
import Main from "../component/Main";
import '../component/Wishlist.css';

const Wishlist = () => {
  return (
    <div>
      <Navbar />
      <Main
        greating={"YOUR WISHLIST"}
        wish={"WE ARE GLAD TO HELP YOU DESIGN YOUR DREAM"}
        target={"your Wishlist are mentioned bellow"}
      />
      <div className="wishlist--items">
        <div class="grid grid-rows-3 grid-flow-col gap-4 item--container">
          <div class="row-span-3 ... items">
          </div>
          <div class="col-span-2 ... items">02</div>
          <div class="row-span-2 col-span-2 ... items">03</div>
        </div>
      </div>
      <div className="wishlist--items">
        <div class="grid grid-rows-3 grid-flow-col gap-4 item--container">
          <div class="row-span-3 ... items">01</div>
          <div class="col-span-2 ... items">02</div>
          <div class="row-span-2 col-span-2 ... items">03</div>
        </div>
      </div>
      <div className="wishlist--items">
        <div class="grid grid-rows-3 grid-flow-col gap-4 item--container">
          <div class="row-span-3 ... items">01</div>
          <div class="col-span-2 ... items">02</div>
          <div class="row-span-2 col-span-2 ... items">03</div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
