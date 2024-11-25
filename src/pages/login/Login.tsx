// File path: src/pages/Login.tsx
import { useState } from 'react';
import Button from "../../components/ui/Button";
import Eye from '../../assets/icons/Eye';
import EyeOffIcon from '../../assets/icons/EyeOffIcon';

import { useNavigate } from 'react-router-dom';
import useApi from '../../Hooks/useApi';
import { endPoints } from '../../services/apiEndpoints';
import toast  from 'react-hot-toast';
import axios from 'axios';
import LoginBgRight from './LoginBgRight';

type Props = {}

function Login({}: Props) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { request: CheckLogin } = useApi("post", 5004);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    setError(""); // Reset error message
    toast.success( 'Login successful! Redirecting...');
        navigate("/otp", { state: { email } }); // Pass email via navigate state

    try {
      const response = await CheckLogin(endPoints.LOGIN, { email, password });
      
      // Log the response to verify its structure
      console.log("Login response:", response.response?.data.success);

      // Check if login is successful
      if (response.response?.data.success) {
        // Display success message and navigate to OTP
        toast.success(response.response?.data.message || 'Login successful! Redirecting...');
        navigate("/otp", { state: { email } }); // Pass email via navigate state
      } else {
        // Show an error message if login fails
        const errorMessage = response.response?.data.message || "Invalid email or password";
        setError(errorMessage);
        toast.error(errorMessage);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // Handle Axios error
        const errorMessage = error.response?.data?.message || "Login failed. Please try again.";
        setError(errorMessage);
        toast.error(errorMessage);
      } else {
        // Handle non-Axios error
        setError("Login failed. Please try again.");
        toast.error("Login failed. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div   className="h-[100vh] flex text-[#303F58]">
      <div className="w-[50%] flex justify-center items-center bg-white">
        <div className="w-[60%] ">
          <p className="text-textColor font-bold text-4xl">Login into your account</p>
          <p className="text-dropdownText mt-2 text-sm font-normal">Enter your credentials to access your account</p>
          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div className="rounded-md shadow-sm space-y-4">
              <div>
                <label htmlFor="email" className="text-dropdownText text-sm">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="pl-3 text-sm w-[100%] rounded-md text-start mt-1.5 bg-white border border-inputBorder h-[39px] leading-tight focus:outline-none focus:bg-white focus:border-darkRed"
                  placeholder="Enter Email"
                />
              </div>
              <div>
                <label htmlFor="password" className="text-dropdownText text-sm">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="pl-3 text-sm w-[100%] rounded-md text-start mt-1.5 bg-white border border-inputBorder h-[39px] leading-tight focus:outline-none focus:bg-white focus:border-darkRed"
                    placeholder="Password"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="focus:outline-none mt-1"
                    >
                      {showPassword ? (
                       <Eye color='#4B5C79'/>
                      ) : (
                       <EyeOffIcon color='#4B5C79'/>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <div className="flex justify-center">
              <Button type="submit" className="px-[45%] mt-7" >
                {isLoading ? "Logging in..." : "Login"}
              </Button>
            </div>
          </form>
        </div>
      </div>
      {/* Right side with the bgImage */}
      <LoginBgRight/>
    </div>
  )
}

export default Login;
