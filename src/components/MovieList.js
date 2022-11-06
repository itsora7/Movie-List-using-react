import React, { useEffect, useState } from 'react'
import {Row,Col} from 'react-bootstrap'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import { MovieCard } from './MovieCard'
import { BtnGroups } from './BtnGroups'


export const MovieList = ({movies,handleOnDelete}) => {
  const [display, setDisplay] = useState ([])
  useEffect(()=>{
    //update the local state
    setDisplay(movies)
  }, [movies])
//render all the time => with out dependency array
//render on time and only []
// render if some specific props updates [variable]

const handleOnFileer = (str) =>{
  // console.log(str)
  // if(str === "all"){
  //   setDisplay(movies)
  //   return
  // }
str === "all" ? setDisplay (movies): setDisplay(movies.filter((item)=> item.cat === str))

}
  return (
    <div className='bg-dark p-3 rounded'>
        <Row className='mt-5'>
            <Col>
            <BtnGroups handleOnFileer={handleOnFileer}/>
            <div className='py-2'>{display.length} Movies found!!!
            </div>
            </Col>

        </Row>
        <Row>
            <Col className='mt-3 d-flex justify-content-around flex-wrap'>
                {
                  display.map((item)=><MovieCard key={item.imdbID} movie = {item} showDelete={true} func={handleOnDelete}/>)
                }

            </Col>
        </Row>
    </div>
  )
}
