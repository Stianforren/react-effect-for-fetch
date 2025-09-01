import ArtList from "./components/ArtList";
import { useState, useEffect } from "react";

function ArtsSection() {

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
  // console.log(artList)
  // return artList;
  return (
  <>
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        {artList.map((art) => (
            <ul className="art-list" key={art.id}>
                <li>
                <div className="frame">
                    <img
                    src= {`https://boolean-uk-api-server.fly.dev${art.imageURL}`}
                    />
                </div>
                <h3>{art.title}</h3>
                <p>Artist: {art.artist}</p>
                <h4>Publication History:</h4>
                <ul>
                    {art.publicationHistory.map((line) => (
                    <li key={art.id+line}>{line}</li>
                ))}
                </ul>
                </li>
            </ul>
        
              ))}</div>
    </section>
  </>
  );
}

export default ArtsSection
