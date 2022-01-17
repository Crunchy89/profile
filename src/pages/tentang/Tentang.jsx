import React from 'react';
import Bg from '../../components/Bg';
import about from "../../assets/img/about.svg"
import desk from "../../assets/img/teacher-desk.gif"
import diploma from "../../assets/img/diploma.gif"
import folders from "../../assets/img/folders.gif"
import workplace from "../../assets/img/workplace.gif"
import phising from "../../assets/img/phishing.gif"
import Modal from './Modal';
import Mobile from '../../components/Mobile';
import Sm from '../../components/Sm';


const img=[{id:'project',img:desk},{id:'pendidikan',img:diploma},{id:'skill',img:folders},{id:'pengalaman',img:workplace},{id:'data',img:phising}]

const Tentang = () => {
    return (
        <>
            <Bg gambar={about} size="w-75">
                <div className="container h-100">
                <div className="d-flex flex-column justify-content-center align-items-center h-100">
                    <h3 className='text-light'>Tentang saya</h3>
                    <hr className='text-ligh' />
                    <div className="row">
                    {img.map((row,i)=>(
                        <div key={i} className='col-sm-6 col-md-4 col-lg-3 p-1' data-toggle="tooltip" data-placement="top" title={row.id}>
                    <a href='#' role='button'  data-toggle="modal" data-target={`#${row.id}`} style={{width:'120px',height:'120px',overflow:'hidden'}}>
                        <img src={row.img} alt="desk" className='w-100' />
                    </a>
                        </div>
                    ))}
                    </div>
                </div>
                </div>
            </Bg>
            <Sm>
            <div className="d-flex flex-column justify-content-center align-items-center mt-3">
                    <h3 className='text-light'>Tentang saya</h3>
                    <hr className='text-ligh' />
                    <div className="d-flex flex-wrap justify-content-around">
                    {img.map((row,i)=>(
                    <a href='#' role='button' key={i} className='m-1' data-toggle="modal" data-target={`#${row.id}`} style={{width:'80px',height:'80px',overflow:'hidden'}}>
                        <img src={row.img} alt="desk" className='w-100' />
                    </a>
                    ))}
                    </div>
                </div>
            </Sm>
            <Mobile>
            <div className="d-flex flex-column justify-content-center align-items-center mt-3">
                    <h3 className='text-light'>Tentang saya</h3>
                    <hr className='text-ligh' />
                    <div className="d-flex flex-wrap justify-content-around">
                    {img.map((row,i)=>(
                    <a href='#' role='button' key={i} className='m-1' data-toggle="modal" data-target={`#${row.id}`} style={{width:'80px',height:'80px',overflow:'hidden'}}>
                        <img src={row.img} alt="desk" className='w-100' />
                    </a>
                    ))}
                    </div>
                </div>
            </Mobile>
            <Modal id='project' title='Project'>
                <ul>
                    <li>Pemilihan lokasi pembangunan perumahan menggunakan metode AHP framework laravel</li>
                    <li>Aplikasi Penilaian Dosen menggunakan metode ARAS framework laravel</li>
                    <li>Aplikasi pendataan konstituen dewan partai Gerindra framework ci 3</li>
                    <li>Frontend Aplikasi e-learning Zahra Computer framework React JS</li>
                    <li>Aplikasi Point Of Sale (POS) menggunakan ci3</li>
                    <li>Mengintegrasikan pembayaran SIAKAD universitas Qomarul Huda Bagu dengan API Bank NTB Syariah framework Lumen</li>
                </ul>
            </Modal>
            <Modal id='pendidikan' title='Pendidikan'>
                <ul>
                    <li>SDN 4 Kopang (1997 - 2003)</li>
                    <li>SMPN 1 Kopang (2003 - 2005)</li>
                    <li>SMAN 1 Kopang (2005 - 2007)</li>
                    <li>STMIK Lombok (2017 - sekarang)</li>
                </ul>
            </Modal>
            <Modal id='skill' title='Skill'>
                <ul>
                    <li>HTML (4 tahun)</li>
                    <li>CSS (4 tahun)</li>
                    <li>PHP (3 tahun)</li>
                    <li>Mysql (3 tahun)</li>
                    <li>Javascipt (3 tahun)</li>
                    <li>JQuery (3 tahun)</li>
                    <li>CI 3 (3 tahun)</li>
                    <li>Bootstrap (2 tahun)</li>
                    <li>laravel (2 tahun)</li>
                    <li>React JS (2 tahun)</li>
                </ul>
            </Modal>
            <Modal id='pengalaman' title='Pengalaman Kerja'>
                <ul>
                    <li>Guru Honorer SMKS Al-Hasanain NU Beraim ( 2019 - sekarang )</li>
                    <li>Freelance programer di universitas qomarul huda bagu (2020 - 2021)</li>
                </ul>
            </Modal>
            <Modal id='data' title='Data diri'>
                <div className="form-group">
                    <label htmlFor="nama">Nama</label>
                    <input type="text" disabled className="form-control" value={`Ferdy Barliansyah R.`} />
                </div>
                <div className="form-group">
                    <label htmlFor="alamat">Alamat</label>
                    <textarea name="alamat" id="alamat" disabled cols="5" value={`kmp. LOK, Desa Kopang Rembiga, Kec. Kopang, Kab. Lombok Tengah, Prov. NTB`} rows="3" className="form-control">
                    </textarea>
                </div>
            </Modal>
        </>
    );
};

export default Tentang;