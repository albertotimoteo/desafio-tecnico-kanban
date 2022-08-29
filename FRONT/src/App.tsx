import { useEffect, useState } from 'react'
import { login } from './services/login'
import api from './services/configuration'
import { AppWrapper } from './App.style'
import { Kanban } from './pages/Kanban'
import { Loading } from './components/Loading'
import { ToastContainer, toast } from 'react-toastify'

function App() {
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const doLogin = async () => {
      try {
        const response = await login()
        api.defaults.headers.common.Authorization = `Bearer ${response.data}`
        setLoading(false)
      } catch (error) {
        toast.error('Erro ao fazer login.')
      }
    }
    doLogin()
  }, [])

  return (
    <AppWrapper>
      {isLoading ? <Loading /> : <Kanban />}{' '}
      <ToastContainer position="bottom-right" />
    </AppWrapper>
  )
}

export default App
