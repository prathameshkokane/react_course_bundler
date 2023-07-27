import React from 'react';
import { Button, Container, Heading, VStack } from '@chakra-ui/react';
import { RiErrorWarningFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const PaymentFail = () => {
  return (
    <Container h={'90vh'} p={'16'}>
      <VStack justifyContent={'center'} h={'full'} spacing={'4'}>
        <RiErrorWarningFill size={'5rem'} />
        <Heading my={'8'} textAlign={'center'} children={'PAYMET FAILED'} />

        <Link to={'/subscribe'}>
          <Button variant={'ghost'} children={'Try Again'} />
        </Link>
      </VStack>
    </Container>
  );
};

export default PaymentFail;
