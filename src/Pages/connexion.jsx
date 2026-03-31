import {Link} from 'react-router-dom'; 

function Connexion() {
  return (
    <main>
      <h1>Connexion</h1>
      <p>Connectez-vous a votre compte avec vos identifiants.</p>

      <form>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" />
        </div>

        <div>
          <label htmlFor="password">Mot de passe</label>
          <input id="password" name="password" type="password" />
        </div>

        <button type="submit">Se connecter</button>
      </form>

      <Link to="./Inscription">Pas encore de compte ? Inscrivez-vous</Link>
    </main>
  );
}

export default Connexion;
