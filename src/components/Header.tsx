import { Button, Flex, Icon, Text } from "@chakra-ui/react";
import { IoCartSharp } from 'react-icons/io5';

export function Header() {
  return (
    <Flex
      as='header'
      w='100%'
      h='101px'
      bg='brand.blue.500'
      alignItems='center'
      justify='center'
      mb='auto'
      position={'absolute'}
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
        >
          <Icon as={IoCartSharp} fontSize='20px' mr='1'/>
          0
        </Button>
      </Flex>

    </Flex>
  )
}