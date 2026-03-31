import { useState } from "react";
import { Link } from "react-router-dom";
import "../CSS/inscription.css";

function Inscription() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    password: "",
    confirmPassword: "",
    telephone: "",
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
    setSuccessMessage("Vous etes inscrit");
  }

  return (
    <main className="inscription-page">
      <h1>Inscription</h1>
      <p className="inscription-subtitle">
        Creez votre compte en remplissant le formulaire ci-dessous.
      </p>

      <form className="inscription-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nom">Nom</label>
          <input
            id="nom"
            name="nom"
            type="text"
            value={formData.nom}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="prenom">Prenom</label>
          <input
            id="prenom"
            name="prenom"
            type="text"
            value={formData.prenom}
            onChange={handleChange}
          />
        </div>

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

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="telephone">Telephone</label>
          <input
            id="telephone"
            name="telephone"
            type="tel"
            value={formData.telephone}
            onChange={handleChange}
          />
        </div>

        <button type="submit">S'inscrire</button>
      </form>

      {successMessage ? (
        <div className="form-message">{successMessage}</div>
      ) : null}

      <Link className="inscription-link" to="/connexion">
        Deja un compte ? Connectez-vous
      </Link>
    </main>
  );
}

export default Inscription;
