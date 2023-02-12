"use client"
import {
    Flex,
    Container,
    Heading,
    Stack,
    Text,
    Button,
    Icon,
    IconProps,
    Image,
    Box
  } from '@chakra-ui/react';
  
  export default function Section2() {
    return (
      <Box py={{ base: 12, sm:12,  md: 16 }}
           px={{ base: 4, sm:4,  md: 8 }}
            border={'thick'}
           borderColor={'whiteAlpha.500'}
           borderStyle={'solid'}
           bg={'whiteAlpha.500'}
           rounded={'md'}
           shadow={'md'}
           m={{ base: 2, sm:2,  md: 8 }}>
      <Container maxW={'5xl'} rounded={'full'} >
        <Stack
          textAlign={'left'}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 16 }}
          direction={'row'}>
         
            <Text color={'Grey.500'} fontWeight={600}  fontSize={{ base: '2xl', sm: '2xl', md: '2xl' }}>
            The Panaverse Community
            </Text>
            <Text color={'Grey.500'} >
            Web3, 3D Metaverse, AI, IoT, Cloud, and Edge technologies expand the internet as we know it by introducing novel features and advancements. In this brand-new type of curriculum. In which students will learn how to make money and boost exports

in the classroom and will begin doing so within six months of the program's beginning. It resembles a cross between a corporate venture and an educational project.
            </Text>
         
          </Stack>
            
      </Container>
      </Box> 
    );
  }
  
  export const Illustration = (props: IconProps) => {
    return (
      <Image>
        
          
      </Image>
    );
  };