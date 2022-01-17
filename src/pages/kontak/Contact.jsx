import React from 'react';
import contact from "../../assets/img/contact.svg"
import Bg from '../../components/Bg';
import Mobile from '../../components/Mobile';
import Sm from '../../components/Sm';
import Bottom from './Bottom';
const Contact = () => {
    return (
        <>
        <Bg gambar={contact} size="w-75">
            <div className="d-flex flex-column justify-content-center align-items-center w-75 mx-auto h-100 mt-3">
                <div className="row w-100">
                    <div className="col-sm-12">
                        <Bottom/>   
                    </div>
                </div>
            </div>
        </Bg>
        <Sm>
        <Bottom/>
        </Sm>
        <Mobile>
        <Bottom/>
        </Mobile>
        </>
    );
};

export default Contact;