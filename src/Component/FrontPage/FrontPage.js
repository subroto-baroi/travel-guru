import React from 'react';
import { useHistory } from 'react-router-dom';
import './FrontPage.css'


const FrontPage = () => {
    const history=useHistory()
    const handleRentRoom=() => {
        history.push('/booking')

    }
    return (
        <div className='front-container'>
            <div className='col-md-3  text-container'>
                <br/>
                <h1>COX'S BAZAR</h1>
                <p>Cox's bazar is best tourist place in bangladesh. The place is so beautiful for all world people.Every year more then three lac people visit this place with their family </p>
                <br/>
                <button className="btn btn-warning">Booking -&#62;</button>

            </div>
            <div className='menu-container '>             
                       
            <div class="row">
                <div onClick={handleRentRoom} className="menu-1">
                    <h3>COX'S BAZAR</h3>                                       
                    
                </div>
                <div className="menu-2">
                <h3>SUNDARBON</h3>
                </div>
                <div className="menu-3">
                <h3>SREEMONGOL</h3>
                </div>
            </div>
            
            </div>
            
        </div>
    );
};

export default FrontPage;