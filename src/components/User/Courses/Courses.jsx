import {
  Button,
  Container,
  HStack,
  Heading,
  Image,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Course = ({
  views,
  title,
  imgSrc,
  id,
  addToPlaylistHandler,
  creator,
  description,
  lectureCount,
}) => {
  return (
    <VStack className="course" alignItems={['center', 'flex-start']}>
      <Image src={imgSrc} boxSize={'60'} objectFit={'contain'} />
      <Heading
        textAlign={['center', 'left']}
        maxW={'200px'}
        size={'sm'}
        fontFamily={'sans-serif'}
        noOfLines={3}
        children={title}
      />
      <Text noOfLines={2} children={description} />
      <HStack>
        <Text
          fontWeight={'bold'}
          textTransform={'uppercase'}
          children={'Creator'}
        />
        <Text
          fontFamily={'body'}
          textTransform={'uppercase'}
          children={creator}
        />
      </HStack>
      <Heading
        textAlign={'center'}
        size={'xs'}
        textTransform={'uppercase'}
        children={`Lectures - ${lectureCount}`}
      />
      <Heading
        size={'xs'}
        textTransform={'uppercase'}
        children={`Views - ${views}`}
      />
      <Stack direction={['column', 'row']} alignItems={'center'}>
        <Link to={`/course/${id}`}>
          <Button colorScheme="yellow">Watch Now</Button>
          <Button
            variant={'ghost'}
            colorScheme="yellow"
            onClick={() => addToPlaylistHandler(id)}
          >
            Add to Playlist
          </Button>
        </Link>
      </Stack>
    </VStack>
  );
};

const Courses = () => {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');

  const addToPlaylistHandler = () => {
    console.log('Added To Playlist');
  };

  const categories = [
    'Web Development',
    'Artificial Intellegence',
    'Data Structurs & algorithm',
    'App Development',
    'Data Science',
    'Game Devlopment',
  ];

  return (
    <Container minH={'95vh'} maxW={'container.lg'} paddingY={'8'}>
      <Heading children="All Courses" margin={'8'} />
      <Input
        value={keyword}
        onClick={e => setKeyword(e.target.value)}
        placeholder="Search a course..."
        type="text"
        focusBorderColor="yellow.500"
      />
      <HStack
        overflowX={'auto'}
        paddingY={'8'}
        css={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        {categories.map((item, index) => (
          <Button key={index} onClick={() => setCategory(item)} minW={'60'}>
            <Text children={item} />
          </Button>
        ))}
      </HStack>
      <Stack
        direction={['column', 'row']}
        flexWrap={'wrap'}
        justifyContent={['flex-start', 'space-evenly']}
        alignItems={['center', 'flex-start']}
      >
        <Course
          views={'23'}
          title={'Sample1'}
          imgSrc={
            'https://cdn3.vectorstock.com/i/1000x1000/82/17/website-development-neon-banner-design-vector-26918217.jpg'
          }
          id={'sample1'}
          addToPlaylistHandler={addToPlaylistHandler}
          creator={'Prathamesh'}
          description={'kfjwvhkfvubwlvi elvuiwefov efvwiuvhwv wlviub'}
          lectureCount={'2'}
        />
      </Stack>
    </Container>
  );
};

export default Courses;
