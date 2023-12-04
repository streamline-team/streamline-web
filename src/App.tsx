import { useEffect } from 'react'
import './App.css'
import Todocomp from './components/toDoMain';
import { useKindeAuth } from '@kinde-oss/kinde-auth-react'

function App() {
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
      <Todocomp  />
    </>
  )
}

export default App
