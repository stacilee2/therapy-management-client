import React from 'react'

function Locations() {

  let locationsList = ["Southern Hills", "Northern Oaks", "Eastern Glades", "Western Fields"]



  return (
    <>
    <h2>Locations:</h2>
        { locationsList.map((location) => {
          return <div className="location-card" key={location}> {location}
          </div>
        })}
    </>
  )
}

export default Locations;
