import React, { useState } from 'react';
import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

const ResetPassword = () => {
  const [password, setPassword] = useState('');

  const params = useParams();

  return (
    <Container paddingY={16} height={'90vh'}>
      <form>
        <Heading
          children={'Reset Password'}
          marginY={'16'}
          textTransform={'uppercase'}
          textAlign={['center', 'left']}
        />
        <VStack>
          <Input
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Enter New Password"
            type="password"
            focusBorderColor="yellow.500"
          />
          <Button type="submit" w={'full'} colorScheme="yellow">
            Reset Password
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default ResetPassword;
