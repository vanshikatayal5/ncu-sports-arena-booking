
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate NCU email
    if (!email.endsWith('@ncuindia.edu')) {
      toast({
        title: "Invalid email",
        description: "Please use your NCU email address",
        variant: "destructive",
      });
      return;
    }

    // Validate password requirements
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    if (!passwordRegex.test(password)) {
      toast({
        title: "Invalid password",
        description: "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character",
        variant: "destructive",
      });
      return;
    }

    // Hardcoded credentials check
    if (email === "test@ncuindia.edu" && password === "Test@123") {
      toast({
        title: "Success",
        description: "Login successful",
      });
      navigate('/facilities');
    } else {
      toast({
        title: "Invalid credentials",
        description: "Please check your email and password",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">SportifyNCU</h1>
          <p className="text-gray-600">Sign in to your account</p>
        </div>
        
        <form onSubmit={handleSubmit} className="mt-8 space-y-6 bg-white p-8 rounded-xl shadow-lg">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                NCU Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="your.name@ncuindia.edu"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <p className="mt-1 text-xs text-gray-500">
                8+ characters with uppercase, lowercase, number, and special character
              </p>
            </div>
          </div>

          <Button type="submit" className="w-full">
            Sign in
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
