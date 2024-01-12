import React from "react";
import "../component/Choice.css";
import Navbar from "../component/Navbar";
import Main from "../component/Main";

const Choice = () => {
  return (
    <div className="container--choice">
      <Navbar />
      <Main
        greating={"Namaste !!!"}
        wish={"This is how we say great in India"}
        target={"Explore Our New collection"}
      />

      <div className="products">
        <div className="row">
          <h1 className="row-title-main-1">Here are some </h1>
          <div className="column">
            <img
              className="column-img"
              src="https://www.ikea.com/images/99/58/99589add5b1ba271b1ce126939093f2a.jpg?f=xs"
              alt=""
              style={{ width: "33.3vw" }}
            />
          </div>
          <div className="column">
            <img
              className="column-img"
              src="https://www.ikea.com/images/1e/fd/1efd1a3b88c516acc097a32dda4846b8.png?f=xxs"
              alt=""
              style={{ width: "33.3vw" }}
            />
          </div>
          <div className="column">
            <img
              className="column-img"
              src="https://www.ikea.com/images/e2/0d/e20d503566f823cf62688635f209bb64.png?f=xs"
              alt=""
              style={{ width: "33.3vw" }}
            />
          </div>
        </div>
      </div>
      <hr className="roundedd" />
      <div className="row-2">
        <h1 className="row-title-main-1">Here are some </h1>
        <div className="column-2">
          <img
            src="https://www.ikea.com/images/32/89/32897f91d581885cdc97a899d5c45cc0.png?f=xxs"
            alt=""
            style={{ width: "20vw" }}
          />
          <button className=" btn bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ">
            ADD to cart
          </button>
        </div>
        <div className="column-2">
          <img
            src="https://www.ikea.com/images/c0/8e/c08e929c8df9ba3bb7d329e6d95f060b.png?f=xxs"
            alt=""
            style={{ width: "20vw" }}
          />
          <button className=" btn bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ">
            ADD to cart
          </button>
        </div>
        <div className="column-2">
          <img
            src="https://www.ikea.com/images/40/a6/40a618426df563e359f4bd7a8c7184c3.png?f=xxs"
            alt=""
            style={{ width: "20vw" }}
          />
          <button className=" btn bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ">
            ADD to cart
          </button>
        </div>
        <div className="column-2">
          <img
            src="https://www.ikea.com/images/e0/3f/e03f09074d8905f7fa8702b4e311e310.png?f=xxs"
            alt=""
            style={{ width: "20vw" }}
          />
          <button className=" btn bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ">
            ADD to cart
          </button>
        </div>
        <div className="column-2">
          <img
            src="https://www.ikea.com/images/83/60/83601a862201861272b4c24557cd58a3.png?f=xxs"
            alt=""
            style={{ width: "20vw" }}
          />
          <button className=" btn bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ">
            ADD to cart
          </button>
        </div>
      </div>
      <hr className="roundedd" />
      <div className="row-3">
        <div className="flip--products">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img 
                  src="https://www.ikea.com/images/e3/cb/e3cb3c4c814375f25ba634a9f8a4630d.jpg?f=s"
                  alt="Avatar"
                  style={{height:'60vh', width: '100vw'}}
                />
              </div>
              <div class="flip-card-back">
                <h1>John Doe</h1>
                <p>Architect & Engineer</p>
                <p>We love that guy</p>
                <button className=" btn bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ">
            ADD to cart
          </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flip--products">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  src="https://www.ikea.com/images/aa/98/aa98f90a5f49bbe664ee8ea89d17b70a.png?f=s"
                  alt="Avatar"
                  // style="width:300px;height:300px;"
                  style={{height:'60vh', width: '100vw'}}
                />
              </div>
              <div class="flip-card-back">
                <h1>John Doe</h1>
                <p>Architect & Engineer</p>
                <p>We love that guy</p>
                <button className=" btn bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ">
            ADD to cart
          </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flip--products">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  src="https://www.ikea.com/images/2b/13/2b132d13df49cf30731e851c118b3457.jpg?f=s"
                  alt="Avatar"
                  // style="width:300px;height:300px;"
                  style={{height:'60vh', width: '100vw'}}
                />
              </div>
              <div class="flip-card-back">
                <h1>John Doe</h1>
                <p>Architect & Engineer</p>
                <p>We love that guy</p>
                <button className=" btn bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ">
            ADD to cart
          </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="roundedd" /> 

      
    </div>
  );
};

export default Choice;
