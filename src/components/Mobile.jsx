import React from 'react';
import me from "../assets/img/me.webp"

const Mobile = (props) => {
    return (
        <>
            <div className="container d-sm-none mt-5">
      <div className="row">
        <div className="d-sm-12 mx-auto">
            <u className='text-light'>
            <h3 className='text-center'>Ferdy Barliansyah R.</h3> 
            </u>
            <h5 className='text-light text-center'>Fullstack Developer</h5>
            <div className="d-sm-none card rounded-circle mx-auto m-0"  style={{overflow:'hidden',height:'200px',width:'200px'}}>
              <img src={me} alt="" className="w-100" />
            </div>
            {props.children}
          </div>
        </div>
      </div>
        </>
    );
};

export default Mobile;