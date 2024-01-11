import React from 'react';
import '../component/Main.css';

const Main = (props) => {
    

  return (
    <div className='container--main'>
        <div className="heading--main">
            <h1 style={{fontSize: '1.8rem'}}>{props.greating}</h1>
            <h5 style={{fontSize: '1.2rem'}}>{props.wish}</h5><br />
            <h1 style={{fontSize: '1.2rem'}}>{props.target}</h1><br />
            <hr className="rounded"/>
        </div>
    </div>
  )
}

export default Main
