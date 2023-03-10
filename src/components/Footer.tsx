import { Flex, Icon, Text } from '@chakra-ui/react'
import { AiOutlineCopyrightCircle } from 'react-icons/ai'

export function Footer() {
  return (
    <Flex
      w='100%'
      h='34px'
      bg='brand.gray.200'
      align='center'
      justify='center'
      position='fixed'
      bottom='0px'
    >
      <Flex w='100%' maxW={1440} align='center' justify='center'>
        <Text>
          MKS sistemas
          <Text as='span' >
            <Icon as={AiOutlineCopyrightCircle} mx='1' fontSize='12px'/>
            Todos os direitos reservados.
          </Text>
        </Text>
      </Flex>
    </Flex>
  )
}