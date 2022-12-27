import React from 'react'
import './template.css'

const ContentBlock = ({firstLine,secondLine, endLine}) => {
  return (
    <div className='contentblock__container'>
      
      <div className='contentblock__firstline'>{firstLine} </div>
      <div className='contentblock__secondline'>{secondLine}</div>
      <div className='contentblock__endline'>{endLine}</div>

      
      </div>
  )
}

export default ContentBlock 