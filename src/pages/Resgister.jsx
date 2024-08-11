import { Link } from "react-router-dom"
import NavBar from "../components/NavBar"

export default function Register() {
    return <>
    <NavBar />
    <div className="container mt-5">
        
        <div className="row justify-content-center">
            <div className="col-md-6">
                <h1 className="text-center">Cadastro</h1>
                <p className="text-center">Crie sua conta</p>
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
                    <div className="d-grid">
                        <Link to='/login' className="btn btn-primary btn-lg">Cadastrar-se</Link>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </>
}
