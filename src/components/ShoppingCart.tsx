import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Stack, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { cart, IsOpenSelector, onClose, totalAmount } from '../store/shoppingCartSlice';
import { ProductInCard } from "./ProductInCard";


export function ShoppingCart() {
  const dispatch = useDispatch()
  const isOpen = useSelector(IsOpenSelector)
  const shoppingCart = useSelector(cart)
  const total = useSelector(totalAmount)

  return(
    <Drawer
      isOpen={isOpen}
      onClose={() => dispatch(onClose())}
      placement='right'
      size={['xs', 'md']}
    >
      <DrawerOverlay>
        <DrawerContent bg='brand.blue.500' w='486px'>
          <DrawerCloseButton
            color='white'
            bg='black'
            borderRadius='full'
            mt={['26px', '39px']}
            mr={['16px', '22px']}
            w={['46px']}
            h={['46px']}
          />
          <DrawerHeader pl={['32px', '47px']} py='36px' display='flex' h='128px' alignItems='center' justifyContent='flex-start'>
            <Text
              as='span'
              w='250px'
              color='white'
              fontWeight={700}
              fontSize='27px'
              lineHeight='33px'
            >
              <Text>Carrinho</Text>
              <Text>de compras</Text>
            </Text>
          </DrawerHeader>
          <DrawerBody
            pl={['0px', '47px']}
            px={['auto']}
            display='flex'
            flexDirection='column'
            alignItems='center'
            justifyContent={'flex-start'}
          >
            <Stack spacing='28px' >
              { shoppingCart.map(product => <ProductInCard key={product.id} product={product} /> ) }
            </Stack>
          </DrawerBody>
          <DrawerFooter flexDirection='column' p={0}>
            <Flex
              h='100px'
              w='100%'
              align='center'
              justify='space-between'
              mt='auto'
              color='white'
              mb='0px'
              fontWeight={700}
              fontSize='28px'
              lineHeight='15px'
              px='47px'
            >
              <Flex>Total:</Flex>
              <Flex>{ total }</Flex>
            </Flex>
            <Button
              bg='black'
              color='white'
              w='100%'
              borderRadius={0}
              h='97px'
              fontWeight={700}
              fontSize='28px'
              lineHeight='15px'
              _active={{
                bg: 'black'
              }}
              _hover={{
                transition: '0.3s',
                color: 'yellow.300'
              }}
            >
              Finalizar Compra
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  )
}