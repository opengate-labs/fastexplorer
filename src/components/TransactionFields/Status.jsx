import { Icon, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { FaCheckCircle, FaDoorClosed } from 'react-icons/fa';

export default function Status({ value, ...props }) {
  const isOk = value === 'OK';
  const IconType = () => (
    <Icon boxSize='20px'>{isOk ? <FaCheckCircle /> : <FaDoorClosed />}</Icon>
  );
  return (
    <Text
      display='flex'
      alignItems='center'
      color={isOk ? 'green.400' : 'red.200'}
      {...props}
    >
      {value}
      <IconType />
    </Text>
  );
}

Status.prototype = {
  value: PropTypes.string.isRequired,
};
