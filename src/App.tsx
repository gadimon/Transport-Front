
import './App.css'
import Layout from './layout/Layout'
import AppRoute from './routes/AppRoute'


function App() {

  return (
    <>
    
    <Layout children={<AppRoute/>}/>
    </>
  )
}

export default App
