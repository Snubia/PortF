import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: 'center' }}>
              <img
                src='https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png'
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
          </Cell>
          <Cell className='resume-right-col' col={8}>
            <h2>Skills</h2>
            <p>
              Javascript, HTML, CSS, Bootstrap, MySQL, MongoDB, Python, Redux,
              Node.js, React.js, GraphQL
            </p>

            <hr style={{ borderTop: '3px solid #e22947' }} />

            <h2>Experience</h2>

            <Experience
              startYear={2010}
              endYear={2020}
              jobName='Compliance Analyst at Microsoft'
              jobDescription="Driving compliance to Microsoft's privacy and security standards for the global supplier base."
            />

            <Experience
              startYear={2019}
              endYear={2019}
              jobName='Operation Advisor at Amazon'
              jobDescription='Investigate and analyze high-risk topics through one-on-one meetings with frontline employees, facilitate additional methods to obtain engagement feedback, and translate and document findings. Partner with senior advisors to provide practical recommendations for continuous improvements and identify top leaders across all levels of the organization'
            />

            <Experience
              startYear={2018}
              endYear={2019}
              jobName='Bilingual Technical Support at Nintento Of America'
              jobDescription='Documented and researched technical problems to develop solutions and resources for the department.'
            />
            <hr style={{ borderTop: '3px solid #e22947' }} />

            <h2>Education</h2>
            <Education
              startYear={2002}
              endYear={2006}
              schoolName='University of Washington Coding Bootcamp'
              schoolDescription='Full-stack Software Developper Certification'
            />

            <Education
              startYear={2012}
              endYear={2015}
              schoolName='University Of Douala, Cameroon'
              schoolDescription='Associate in Economics'
            />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
