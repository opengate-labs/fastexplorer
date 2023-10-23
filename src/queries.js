import { gql } from '@apollo/client';

export const getTransactionByHash = (hash) => gql`
{   
    transaction(hash: "${hash}") { 
        hash, 
        blockNumber, 
        value, 
        gasUsed, 
        blockNumber,
        createdContractAddressHash, 
        cumulativeGasUsed, 
        error, 
        fromAddressHash, 
        gas, 
        gasPrice, 
        hash, 
        id, 
        index, 
        input, 
        status, 
        value, 
        toAddressHash 
    }
}
`;

export const getBlockByNumber = (number) => gql`
{
    block(number:${number}) {
      consensus,
      difficulty,
      gasLimit,
      gasUsed,
      hash,
      minerHash,
      nonce,
      number,
      parentHash,
      size,
      timestamp,
      totalDifficulty,
    }
  }
  `;
