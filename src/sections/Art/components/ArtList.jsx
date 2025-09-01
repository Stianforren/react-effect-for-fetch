import React from 'react'
import { GetArtList } from "./GetArtList";
import ArtListItem from './ArtListItem';

function ArtList() {

    const artList = GetArtList()

    return (
        <section>
        <h2>Arts Section</h2>
        <div className="scroll-container">
            {artList.map((art) => (
                <ArtListItem art={art} key={art.id}/> 
            ))}
        </div>
        </section>
  )
}

export default ArtList
