import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ProductCard } from "@/components/ProductCard";
import { Box, Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box
      w='100vw'
      h='100vh'
    >
      <Header />
      <Flex
        pt='101px'
        h='calc(100vh - 34px)'
        align='center'
        justify='center'
      >
        <Flex
          w='938px'
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
      <Footer />
    </Box>
  )
}
