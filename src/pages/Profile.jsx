import NavBar from "../components/NavBar";

const Profile = () => {
  const profileData = {
    name: 'Fernendo Aguiar Santos',
    registration: '587699',
    contact: '(85)98740-3028',
    image: 'https://picsum.photos/200' // Placeholder image URL
  };

  return (
    <>
    <NavBar />
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
          <img src={profileData.image} alt="Profile" className="img-fluid rounded-circle mb-3" style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
          <h1 className="display-4" style={{marginBottom: 100}}>{profileData.name}</h1>
          <div className="container-md">
              <p className="lead text-muted">Matrícula: {profileData.registration}</p>
              <p className="lead text-muted">Contato: {profileData.contact}</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Profile;