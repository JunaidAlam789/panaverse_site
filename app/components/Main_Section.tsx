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
    Link
  } from '@chakra-ui/react';
  
  export default function Main_Section() {
    return (
      <Container maxW={'5xl'} >
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 16 }}>
         
            <Text fontWeight={600}  fontSize={{ base: '3xl', sm: '2xl', md: '3xl' }}>
            Certified Web 3.0 and Metaverse Developer
            </Text>
            <Text color={'red.400'} fontWeight={600}  fontSize={{ base: '3xl', sm: '2xl', md: '3xl' }}>
            A Nationwide Program in Karachi, Lahore, Islamabad, and Peshawar
            </Text>
         
          <Text color={'Grey.500'} maxW={'3xl'}>
          Getting Ready for the Next Generation and Future of the Internet <br/> Join a 13 Trillion Dollar Industry with 5 Billion Users
          </Text>
          <Stack spacing={6} direction={'row'}>
            <Button
              rounded={'full'}
              px={6}
              colorScheme={'red'}
              bg={'red.400'}
              _hover={{ bg: 'red.500' }}>
              
              <Link href={'https://portal.piaic.org/signup'}>Apply Now</Link>
            </Button>
            <Button rounded={'full'} px={6}>
              Learn more
            </Button>
          </Stack>
          <Flex w={'full'}>
            <Illustration
              height={{ sm: '24rem', lg: '28rem' }}
              mt={{ base: 12, sm: 16 }}
            />
          </Flex>
        </Stack>
      </Container>
    );
  }
  
  export const Illustration = (props: IconProps) => {
    return (
      <Image>
        
          
      </Image>
    );
  };