import { Header } from '@/components/Header'
import { renderWithProviders } from '@/utils/test-utils'
import { fireEvent } from '@testing-library/dom'

describe('1. Component Header', () => {
  it('1.1 - logo renders properly', () => {
    const { getByText } = renderWithProviders(<Header />)
    expect(getByText('MKS')).toBeInTheDocument()
    expect(getByText('Sistemas')).toBeInTheDocument()
  })

  it('1.2 - cart button renders properly', () => {
    const { getByRole } = renderWithProviders(<Header />)
    expect(getByRole('button')).toBeInTheDocument()
  })

  it('1.3 - cart button calls dispatch function', () => {
    const { getByRole, store} = renderWithProviders(<Header />)

    const cartBtn = getByRole('button')
    expect(cartBtn).toBeInTheDocument()
    fireEvent.click(cartBtn)
    expect(store.getState().shoppingCart.isOpen).toBe(true)
  })

})