import { Link } from "react-router-dom";
import "../CSS/inscription.css";

function Inscription() {
  return (
    <main className="inscription-page">
      <h1>Inscription</h1>
      <p className="inscription-subtitle">
        Creez votre compte en remplissant le formulaire ci-dessous.
      </p>

      <form className="inscription-form">
        <div className="form-group">
          <label htmlFor="nom">Nom</label>
          <input id="nom" name="nom" type="text" />
        </div>

        <div className="form-group">
          <label htmlFor="prenom">Prenom</label>
          <input id="prenom" name="prenom" type="text" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" />
        </div>

        <div className="form-group">
          <label htmlFor="password">Mot de passe</label>
          <input id="password" name="password" type="password" />
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
          />
        </div>

        <div className="form-group">
          <label htmlFor="telephone">Telephone</label>
          <input id="telephone" name="telephone" type="tel" />
        </div>

        <button type="submit">S'inscrire</button>
      </form>

      <Link className="inscription-link" to="/connexion">
        Deja un compte ? Connectez-vous
      </Link>
    </main>
  );
}

export default Inscription;
