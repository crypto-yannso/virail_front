import React, { useRef } from 'react';
import { User, Mail, Globe, MapPin, Camera } from 'lucide-react';
import { useTranslation } from '../../../hooks/useTranslation';
import { useUser } from '../../../hooks/useUser';
import { useUserStore } from '../../../store/userStore';
import { userDatas } from '@/providers/AuthProvider';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store/store';

const UserInfo = () => {
  const { t } = useTranslation();
  const {  loading } = useUser();
  const { updateAvatar } = useUserStore();
  const fileInputRef = useRef<HTMLInputElement>(null);
  // const {email, firstName, lastName} = userDatas();
  const user = useSelector((state: RootState) => state.user); // Récupérez les données de l'utilisateur depuis Redux


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
    return <div className="bg-white dark:bg-dark-secondary p-6 rounded-lg shadow-sm dark:shadow-dark-sm animate-pulse" />;
  }

  return (
    <div className="bg-white dark:bg-dark-secondary p-6 rounded-lg shadow-sm dark:shadow-dark-sm">
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
            <div className="w-24 h-24 rounded-full bg-gray-100 dark:bg-dark-tertiary flex items-center justify-center">
              <User size={32} className="text-gray-400 dark:text-text-secondary" />
            </div>
          )}
          <button 
            onClick={() => fileInputRef.current?.click()}
            className="absolute inset-0 bg-black/50 dark:bg-black/70 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-sm"
          >
            <Camera size={16} />
            {t('profile.changePhoto')}
          </button>
        </div>
        
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-text-primary">
            {`${user.firstName} ${user.lastName}`}
          </h2>
          <div className="mt-2 space-y-2">
            <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-text-secondary">
              <Mail size={16} className="text-slate-400 dark:text-text-secondary" />
              <span> {user.email || 'No email'}</span>
            </div>
            {user.website && (
              <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-text-secondary">
                <Globe size={16} className="text-slate-400 dark:text-text-secondary" />
                <a href={user.website} target="_blank" rel="noopener noreferrer" className="hover:text-primary dark:hover:text-accent-blue">
                  {user.website}
                </a>
              </div>
            )}
            {user.location && (
              <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-text-secondary">
                <MapPin size={16} className="text-slate-400 dark:text-text-secondary" />
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