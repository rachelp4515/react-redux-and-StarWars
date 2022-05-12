export const SEARCH = "SEARCH"
export const ADD_CHAR = "ADD_CHAR"

export const search = (search_input) => {

  return async (dispatch) => {

    const path = `https://swapi.dev/api/people/${search_input}`
    const res = await fetch(path)
    const json = await res.json()
    const {name, height, hair_color, gender, homeworld, film } = json

    const res2 = await fetch(homeworld)
    const json2 = await res2.json()
    const planet = json2.name

    const filmsRes = await Promise.all(json.films.map(film => fetch(film)))
    const filmJson = await Promise.all(filmsRes.map(res => res.json()))
    const filmNames = filmJson.map(film => film.title)

    console.log(filmNames)

    dispatch({
      type: SEARCH, 
      payload: {name, height, hair_color, gender, planet, filmNames}
    })

  }

}

export const addChar = (char) => {
  return {
    type: ADD_CHAR,
    payload: {char}
  }
}