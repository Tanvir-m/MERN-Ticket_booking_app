import { Container, Row, Col } from 'react-bootstrap';
import style from './setPrice.module.scss';
import { useContext, useEffect, useState } from 'react';
import { Context } from '../../context/Context';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SetPriceAndRange = () => {
  const context = useContext(Context);
  const navigate = useNavigate();

  const [state, setState] = useState({
    frontRowSeatsPrice: '',
    frontRowSeatsRange: '',
    secondRowSeatsPrice: '',
    secondRowSeatsRange: '',
    thirdRowSeatsPrice: '',
    thirdRowSeatsRange: '',
  });

  //   set input feild with current data

  useEffect(() => {
    const details = context.seatPriceAndRange[0];

    setState({
      ...state,
      frontRowSeatsPrice: details?.frontRowSeatsPrice,
      frontRowSeatsRange: details?.frontRowSeatsRange,
      secondRowSeatsPrice: details?.secondRowSeatsPrice,
      secondRowSeatsRange: details?.secondRowSeatsRange,
      thirdRowSeatsPrice: details?.thirdRowSeatsPrice,
      thirdRowSeatsRange: details?.thirdRowSeatsRange,
    });
  }, [context.seatPriceAndRange]);

  const updateDetails = async () => {
    try {
      await axios.put('/api/admin/', state);

      alert('update successful');
      navigate('/');
    } catch (err) {
      console.log('error in admin update');
    }
  };

  useEffect(() => {
    return async () => {
      try {
        const res = await axios.get('/api/admin/get');
        context.setSeatPriceAndRange(res.data);
      } catch (err) {
        console.log('error in set price ubmounting', err);
      }
    };
  }, []);
  return (
    <>
      <Container className="mt-5">
        <Row className={`p-5 ${style.shadow}`}>
          <h1 className="text-center py-4">Update Price And Seats</h1>
          <Col md={6} className="py-4">
            <p>First Row Price</p>
            <input
              type="text"
              className={`form-control ${style.input}`}
              placeholder="First Row Price"
              value={state.frontRowSeatsPrice}
              onChange={(e) =>
                setState({ ...state, frontRowSeatsPrice: e.target.value })
              }
            />
          </Col>
          <Col md={6} className="py-4">
            <p>First Row Seat Range</p>
            <input
              type="text"
              className={`form-control ${style.input}`}
              placeholder="First Row Seat Range"
              value={state.frontRowSeatsRange}
              onChange={(e) =>
                setState({ ...state, frontRowSeatsRange: e.target.value })
              }
            />
          </Col>
          <Col md={6} className="py-4">
            <p>Second Row Price</p>
            <input
              type="text"
              className={`form-control ${style.input}`}
              placeholder="Second Row Price"
              value={state.secondRowSeatsPrice}
              onChange={(e) =>
                setState({ ...state, secondRowSeatsPrice: e.target.value })
              }
            />
          </Col>
          <Col md={6} className="py-4">
            <p>Second Row Seat Range</p>
            <input
              type="text"
              className={`form-control ${style.input}`}
              placeholder="Second Row Seat Range"
              value={state.secondRowSeatsRange}
              onChange={(e) =>
                setState({ ...state, secondRowSeatsRange: e.target.value })
              }
            />
          </Col>
          <Col md={6} className="py-4">
            <p>Third Row Price</p>
            <input
              type="text"
              className={`form-control ${style.input}`}
              placeholder="Third Row Price"
              value={state.thirdRowSeatsPrice}
              onChange={(e) =>
                setState({ ...state, thirdRowSeatsPrice: e.target.value })
              }
            />
          </Col>
          <Col md={6} className="py-4">
            <p>Third Row Seat Range</p>
            <input
              type="text"
              className={`form-control ${style.input}`}
              placeholder="Third Row Seat Range"
              value={state.thirdRowSeatsRange}
              onChange={(e) =>
                setState({ ...state, thirdRowSeatsRange: e.target.value })
              }
            />
          </Col>

          <button className={`${style.addButton} my-4`} onClick={updateDetails}>
            Update Details
          </button>
        </Row>
      </Container>
    </>
  );
};

export default SetPriceAndRange;
