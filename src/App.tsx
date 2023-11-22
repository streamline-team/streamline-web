import { useEffect, useState } from 'react'
import './App.css'
import ExampleComponent from './components/example'
import { useKindeAuth } from '@kinde-oss/kinde-auth-react'

function App() {
  const [count, setCount] = useState(0)

  const { login, isAuthenticated, isLoading, user } = useKindeAuth()

  useEffect(() => {
    if (isAuthenticated || isLoading) {
      return
    }

    const loginRedirect = async (): Promise<void> => {
      await login()
    }

    loginRedirect()
  }, [isAuthenticated, isLoading])

  if (!user) {
    return (
      <>
        <span>Not Authenticated!</span>
      </>
    )
  }

  return (
    <>

      <ExampleComponent></ExampleComponent>
      <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
    </>
  )
}

export default App
