import { Flex, Heading, HStack, Icon, Image, Text } from "@chakra-ui/react";
import { FiShoppingBag } from 'react-icons/fi';

export function ProductCard() {
  return (
    <Flex
      w='218px'
      h='fit-content'
      bg='white'
      borderRadius='8px'
      boxShadow='0px 2px 8px rgba(0, 0, 0, 0.135216)'
    >
      <Flex flexDirection='column' >
        <Flex h='170px' align='center' justify='center' >
          <Image
            boxSize={'140px'}
            objectFit='contain'
            src="https://m.media-amazon.com/images/I/511KyqqmhsL._AC_SX522_.jpg"
            alt='Product Image'
          />
        </Flex>
        <Flex mx='14px' mt='14px' mb='8px'>
          <Heading
            fontWeight={400}
            fontSize='16px'
            lineHeight='19px'
            color='brand.font.gray.500'
          >
            Apple Watch Series 4 GPS
          </Heading>
          <Flex bg='brand.gray.500' borderRadius='5px' align='center' justify='center'>
            <Text
              fontWeight={700}
              fontSize='15px'
              lineHeight='15px'
              color='white'
              px='8px'
              py='4px'
            >
              R$399
            </Text>
          </Flex>
        </Flex>
        <Text fontWeight={300} fontSize='10px' lineHeight='12px' color='brand.font.gray.500' mx='14px' mb='12px'>
          Redesigned from scratch and completely revised
        </Text>
        <HStack
          mt='auto'
          bg='brand.blue.500'
          borderRadius='0px 0px 8px 8px'
          align='center'
          justify='center'
          spacing='1'
          h='32px'
          cursor='pointer'
          _hover={{
            filter: 'opacity(0.8)',
            transition: 'filter 0.3s'
          }}
        >
          <Icon as={FiShoppingBag} color='white' />
          <Text
            as='span'
            color='white'
            fontWeight={600}
            fontSize='14px'
            lineHeight='18px'
          >
            COMPRAR
          </Text>
        </HStack>
      </Flex>
    </Flex>
  )
}