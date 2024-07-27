import Home from '../app/page';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import * as landingPageMenu from '@/components/landing/landingpage-menu'
import { Canvas } from "@/components/landing/canvas"
import { Separator } from "@/components/ui/separator"
import { Github } from "lucide-react"

jest.mock("../components/landing/landingpage-menu");

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)
 
    const heading = screen.getByRole('heading', { level: 1 })
 
    expect(heading).toBeInTheDocument()
  })
})