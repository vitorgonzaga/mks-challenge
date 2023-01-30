import { Footer } from "@/components/Footer"
import { render, screen } from "@testing-library/react"

describe('2 - Footer component', () => {
  it('2.1 - renders properly', () => {
    render(<Footer />)
    expect(screen.getByText(/todos os direitos reservados/i)).toBeInTheDocument()
  })
})