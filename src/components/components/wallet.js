import React from 'react';
import useAuth from './../../context/useAuth';
import { useNavigate } from '@reach/router';
import { useState } from 'react';

const Wallet= () => {
    //Routing
    const [ openMassage , setOpenMassage ] = useState(false)
    const handleCongratulationModal = () =>{
        setOpenMassage(!openMassage)
    }
    const navigator = useNavigate()
    const {user} = useAuth()
    const handleWallet = () =>{
        if( user.uid ){
            // handleCongratulationModal()
            alert("Congratulation! You are getting A Wallet");
        }else{
            navigator('/login')
        }
    }

   
return (
  <div className="row">
    <div className="col-lg-3 mb30">
        <span className="box-url" onClick={ handleWallet } >
            <span className="box-url-label">Most Popular</span>
            <img src="./img/wallet/1.png" alt="" className="mb20"/>
            <h4>Metamask</h4>
            <p>Start exploring blockchain applications in seconds.  Trusted by over 1 million users worldwide.</p>
        </span>
    </div>
    <div className="col-lg-3 mb30">
        <span className="box-url" onClick={ handleWallet }>
            <img src="./img/wallet/2.png" alt="" className="mb20"/>
            <h4>Bitski</h4>
            <p>Bitski connects communities, creators and brands through unique, ownable digital content.</p>
        </span>
    </div>       

    <div className="col-lg-3 mb30">
        <span className="box-url" onClick={ handleWallet }>
            <img src="./img/wallet/3.png" alt="" className="mb20"/>
            <h4>Fortmatic</h4>
            <p>Let users access your Ethereum app from anywhere. No more browser extensions.</p>
        </span>
    </div>    

    <div className="col-lg-3 mb30">
        <span className="box-url" onClick={ handleWallet }>
            <img src="./img/wallet/4.png" alt="" className="mb20"/>
            <h4>WalletConnect</h4>
            <p>Open source protocol for connecting decentralised applications to mobile wallets.</p>
        </span>
    </div>

    <div className="col-lg-3 mb30">
        <span className="box-url" onClick={ handleWallet }>
            <img src="./img/wallet/5.png" alt="" className="mb20"/>
            <h4>Coinbase Wallet</h4>
            <p>The easiest and most secure crypto wallet. ... No Coinbase account required.
            </p>
        </span>
    </div>

    <div className="col-lg-3 mb30">
        <span className="box-url" onClick={ handleWallet }>
            <img src="./img/wallet/6.png" alt="" className="mb20"/>
            <h4>Arkane</h4>
            <p>Make it easy to create blockchain applications with secure wallets solutions.</p>
        </span>
    </div>       

    <div className="col-lg-3 mb30">
        <span className="box-url" onClick={ handleWallet }>
            <img src="./img/wallet/7.png" alt="" className="mb20"/>
            <h4>Authereum</h4>
            <p>Your wallet where you want it. Log into your favorite dapps with Authereum.</p>
        </span>
    </div>    

    <div className="col-lg-3 mb30">
        <span className="box-url" onClick={ handleWallet }>
            <span className="box-url-label">Most Simple</span>
            <img src="./img/wallet/8.png" alt="" className="mb20"/>
            <h4>Torus</h4>
            <p>Open source protocol for connecting decentralised applications to mobile wallets.</p>
        </span>
    </div>    
    {
        /*
        <div className={openMassage ? `custm_modal d-block`: `d-none`}>
            <div className='custm_modal_body p-3'>
                <div className='d-flex justify-content-between align-items-center'>
                    <span className='closebtn' onClick={handleCongratulationModal} style={{cursor:"pointer", color:"white"}}>&times;</span>
                </div>
               <div className='py-5'>
                    <h4 className='text-white'>Congratulation ! you earn a Wallete</h4>
               </div>
            </div>
        </div>
        */
    }                              
</div>
)};
export default Wallet;