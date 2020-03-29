import React from 'react';
import 'typeface-merriweather';
import 'typeface-montserrat';
import {useIntersect} from '../utils';
import {rhythm} from '../utils/typography';
import profilePic from './profile-pic.jpg';

const Bio: React.FC = () => {
  const {setNode, entry} = useIntersect();

  return (
    <div
      id="bio"
      ref={setNode}
      style={{
        display: 'flex',
        marginBottom: rhythm(2.5),
        opacity: entry?.intersectionRatio,
        transform: `rotate(${10-(entry?.intersectionRatio*10)}deg)`
      }}>
      <img
        src={profilePic}
        alt={`Kyle Mathews`}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          width: rhythm(2),
          height: rhythm(2),
        }}
      />
      <p>
        Written by <strong>Kyle Mathews</strong> who lives and works in San
        Francisco building useful things.{' '}
        <a href="https://twitter.com/kylemathews">
          You should follow him on Twitter
        </a>
      </p>
    </div>
  );
};

export default Bio;
