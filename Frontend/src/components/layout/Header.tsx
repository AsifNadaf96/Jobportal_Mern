import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { 
  User, 
  LogOut, 
  Briefcase, 
  Settings, 
  Home,
  FileText,
  Mail,
  Menu,
  X
} from 'lucide-react';
import { useState } from 'react';

const Header: React.FC = () => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const isActive = (path: string) => location.pathname === path;

  const NavItems = () => (
    <>
      <Link 
        to="/" 
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
          isActive('/') ? 'bg-primary/10 text-primary' : 'hover:bg-accent/50'
        }`}
      >
        <Home size={18} />
        Home
      </Link>
      
      <Link 
        to="/jobs" 
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
          isActive('/jobs') ? 'bg-primary/10 text-primary' : 'hover:bg-accent/50'
        }`}
      >
        <Briefcase size={18} />
        Browse Jobs
      </Link>

      {user && (
        <>
          <Link 
            to="/dashboard" 
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
              isActive('/dashboard') ? 'bg-primary/10 text-primary' : 'hover:bg-accent/50'
            }`}
          >
            <User size={18} />
            Dashboard
          </Link>
          
          <Link 
            to="/applications" 
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
              isActive('/applications') ? 'bg-primary/10 text-primary' : 'hover:bg-accent/50'
            }`}
          >
            <FileText size={18} />
            My Applications
          </Link>
        </>
      )}

      <Link 
        to="/about" 
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
          isActive('/about') ? 'bg-primary/10 text-primary' : 'hover:bg-accent/50'
        }`}
      >
        <FileText size={18} />
        About
      </Link>

      <Link 
        to="/contact" 
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
          isActive('/contact') ? 'bg-primary/10 text-primary' : 'hover:bg-accent/50'
        }`}
      >
        <Mail size={18} />
        Contact
      </Link>
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold gradient-text">TalentLeap</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            <NavItems />
          </nav>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            {user ? (
              <div className="hidden md:flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium">{user.username}</span>
                  {user.isadmin && (
                    <span className="px-2 py-1 text-xs bg-warning/20 text-warning rounded-full">
                      Admin
                    </span>
                  )}
                </div>
                <Link to="/profile">
                  <Button variant="ghost" size="sm">
                    <Settings size={16} />
                  </Button>
                </Link>
                <Button variant="ghost" size="sm" onClick={handleLogout}>
                  <LogOut size={16} />
                </Button>
              </div>
            ) : (
              <div className="hidden md:flex items-center space-x-2">
                <Link to="/login">
                  <Button variant="ghost">Login</Button>
                </Link>
                <Link to="/register">
                  <Button variant="default">Register</Button>
                </Link>
              </div>
            )}

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t bg-background/95 backdrop-blur">
            <nav className="flex flex-col space-y-2 py-4">
              <NavItems />
              
              {user ? (
                <div className="flex flex-col space-y-2 pt-4 border-t">
                  <div className="flex items-center space-x-2 px-4 py-2">
                    <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium">{user.username}</span>
                    {user.isadmin && (
                      <span className="px-2 py-1 text-xs bg-warning/20 text-warning rounded-full">
                        Admin
                      </span>
                    )}
                  </div>
                  <Link to="/profile" className="px-4 py-2 hover:bg-accent/50 rounded-lg mx-2">
                    <Settings size={16} className="inline mr-2" />
                    Settings
                  </Link>
                  <button 
                    onClick={handleLogout}
                    className="px-4 py-2 hover:bg-accent/50 rounded-lg mx-2 text-left"
                  >
                    <LogOut size={16} className="inline mr-2" />
                    Logout
                  </button>
                </div>
              ) : (
                <div className="flex flex-col space-y-2 pt-4 border-t">
                  <Link to="/login" className="mx-2">
                    <Button variant="ghost" className="w-full justify-start">Login</Button>
                  </Link>
                  <Link to="/register" className="mx-2">
                    <Button variant="default" className="w-full">Register</Button>
                  </Link>
                </div>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;