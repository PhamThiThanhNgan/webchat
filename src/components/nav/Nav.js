import React, { Component } from "react";
import  '../nav/Nav.scss'

import ngan from '../../asset/image/ngan.jpg'
export default function Nav() {
 function SingOut(params) {
  window.localStorage.removeItem('accessToken');
  window.location.reload();
 }; 
  
    return (
      <div className='containerr'>
            <section className='seting'>
                <div className='avt'>
                    <img src={ngan} alt="avt"/>
                </div>
                <div className='chatgroup '><i class="fa fa-comment-dots"></i></div>
                <div className='list'><i class="fa fa-address-book"></i></div>
                <div className='add'><i class="fa fa-user-plus"></i></div>
                <div className='cloud'><i class="fa fa-cloud"></i></div>
                <div className='bussiness'><i class="fa fa-suitcase"></i></div>
                <div className='cofig'><i class="fa fa-cog"></i></div>
                <div className='singout' onClick={SingOut}><i class="fa fa-sign-out-alt"></i>

                </div>
            </section>
      </div>
    );
  
}
