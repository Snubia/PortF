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
          
          <Cell className='resume-right-col' col={8}>
            <h2>Skills</h2>
            <p>
              Javascript, HTML, CSS, Bootstrap, MySQL, MongoDB, Python, Redux,
              Node.js, React.js, GraphQL, C++
            </p>

            <hr style={{ borderTop: '3px solid #ffb3ec' }} />

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
