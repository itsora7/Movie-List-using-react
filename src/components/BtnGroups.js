import React from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'

export const BtnGroups = ({handleOnFileer}) => {
  return (
    <ButtonGroup aria-label="Basic example">
    <Button onClick={()=>handleOnFileer("all")} variant="primary">All</Button>
    <Button onClick={()=>handleOnFileer("happy")} variant="danger">Happy</Button>
    <Button onClick={()=>handleOnFileer("lazy")} variant="warning">Lazy</Button>
  </ButtonGroup>
  )
}
