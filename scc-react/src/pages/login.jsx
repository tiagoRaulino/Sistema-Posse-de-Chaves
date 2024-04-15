import { Link } from "react-router-dom"

export default function Login() {
    return <div>
        <h1>Login</h1>
        <p>Conecte-se à sua conta</p>
        <form>
            <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                <label htmlFor="floatingInput">Matrícula ou SIAPE</label>
            </div>
            <div className="form-floating mb-3">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                <label htmlFor="floatingPassword">Senha</label>
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Mantenha-me conectado</label>
            </div>
            <Link to='/home' className="btn btn-primary">Login</Link>
            <p>ou</p>
            <Link to='/register'>Criar uma conta</Link>
        </form>
    </div>
}
