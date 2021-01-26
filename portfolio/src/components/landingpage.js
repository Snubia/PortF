import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
  render() {
    return (
      <div style={{ width: '80%', margin: 'auto' }}>
        <Grid className='landing-grid'>
          <Cell col={12}>
            <img
              src='https://www.google.com/url?sa=i&url=http%3A%2F%2Fwww.pngmart.com%2Fimage%2F148878&psig=AOvVaw0-2xQSmEPWVizA6TnYiHC_&ust=1611738061916000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLDtlLKeue4CFQAAAAAdAAAAABAD'
              alt='avatar'
              className='avatar-img'
            />

            <div className='banner-text'>
              <h1>Full Stack Software Developer</h1>

              <hr />

              <p>
                HTML/CSS | Bootstrap | JavaScript | React | MySQL | NodeJS |
                Express | MongoDB| Python| C++ | Graphql
              </p>

              <div className='social-links'>
                {/* LinkedIn */}
                <a
                  href='https://www.linkedin.com/in/sandrine-nubia-975aa2172/'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <i className='fa fa-linkedin-square' aria-hidden='true' />
                </a>

                {/* Github */}
                <a
                  href='https://github.com/Snubia'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <i className='fa fa-github-square' aria-hidden='true' />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
