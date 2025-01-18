import { useAuthDispatch } from "@/providers/AuthProvider";
import axios from "axios";
import React, { useState, ChangeEvent, FormEvent } from "react";

interface RegisterFormData {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

const Register: React.FC = () => {
  const dispatch = useAuthDispatch();
  
  const [formData, setFormData] = useState<RegisterFormData>({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Valider les mots de passe
    if (formData.password !== formData.confirmPassword) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8000/api/register/", {
        email: formData.email,
        username: formData.username,
        password: formData.password,
      }, {
        withCredentials: true,  // Permet l'envoi des cookies
      });

      // Si l'inscription réussie, obtenir le token et l'utilisateur
      const { access_token, user } = response.data;

      // Déclencher l'action LOGIN pour connecter l'utilisateur
      dispatch({
        type: "LOGIN",
        payload: {
          user,
          accessToken: access_token,
        },
      });

      setSuccess(true);
      setError(null);
    } catch (err: any) {
      setError(err.response?.data?.detail || "Une erreur est survenue.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-dark-primary">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg dark:bg-dark-secondary">
        <h1 className="text-2xl font-bold text-center text-dark-primary dark:text-text-primary">
          Créer un compte
        </h1>
        <p className="text-sm text-center text-gray-500 dark:text-text-secondary">
          Créez vous un compte pour continuer
        </p>
        {error && <p className="text-sm text-center text-red-500">{error}</p>}
        {success && (
          <p className="text-sm text-center text-green-500">
            Inscription réussie ! Vous pouvez maintenant vous connecter.
          </p>
        )}
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Form Fields for email, username, password, and confirm password */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-text-secondary"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Entrez votre email"
              className="w-full px-4 py-2 mt-1 text-sm bg-gray-50 border rounded-md shadow-sm dark:bg-dark-tertiary dark:border-border-dark focus:outline-none focus:ring-2 focus:ring-primary-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 dark:text-text-secondary"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Entrez votre username"
              className="w-full px-4 py-2 mt-1 text-sm bg-gray-50 border rounded-md shadow-sm dark:bg-dark-tertiary dark:border-border-dark focus:outline-none focus:ring-2 focus:ring-primary-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-text-secondary"
            >
              Mot de passe
            </label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Entrez votre mot de passe"
              className="w-full px-4 py-2 mt-1 text-sm bg-gray-50 border rounded-md shadow-sm dark:bg-dark-tertiary dark:border-border-dark focus:outline-none focus:ring-2 focus:ring-primary-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700 dark:text-text-secondary"
            >
              Confirmer votre mot de passe
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirmer votre mot de passe"
              className="w-full px-4 py-2 mt-1 text-sm bg-gray-50 border rounded-md shadow-sm dark:bg-dark-tertiary dark:border-border-dark focus:outline-none focus:ring-2 focus:ring-primary-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-sm font-semibold text-white rounded-md shadow-md bg-primary-600 hover:bg-primary-700 focus:ring-2 focus:ring-primary-400 dark:shadow-dark-glow"
          >
            Créer un compte
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
