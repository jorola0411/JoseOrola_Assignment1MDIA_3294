import React from "react";
import IonIcon from '@reacticons/ionicons';


function Card( { manga, favourites, handleFavClick } ){

    return(
        <div className="flex items-center justify-center min-h-screen bg-gray-100 w-90">
        <div key={manga.id}> 
                 <img src={manga.image}  className="w-full h-100  object-cover"/>
                 
                 <div className="p-2 flex flex-col justify-between flex-grow">
                  <h1 className="font-semibold  px-4 ">{manga.name}</h1>
                  <h2 className="font-semibold  px-4">{manga.author}</h2>
                  <p className="mb-1 text-lg lg:text-md md:text-sm  px-4">{manga.description}</p>

                  <div className="flex items-center justify-between px-4 py-2"> 
                  <p>${ manga.price }</p>
               

                  <div className="flex items-center space-x-4 text-red-500">
                  <button>
                  <IonIcon name="cart-outline" size="large" />
                    </button>
                  <button className="text-red-500"onClick={ () => {
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