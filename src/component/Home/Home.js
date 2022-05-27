import React from "react"
import "./Home.css"
import hero from "../pic/viranti.png"
import skill1 from "../pic/figma.png"
import skill2 from "../pic/canva.png"
import skill3 from "../pic/ps.png"
import fb from "../pic/fb.png"
import ig from "../pic/ig.png"
import tw from "../pic/logos_twitter.png"

const Home = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            <h3>Ini Portofolio Saya</h3>
            <h1>
              Saya <span>Viranti </span>
            </h1>
            <h2>
              Saya adalah mahasiswi Program Studi Teknik Informatika, Institut Teknologi Sumatera. Saat ini saya menempuh 
              pendidikan di semester 6. Saya adalah individu yang memiliki semangat dan motivasi tinggi. Cukup terampil dalam mengoperasikan
              software desain seperi Figma, Canva, maupun Adobe Photoshop.
            </h2>

            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>Sosial Media</h4>
                <div className='button'>
                  <button className='btn_shadow'>
                    <img src={fb} alt=''/>
                  </button>
                  <button className='btn_shadow'>
                    <img src={ig} alt='https://www.instagram.com/virantii__/' />
                  </button>
                  <button className='btn_shadow'>
                    <img src={tw} alt='' /> 
                  </button>
                </div>
              </div>
              <div className='col_1'>
                <h4>Hard Skills</h4>
                <button className='btn_shadow'>
                  <img src={skill1} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill2} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill3} alt='' />
                </button>
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='right_img'>
              <img src={hero} alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home