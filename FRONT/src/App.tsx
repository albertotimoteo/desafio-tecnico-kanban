import { useEffect, useState } from 'react'
import { login } from './services/login'
import api from './services/configuration'
import { AppWrapper } from './App.style'
import { Kanban } from './pages/Kanban'
import { Loading } from './components/Loading'

function App() {
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const doLogin = async () => {
      try {
        const response = await login()
        api.defaults.headers.common.Authorization = `Bearer ${response.data}`
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
    doLogin()
  }, [])

  return <AppWrapper>{isLoading ? <Loading /> : <Kanban />}</AppWrapper>
}

export default App
