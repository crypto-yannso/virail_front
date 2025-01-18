import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContextType } from "../../../providers/AuthProvider";
import Cookies from "js-cookie";
import { UserRepository } from "@/domain/repository/UserRepository";
import { useAuthenticated } from "@/providers/AuthenticatedProvider";

interface LoginFormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [formData, setFormData] = useState<UserContextType>({
      email: "",
      password: "",
  });

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const navigate = useNavigate();
  const userRepository = new UserRepository();
  const {isAuthenticated, setIsAuthenticated } = useAuthenticated();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    try {
      const tokens = await userRepository.loginUser(formData);
      console.log("Logged in user:", tokens.user);

      // Met à jour l'état d'authentification
      setIsAuthenticated(true);

      // Affiche un message de succès
      setSuccess(true);
    } catch (err) {
      console.error("Login error:", err);
      setError(
        typeof err === "string"
          ? err
          : "Une erreur inattendue s'est produite."
      );
    }
  };

  // Redirection si l'utilisateur est authentifié
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-dark-primary">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg dark:bg-dark-secondary">
        {/* Header */}
        <h1 className="text-2xl font-bold text-center text-dark-primary dark:text-text-primary">
          Se connecter
        </h1>
        <p className="text-sm text-center text-gray-500 dark:text-text-secondary">
          Connectez-vous pour continuer
        </p>

        {error && (
          <p className="text-sm text-center text-red-500">
            {error}
          </p>
        )}

        {success && (
          <p className="text-sm text-center text-green-500">
            Connexion réussie ! Redirection...
          </p>
        )}

        {/* Form */}
        <form className="space-y-4"  onSubmit={handleSubmit}>
          {/* Email Input */}
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


          {/* Password Input */}
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

          {/* Remember Me + Forgot Password */}
          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2 text-sm text-gray-700 dark:text-text-secondary">
              <input
                type="checkbox"
                className="w-4 h-4 border rounded dark:bg-dark-quaternary dark:border-border-darker"
              />
              <span>Se souvenir de moi</span>
            </label>
            <a
              href="#"
              className="text-sm font-medium text-primary-500 hover:underline"
            >
              Mot de passe oublié ?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 text-sm font-semibold text-white rounded-md shadow-md bg-primary-600 hover:bg-primary-700 focus:ring-2 focus:ring-primary-400 dark:shadow-dark-glow"
          >
            Se connecter
          </button>
        </form>

        {/* Footer */}
        <p className="text-sm text-center text-gray-500 dark:text-text-secondary">
          Pas encore de compte ?{" "}
          <a
            href="#"
            className="font-medium text-primary-500 hover:underline"
          >
            Créer un compte
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
