import { ProductCard } from "@/components/ProductCard"
import { Product } from "@/pages"
import { renderWithProviders } from "@/utils/test-utils"
import { fireEvent, screen } from "@testing-library/dom"

const appleWatchInfo: Product = {
  id: 5,
  photo: 'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/applewatch-series7.webp',
  name: 'Apple Watch Series 7',
  price: 'R$ 3.200',
  description: 'O Apple Watch faz coisas que outros aparelhos não conseguem porque ele fica no seu pulso.',
  createdAt: '',
}

describe('3 - ProductCard component', () => {
  it('3.1 - renders properly', () => {
    const { debug } = renderWithProviders(<ProductCard product={appleWatchInfo} />)
    debug()
    expect(screen.queryByRole('img')).toBeInTheDocument()
    expect(screen.getByText(/apple watch series 7/i)).toBeInTheDocument()
    expect(screen.getByText(/comprar/i)).toBeInTheDocument()
  })

  it('3.2 - calls dispatch function when user clicks on "buy" button', () => {
    const { debug, store } = renderWithProviders(<ProductCard product={appleWatchInfo} />)
    fireEvent.click(screen.getByText(/comprar/i))
    const amount = store.getState().shoppingCart.totalAmount
    expect(amount).toMatch(/^([^\d\s]{1,}\s?[+-]?)(\d{1,3})(\,\d{3})*(\.\d{1,})?$/)
  })
})