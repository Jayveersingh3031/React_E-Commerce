import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Cardsdata from './CardsData';
import "./style.css";
import { useDispatch } from 'react-redux';
import { ADD } from '../redux/actions/action';

const Cards = () => {

  const [data, setData] = useState(Cardsdata);
  const [showNotification, setShowNotification] = useState(false);
  const [progress, setProgress] = useState(100);
  const dispatch = useDispatch();
  const send = (e) => {
    dispatch(ADD(e));

    // Show notification and start progress
    setShowNotification(true);
    setProgress(100);

    // Update progress every 30ms
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev <= 0) {
          clearInterval(interval);
          setShowNotification(false);
          return 0;
        }
        return prev - 1;
      });
    }, 20);

    // Hide notification after 2 seconds
    setTimeout(() => {
      if (progress > 0) { // Only hide if the progress didn't already reach 0
        clearInterval(interval);
        setShowNotification(false);
      }
    }, 2000);
  }

  return (
    <>
      {showNotification && (
        <div className='card_details d-flex justify-content-center align-items-center'>
          <div style={{
              padding: 20, 
              position: "fixed", 
              zIndex: 999, 
              backgroundColor: "white", 
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", 
              marginTop: 50,
              width: '20rem',
              borderRadius: '5px',
              overflow: 'hidden',
          }}>
            <p style={{ fontSize: "1.5rem" }}>Your Item is added to Cart</p>
            <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                height: '5px',
                backgroundColor: 'green',
                width: `${progress}%`,
                transition: 'width 0.03s linear'
            }} />
          </div>
        </div>
      )}
      <div className='container mt-3'>
        <h2 className='text-center'>Add to Cart Project</h2>
        <div className="row d-flex justify-content-center align-items-center">
          {data.map((element, id) => (
            <Card key={id} style={{ width: '22rem', border: "none" }} className="mx-2 mt-4 card_style">
              <Card.Img variant="top" src={element.imgdata} style={{ height: "16rem" }} className="mt-3"/>
              <Card.Body>
                <Card.Title>{element.rname}</Card.Title>
                <Card.Text>
                  Price : ₹ {element.price}
                </Card.Text>
                <div className="button_div d-flex justify-content-center">
                  <Button variant="primary"  
                    onClick={() => send(element)}
                    className='col-lg-12'>Add to Cart</Button>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </>
  )
}

export default Cards;