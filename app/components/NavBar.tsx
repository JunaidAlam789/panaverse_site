"use client"
import { ReactNode } from 'react';
import {
  Box,
  Image,
  Flex,
  HStack,
  Link,
  Button,
  useColorModeValue,
  Stack,
  Container,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Links = ['Dashboard', 'Projects', 'Team'];

/* const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
); */

export default function NavBar() {


  return (
    <>
       <Box maxW={'6xl'}
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}> 
      
      
        <Flex justify={"space-between"} >
          <Flex>
          <Image src="./panaverse80_80.jpg" h={{sm:"20px",md:"40px"}} m={2}></Image>
          </Flex>
          <HStack mx="100" spacing={16}>
          <Link>Home</Link>
          <Link>Docs</Link>
          <Link>Future</Link>
          </HStack>
        

        <HStack>
          <Button rounded={'full'} px={2}>
            <Link  href={'https://portal.piaic.org/signup'}>Apply Now
            </Link>
            </Button>
        </HStack>
        </Flex>
        
      </Box>
        

      
    </>
  );
}