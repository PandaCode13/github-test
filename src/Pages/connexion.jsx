import { useState } from "react";
import { Link } from "react-router-dom";
import "../CSS/connexion.css";

function Connexion() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSuccessMessage("Vous etes connecte avec succes");
  }

  return (
    <main className="connexion-page">
      <h1>Connexion</h1>
      <p className="connexion-subtitle">
        Connectez-vous a votre compte avec vos identifiants.
      </p>

      <form className="connexion-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Mot de passe</label>
          <input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Se connecter</button>
      </form>

      {successMessage ? (
        <div className="form-message">{successMessage}</div>
      ) : null}

      <Link className="connexion-link" to="/inscription">
        Pas encore de compte ? Inscrivez-vous
      </Link>
    </main>
  );
}

export default Connexion;
