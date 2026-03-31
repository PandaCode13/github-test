import { Link } from "react-router-dom";
import "../CSS/connexion.css";

function Connexion() {
  return (
    <main className="connexion-page">
      <h1>Connexion</h1>
      <p className="connexion-subtitle">
        Connectez-vous a votre compte avec vos identifiants.
      </p>

      <form className="connexion-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" />
        </div>

        <div className="form-group">
          <label htmlFor="password">Mot de passe</label>
          <input id="password" name="password" type="password" />
        </div>

        <button type="submit">Se connecter</button>
      </form>

      <Link className="connexion-link" to="/inscription">
        Pas encore de compte ? Inscrivez-vous
      </Link>
    </main>
  );
}

export default Connexion;
