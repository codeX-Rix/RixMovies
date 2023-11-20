import React, { createContext, useContext, useEffect, useState } from "react";

const AppContext = React.createContext();

const API_URL = 'http://www.omdbapi.com/?apikey=76f24ca8&s=batman'

const AppProvider = ({ children }) => {

  const [isLoading, setIsLoading] = useState(true)
  const [movie, setMovie] = useState([]);
  const [isError, setIsError] = useState({ show: false, msg: "" })
  const getMovies = async (url) => {
    try{
      const res = await fetch(url);
      const data = await res.json();
      
      if(data.Response === "True"){
        setMovie(data.Search)
      }else{
        setIsError({
          show: true,
          msg: data.error
        })
      }
    }catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    getMovies(API_URL)
  })

  return <AppContext.Provider value={"rixShaikh"}>{children}</AppContext.Provider>;
};

const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider, useGlobalContext};
