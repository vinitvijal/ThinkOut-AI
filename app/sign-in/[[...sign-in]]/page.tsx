import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <main className='flex flex-col items-center justify-center min-h-screen p-4 bg-accent-background'>    
      <SignIn />
    </main>
)
}