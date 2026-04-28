// import React, { useState } from 'react';
// import { Link, useNavigate, useLocation } from 'react-router-dom';
// import { useAuth } from '@/contexts/AuthContext.jsx';
// import { Menu, X, User, LogOut, BookOpen, Home, LayoutDashboard, Library, Mail, ChevronDown, Info, Users } from 'lucide-react';
// import { Button } from '@/components/ui/button.jsx';
// import { cn } from '@/lib/utils.js';

// const Header = () => {
//   const { isAuthenticated, logout, currentUser } = useAuth();
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [showUserMenu, setShowUserMenu] = useState(false);

//   const handleLogout = () => {
//     logout();
//     navigate('/');
//     setIsMenuOpen(false);
//     setShowUserMenu(false);
//   };

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//   const isActive = (path) => location.pathname === path;

//   const NavLink = ({ to, children, icon: Icon }) => (
//     <Link
//       to={to}
//       className={cn(
//         "flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 text-sm font-medium relative group",
//         isActive(to)
//           ? "bg-blue-600 text-white shadow-md"
//           : "text-gray-700 hover:bg-gray-100 hover:text-blue-700"
//       )}
//       onClick={() => {
//         setIsMenuOpen(false);
//         setShowUserMenu(false);
//       }}
//     >
//       {Icon && <Icon className="w-4 h-4" />}
//       {children}
//       {isActive(to) && (
//         <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"></div>
//       )}
//     </Link>
//   );

//   return (
//     <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur-lg shadow-sm">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="h-16 flex items-center justify-between">
//           {/* Logo - Enhanced */}
//           <Link to="/" className="flex items-center gap-3 group" onClick={() => setIsMenuOpen(false)}>
//             <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
//               <span className="text-white font-bold text-xl">V</span>
//             </div>
//             <div className="hidden lg:block">
//               <span className="font-bold text-xl text-gray-900 block leading-tight">
//                 Velocity Global Leasing Training
//               </span>
//               <span className="text-xs text-gray-500 font-medium">
//                 Master Equipment Leasing
//               </span>
//             </div>
//             <span className="font-bold text-lg text-gray-900 lg:hidden">
//               VGLT
//             </span>
//           </Link>

//           {/* Desktop Navigation - Enhanced */}
//           <nav className="hidden md:flex items-center gap-1">
//             <NavLink to="/" icon={Home}>Home</NavLink>
//             <NavLink to="/about-us" icon={Info}>About Us</NavLink>
//             <NavLink to="/courses" icon={BookOpen}>Courses</NavLink>
//             <NavLink to="/for-teams" icon={Users}>For Teams</NavLink>

//             {isAuthenticated && (
//               <NavLink to="/courses-lessons" icon={Library}>Lessons</NavLink>
//             )}
            
//             <NavLink to="/contact-us" icon={Mail}>Contact</NavLink>

//             {isAuthenticated ? (
//               <>
//                 {/* <NavLink to="/dashboard" icon={LayoutDashboard}>Dashboard</NavLink> */}

//                 {/* User Menu Dropdown - Enhanced */}
//                 <div className="relative ml-3">
//                   <button
//                     onClick={() => setShowUserMenu(!showUserMenu)}
//                     className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-all duration-200 group"
//                   >
//                     <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm shadow-md">
//                       {(currentUser?.name || currentUser?.email || 'U').charAt(0).toUpperCase()}
//                     </div>
//                     <div className="hidden xl:flex flex-col items-start">
//                       <span className="text-sm font-semibold text-gray-900 leading-none">
//                         {currentUser?.name || 'User'}
//                       </span>
//                       <span className="text-xs text-gray-500 leading-none mt-0.5">
//                         {currentUser?.role || 'Student'}
//                       </span>
//                     </div>
//                     <ChevronDown className={cn(
//                       "w-4 h-4 text-gray-500 transition-transform duration-200",
//                       showUserMenu && "rotate-180"
//                     )} />
//                   </button>

//                   {/* Dropdown Menu */}
//                   {showUserMenu && (
//                     <>
//                       <div 
//                         className="fixed inset-0 z-40" 
//                         onClick={() => setShowUserMenu(false)}
//                       ></div>
//                       <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-50 animate-in fade-in slide-in-from-top-2">
//                         <div className="px-4 py-3 border-b border-gray-100">
//                           <p className="text-sm font-semibold text-gray-900">
//                             {currentUser?.name || currentUser?.email}
//                           </p>
//                           <p className="text-xs text-gray-500 mt-0.5">
//                             {currentUser?.email}
//                           </p>
//                         </div>
                        
