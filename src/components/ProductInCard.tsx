import { calculateTotal, ProductInCart, removeProduct } from "@/store/shoppingCartSlice";
import { Flex, Icon, IconButton, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import { AiFillCloseCircle, AiOutlineClose } from "react-icons/ai";
import { FiMinus } from "react-icons/fi";
import { IoAdd } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { decrementProduct, incrementProduct } from '../store/shoppingCartSlice';

interface ProductInCardProps {
  product: ProductInCart
}

export function ProductInCard({product: { id, photo, name, amount, price }}: ProductInCardProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  const dispatch = useDispatch()

  return(
    <Flex
      bg='white'
      w={['250px', '379px']}
      h={['220px', '95px']}
      borderRadius='8px'
      boxShadow='-2px 2px 10px rgba(0, 0, 0, 0.05)'
      position='relative'
      align='center'
      justify={['center', 'space-between']}
      px='16px'
      direction={['column', 'row']}
    >
      <Icon
        as={isWideVersion ? AiFillCloseCircle : AiOutlineClose }
        position='absolute'
        top={[2, -1]}
        right={[2, -1]}
        fontSize={['35px', '25px']}
        onClick={() => {
          dispatch(removeProduct(id))
          dispatch(calculateTotal())
        }}
        cursor='pointer'
      />
      <Flex w={['110px', '70px']} align='center' justify='center' mb={['14px', '0px']} mr={['0px', '8px']}>
        <Image
          boxSize={['110px', '70px']}
          objectFit='contain'
          src={photo}
          alt={name}
        />
      </Flex>
      <Flex w={['100%', '90px']} justify={['center', 'flex-start']} mr={['0px', '10px']} >
        <Text
          fontWeight={400}
          fontSize={['16px', '13px']}
          lineHeight='17px'
          color='brand.font.gray.500'
        >
          { name }
        </Text>
      </Flex>
      <Flex justify={['space-between']}  w={['100%', '165px']} mt={['12px', '0px']}>
        <Flex
          direction='column'
          align='flex-start'
          mx={['0px']}
        >

          { isWideVersion && (<Text fontWeight={400}  fontSize='9px' lineHeight='6px'>Qtd:</Text>) }

          <Flex
            align='center'
            justify={['space-around', 'space-between']}
            border='0.3px solid'
            borderColor='brand.gray.300'
            p='4px'
            w={['98px', '60px']}
            h={['35px', '19px']}
            bg='white'
            borderRadius='4px'
            mt={['0px', '6px']}
          >
            <IconButton
              aria-label="Add on product to cart"
              icon={<IoAdd />}
              size={['20px', '16px']}
              fontSize={['20px', '14px']}
              color='black'
              variant='unstyled'
              onClick={() => {
                dispatch(incrementProduct(id))
                dispatch(calculateTotal())
              }}
            />
            <Flex
              color='black'
              fontWeight={400}
              fontSize={['16px', '8px']}
              lineHeight='10px'
              w='16px'
              align='center'
              justify='center'
            >
              { amount }
            </Flex>
            <IconButton
              aria-label="Add on product to cart"
              icon={<FiMinus />}
              size={['20px', '16px']}
              fontSize={['20px', '14px']}
              color='black'
              variant='unstyled'
              onClick={() => {
                dispatch(decrementProduct(id))
                dispatch(calculateTotal())
              }}
            />
          </Flex>
        </Flex>
        <Flex
          flex={[0]}
          align='center'
          justifyContent='center'
          px={['12px']}
          bg={['brand.gray.500', 'white']}
          borderRadius={['5px']}
        >
          <Text
            mt={['0px', '10px']}
            color={['white', 'black']}
            fontWeight={700}
            fontSize='14px'
            lineHeight='17px'
          >
            {
              Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                minimumFractionDigits: 0
              }).format(parseFloat(price.replace(/[R$.]+/g,"")) * amount)

            }
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}