import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import {
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  IconButton,
  Skeleton,
  Stack,
  Text,
  useToast,
} from '@chakra-ui/react';
import Search from '../components/Search';
import { useQuery, gql } from '@apollo/client';
import { getBlockByNumber, getTransactionByHash } from '../queries';
import { CgCopy } from 'react-icons/cg';
import Loader from '../components/Loader';
import KeyField from '../components/TransactionFields/KeyField';
export default function Transaction() {
  const { hash } = useParams();
  const isTransaction = hash.startsWith('0x');
  const {
    data: transactionResponse,
    loading: isTransactionLoading,
    error: transactionError,
  } = useQuery(getTransactionByHash(hash));

  const {
    data: blockResponse,
    loading: isBlockLoading,
    error: blockError,
  } = useQuery(
    getBlockByNumber(
      isTransaction ? transactionResponse?.transaction?.blockNumber : hash
    )
  );

  console.log('response', blockResponse);

  return (
    <>
      <Header />
      <Container
        mt={6}
        minH='600px'
        maxWidth={{
          base: '90vw',
          lg: '1300px',
        }}
      >
        <Box
          w='full'
          p={4}
          minH='400px'
          background='counterBGColor'
          borderRadius={12}
          boxShadow='0 0 6px 0 rgba(202,199,226,.5)'
        >
          {isTransactionLoading && <Loader />}
          <Stack>
            {transactionResponse && (
              <>
                <Heading mb={4} fontSize='md'>
                  Transaction Details
                </Heading>
                <Stack>
                  {transactionResponse?.transaction?.hash &&
                    Object.keys(transactionResponse?.transaction)
                      .filter(
                        (key) =>
                          key !== '__typename' &&
                          !!transactionResponse?.transaction[key]
                      )
                      .map((key) => (
                        <KeyField
                          key={key}
                          keyText={key}
                          value={transactionResponse?.transaction[key]}
                        />
                      ))}
                </Stack>
                <Divider />
              </>
            )}

            {blockResponse && (
              <>
                <Heading fontSize='md'>Block Details</Heading>
                <Stack>
                  {blockResponse?.block?.hash &&
                    Object.keys(blockResponse?.block)
                      .filter(
                        (key) =>
                          key !== '__typename' && !!blockResponse?.block[key]
                      )
                      .map((key) => (
                        <KeyField
                          key={key}
                          keyText={key}
                          value={blockResponse?.block[key]}
                        />
                      ))}
                </Stack>
              </>
            )}
          </Stack>

          {blockError && transactionError && <Heading>Not Found!</Heading>}
        </Box>
        <Search mt={8} />
      </Container>
    </>
  );
}
