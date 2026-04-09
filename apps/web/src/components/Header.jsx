import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext.jsx';
import { Menu, X, User, LogOut, BookOpen, Home, LayoutDashboard, Library, Mail, ChevronDown, Info, Users } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { cn } from '@/lib/utils.js';

const Header = () => {
  const { isAuthenticated, logout, currentUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsMenuOpen(false);
    setShowUserMenu(false);
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const isActive = (path) => location.pathname === path;

  const NavLink = ({ to, children, icon: Icon }) => (
    <Link
      to={to}
      className={cn(
        "flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 text-sm font-medium relative group",
        isActive(to)
          ? "bg-blue-600 text-white shadow-md"
          : "text-gray-700 hover:bg-gray-100 hover:text-blue-700"
      )}
      onClick={() => {
        setIsMenuOpen(false);
        setShowUserMenu(false);
      }}
    >
      {Icon && <Icon className="w-4 h-4" />}
      {children}
      {isActive(to) && (
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"></div>
      )}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur-lg shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* Logo - Enhanced */}
          <Link to="/" className="flex items-center gap-3 group" onClick={() => setIsMenuOpen(false)}>
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
              <span className="text-white font-bold text-xl">V</span>
            </div>
            <div className="hidden lg:block">
              <span className="font-bold text-xl text-gray-900 block leading-tight">
                Velocity Global Leasing Training
              </span>
              <span className="text-xs text-gray-500 font-medium">
                Master Equipment Leasing
              </span>
            </div>
            <span className="font-bold text-lg text-gray-900 lg:hidden">
              VGLT
            </span>
          </Link>

          {/* Desktop Navigation - Enhanced */}
          <nav className="hidden md:flex items-center gap-1">
            <NavLink to="/" icon={Home}>Home</NavLink>
            <NavLink to="/about-us" icon={Info}>About Us</NavLink>
            <NavLink to="/courses" icon={BookOpen}>Courses</NavLink>
            <NavLink to="/for-teams" icon={Users}>For Teams</NavLink>

            {isAuthenticated && (
              <NavLink to="/courses-lessons" icon={Library}>Lessons</NavLink>
            )}
            
            <NavLink to="/contact-us" icon={Mail}>Contact</NavLink>

            {isAuthenticated ? (
              <>
                <NavLink to="/dashboard" icon={LayoutDashboard}>Dashboard</NavLink>

                {/* User Menu Dropdown - Enhanced */}
                <div className="relative ml-3">
                  <button
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-all duration-200 group"
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm shadow-md">
                      {(currentUser?.name || currentUser?.email || 'U').charAt(0).toUpperCase()}
                    </div>
                    <div className="hidden xl:flex flex-col items-start">
                      <span className="text-sm font-semibold text-gray-900 leading-none">
                        {currentUser?.name || 'User'}
                      </span>
                      <span className="text-xs text-gray-500 leading-none mt-0.5">
                        {currentUser?.role || 'Student'}
                      </span>
                    </div>
                    <ChevronDown className={cn(
                      "w-4 h-4 text-gray-500 transition-transform duration-200",
                      showUserMenu && "rotate-180"
                    )} />
                  </button>

                  {/* Dropdown Menu */}
                  {showUserMenu && (
                    <>
                      <div 
                        className="fixed inset-0 z-40" 
                        onClick={() => setShowUserMenu(false)}
                      ></div>
                      <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-50 animate-in fade-in slide-in-from-top-2">
                        <div className="px-4 py-3 border-b border-gray-100">
                          <p className="text-sm font-semibold text-gray-900">
                            {currentUser?.name || currentUser?.email}
                          </p>
                          <p className="text-xs text-gray-500 mt-0.5">
                            {currentUser?.email}
                          </p>
                        </div>
                        
                        <Link
                          to="/profile"
                          className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                          onClick={() => setShowUserMenu(false)}
                        >
                          <User className="w-4 h-4 text-gray-500" />
                          My Profile
                        </Link>
                        
                        <Link
                          to="/dashboard"
                          className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                          onClick={() => setShowUserMenu(false)}
                        >
                          <LayoutDashboard className="w-4 h-4 text-gray-500" />
                          Dashboard
                        </Link>

                        <div className="border-t border-gray-100 mt-2 pt-2">
                          <button
                            onClick={handleLogout}
                            className="flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors w-full"
                          >
                            <LogOut className="w-4 h-4" />
                            Sign Out
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </>
            ) : (
              <div className="flex items-center gap-2 ml-3">
                <Link to="/login">
                  <Button 
                    variant="ghost" 
                    className="text-gray-700 hover:bg-gray-100 hover:text-blue-700 font-medium"
                  >
                    Login
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-md hover:shadow-lg transition-all duration-200 font-semibold">
                    Get Started
                  </Button>
                </Link>
              </div>
            )}
          </nav>

          {/* Mobile Menu Button - Enhanced */}
          <button
            className="md:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation - Enhanced */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white shadow-lg absolute w-full animate-in slide-in-from-top-2">
          <div className="container mx-auto px-4 py-4 space-y-1">
            <NavLink to="/" icon={Home}>Home</NavLink>
            <NavLink to="/about-us" icon={Info}>About Us</NavLink>
            <NavLink to="/courses" icon={BookOpen}>Courses</NavLink>
            <NavLink to="/for-teams" icon={Users}>For Teams</NavLink>

            {isAuthenticated && (
              <NavLink to="/courses-lessons" icon={Library}>Lessons</NavLink>
            )}
            
            <NavLink to="/contact-us" icon={Mail}>Contact</NavLink>

            {isAuthenticated ? (
              <>
                <NavLink to="/dashboard" icon={LayoutDashboard}>Dashboard</NavLink>
                
                {/* Mobile User Section */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 mt-3 border border-blue-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">
                      {(currentUser?.name || currentUser?.email || 'U').charAt(0).toUpperCase()}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-sm text-gray-900">
                        {currentUser?.name || currentUser?.email}
                      </p>
                      <p className="text-xs text-gray-600 bg-white px-2 py-0.5 rounded-full inline-block mt-1">
                        {currentUser?.role || 'Student'}
                      </p>
                    </div>
                  </div>
                  
                  <Link
                    to="/profile"
                    className="flex items-center gap-2 px-4 py-2.5 bg-white rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors mb-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <User className="w-4 h-4" />
                    View Profile
                  </Link>

                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-red-600 bg-white hover:bg-red-50 transition-colors border border-red-200"
                  >
                    <LogOut className="w-4 h-4" />
                    Sign Out
                  </button>
                </div>
              </>
            ) : (
              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-gray-200 mt-3">
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  <Button 
                    variant="outline" 
                    className="w-full border-blue-200 text-blue-700 hover:bg-blue-50 font-medium"
                  >
                    Login
                  </Button>
                </Link>
                <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-md font-semibold">
                    Sign Up
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;