import React from 'react';
import { Box, HStack, Heading, Stack, VStack } from '@chakra-ui/react';
import {
  TiSocialInstagramCircular,
  TiSocialLinkedinCircular,
} from 'react-icons/ti';
import { DiGithub } from 'react-icons/di';

const Footer = () => {
  return (
    <Box padding={'4'} bg={'blackAlpha.900'} minH={'10vh'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={['center', 'flex-start']} width={'full'}>
          <Heading children={'All Rights Reserved'} color={'white'} />
          <Heading
            fontFamily={'body'}
            size={'sm'}
            children={'@prathamesh Kokane'}
            color={'yellow.400'}
          />
        </VStack>
        <HStack
          spacing={['2', '10']}
          justifyContent={'center'}
          color={'white'}
          fontSize={'50'}
        >
          <a
            href="https://www.linkedin.com/in/prathamesh-kokane/"
            target="blank"
          >
            <TiSocialLinkedinCircular />
          </a>
          <a href="https://github.com/prathameshkokane" target="blank">
            <DiGithub />
          </a>
          <a href="https://www.instagram.com/_prathamesh_8312_/" target="blank">
            <TiSocialInstagramCircular />
          </a>
        </HStack>
      </Stack>
    </Box>
  );
};

export default Footer;
