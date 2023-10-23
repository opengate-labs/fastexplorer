import { Skeleton, Stack } from '@chakra-ui/react';
import React from 'react';

export default function Loader(props) {
  return (
    <Stack spacing={6} {...props}>
      <Skeleton height='10px' />
      <Skeleton height='10px' />
      <Skeleton height='10px' />
      <Skeleton height='10px' />
      <Skeleton height='10px' />
      <Skeleton height='10px' />
      <Skeleton height='10px' />
      <Skeleton height='10px' />
      <Skeleton height='10px' />
      <Skeleton height='10px' />
      <Skeleton height='10px' />
      <Skeleton height='10px' />
    </Stack>
  );
}
