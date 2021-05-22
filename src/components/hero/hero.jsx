import React from "react";
import { Row, Col } from "react-flexbox-grid";
// SCSS
import "./hero.scss";
//Assets
import HeroImage from '../../assets/hero/man-with-laptop_126546-10.png';
//Components
import Button from '../ui-components/button/button';

const hero = () => (
  <div className="hero" id="hero">
    <div className="wrapper">
      <Row>
        <Col md={12} lg={6}>
          <div className="hero-info">
            <h1 className="weight800 font60">Hello!!!</h1>
            <h1 className="weight800 font60">
            I'm Fareed <br />Murad
            </h1>
            <p className="font12">
              Front-End Developer having more then two years of Experience, <br />
              <span className="sub-para text-red">HTML - HTML5 - CSS - CSS3 - Bootstrap - Javascript - Typescipt - NextJs - ReactJs - Redux/Redux-saga - React-native - NodeJs - GraphQL - Firebase.  </span>
            </p>
            <Button label="SEND MESSAGE" target={"contact"} />
          </div>
        </Col>
        <Col md={12} lg={6}>
          <div className="hero-image">
            <img src={HeroImage} alt="hero"  />
          </div>
        </Col>
      </Row>
    </div>
  </div>
);

export default hero;
