import React, { useEffect, useState } from "react";

import axios from "../utils/Axios"

const Gallery = () => {
  const [gallery, setgallery] = useState([]);

  const getgallery = async () => {
    try {
      const response = await axios.get("/products");
      console.log(response.data);
      setgallery(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    getgallery();
  },[]);

  return (
    <div>
      <h1>Calling API</h1>
      <button>Get Gallery</button>
      <hr />
     
    </div>
  );
};

export default Gallery;
