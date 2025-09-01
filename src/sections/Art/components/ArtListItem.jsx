import React from 'react'

function ArtListItem({art}) {
  return (
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
  )
}

export default ArtListItem
