import { useState, useContext, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Context } from '../../context/Context';
import style from '../FirstRow/firstRow.module.scss';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ArmChairs = () => {
  const context = useContext(Context);
  const navigate = useNavigate();
  const localStorageData = JSON.parse(localStorage.getItem('userDetails'));

  const [seatsData, setSeatsData] = useState([]);
  const [selectSeats, setSelectSeats] = useState([]);
  const [ab, setAb] = useState([]);

  const userName = context.userDetails?.userName;

  useEffect(() => {
    setSeatsData(
      context.range(
        context.seatPriceAndRange[0]?.frontRowSeatsRange + 1,
        context.seatPriceAndRange[0]?.secondRowSeatsRange
      )
    );
  }, [context.seatPriceAndRange]);

  const selectSeatClickHandler = (num, index) => {
    let selectNumber = 0;
    let bookedSeats = 0;
    for (let i = 0; i < context.selectSeats.length; i++) {
      if (context.selectSeats[i]?.seatNumber === num) {
        selectNumber = num;
      }
    }
    for (let i = 0; i < context.all.length; i++) {
      if (context.all[i]?.seatNumber === num) {
        bookedSeats = num;
      }
    }
    if (localStorageData?.userName == undefined) {
      alert('Please Login');
      navigate('/login');
    } else if (selectNumber === num) {
      alert('Already selected');
    } else if (bookedSeats === num) {
      alert('Already booked');
    } else {
      context.setSelectColor(num);
      let items = [...context.selectSeats];
      items.push({
        seatNumber: num,
        name: userName,
        prise: 300,
        catagory: 'second',
        isReserved: true,
        select: true,
      });
      context.setSelectSeats(items);
    }
  };

  const classData = (ele, index) => {
    for (let i = 0; i < context.all.length; i++) {
      if (
        context.all[i]?.seatNumber === ele &&
        context.all[i]?.name === userName
      ) {
        return style.userReserved;
      } else if (context.all[i]?.seatNumber === ele) {
        return style.bookedSeats;
      }
    }
  };
  return (
    <>
      <Container className="py-5">
        {/* <h5 className=" text-center text-danger">{alreadyBooked}</h5> */}
        <h2 className=" text-center text-danger">ARM CHAIRS</h2>
        <h5 className="text-center text-danger">
          RS - {context.seatPriceAndRange[0]?.secondRowSeatsPrice}/-
        </h5>
        <Row>
          {seatsData.map((ele, index) => (
            <Col md={1} key={index} style={{ padding: '0px' }}>
              <button
                disabled={false}
                className={`py-2 mt-1 ${
                  context.selectColor === ele ? style.select : style.colSeats
                }  ${classData(ele, index)}`}
                onClick={() => selectSeatClickHandler(ele, index)}
              >
                <h5 className="text-white">{ele}</h5>
              </button>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ArmChairs;
