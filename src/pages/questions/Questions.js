import React from 'react'
import "../questions/questions.css"
import Accordion from 'react-bootstrap/Accordion';


const Questions = () => {
  const renderAccordionItems = (items) => (
    items.map(item => (
      <Accordion.Item eventKey={item.eventKey} key={item.eventKey}>
        <Accordion.Header>{item.header}</Accordion.Header>
        <Accordion.Body className='text-black'>
          {item.body}
        </Accordion.Body>
      </Accordion.Item>
    ))
  );

  return (
    <div  className='q-wrap p-3 md:block'>
          <h1 className='text-white m-4'>Tez-tez so’raladigan savollar</h1>
          <div className='flex gap-4'> 

         
    
          </div>
    </div>
  )
}

export default Questions