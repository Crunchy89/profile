import React from 'react';

const Bottom = () => {
    return (
        <>
         <div className="card w-100 mt-3">
            <div className="card-body">
                <h3>Kontak</h3>
                <hr />
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" className="form-control mb-1" disabled value={`rocker.hunt@gmail.com`} />
                    <input type="text" className="form-control" disabled value={`ferdy.barliansyah@gmail.com`} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Nomor HP / WA</label>
                    <input type="text" className="form-control" disabled value={`+6287849910278`} />
                </div>
                <div className="d-flex justify-content-around align-item-center">
                    <a href="https://web.facebook.com/Fey.Shadow" rel='noreferrer' target='_blank' style={{fontSize:'40px'}}><i className="fab fa-facebook"></i></a>
                    <a href="https://www.instagram.com/ferdy_barliansyah" rel='noreferrer' target='_blank' className='text-warning' style={{fontSize:'40px'}}><i className="fab fa-instagram"></i></a>
                    <a href="https://wa.me/+6287849910278" className='text-success' rel='noreferrer' target='_blank' style={{fontSize:'40px'}}><i className="fab fa-whatsapp"></i></a>
                    <a href="https://github.com/crunchy89" className='text-secondary' rel='noreferrer' target='_blank' style={{fontSize:'40px'}}><i className="fab fa-github"></i></a>
                </div>
            </div>
        </div>   
        </>
    );
};

export default Bottom;