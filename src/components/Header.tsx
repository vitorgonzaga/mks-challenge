import { Button, Flex, Icon, Text } from "@chakra-ui/react";
import { IoCartSharp } from 'react-icons/io5';
import { useDispatch, useSelector } from "react-redux";
import { cartLength, onOpen } from '../store/shoppingCartSlice';


export function Header() {
  const dispatch = useDispatch()
  const totalProducts = useSelector(cartLength)

  return (
    <Flex
      as='header'
      w='100%'
      h='101px'
      bg='brand.blue.500'
      alignItems='center'
      justify='center'
      mb='auto'
    >
      <Flex  w='100%' maxW={1440} align='center' >
        <Text
          fontWeight={600}
          fontSize='40px'
          lineHeight='19px'
          color='white'
          ml='65px'
        >
          MKS
          <Text
            as='span'
            fontWeight={300}
            ml='1'
            fontSize='20px'
            lineHeight='19px'
          >
            Sistemas
          </Text>
        </Text>
        <Button
          ml='auto'
          size='lg'
          onClick={() => dispatch(onOpen())}
        >
          <Icon as={IoCartSharp} fontSize='20px' mr='1'/>
          { totalProducts }
        </Button>
      </Flex>

    </Flex>
  )
}