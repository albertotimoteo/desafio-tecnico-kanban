import { useEffect } from 'react'
import { login } from './services/login'
import api from './services/configuration'

function App() {
  useEffect(() => {
    const doLogin = async () => {
      try {
        const response = await login()
        api.defaults.headers.common.Authorization = `Bearer ${response.data}`
      } catch (error) {
        console.log(error)
      }
    }

    doLogin()
  }, [])

  return <div></div>
}

export default App
