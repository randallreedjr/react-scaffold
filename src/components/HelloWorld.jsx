import React, { PropTypes } from 'react';

function HelloWorld(props) {
  return (
    <div
      style={{
        textAlign: 'center',
        fontSize: '40px',
        paddingTop: '40px',
      }}
    >
      {`Hello ${props.name}!`}
    </div>
  );
}

HelloWorld.propTypes = {
  name: PropTypes.string.isRequired,
};

export default HelloWorld;
