import {
  Box,
  Icon,
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
} from '@chakra-ui/react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { FaSearch, FaSearchDollar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function Search({ ...props }) {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const onSubmit = ({ search }) => {
    console.log(search);
    navigate(`/t/${search}`);
    reset();
  };
  return (
    <Box
      pb={12}
      {...props}
      as='form'
      w='full'
      onSubmit={handleSubmit(onSubmit)}
    >
      <InputGroup>
        <InputLeftElement>
          <Icon boxSize='30px' color='teal.400' mt='33px' ml='18px'>
            <FaSearch />
          </Icon>
        </InputLeftElement>
        <Input
          _focusVisible={{
            borderColor: 'teal.400',
            borderWidth: '2px',
            outline: 'none',
          }}
          px={4}
          py={8}
          pl={12}
          w='full'
          borderRadius={16}
          color='textColor'
          placeholder='Search by address, token symbol, name, transaction hash, or block number'
          {...register('search')}
        />
      </InputGroup>
    </Box>
  );
}
