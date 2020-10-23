import React from 'react'
import CardItem from './CardItem'
import './Cards.css';
function Cards() {
    return (
        <div className='cards'>
            <h1>Check out this epic desings!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src="images/image1.jpg"
                        text="A web desing picture"
                        label='Example #1'
                        path='/services'
                        
                        />
                         <CardItem 
                        src="images/image2.png"
                        text="Another web desing picture"
                        label='Example #2'
                        path='/services'
                        
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        src="images/image3.png"
                        text="Check this one out"
                        label='Example #3'
                        path='/services'
                        
                        />
                         <CardItem 
                        src="images/image4.jpg"
                        text="This is just an image relate to web desing"
                        label='Example #4'
                        path='/services'
                        
                        />
                         <CardItem 
                        src="images/image5.jpg"
                        text="The last One!"
                        label='Example #5'
                        path='/services'
                        
                        />
                    </ul>

                </div>

            </div>
        </div>
    )
}

export default Cards
