// import React, { useState } from 'react';
// import { useAuth } from '@/contexts/AuthContext.jsx';
// import { Button } from '@/components/ui/button.jsx';
// import { Input } from '@/components/ui/input.jsx';
// import { Label } from '@/components/ui/label.jsx';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';
// import { AlertCircle, CheckCircle2, Loader2, User, Calendar, Mail, Shield } from 'lucide-react';

// const UserProfilePage = () => {
//   const { currentUser, updateProfile, logout } = useAuth();
//   const [name, setName] = useState(currentUser?.name || '');
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setSuccess('');
//     setLoading(true);

//     try {
//       await updateProfile(currentUser.id, { name });
//       setSuccess('Profile updated successfully');
//     } catch (err) {
//       setError('Failed to update profile');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const formatDate = (dateString) => {
//     if (!dateString) return 'N/A';
//     return new Date(dateString).toLocaleDateString('en-US', {
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric'
//     });
//   };

//   return (
//     <div className="container mx-auto px-4 py-12 max-w-4xl">
//       <h1 className="text-3xl font-bold text-[#1a2332] mb-8">My Profile</h1>
      
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         {/* User Info Card */}
//         <Card className="md:col-span-1 h-fit">
//           <CardHeader className="text-center">
//             <div className="w-24 h-24 bg-[#1a2332] rounded-full mx-auto flex items-center justify-center mb-4">
//               <span className="text-3xl font-bold text-white">
//                 {currentUser?.name ? currentUser.name.charAt(0).toUpperCase() : currentUser?.email?.charAt(0).toUpperCase()}
//               </span>
//             </div>
//             <CardTitle>{currentUser?.name || 'User'}</CardTitle>
//             <CardDescription>{currentUser?.email}</CardDescription>
//           </CardHeader>
//           <CardContent className="space-y-4">
//             <div className="flex items-center gap-3 text-sm text-gray-600">
//               <Shield className="w-4 h-4 text-[#4f7ba7]" />
//               <span>Role: <span className="font-medium text-[#1a2332]">{currentUser?.role || 'Customer'}</span></span>
//             </div>
//             <div className="flex items-center gap-3 text-sm text-gray-600">
//               <Calendar className="w-4 h-4 text-[#4f7ba7]" />
//               <span>Joined: {formatDate(currentUser?.created)}</span>
//             </div>
//             <div className="pt-4">
//               <Button 
//                 variant="outline" 
//                 className="w-full text-red-600 hover:text-red-700 hover:bg-red-50 border-red-200"
//                 onClick={logout}
//               >
//                 Log Out
//               </Button>
//             </div>
//           </CardContent>
//         </Card>

//         {/* Edit Profile Form */}
//         <Card className="md:col-span-2">
//           <CardHeader>
//             <CardTitle>Edit Profile</CardTitle>
//             <CardDescription>Update your personal information</CardDescription>
//           </CardHeader>
//           <CardContent>
//             <form onSubmit={handleSubmit} className="space-y-6">
//               {error && (
//                 <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm flex items-center gap-2">
//                   <AlertCircle className="w-4 h-4" />
//                   {error}
//                 </div>
//               )}
//               {success && (
//                 <div className="bg-green-50 text-green-600 p-3 rounded-md text-sm flex items-center gap-2">
//                   <CheckCircle2 className="w-4 h-4" />
//                   {success}
//                 </div>
//               )}

//               <div className="space-y-2">
//                 <Label htmlFor="email">Email</Label>
//                 <div className="relative">
//                   <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
//                   <Input
//                     id="email"
//                     type="email"
//                     value={currentUser?.email || ''}
//                     disabled
//                     className="pl-9 bg-gray-50"
//                   />
//                 </div>
//                 <p className="text-xs text-gray-500">Email cannot be changed</p>
//               </div>

//               <div className="space-y-2">
//                 <Label htmlFor="name">Full Name</Label>
//                 <div className="relative">
//                   <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
//                   <Input
//                     id="name"
//                     type="text"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     className="pl-9"
//                     placeholder="Enter your full name"
//                   />
//                 </div>
//               </div>

//               <div className="flex justify-end">
//                 <Button 
//                   type="submit" 
//                   className="bg-[#4f7ba7] hover:bg-[#3d6288]"
//                   disabled={loading}
//                 >
//                   {loading ? (
//                     <>
//                       <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//                       Saving...
//                     </>
//                   ) : (
//                     'Save Changes'
//                   )}
//                 </Button>
//               </div>
//             </form>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default UserProfilePage;

import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext.jsx';
import { Button } from '@/components/ui/button.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Label } from '@/components/ui/label.jsx';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { AlertCircle, CheckCircle2, Loader2, User, Calendar, Mail, Shield } from 'lucide-react';

const UserProfilePage = () => {
  const { currentUser, updateProfile, logout } = useAuth();
  const [name, setName] = useState(currentUser?.name || '');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      await updateProfile(currentUser.id, { name });
      setSuccess('Profile updated successfully');
    } catch (err) {
      setError('Failed to update profile');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold text-[#1a2332] mb-8">My Profile</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* User Info Card */}
        <Card className="md:col-span-1 h-fit border border-gray-200 shadow-sm">
          <CardHeader className="text-center">
            <div className="w-24 h-24 bg-[#4f7ba7] rounded-full mx-auto flex items-center justify-center mb-4">
              <span className="text-3xl font-bold text-white">
                {currentUser?.name ? currentUser.name.charAt(0).toUpperCase() : currentUser?.email?.charAt(0).toUpperCase()}
              </span>
            </div>
            <CardTitle className="text-[#1a2332]">{currentUser?.name || 'User'}</CardTitle>
            <CardDescription className="text-gray-500">{currentUser?.email}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <Shield className="w-4 h-4 text-[#4f7ba7]" />
              <span>Role: <span className="font-medium text-[#1a2332]">{currentUser?.role || 'Customer'}</span></span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <Calendar className="w-4 h-4 text-[#4f7ba7]" />
              <span>Joined: {formatDate(currentUser?.created)}</span>
            </div>
            <div className="pt-4">
              <Button 
                variant="outline" 
                className="w-full text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-50 border-red-200"
                onClick={logout}
              >
                Log Out
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Edit Profile Form */}
        <Card className="md:col-span-2 border border-gray-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-[#1a2332]">Edit Profile</CardTitle>
            <CardDescription>Update your personal information</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  {error}
                </div>
              )}
              {success && (
                <div className="bg-green-50 text-green-600 p-3 rounded-md text-sm flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  {success}
                </div>
              )}

              <div className="space-y-2 text-black">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    value={currentUser?.email || ''}
                    disabled
                    className="pl-9 bg-gray-50 text-black"
                  />
                </div>
                <p className="text-xs text-gray-500">Email cannot be changed</p>
              </div>

              <div className="space-y-2 text-black">
                <Label htmlFor="name">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="pl-9 bg-gray-50 text-black"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <Button 
                  type="submit" 
                  className="bg-[#4f7ba7] hover:bg-[#3d6288] text-white"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Saving...
                    </>
                  ) : (
                    'Save Changes'
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UserProfilePage;