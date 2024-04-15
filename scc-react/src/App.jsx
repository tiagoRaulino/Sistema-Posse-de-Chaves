import { Link } from "react-router-dom"
import NavBar from "./components/navBar"

export default function App() {
  return <>
    <NavBar/>
    <div>
      <h1>Bem Vindo!</h1>
      <p>Esta é uma pagina de apresentação</p>
      <Link to='/register' className="btn btn-primary">Cadastre-se</Link>
      <Link to='/login' className="btn btn-secondary">Login</Link>
    </div>
  </>
}