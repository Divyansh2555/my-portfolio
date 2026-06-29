import "../styles/Profile.css";

function Profile() {
  return (
    <div className="profile-page">
      <div className="profile-card">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="profile-img"
        />

        <h1>Divyanshu</h1>
        <p className="role">Frontend Developer</p>

        <p className="bio">
          I am a passionate developer who loves building modern and responsive web applications using React, HTML, CSS, and JavaScript.
        </p>

        <div className="profile-info">
          <p><strong>Email:</strong> divyanshu@example.com</p>
          <p><strong>Location:</strong> India</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;