import React, {Component} from 'react'; 
import {Carousel} from 'react-bootstrap';
import './../App.css';


class ControlledCarousel extends Component {
    // handleSelect(selectedIndex, e) {
    //   alert(`selected=${selectedIndex}, direction=${e.direction}`);
    //   this.setState({
    //     index: selectedIndex,
    //     direction: e.direction
    //   });
    // }
  
    render() {
      return (
        <Carousel id="carousel">
          <Carousel.Item className="item">
          <img className="img" src={process.env.PUBLIC_URL + '/images/descarga.jpeg'} />
            <Carousel.Caption>
            
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="img" src={process.env.PUBLIC_URL + '/images/des.jpeg'} />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="img" src={process.env.PUBLIC_URL + '/images/images.jpeg'} />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
    }
  }

export default ControlledCarousel;