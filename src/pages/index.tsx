import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ProductCard } from "@/components/ProductCard";
import { ShoppingCart } from "@/components/ShoppingCart";
import { Flex } from "@chakra-ui/react";

export default function Home() {

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
        // pt='101px'
        h='calc(100vh - 34px)'
        align='center'
        justify='center'
      >
        <Flex
          w='100%'
          maxWidth={950}
          h='100%'
          maxHeight={630}
          wrap='wrap'
          justify='space-between'
        >
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </Flex>
      </Flex>
      <ShoppingCart />
      <Footer />
    </Flex>
  )
}
