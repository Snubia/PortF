import React, { Component } from 'react';


class About extends Component {
  render() {
    return(
      <div>
        <div style={{ textAlign: 'center' }}>
              <img
                src='https://www.google.com/url?sa=i&url=http%3A%2F%2Fwww.pngmart.com%2Fimage%2F148878&psig=AOvVaw0-2xQSmEPWVizA6TnYiHC_&ust=1611738061916000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLDtlLKeue4CFQAAAAAdAAAAABAD'
                alt='avatar'
                style={{ height: '200px' }}
              />
            </div>

            <h2 style={{ paddingTop: '2em' }}>Sandrine Nubia</h2>
            <h4 style={{ color: 'grey' }}>Software Developer</h4>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
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
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <h5>Address</h5>
            <p>1601 S Lane St, Seattle, Washington</p>
            <h5>Phone</h5>
            <p>(425) 435-5139</p>
            <h5>Email</h5>
            <p>nunubabila@gmail.com</p>

            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
      </div>

      
    )
  }
}

export default About;
