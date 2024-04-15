import { Link } from "react-router-dom"

export default function Register() {
    return <div>
        <h1>Cadastro</h1>
        <p>Crie sua conta</p>
        <form>
        <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" placeholder="" />
                <label htmlFor="floatingInput">Nome completo</label>
            </div>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" placeholder="" />
                <label htmlFor="floatingInput">Matrícula ou SIAPE</label>
            </div>
            <div className="form-floating mb-3">
                <input type="password" className="form-control" id="floatingPassword" placeholder="" />
                <label htmlFor="floatingPassword">Senha</label>
            </div>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingPassword" placeholder="" />
                <label htmlFor="floatingPassword">Número de celular</label>
            </div>
            <Link to='/login' className="btn btn-primary">Cadastrar-se</Link>
        </form>
    </div>
}
