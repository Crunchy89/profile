/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import me from "../../assets/img/me.webp";
import {Link} from "react-router-dom"
import Bg from "../../components/Bg";
import Mobile from "../../components/Mobile";

const Home = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
    <Bg gambar={me} size="h-100" >
    <div className="d-flex flex-column justify-content-center align-items-start w-75 mx-auto text-light h-100 mt-3">
            <u>
            <h3>Ferdy Barliansyah R.</h3> 
            </u>
            <h5>Fullstack Developer</h5>
            <div className="d-sm-none card rounded-circle mx-auto m-0"  style={{overflow:'hidden',height:'200px',width:'200px'}}>
              <img src={me} alt="" className="w-100" />
            </div>
            <p className="mt-2" align='justify'>Lahir pada 11 Mei 1989. Memahami JavaScript, Laravel, Codeigniter, MySQL, ReactJs. Dengan pengalaman lebih dari beberapa tahun di front-end dan back-end. Bergairah dalam mempelajari hal baru dan selalu mengikuti perkembangan teknologi terkini</p>
            <Link to="/tentang" className="btn btn-light m-1">Lihat Lebih Banyak</Link>
          </div>
    </Bg>
    <Mobile>
    <p className="mt-2 text-light p-3" align='justify'>Lahir pada 11 Mei 1989. Memahami JavaScript, Laravel, Codeigniter, MySQL, ReactJs. Dengan pengalaman lebih dari beberapa tahun di front-end dan back-end. Bergairah dalam mempelajari hal baru dan selalu mengikuti perkembangan teknologi terkini</p>
    <div className="d-flex w-100 justify-content-center">
            <Link to="/tentang" className="btn btn-light m-1">Lihat Lebih Banyak</Link>
    </div>
    </Mobile>
    </>
  );
};

export default Home;
