import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ProductCard } from "@/components/ProductCard";
import { ShoppingCart } from "@/components/ShoppingCart";
import { api } from "@/services/api";
import { saveCart } from "@/store/shoppingCartSlice";
import { Flex, Spinner, Text } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";

export type Product = {
  id: number,
  photo: string,
  name: string,
  price: string,
  description: string,
  createdAt: string
}

interface HomeProps {
  products: Product[]
}

export default function Home({ products }: HomeProps) {
  const [ page, setPage ] = useState(1)
  const dispatch = useDispatch()

  const { isLoading, error, data } = useQuery(['products', page], async () => {
    const { data } = await api.get('products', {
      params: {
        page,
        rows: 8,
        sortBy: 'id',
        orderBy: 'DESC'
      }
    })

    const products = data.products.map(({ id, photo, name, price, description, createdAt }: Product) => {
      return {
        id,
        photo,
        name,
        price: Intl.NumberFormat('pt-BR',{
          style: 'currency',
          currency: 'BRL',
          minimumFractionDigits: 0,
        }).format(Number(price)).replace(' ', ''),
        description,
        createdAt
      }
    })

    return products

  })

  useEffect(() => {
    const storageCart = localStorage.getItem('@mks:cart')
    if (!storageCart) {
      localStorage.setItem('@mks:cart', JSON.stringify([]))
    } else {
      dispatch(saveCart(JSON.parse(storageCart)))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Flex
      direction='column'
      w='100vw'
      h='100vh'
    >
      <Header />
      <Flex
        w='100%'
        maxW={1440}
        mx='auto'
        h={['calc(100vh - 48px - 34px)', 'calc(100vh - 101px - 34px)']}
        mt={['48px']}
        align='center'
        justify='center'
      >
        <Flex
          w='100vw'
          maxWidth={950}
          h='100vh'
          maxHeight={660}
          wrap='wrap'
          justify={['center', 'space-between']}
          gap='16px'
          mt={['100px']}
        >
          { isLoading ? (
            <Flex align='center' justify='center' w='100vw'>
              <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='brand.blue.500'
                size={['md', 'xl']}
              />
            </Flex>
          ) : error ? (
            <Flex align='center' justify='center'>
              <Text fontWeight={600}>Não foi possível obter os dados de produtos.</Text>
            </Flex>
          ) : (
            data?.map((product: Product) => {
              return <ProductCard key={product.id} product={product} />
            })
          )}
        </Flex>
      </Flex>
      <ShoppingCart />
      <Footer />
    </Flex>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  const { data } = await api.get('products', {
    params: {
      page: 1,
      rows: 8,
      sortBy: 'id',
      orderBy: 'DESC'
    }
  })

  const products = data.products.map(({ id, photo, name, price, description, createdAt }: Product) => {
    return {
      id,
      photo,
      name,
      price,
      description,
      createdAt
    }
  })

  return {
    props: {
      products
    },

  }
}
