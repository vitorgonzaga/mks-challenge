import { Product } from "@/pages";
import { Flex, Heading, HStack, Icon, Image, Text } from "@chakra-ui/react";
import { FiShoppingBag } from 'react-icons/fi';
import { addProduct } from '../store/shoppingCartSlice'
import { useDispatch } from "react-redux";

interface ProductCard {
  product: Product
}

export function ProductCard({ product: { id, photo, name, price, description } }: ProductCard) {
  const dispatch = useDispatch()

  return (
    <Flex
      w='218px'
      bg='white'
      borderRadius='8px'
      boxShadow='0px 2px 8px rgba(0, 0, 0, 0.135216)'
    >
      <Flex flexDirection='column' >
        <Flex h='170px' align='center' justify='center' >
          <Image
            boxSize={'140px'}
            objectFit='contain'
            src={photo}
            alt={name}
          />
        </Flex>
        <Flex mx='14px' mt='14px' mb='8px' justify='space-between' >
          <Heading
            fontWeight={400}
            fontSize='16px'
            lineHeight='19px'
            color='brand.font.gray.500'
          >
            { name }
          </Heading>
          <Flex bg='brand.gray.500' borderRadius='5px' align='center' justify='center' h='fit-content'>
            <Text
              fontWeight={700}
              fontSize='15px'
              color='white'
              px='4px'
              py='4px'
            >
              { price }
            </Text>
          </Flex>
        </Flex>
        <Text fontWeight={300} fontSize='10px' lineHeight='12px' color='brand.font.gray.500' mx='14px' mb='12px'>
          { description }
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
          onClick={() => dispatch(addProduct({ id, photo, name, price, description }))}
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