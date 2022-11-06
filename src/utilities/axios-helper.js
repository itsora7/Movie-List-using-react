import axios from 'axios'


export const fetchData = (str) =>{
    // const apiEP = "https://www.omdbapi.com/?apikey=576ee62b&t=" + str
    const apiEP = `https://www.omdbapi.com/?apikey=${process.env.REACT_API_KEY}&t=${str}`
    console.log(str)
    const response = axios(apiEP)
    // console.log(response)
    return response

}
