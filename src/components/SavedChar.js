import React from "react";
import { useSelector} from "react-redux";

export default function DisplayAll() {
  const chars = useSelector(state => state.starWars.savedChars)

  const allData = chars.map((data, index) => {
    const films = data.char.filmNames.map((name) => {
      return(
        <li>{name}</li>
      )
    })
    return (
      <div className='saved'>
        <h2>{data.char.name}</h2>
        <p>Gender: {data.char.gender}</p>
        <p>Hair color: {data.char.hair_color}</p>
        <p>Height: {data.char.height}cm</p>
        <p>Home planet: {data.char.planet}</p>
        <p>Appears in: </p>
        <ul className="movies">
          {films}
        </ul>
      </div>
    )
  })

  return (
    <div>
      {allData}
    </div>
  )

}

