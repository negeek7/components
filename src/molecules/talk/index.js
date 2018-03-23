import React, {Fragment} from 'react';
import {string, shape} from 'prop-types';

export default function Talk({talk, content}) {
  return (
    <Fragment>
      <h1 style={{color: '#AD5472'}}>{talk.title}</h1>
      <h3>{talk.speaker}</h3>
      <div dangerouslySetInnerHTML={{__html: content}} />
    </Fragment>
  );
}

Talk.propTypes = {
  talk: shape({
    title: string,
    speaker: string
  }),
  content: string
};