//                         <Link
//                           to="/profile"
//                           className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
//                           onClick={() => setShowUserMenu(false)}
//                         >
//                           <User className="w-4 h-4 text-gray-500" />
//                           My Profile
//                         </Link>
                        
//                         <Link
//                           to="/dashboard"
//                           className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
//                           onClick={() => setShowUserMenu(false)}
//                         >
//                           <LayoutDashboard className="w-4 h-4 text-gray-500" />
//                           Dashboard
//                         </Link>

//                         <div className="border-t border-gray-100 mt-2 pt-2">
//                           <button
//                             onClick={handleLogout}
//                             className="flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors w-full"
//                           >
//                             <LogOut className="w-4 h-4" />
//                             Sign Out
//                           </button>
//                         </div>
//                       </div>
//                     </>
//                   )}
//                 </div>
//               </>
//             ) : (
//               <div className="flex items-center gap-2 ml-3">
//                 <Link to="/login">
//                   <Button 
//                     variant="ghost" 
//                     className="text-gray-700 hover:bg-gray-100 hover:text-blue-700 font-medium"
//                   >
//                     Login
//                   </Button>
//                 </Link>
//                 <Link to="/signup">
//                   <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-md hover:shadow-lg transition-all duration-200 font-semibold">
//                     Get Started
//                   </Button>
//                 </Link>
//               </div>
//             )}
//           </nav>

//           {/* Mobile Menu Button - Enhanced */}
//           <button
//             className="md:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
//             onClick={toggleMenu}
//           >
//             {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Navigation - Enhanced */}
//       {isMenuOpen && (
//         <div className="md:hidden border-t border-gray-200 bg-white shadow-lg absolute w-full animate-in slide-in-from-top-2">
//           <div className="container mx-auto px-4 py-4 space-y-1">
//             <NavLink to="/" icon={Home}>Home</NavLink>
//             <NavLink to="/about-us" icon={Info}>About Us</NavLink>
//             <NavLink to="/courses" icon={BookOpen}>Courses</NavLink>
//             <NavLink to="/for-teams" icon={Users}>For Teams</NavLink>

//             {isAuthenticated && (
//               <NavLink to="/courses-lessons" icon={Library}>Lessons</NavLink>
//             )}
            
//             <NavLink to="/contact-us" icon={Mail}>Contact</NavLink>

//             {isAuthenticated ? (
//               <>
//                 <NavLink to="/dashboard" icon={LayoutDashboard}>Dashboard</NavLink>
                
//                 {/* Mobile User Section */}
//                 <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 mt-3 border border-blue-200">
//                   <div className="flex items-center gap-3 mb-3">
//                     <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">
//                       {(currentUser?.name || currentUser?.email || 'U').charAt(0).toUpperCase()}
//                     </div>
//                     <div className="flex-1">
//                       <p className="font-semibold text-sm text-gray-900">
//                         {currentUser?.name || currentUser?.email}
//                       </p>
//                       <p className="text-xs text-gray-600 bg-white px-2 py-0.5 rounded-full inline-block mt-1">
//                         {currentUser?.role || 'Student'}
//                       </p>
//                     </div>
//                   </div>
                  
//                   <Link
//                     to="/profile"
//                     className="flex items-center gap-2 px-4 py-2.5 bg-white rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors mb-2"
//                     onClick={() => setIsMenuOpen(false)}
//                   >
//                     <User className="w-4 h-4" />
//                     View Profile
//                   </Link>

//                   <button
//                     onClick={handleLogout}
//                     className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-red-600 bg-white hover:bg-red-50 transition-colors border border-red-200"
//                   >
//                     <LogOut className="w-4 h-4" />
//                     Sign Out
//                   </button>
//                 </div>
//               </>
//             ) : (
//               <div className="grid grid-cols-2 gap-3 pt-3 border-t border-gray-200 mt-3">
//                 <Link to="/login" onClick={() => setIsMenuOpen(false)}>
//                   <Button 
//                     variant="outline" 
//                     className="w-full border-blue-200 text-blue-700 hover:bg-blue-50 font-medium"
//                   >
//                     Login
//                   </Button>
//                 </Link>
//                 <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
//                   <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-md font-semibold">
//                     Sign Up
//                   </Button>
//                 </Link>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;

import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext.jsx';
import {
  Menu, X, User, LogOut, BookOpen, Home, LayoutDashboard,
  Library, Mail, ChevronDown, Info, Users, BookCheckIcon
} from 'lucide-react';
import { cn } from '@/lib/utils.js';

