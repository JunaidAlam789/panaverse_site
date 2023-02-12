import { Box, Button, Slide,Text, useDisclosure,Image } from "@chakra-ui/react"
import { useInView } from "framer-motion"

export default function SlideEx() {
    const { isOpen, onToggle } = useDisclosure()
  
    return (
      <>
        <Button onClick={onToggle}>Button</Button>
        
        <Slide direction='bottom' in={isOpen} style={{zIndex: 10}} >
          <Box
            p='40px'
            color='white'
            mt='4'
            
            rounded='md'
            shadow='md'
            
            onClick={onToggle}
          >
        <Image  src={'/metaverse.png'}/>
            
          </Box>
        </Slide>
        
        
      </>
    )
  }