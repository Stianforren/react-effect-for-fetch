import React from 'react'
import { useEffect, useState } from 'react';

export function GetArtList() {
    const artURL = "https://boolean-uk-api-server.fly.dev/art";
    const [artList, setArtList] = useState([])
    
    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch(artURL);
        const jsonData = await response.json();
        setArtList(jsonData);
    };
    fetchData();  
    }, []);
    return artList;
}