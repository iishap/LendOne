import React from 'react'
import Spline from '@splinetool/react-spline';
import { useNavigate } from 'react-router-dom';
import logo1 from "../../../assets/banner.png";
import logo2 from "../../../assets/logo3.png";

// const spline = "https://prod.spline.design/PRWhJdqWeznu6IS5/scene.splinecode"
// https://my.spline.design/splinereactlogocopycopy-eaa074bf6b2cc82d870c96e262a625ae/
// https://my.spline.design/draganddropsnapcopy-c3797074b500891b2eec6c5f0775d2a9/
// https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode
// https://prod.spline.design/S8o9DE-254xyJ0lv/scene.splinecode
// https://prod.spline.design/sykMmenBeRXsJkYD/scene.splinecode
// https://prod.spline.design/2fzdsSVagfszNxsd/scene.splinecode
// https://prod.spline.design/GtJ1raVhyFC17AGC/scene.splinecode
const spline = "https://prod.spline.design/sykMmenBeRXsJkYD/scene.splinecode"
const Hero = () => {
    const navigate = useNavigate();
  return (
    <div className="flex w-full mf:flex-row flex-col justify-center items-center bg-gradient-to-br from-stone-950 to-red-900">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 px-4">
        <div className="flex flex-1 justify-center items-center flex-col mf:mr-10 font-bold ">
        <img src={logo2} alt="welcome" className="w-40 cursor-pointer" />
        {/**
          <h1 className="text-5xl sm:text-7xl text-yellow-400 font-semibold">
            LENDONE FINANCE<br />
          </h1><br />
          <p className="text-center mt-1 text-white md:w-10/12 w-11/12 text-2xl font-black">
            Multi-chain Lending Protocol
          </p>
          */}
          <br />
           
          <div className="md:flex-[0.8] flex-initial justify-left items-center">

            <img src={logo1} alt="welcome" className="w-100 cursor-pointer" />
          </div>

          <br />

          <button
            type="button"
            // onClick={connectWallet2}
            onClick={()=> { navigate('/main');}}
            className="flex flex-row justify-center items-center my-5 bg-red-700 p-3 rounded-full cursor-pointer hover:bg-green-600 hover:text-white"
          >

            <p className="text-white text-3xl font-semibold py-1 px-6 mx-14 hover:text-red-700">
            Launch App
            </p>
          </button>
          <div className="text-white text-4xl font-semibold mx-4 my-2 ">
         zkEVM, Arbitrium, Celo, Mantle, Filecoin, Scroll, Base, XDC, OKX, ZetaChain
        </div>
        </div>
      </div>

    </div>


  )
}

export default Hero
