import { ReactNode } from 'react';

import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  Image
} from '@chakra-ui/react';

const Logo = (props: any) => {
  return (
    <Box>
    <Image src="/panaverse80_80.jpg" h="40px" m="2"></Image>
    </Box>
  );
};

/* const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
}; */

{/* <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
</Box> */}

export default function Footer() {
  return (
    
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid  
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
          spacing={8}>
          <Stack spacing={6}>
            <Box>
              <Logo color={useColorModeValue('gray.700', 'white')} />
              </Box>
            <Text fontSize={'sm'}>
              Panaverse DAO
            </Text>
          </Stack>
          <Stack align={'flex-start'}>
            <Text>Company</Text>
            <Link href={'#'}>Panverse DAO</Link>
            <Link href={'#'}>Panaverse Community</Link>
            
          </Stack>
          <Stack align={'flex-start'}>
            <Text>About Us</Text>
            <Link href={'#'}>Faculty</Link>
            <Link href={'#'}>Locations</Link>
            
          </Stack>
           <Stack align={'flex-start'}>
            <Text>Follow Us</Text>
            <Link href={'#'}>Facebook</Link>
            <Link href={'#'}>Twitter</Link>
            
          </Stack>
        </SimpleGrid>
      </Container>
  
  );
}