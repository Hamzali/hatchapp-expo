import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

const MonoText = (props) => {
  const { style } = props;

  return (
    <Text {...props} style={[style, { fontFamily: 'space-mono' }]} />
  );
};

MonoText.propTypes = {
  style: PropTypes.instanceOf(Object),
};

MonoText.defaultProps = {
  style: {},
};

export default MonoText;
