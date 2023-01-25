import { Flex, Icon, IconButton, Image, Text } from "@chakra-ui/react";
import { AiFillCloseCircle } from "react-icons/ai";
import { FiMinus } from "react-icons/fi";
import { IoAdd } from "react-icons/io5";

export function ProductInCard() {
  return(
    <Flex
      bg='white'
      w='379px'
      h='95px'
      borderRadius='8px'
      boxShadow='-2px 2px 10px rgba(0, 0, 0, 0.05)'
      position='relative'
      align='center'
      // justify='space-between'
      px='16px'
    >
      <Icon as={AiFillCloseCircle}  position='absolute' top={0} right={0} />
      <Flex w='90px' align='center' justify='center' >
        <Image
          boxSize='70px'
          objectFit='contain'
          src="https://m.media-amazon.com/images/I/511KyqqmhsL._AC_SX522_.jpg"
          alt='image'
        />
      </Flex>
      <Flex w='100px' >
        <Text
          fontWeight={400}
          fontSize='13px'
          lineHeight='17px'
          color='brand.font.gray.500'
        >
          Apple Watch Series 4 GPS
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
          <IconButton aria-label="Add on product to cart" icon={<IoAdd />}  size='16px' fontSize='14px' color='black' variant='unstyled' />
          <Flex color='black' fontWeight={400} fontSize='8px' lineHeight='10px' w='16px' align='center' justify='center' >1</Flex>
          <IconButton aria-label="Add on product to cart" icon={<FiMinus />}  size='16px' fontSize='14px' color='black' variant='unstyled' />
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
          R$399
        </Text>
      </Flex>
    </Flex>
  )
}