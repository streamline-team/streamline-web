import { useEffect } from 'react'
import './App.css'
import Todocomp from './components/toDoMain'
import { useKindeAuth } from '@kinde-oss/kinde-auth-react'
import logo from './assets/logo.svg'

function App (): JSX.Element {
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
      <img src={logo} alt="Logo" className="absolute top-0 left-0 w-32 h-32 p-4" /> {/* Add the logo image */}
      <Todocomp />
    </>
  )
}

export default App
