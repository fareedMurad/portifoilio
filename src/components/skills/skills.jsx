import React from 'react';
import {Row, Col} from 'reactstrap';
import Title from '../ui-components/title/title';
//Scss
import {CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './skills.scss';
class Skills extends React.Component {
  state = {
    percentage: 60,

    skills:[
      {
        percentage:90,
        title:"HTML/HTML5",
      }, {
        percentage:95,
        title:"CSS/CSS3",
      }, {
        percentage:80,
        title:"Javascipt",
      }, {
        percentage:90,
        title:"ReactJS",
      }, {
        percentage: 95,
        title:"React Native",
      }, {
        percentage:80,
        title:"Typescript",
      }, {
        percentage:85,
        title:"Next JS",
      },
      {
        percentage:60,
        title:"GraphQl",
      }, 
      ]
  };

  render() {
    const {percentage, skills} = this.state;
    return (
      <div id="portfolio">
        <div className="wrapper">
          <Title title="MY SKILLS" />
        </div>

        <Row className="skills">
        <Col></Col>
        {skills.map(skill =>(
          <Col md={3} sm={4} xs={6} className="text-center skill"> 
            <div className="progress_bar_wrapper text-center mx-auto">
              <CircularProgressbar
                value={skill.percentage}
                text={`${skill.percentage}%`}
                  strokeWidth={12}
                styles={{
                  width: '200px',
                  // Customize the root svg element
                  root: {},
                  // Customize the path, i.e. the "completed progress"
                  path: {
                    // Path color
                    stroke: `#43d4b7`,
                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'butt',
                    // Customize transition animation
                    transition: 'stroke-dashoffset 0.5s ease 0s',
                    // Rotate the path
                    transform: 'rotate(0.25turn)',
                    transformOrigin: 'center center',
                  },
                  // Customize the circle behind the path, i.e. the "total progress"
                  trail: {
                    // Trail color
                    stroke: 'rgba(105, 240, 213, 0.3)',
                    
                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'butt',
                    // Rotate the trail
                    transform: 'rotate(0.25turn)',
                    transformOrigin: 'center center',
                  },
                  // Customize the text
                  text: {
                    // Text color
                    fill: '#43d4b7',
                    // Text size
                    fontSize: '18px',
                    fontWeight: 'bold'
                  },
                  // Customize background - only used when the `background` prop is true
                  background: {
                    fill: '#43d4b7',
                  },
                }}
              />
            <h4 className="sub-para">{skill.title}</h4> 
            </div>
          </Col>
          ))}
          <Col></Col>
          
        </Row>
      </div>
    );
  }
}

export default Skills;
