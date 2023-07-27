import React, { useState } from 'react';
import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  return (
    <Container paddingY={16} height={'90vh'}>
      <form>
        <Heading
          children={'Forgot Password'}
          marginY={'16'}
          textTransform={'uppercase'}
          textAlign={['center', 'left']}
        />
        <VStack>
          <Input
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="abc@gmail.com"
            type="email"
            focusBorderColor="yellow.500"
          />
          <Button type="submit" w={'full'} colorScheme="yellow">
            Send Reset Link
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default ForgetPassword;
