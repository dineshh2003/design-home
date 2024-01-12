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

      <div className="row-4">
      <h1 className="row-title-main-1"> A lot more for a lot less</h1>
      <hr className="roundedd" /> 
      <div className="products--price">
      <h1 className="row-title-main-1"> Soffas</h1>
      <div className="scroll-container">
        <div className="scroll-container-product">
        <img src="https://www.ikea.com/in/en/images/products/gammalbyn-3-seat-sofa-grey__0868927_pe781435_s5.jpg?f=xxs" alt="Cinque Terre"/>
        {/* <button className=" btn bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ">
            ADD to cart
          </button> */}
        </div>
        <img src="https://www.ikea.com/in/en/images/products/gammalbyn-3-seat-sofa-grey__0868927_pe781435_s5.jpg?f=xxs" alt="Cinque Terre"/>
        <img src="https://www.ikea.com/in/en/images/products/friheten-corner-sofa-bed-with-storage-skiftebo-dark-grey__1089881_pe861727_s5.jpg?f=xxs" alt="Forest"/>
        <img src="https://www.ikea.com/in/en/images/products/ektorp-3-seat-sofa-with-chaise-longue-hakebo-grey-green__1194844_pe902094_s5.jpg?f=xxs" alt="Northern Lights"/>
        <img src="https://www.ikea.com/in/en/images/products/soederhamn-corner-sofa-6-seat-fridtuna-light-beige__1057737_pe848946_s5.jpg?f=xxs" alt="Mountains"/>
        <img src="hhttps://www.ikea.com/in/en/images/products/hammarn-sofa-bed-knisa-dark-grey-black__0833786_pe641354_s5.jpg?f=xxs" alt="Cinque Terre"/>
        <img src="https://www.ikea.com/in/en/images/products/ekenaeset-3-seat-sofa-kilanda-light-beige__1109715_pe870183_s5.jpg?f=xxs" alt="Forest"/>
        <img src="https://www.ikea.com/in/en/images/products/ektorp-3-seat-sofa-kilanda-dark-blue__1194842_pe902092_s5.jpg?f=xxs" alt="Northern Lights"/>
        <img src="https://www.ikea.com/in/en/images/products/hemnes-day-bed-w-3-drawers-2-mattresses-white-vannareid-extra-firm__1078996_pe857423_s5.jpg?f=xxs" alt="Mountains"/>
      </div>
      </div>
      <hr className="roundedd" /> 
      <div className="products--price">
      <h1 className="row-title-main-1"> Beds</h1>
      <div className="scroll-container">
        <img src="https://www.ikea.com/in/en/images/products/grimsbu-bed-frame-grey__1101968_pe866785_s5.jpg?f=xxs" alt="Cinque Terre"/>
        <img src="https://www.ikea.com/in/en/images/products/songesand-bed-frame-with-2-storage-boxes-white__1101546_pe866675_s5.jpg?f=xxs" alt="Forest"/>
        <img src="https://www.ikea.com/in/en/images/products/nodeland-bed-frame-medium-brown__0752413_pe747432_s5.jpg?f=xxs" alt="Northern Lights"/>
        <img src="https://www.ikea.com/in/en/images/products/songesand-bedroom-furniture-set-of-5-brown__1102148_pe866547_s5.jpg?f=xxs" alt="Mountains"/>
        <img src="https://www.ikea.com/in/en/images/products/grimsbu-bed-frame-grey__1101950_pe866876_s5.jpg?f=xxs" alt="Cinque Terre"/>
        <img src="https://www.ikea.com/in/en/images/products/songesand-bed-frame-brown-luroey__1101505_pe866684_s5.jpg?f=xxs" alt="Forest"/>
        <img src="https://www.ikea.com/in/en/images/products/slaekt-bed-frame-with-underbed-and-storage-white__0876382_pe691863_s5.jpg?f=xxs" alt="Northern Lights"/>
        <img src="https://www.ikea.com/in/en/images/products/idanaes-upholstered-ottoman-bed-gunnared-dark-grey__1079006_pe857430_s5.jpg?f=xxs" alt="Mountains"/>
      </div>
      </div>
      <hr className="roundedd" /> 
      <div className="products--price">
      <h1 className="row-title-main-1"> Tables and stuff</h1>
      <div className="scroll-container">
        <img src="https://www.ikea.com/in/en/images/products/sandsberg-table-black__1056658_pe848456_s5.jpg?f=xxs" alt="Cinque Terre"/>
        <img src="https://www.ikea.com/in/en/images/products/torald-desk-white__1073186_pe855653_s5.jpg?f=xxs" alt="Forest"/>
        <img src="https://www.ikea.com/in/en/images/products/lagkapten-alex-desk-white__1028366_pe835304_s5.jpg?f=xxs" alt="Northern Lights"/>
        <img src="https://www.ikea.com/in/en/images/products/nodeland-coffee-table-medium-brown__0974638_pe812501_s5.jpg?f=xxs" alt="Mountains"/>
        <img src="https://www.ikea.com/in/en/images/products/lagkapten-adils-desk-white__1028412_pe835341_s5.jpg?f=xxs" alt="Cinque Terre"/>
        <img src="https://www.ikea.com/in/en/images/products/knarrevik-bedside-table-black__0858302_pe669481_s5.jpg?f=xxs" alt="Forest"/>
        <img src="https://www.ikea.com/in/en/images/products/utespelare-gaming-desk-black__0997777_pe822755_s5.jpg?f=xxs" alt="Northern Lights"/>
        <img src="https://www.ikea.com/in/en/images/products/rian-side-table-white__0773140_pe756199_s5.jpg?f=xxs" alt="Mountains"/>
      </div>
      </div>
      <hr className="roundedd" /> 
      <div className="products--price">
      <h1 className="row-title-main-1"> Mattress</h1>
      <div className="scroll-container">
        <img src="https://www.ikea.com/in/en/images/products/valevag-pocket-sprung-mattress-firm-light-blue__0928313_pe789779_s5.jpg?f=xxs" alt="Cinque Terre"/>
        <img src="https://www.ikea.com/in/en/images/products/vesteroey-pocket-sprung-mattress-firm-light-blue__0928312_pe789777_s5.jpg?f=xxs" alt="Forest"/>
        <img src="https://www.ikea.com/in/en/images/products/afjaell-foam-mattress-firm-white__0857895_pe649180_s5.jpg?f=xxs" alt="Northern Lights"/>
        <img src="https://www.ikea.com/in/en/images/products/soederhamn-corner-sofa-6-seat-fridtuna-light-beige__1057737_pe848946_s5.jpg?f=xxs" alt="Mountains"/>
        <img src="hhttps://www.ikea.com/in/en/images/products/hammarn-sofa-bed-knisa-dark-grey-black__0833786_pe641354_s5.jpg?f=xxs" alt="Cinque Terre"/>
        <img src="https://www.ikea.com/in/en/images/products/ekenaeset-3-seat-sofa-kilanda-light-beige__1109715_pe870183_s5.jpg?f=xxs" alt="Forest"/>
        <img src="https://www.ikea.com/in/en/images/products/ektorp-3-seat-sofa-kilanda-dark-blue__1194842_pe902092_s5.jpg?f=xxs" alt="Northern Lights"/>
        <img src="https://www.ikea.com/in/en/images/products/hemnes-day-bed-w-3-drawers-2-mattresses-white-vannareid-extra-firm__1078996_pe857423_s5.jpg?f=xxs" alt="Mountains"/>
      </div>
      </div>
  </div>
    </div>
  );
};

export default Choice;
