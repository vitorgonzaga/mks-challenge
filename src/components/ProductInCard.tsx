import { calculateTotal, ProductInCart, removeProduct } from "@/store/shoppingCartSlice";
import { Flex, Icon, IconButton, Image, Text } from "@chakra-ui/react";
import { AiFillCloseCircle } from "react-icons/ai";
import { FiMinus } from "react-icons/fi";
import { IoAdd } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { decrementProduct, incrementProduct } from '../store/shoppingCartSlice';

interface ProductInCardProps {
  product: ProductInCart
}

export function ProductInCard({product: { id, photo, name, amount, price }}: ProductInCardProps) {
  const dispatch = useDispatch()

  return(
    <Flex
      bg='white'
      w='379px'
      h='95px'
      borderRadius='8px'
      boxShadow='-2px 2px 10px rgba(0, 0, 0, 0.05)'
      position='relative'
      align='center'
      px='16px'
    >
      <Icon
        as={AiFillCloseCircle}
        position='absolute'
        top={-1}
        right={-1}
        fontSize='25px'
        onClick={() => {
          dispatch(removeProduct(id))
          dispatch(calculateTotal())
        }}
        cursor='pointer'
      />
      <Flex w='90px' align='center' justify='center' >
        <Image
          boxSize='70px'
          objectFit='contain'
          src={photo}
          alt={name}
        />
      </Flex>
      <Flex w='100px' >
        <Text
          fontWeight={400}
          fontSize='13px'
          lineHeight='17px'
          color='brand.font.gray.500'
        >
          { name }
        </Text>
      </Flex>
      <Flex
        direction='column'
        align='flex-start'
        mx='9px'
      >
        <Text fontWeight={400}  fontSize='9px' lineHeight='6px'>Qtd:</Text>
        <Flex
          align='center'
          justify='space-between'
          border='0.3px solid'
          borderColor='brand.gray.300'
          p='4px'
          w='60px'
          h='19px'
          bg='white'
          borderRadius='4px'
          mt='6px'
        >
          {/* <Button color='black' fontWeight={400} fontSize='8px' w='16px' h='16px' p='0'>-</Button> */}
          <IconButton
            aria-label="Add on product to cart"
            icon={<IoAdd />}
            size='16px'
            fontSize='14px'
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
            fontSize='8px'
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
            size='16px'
            fontSize='14px'
            color='black'
            variant='unstyled'
            onClick={() => {
              dispatch(decrementProduct(id))
              dispatch(calculateTotal())
            }}
          />
          {/* <Button color='black' fontWeight={400} fontSize='8px' w='16px' h='16px' p='0' >+</Button> */}
        </Flex>
      </Flex>
      <Flex flex={1} align='center' justifyContent='center'  >
        <Text
          mt='10px'
          color='black'
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
  )
}