import React, { useState } from 'react';
import Card from './Card.jsx';
import mangasData from "./mangas.json";
function List() {

  const [mangas, setProduct] = useState(mangasData.mangasData);
  const [favs, setFavs] = useState([]);
    
  const handleFavClick = (mangaId) => {

    if(favs.includes(mangaId)) {
      const newFavs = favs.filter( (singleFav) => {
        return mangaId !== singleFav;
      });
      setFavs(newFavs);
    } else {
      setFavs([...favs, mangaId]);
    }
  }

  const CartClick = (manga) => {
    alert(`${manga.name} added to cart!`)
  }
  return (


    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 bg-purple-200 rounded-lg min-h-screen w-2/3 mx-auto">
            {mangas.map((singleManga) => {

              return (
                <Card key={singleManga.id} manga={singleManga} favourites={favs} handleFavClick={handleFavClick} CartClick={CartClick}/>
              )
            })}
          </div>

  );
}
export default List;