import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import prof from '../images/prof.jpeg';


class About extends Component {
  render() {
    return(
     
      <Cell className='resume-right-col' col={4}>
            <div style={{ textAlign: 'center' }}>
              <img
                src={prof}
                alt='avatar'
                style={{ height: '400px' }}
              />
            </div>

            <h2 style={{ paddingTop: '2em' }}>Sandrine Nubia</h2>
            <h4 style={{ color: 'grey' }}>Software Developer</h4>
            <hr style={{ borderTop: '3px solid #ffb3ec', width: '70%' }} />
            <p>
              Certified Full-stack software developper with a solid background
              in Security and Privacy compliance. Forward-thinking business
              professional with diverse experience in sales, marketing, data
              analysis, and continuous process improvement. Quick study with
              history of success uncovering business needs, providing
              data-supported insights, and offering strategies to solve complex
              business challenges. Expertise building and fostering
              relationships to drive internal and external stakeholder
              experience through optimal communication skills. Accomplished as
              team leader and individual contributor.{' '}
            </p>
            <hr style={{ borderTop: '3px solid #ffb3ec', width: '50%' }} />
            <h5>Address</h5>
            <p>1601 S Lane St, Seattle, Washington</p>
            <h5>Phone</h5>
            <p>(425) 435-5139</p>
            <h5>Email</h5>
            <p>sandrinenubia@gmail.com</p>

            <hr style={{ borderTop: '3px solid #ffb3ec', width: '50%' }} />
          </Cell>

      
    )
  }
}

export default About;
