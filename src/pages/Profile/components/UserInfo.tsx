import React, { useRef } from 'react';
import { User, Mail, Globe, MapPin, Camera } from 'lucide-react';
import { useTranslation } from '../../../hooks/useTranslation';
import { useUser } from '../../../hooks/useUser';
import { useUserStore } from '../../../store/userStore';

const UserInfo = () => {
  const { t } = useTranslation();
  const { user, loading } = useUser();
  const { updateAvatar } = useUserStore();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAvatarChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        await updateAvatar(file);
      } catch (error) {
        console.error('Failed to update avatar:', error);
      }
    }
  };

  if (loading || !user) {
    return <div className="bg-white p-6 rounded-lg shadow-sm animate-pulse" />;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-start gap-6">
        <div className="relative group">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleAvatarChange}
            accept="image/*"
            className="hidden"
          />
          {user.avatar ? (
            <img
              src={user.avatar}
              alt={`${user.firstName} ${user.lastName}`}
              className="w-24 h-24 rounded-full object-cover"
            />
          ) : (
            <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center">
              <User size={32} className="text-gray-400" />
            </div>
          )}
          <button 
            onClick={() => fileInputRef.current?.click()}
            className="absolute inset-0 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-sm"
          >
            <Camera size={16} />
            {t('profile.changePhoto')}
          </button>
        </div>
        
        <div className="flex-1">
          <h2 className="text-xl font-semibold">
            {`${user.firstName} ${user.lastName}`}
          </h2>
          <div className="mt-2 space-y-2">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Mail size={16} />
              <span>{user.email}</span>
            </div>
            {user.website && (
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Globe size={16} />
                <a href={user.website} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                  {user.website}
                </a>
              </div>
            )}
            {user.location && (
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <MapPin size={16} />
                <span>{user.location}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;