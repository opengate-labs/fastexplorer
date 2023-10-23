import { Flex, IconButton, Text, useToast } from '@chakra-ui/react';
import { useMemo } from 'react';
import { CgCopy } from 'react-icons/cg';
import Status from './Status';

const TRANSACTION_FIELDS = {
  status: Status,
};

const FORMATTED_KEYS = {
  hash: 'Hash',
  blockNumber: 'Block Number',
  value: 'Value',
  gasUsed: 'Gas Used',
  createdContractAddressHash: 'Created Contract Address Hash',
  cumulativeGasUsed: 'Cumulative Gas Used',
  error: 'Error',
  fromAddressHash: 'From Address Hash',
  gas: 'Gas',
  gasPrice: 'Gas Price',
  id: 'ID',
  index: 'Index',
  input: 'Input',
  status: 'Status',
  toAddressHash: 'To Address Hash',
};

export default function KeyField({ keyText, value }) {
  const toast = useToast();
  const copyValue = (value) => {
    navigator.clipboard.writeText(value);
    toast({
      title: 'Copied to clipboard',
      status: 'success',
      duration: 3000,
      isClosable: true,
      position: 'right',
    });
  };

  const ValueComponent = () => {
    const Component = TRANSACTION_FIELDS[keyText];
    return Component ? <Component value={value} /> : <Text>{value}</Text>;
  };

  return (
    <Flex alignItems='center'>
      <Text mr={2}>{FORMATTED_KEYS[keyText] || keyText}: </Text>
      <ValueComponent />
      <IconButton background='transparent' onClick={() => copyValue(value)}>
        <CgCopy />
      </IconButton>
    </Flex>
  );
}
