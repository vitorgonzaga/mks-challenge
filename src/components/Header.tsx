import { Button, Flex, Icon, Text } from "@chakra-ui/react";
import { IoCartSharp } from 'react-icons/io5';
import { useDispatch, useSelector } from "react-redux";
import { calculateTotal, cartLength, onOpen } from '../store/shoppingCartSlice';


export function Header() {
  const dispatch = useDispatch()
  const totalProducts = useSelector(cartLength)

  return (
    <Flex
      as='header'
      w='100%'
      h={['48px', '101px']}
      bg='brand.blue.500'
      alignItems='center'
      justify='center'
      position='fixed'
    >
      <Flex  w='100%' maxW={1440} align='center' >
        <Text
          fontWeight={600}
          fontSize={['32px', '40px']}
          lineHeight='19px'
          color='white'
          ml={['20px', '65px']}
        >
          MKS
          <Text
            as='span'
            fontWeight={300}
            ml='1'
            fontSize={['16px', '20px']}
            lineHeight='19px'
          >
            Sistemas
          </Text>
        </Text>
        <Button
          ml='auto'
          mr='23px'
          size={['sm', 'lg']}
          onClick={() => {
            dispatch(onOpen())
            dispatch(calculateTotal())
          }}
        >
          <Icon as={IoCartSharp} fontSize={['16px', '20px']} mr={['6px', '12px']} mb='2px'/>
          { totalProducts }
        </Button>
      </Flex>

    </Flex>
  )
}