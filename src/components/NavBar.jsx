function NavBar() {
    return (
        <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="/home">Portuno</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="/home">Salas</a>
            <a className="nav-link" href="/reservations">Reservas</a>
            <a className="nav-link" href="/permissions">Permissões</a>
            <a className="nav-link" href="/profile">Perfil</a>
          </div>
        </div>
      </div>
    </nav>
        </>
    )
}

export default NavBar;