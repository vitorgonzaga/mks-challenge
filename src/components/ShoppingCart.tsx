import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { onClose, selectIsOpen } from '../store/shoppingCartSlice';


export function ShoppingCart() {
  const dispatch = useDispatch()
  const isOpen = useSelector(selectIsOpen)

  return(
    <Drawer
      isOpen={isOpen}
      onClose={() => dispatch(onClose())}
      placement='right'
      size='md'
    >
      <DrawerOverlay>
        <DrawerContent bg='brand.blue.500' w='486px'>
          <DrawerCloseButton color='white' bg='black' borderRadius='full' mt='39px' mr='22px' />
          <DrawerHeader pl='47px' py='36px' display='flex' h='128px' alignItems='center' justifyContent='flex-start'>
            <Text
              as='span'
              w='250px'
              // pl='23px'
              color='white'
              fontWeight={700}
              fontSize='27px'
              lineHeight='33px'
            >
              <Text>Carrinho</Text>
              <Text>de compras</Text>
            </Text>
          </DrawerHeader>
          <DrawerBody>
            <h1>Lista de produtos</h1>
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
              <Flex>R$798</Flex>
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