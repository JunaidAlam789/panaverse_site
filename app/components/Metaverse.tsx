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
    Image
  } from '@chakra-ui/react';
  
  export default function Metaverse() {
    return (
      <Container maxW={'5xl'} >
        <Stack direction={{base:'column',sm:"column", md:'row'}}
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 16 }}>
            <Flex w={'full'}>
            <Illustration
              height={{ sm: '24rem', lg: '28rem' }}
              mt={{ base: 12, sm: 16 }}
              />
             </Flex>
           <Stack direction={'column'}>
           <Text color={'Grey.500'} fontWeight={600} 
            fontSize={{ base: '2xl', sm: '2xl', md: '2xl' }}>
            What is Metaverse ?</Text>  
          <Text color={'Grey.500'} maxW={'3xl'}>
          
A communal environment or virtual world made possible by the fusion of physical and virtual reality is referred to as the "metaverse." Users can engage in shared interactions with a wide range of virtual objects and environments in this imagined networked virtual world. Various technology businesses are aggressively pursuing the science fiction idea of a metaverse in an effort to give users a seamless and immersive experience.

Metaverse is a highly-anticipated future version of the internet where users are able to fully immerse themselves in a shared, virtual world. It is expected to have a significant impact on a variety of industries and bring people together from all over the world, but also raises important questions about privacy and security.

Program of Studies

The first three quarters are shared by all specialties and are dedicated to studying

Object-Oriented Programming and cutting-edge Full-Stack Web 2.0 development

The graduates of this program will own products (Full-Stack App Templates, AR and VR Experiences, and APIs)
          </Text>
          </Stack>
                    
        </Stack>
      </Container>
    );
  }
  
  export const Illustration = (props: IconProps) => {
    return (
      <Image src={'/metaverse.png'}>
        
          
      </Image>
    );
  };