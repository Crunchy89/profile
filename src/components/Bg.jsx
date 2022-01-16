import React from 'react';
import bg from "../assets/img/bg.png"

const Bg = (props) => {
    return (
        <>
            <div className="container border d-none d-md-block d-lg-block mt-5">
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-6" style={{backgroundImage:`url('${bg}')`,backgroundSize:'cover'}}>
          <div className="d-flex flex-column align-items-center justify-content-center" style={{height:'80vh',overflow:'hidden'}}>
          <img src={props.gambar} alt="Gambar" className={`${props.size}`} />
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6">
          {props.children}
        </div>
      </div>
    </div>
        </>
    );
};

export default Bg;