import React from "react";
import "./Home.css";
import Cards from "../Cards/Cards";
import { useEffect,useState } from "react";

const Home = (props) => {
  const [books, setBooks] = useState([])
  const [isLoading,setIsLoading] = useState(true);
  const [httpError,setHtttpError] = useState(null);

useEffect(()=>{
  const fetchBooks = async()=>{
    setIsLoading(true);
    const response = await fetch("https://my-shop-8f66c-default-rtdb.firebaseio.com/books.json");

    if(!response.ok){
      throw new Error('Something went wrong!');
    }

    const responseData = await response.json();

    const loadedBooks = [];

    for(const key in responseData){
      loadedBooks.push({
        id:key,
        title:responseData[key].title,
        author:responseData[key].author,
        img:responseData[key].img,
        price:responseData[key].price,
        amount:responseData[key].amount


      });
    }
    setBooks(loadedBooks);
    setIsLoading(false);
  };

  fetchBooks().catch((error)=>{
    setIsLoading(false);
    setHtttpError(error.message);
  });

},[])

if(isLoading){
  return <section className="loading">
    <p>Loading...</p>
  </section>
}

if(httpError){
  return <section className="error">
  <p>{httpError}</p>
</section>
}

  return (
    <section>
      {books.filter((product) => product.title.toLowerCase().includes(props.item)).map((product) => (
          <Cards
            key={product.id}
            product={product}
            handleClick={props.handleClick}
          />
        ))}
    </section>
  );
};

export default Home;
