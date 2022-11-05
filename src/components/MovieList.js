import React from 'react'
import {Row,Col} from 'react-bootstrap'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import { MovieCard } from './MovieCard'
import { BtnGroups } from './BtnGroups'


export const MovieList = ({movies}) => {
  return (
    <div className='bg-dark p-3 rounded'>
        <Row className='mt-5'>
            <Col>
            <BtnGroups />
            <div className='py-2'>{movies.length} Movies found!
            </div>
            </Col>

        </Row>
        <Row>
            <Col className='mt-3 d-flex justify-content-around flex-wrap'>
                {
                  movies.map((item)=><MovieCard key={item.imdbID} movie = {item}/>)
                }

            </Col>
        </Row>
    </div>
  )
}
