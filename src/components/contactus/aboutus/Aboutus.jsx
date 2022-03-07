import React from 'react'
import './aboutus.css';
import logo from './doctor image.png'
export default function Aboutus() {
    return (
        <div className='AboutUs'>
            <div className="CONTENT">
                <div className="Content-1">
                    <div className='Header-1'>
                        <h1>Our Mission</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora a veniam itaque odit voluptatibus corporis, temporibus laboriosam doloremque aperiam harum cupiditate quibusdam non quasi tempore molestiae delectus reprehenderit eius fugit!</p>
                    </div>
                </div>
                <div className="Content-2">
                    <div className="Header-2">
                        <h1>Our Vision</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime architecto at nulla earum enim. Modi, cum tenetur ducimus enim repudiandae recusandae ad sed unde officia nihil, eos fugit quia dignissimos?</p>
                    </div>
                </div>
                <div className="Content-3">
                    <div className="Header-3">
                        <h1>Who We Are ?</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque tempore quo magnam voluptas ipsa, hic dignissimos, quos minima eaque repellendus vitae nam perspiciatis quibusdam explicabo! Repudiandae obcaecati eligendi iure totam.</p>
                    </div>
                    <div className="Content-3-Image">
                        <img src={logo} alt="" />
                    </div>
                </div>
                <div className='Content-4'>
                    <div className="Header-4">
                        <h1>About Our Company </h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate iste, iusto voluptate qui aliquid placeat, corporis nisi fugiat omnis sint ipsum excepturi odit, nam non deleniti eaque quos ducimus possimus.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
