import React from "react";
import IonIcon from '@reacticons/ionicons';
import styles from "./Card.module.css";


function Card( { manga, favourites, handleFavClick, CartClick } ){

    return(
        <div className="bg-gray-200 w-90 rounded-lg shadow-lg ">
          <div key={manga.id}> 
                  <img src={manga.image}  className="w-full h-100  rounded-lg shadow-lg object-cover"/>
                  
                  <div className="p-2 flex flex-col justify-between flex-grow">
                      <h1 className="flex font-semibold  px-4 ">{manga.name}</h1>
                      <h2 className="flex font-semibold  px-4">{manga.author}</h2>
                      <p className="flex mb-1 text-lg lg:text-md md:text-sm  px-4">{manga.description}</p>

                    <div className="flex items-center justify-between px-4 py-2"> 

                      <p>${ manga.price }</p>
            
                      <div className="flex space-x-4 text-red-500">
                        <button onClick={ () => {
                          CartClick(manga)
                          }}>
                            <IonIcon name="cart-outline" size="large" />
                        </button>
                        
                        <button className="flex text-red-500"onClick={ () => {
                            handleFavClick(manga.id)
                          }}>
                          {favourites.includes(manga.id) ? <IonIcon name="heart" size="large" /> : <IonIcon name="heart-outline"  size="large"/> }
                        </button>
                      </div>

                    </div>
                      
                    
                  </div>
          </div>
        </div>
    );
}


export default Card;