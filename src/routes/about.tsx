import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: () => <div>Hello /about! This is to show that the routing works</div>,
})
