import { Link } from "react-router-dom"
import NavBar from "./components/NavBar"

export default function App() {
  return <>
    <NavBar />
    <div className="container text-center mt-5">
      <h1 className="display-4">Bem Vindo de Volta!</h1>
      <p className="lead">Esta é uma pagina de apresentação</p>
      <div className="mt-4">
        <Link to='/register' className="btn btn-primary btn-lg mx-2">Cadastre-se</Link>
        <Link to='/login' className="btn btn-secondary btn-lg mx-2">Login</Link>
      </div>
    </div>
  </>
}