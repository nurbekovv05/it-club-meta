
import React, {useState} from 'react';
import Bigmodal from "./Pageses/Bigmodal";
import Buys from "./Pageses/Buys";
import Exitmodal from "./Pageses/Exitmodal";
import Paymodal from "./Pageses/Paymodal";
import Submodal from "./Pageses/Submodal";
import Prof from "./Pageses/Prof";
import { FaRegComment, FaRegUser, FaUserCircle} from "react-icons/fa";
import {FiCreditCard} from "react-icons/fi";
import {BiBasket} from "react-icons/bi";
import {BsWallet2} from "react-icons/bs";
import {RxExit} from "react-icons/rx";

const Profile = () => {

    const [modal, setModal] = useState('data')

    const fn = () => {
        setModal('card')
    }

    return (
        <>
            <div id='admin-panel'>
                <div className="container">
                    <div className="admin-panel">



                        <div className='admin-panel--prof'>

                            <div className="profile">
                                <FaUserCircle style={{fontSize:'100px', background:'white', color:'#DCDCDC', marginTop:'30px'}}/>
                                <button className='photo'>Добавить фото</button>

                                <button style={{color: modal==='data' ? '#0272CE' : 'black'}}
                                        onClick={() => setModal('data')}
                                ><FaRegUser className='icon' style={{color: modal==='data' ? '#0272CE' : 'black', marginLeft:'-40px'}}/> Личные данные</button>
                                <div className="line" style={{border:'1px solid #DCDCDC', width:'352px', margin:'13px 0'}}></div>


                                <button style={{color: modal==='card' ? '#0272CE' : 'black'}}
                                        onClick={() => setModal('card')}>
                                    <BsWallet2 className='icon' style={{color: modal==='card' ? '#0272CE' : 'black', marginLeft:'-30px'}}/> Платежные карты</button>
                                <div className="line" style={{border:'1px solid #DCDCDC', width:'352px', margin:'13px 0'}}></div>


                                <button style={{color: modal==='sub' ? '#0272CE' : 'black'}}
                                        onClick={() => setModal('sub')}>
                                    <FiCreditCard className='icon' style={{color: modal==='sub' ? '#0272CE' : 'black', marginLeft:'-68px'}}/> Подписки</button>
                                <div className="line" style={{border:'1px solid #DCDCDC', width:'352px', margin:'13px 0'}}></div>


                                <button style={{color: modal==='com' ? '#0272CE' : 'black'}}
                                        onClick={() => setModal('com')}>
                                    <FaRegComment className='icon' style={{color: modal==='com' ? '#0272CE' : 'black', marginLeft:'-49px'}}/> Комментарии</button>
                                <div className="line" style={{border:'1px solid #DCDCDC', width:'352px', margin:'13px 0'}}></div>


                                <button style={{color: modal==='buy' ? '#0272CE' : 'black'}}
                                        onClick={() => setModal('buy')}>
                                    <BiBasket className='icon' style={{color: modal==='buy' ? '#0272CE' : 'black', marginLeft:'-54px'}}/> Мои покупки</button>
                                <div className="line" style={{border:'1px solid #DCDCDC', width:'352px', margin:'13px 0'}}></div>


                                <button
                                    style={{color: modal==='mod' ? '#0272CE' : 'black'}}>
                                    <RxExit style={{color: modal==='mod' ? '#0272CE' : 'black', background:'transparent', fontSize:'20px', marginLeft:'-82px'}}/> Выйти</button>

                            </div>
                            <Bigmodal modal={modal} fn={fn}/>
                            <Buys modal={modal} fn={fn}/>
                            <Exitmodal modal={modal} fn={fn}/>
                            <Paymodal modal={modal} fn={fn}/>
                            <Prof modal={modal} fn={fn}/>
                            <Submodal modal={modal} fn={fn}/>

                        </div>


                    </div>
                </div>
            </div>


        </>
    );
};

export default Profile;