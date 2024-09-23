import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="p-2">
      <h3>Welcome! Be sure to read the readme for instructions to get started!</h3>
      <p className='text-red-500'>This is to prove that Tailwind works in the project.</p>
    </div>
  )
}