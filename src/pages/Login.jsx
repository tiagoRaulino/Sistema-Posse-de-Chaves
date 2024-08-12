import { Link } from "react-router-dom"
import NavBar from "../components/NavBar"

export default function Login() {
    return <>
    <div>
        <NavBar />
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h1 className="text-center">Login</h1>
                    <p className="text-center">Conecte-se à sua conta</p>
                    <form>
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label htmlFor="floatingInput">Matrícula ou SIAPE</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                            <label htmlFor="floatingPassword">Senha</label>
                        </div>
                        <div className="mb-3 d-flex justify-content-center">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" style={{ cursor: 'pointer' }}/>
                            <span className="ms-1 form-check-label" htmlFor="exampleCheck1" style={{ cursor: 'default' }}>Mantenha-me conectado</span>
                        </div>
                        <div className="d-grid">
                            <Link to='/home' className="btn btn-primary btn-lg">Login</Link>
                        </div>
                        <p className="text-center mt-3">
                            ou
                            <Link to='/register'className="ms-1 text-primary text-decoration-underline">Crie uma conta</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </>
}