// ─── Google Font ───────────────────────────────────────────────────────────────
const FONT_LINK = (
  <link
    href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap"
    rel="stylesheet"
  />
);

// ─── NavLink — desktop ────────────────────────────────────────────────────────
const NavLink = ({ to, children, icon: Icon, onClick, isActive }) => (
  <Link
    to={to}
    onClick={onClick}
    className={cn(
      "relative flex items-center gap-1.5 px-3 py-1.5 text-[13px] font-semibold rounded-md transition-all duration-150 whitespace-nowrap group",
      isActive
        ? "text-blue-700"
        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/70"
    )}
  >
    {Icon && (
      <Icon className={cn("w-3.5 h-3.5 shrink-0", isActive ? "text-blue-600" : "text-slate-400 group-hover:text-slate-600")} />
    )}
    {children}
    {/* Underline indicator */}
    <span
      className={cn(
        "absolute bottom-0 left-2 right-2 h-[2px] rounded-full bg-blue-600 transition-all duration-200",
        isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
      )}
    />
  </Link>
);

// ─── Main Header ──────────────────────────────────────────────────────────────
const Header = () => {
  const { isAuthenticated, logout, currentUser } = useAuth();
  const navigate  = useNavigate();
  const location  = useLocation();
  const [isMenuOpen,   setIsMenuOpen]   = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Shadow on scroll
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 4);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setIsMenuOpen(false); setShowUserMenu(false); }, [location.pathname]);

  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsMenuOpen(false);
    setShowUserMenu(false);
  };

  const close = () => { setIsMenuOpen(false); setShowUserMenu(false); };

  // ── Nav items (add more here — layout won't break) ──────────────────────────
  const publicLinks = [
    { to: '/',           label: 'Home',     icon: Home     },
    { to: '/about-us',   label: 'About',    icon: Info     },
    { to: '/courses',    label: 'Courses',  icon: BookOpen },
    { to: '/for-teams',  label: 'For Teams',icon: Users    },
    { to: '/contact-us', label: 'Contact',  icon: Mail     },
  ];

  const authLinks = [
    { to: '/courses-lessons', label: 'Lessons', icon: Library },
    { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { to: '/seminars', label: 'Member Portal', icon: BookCheckIcon },
  ];

  const allDesktopLinks = [
    ...publicLinks,
    ...(isAuthenticated ? authLinks : []),
  ];

  const avatar = (currentUser?.name || currentUser?.email || 'U').charAt(0).toUpperCase();

  return (
    <>
      {FONT_LINK}

      <header
        style={{ fontFamily: "'DM Sans', sans-serif" }}
        className={cn(
          "sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-shadow duration-200",
          scrolled && "shadow-[0_2px_12px_rgba(0,0,0,0.08)]"
        )}
      >
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <div className="h-14 flex items-center justify-between gap-4">

            {/* ── Logo ── */}
            <Link to="/" onClick={close} className="flex items-center gap-2.5 shrink-0 group">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-sm group-hover:bg-blue-700 transition-colors duration-150">
                <span className="text-white font-bold text-base leading-none">V</span>
              </div>
              <div className="hidden sm:block">
                <span className="font-bold text-[15px] text-slate-900 leading-none tracking-tight block">
                  Velocity Global
                </span>
                <span className="text-[10px] text-slate-400 font-medium tracking-wide uppercase">
                  Leasing Training
                </span>
              </div>
              <span className="font-bold text-[15px] text-slate-900 sm:hidden">VGLT</span>
            </Link>

            {/* ── Desktop Nav ── */}
            {/* Uses flex-wrap so extra items just wrap to a second line rather than overflow */}
            <nav className="hidden md:flex items-center gap-0.5 flex-1 justify-center">
              {allDesktopLinks.map(({ to, label, icon }) => (
                <NavLink key={to} to={to} icon={icon} isActive={isActive(to)} onClick={close}>
                  {label}
                </NavLink>
              ))}
            </nav>

            {/* ── Right side — Auth ── */}
            <div className="hidden md:flex items-center gap-2 shrink-0">
              {isAuthenticated ? (
                <div className="relative">
                  <button
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className="flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-lg hover:bg-slate-100 transition-colors duration-150 group"
                  >
                    {/* Avatar */}
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white text-xs font-bold shadow-sm">
                      {avatar}
                    </div>
                    <div className="hidden xl:block text-left">
                      <p className="text-[13px] font-semibold text-slate-800 leading-none">
                        {currentUser?.name || 'Account'}
                      </p>
                      <p className="text-[11px] text-slate-400 leading-none mt-0.5">
                        {currentUser?.role || 'Student'}
                      </p>
                    </div>
                    <ChevronDown className={cn(
                      "w-3.5 h-3.5 text-slate-400 transition-transform duration-200",
                      showUserMenu && "rotate-180"
                    )} />
                  </button>

                  {/* Dropdown */}
                  {showUserMenu && (
                    <>
                      <div className="fixed inset-0 z-40" onClick={() => setShowUserMenu(false)} />
                      <div className="absolute right-0 mt-1.5 w-52 bg-white rounded-xl shadow-xl border border-slate-200/80 py-1.5 z-50">
                        {/* User info */}
                        <div className="px-3.5 py-2.5 border-b border-slate-100 mb-1">
                          <p className="text-[13px] font-semibold text-slate-900 truncate">
                            {currentUser?.name || currentUser?.email}
                          </p>
                          <p className="text-[11px] text-slate-400 truncate mt-0.5">
                            {currentUser?.email}
                          </p>
                        </div>

                        {[
                          { to: '/profile',   label: 'My Profile', icon: User           },
                          { to: '/dashboard', label: 'Dashboard',  icon: LayoutDashboard},
                        ].map(({ to, label, icon: Icon }) => (
                          <Link
                            key={to} to={to}
                            onClick={() => setShowUserMenu(false)}
                            className="flex items-center gap-2.5 px-3.5 py-2 text-[13px] text-slate-700 hover:bg-slate-50 transition-colors"
                          >
                            <Icon className="w-3.5 h-3.5 text-slate-400" />
                            {label}
                          </Link>
                        ))}

                        <div className="border-t border-slate-100 mt-1 pt-1">
                          <button
                            onClick={handleLogout}
                            className="flex items-center gap-2.5 px-3.5 py-2 text-[13px] text-red-600 hover:bg-red-50 transition-colors w-full"
                          >
                            <LogOut className="w-3.5 h-3.5" />
                            Sign Out
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Link
                    to="/login"
                    className="px-3.5 py-1.5 text-[13px] font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="px-4 py-1.5 text-[13px] font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-colors duration-150"
                  >
                    Get Started
                  </Link>
                </div>
              )}
            </div>

            {/* ── Mobile hamburger ── */}
            <button
              className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* ── Mobile drawer ── */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white absolute w-full shadow-xl">
            <div className="max-w-screen-xl mx-auto px-4 py-3 space-y-0.5">

              {/* Nav links */}
              {allDesktopLinks.map(({ to, label, icon: Icon }) => (
                <Link
                  key={to} to={to} onClick={close}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-lg text-[14px] font-semibold transition-colors",
                    isActive(to)
                      ? "bg-blue-50 text-blue-700"
                      : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                  )}
                >
                  {Icon && <Icon className={cn("w-4 h-4", isActive(to) ? "text-blue-600" : "text-slate-400")} />}
                  {label}
                </Link>
              ))}

              {/* Auth section */}
              <div className="pt-3 mt-2 border-t border-slate-100">
                {isAuthenticated ? (
                  <div className="bg-slate-50 rounded-xl p-4">
                    {/* User info */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold shadow-sm">
                        {avatar}
                      </div>
                      <div>
                        <p className="text-[14px] font-semibold text-slate-900">
                          {currentUser?.name || currentUser?.email}
                        </p>
                        <p className="text-[11px] text-slate-500">
                          {currentUser?.role || 'Student'}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 mb-2">
                      {[
                        { to: '/profile',   label: 'Profile',   icon: User            },
                        { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
                      ].map(({ to, label, icon: Icon }) => (
                        <Link
                          key={to} to={to} onClick={close}
                          className="flex items-center justify-center gap-2 py-2 bg-white rounded-lg text-[13px] font-semibold text-slate-700 hover:bg-slate-100 transition-colors border border-slate-200"
                        >
                          <Icon className="w-3.5 h-3.5 text-slate-400" />
                          {label}
                        </Link>
                      ))}
                    </div>

                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center justify-center gap-2 py-2 rounded-lg text-[13px] font-semibold text-red-600 bg-white border border-red-200 hover:bg-red-50 transition-colors"
                    >
                      <LogOut className="w-3.5 h-3.5" />
                      Sign Out
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-2">
                    <Link
                      to="/login" onClick={close}
                      className="flex items-center justify-center py-2.5 rounded-lg text-[14px] font-semibold text-slate-700 border border-slate-200 hover:bg-slate-50 transition-colors"
                    >
                      Login
                    </Link>
                    <Link
                      to="/signup" onClick={close}
                      className="flex items-center justify-center py-2.5 rounded-lg text-[14px] font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm"
                    >
                      Get Started
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;