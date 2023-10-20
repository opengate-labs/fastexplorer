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
