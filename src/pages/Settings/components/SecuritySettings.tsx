import React from 'react';
import { Shield, Key, Smartphone } from 'lucide-react';
import { useAxios } from '@/providers/AxiosProvider';
import { useAuthenticated } from '@/providers/AuthenticatedProvider';
import { UserRepository } from '@/domain/Repository/UserRepository';
import { LogoutUserUseCase } from '@/domain/UseCase/User/LogoutUser';

const SecuritySettings = () => {
  // const {axiosInstance} = useAxios();
  // const {setIsAuthenticated} = useAuthenticated();
  // const userRepository = new UserRepository();
  // const logoutUserUseCase = new LogoutUserUseCase(userRepository);

  // const handleLogout = async () => {
  //   try{
  //     await logoutUserUseCase.execute(axiosInstance)
  //     setIsAuthenticated(false)
  //     localStorage.clear()
  //   } catch (error) {
  //     console.error('Failed to logout:', error);
  //   }
  // }
  return (
    <div className="bg-white dark:bg-dark-secondary border border-slate-200/60 dark:border-border-dark rounded-lg shadow-[0_8px_16px_-6px_rgba(15,23,42,0.08)] dark:shadow-dark-sm p-6">
      <div className="flex items-center gap-2 mb-6">
        <Shield size={20} className="text-primary dark:text-accent-blue" />
        <h2 className="text-lg font-semibold text-slate-900 dark:text-text-primary">Security Settings</h2>
      </div>
      
      <div className="space-y-6">
        <div>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-medium text-slate-900 dark:text-text-primary">Change Password</h3>
              <p className="text-sm text-slate-500 dark:text-text-secondary">Update your password regularly to keep your account secure</p>
            </div>
            <Key size={20} className="text-slate-400 dark:text-text-secondary" />
          </div>
          
          <div className="space-y-4">
            <input
              type="password"
              placeholder="Current Password"
              className="w-full px-4 py-2 bg-slate-100 dark:bg-dark-tertiary border border-slate-200 dark:border-border-dark rounded-lg text-slate-900 dark:text-text-primary focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-accent-blue"
            />
            <input
              type="password"
              placeholder="New Password"
              className="w-full px-4 py-2 bg-slate-100 dark:bg-dark-tertiary border border-slate-200 dark:border-border-dark rounded-lg text-slate-900 dark:text-text-primary focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-accent-blue"
            />
            <input
              type="password"
              placeholder="Confirm New Password"
              className="w-full px-4 py-2 bg-slate-100 dark:bg-dark-tertiary border border-slate-200 dark:border-border-dark rounded-lg text-slate-900 dark:text-text-primary focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-accent-blue"
            />
          </div>
        </div>
        
        <div>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-medium text-slate-900 dark:text-text-primary">Two-Factor Authentication</h3>
              <p className="text-sm text-slate-500 dark:text-text-secondary">Add an extra layer of security to your account</p>
            </div>
            <Smartphone size={20} className="text-slate-400 dark:text-text-secondary" />
          </div>
          
          <button className="px-4 py-2 border border-slate-200 dark:border-border-dark rounded-lg hover:border-primary dark:hover:border-accent-blue transition-colors text-slate-900 dark:text-text-primary">
            Enable 2FA
          </button>
        </div>
        
        <div>
          <h3 className="font-medium mb-2 text-slate-900 dark:text-text-primary">Active Sessions</h3>
          <div className="p-4 bg-slate-100 dark:bg-dark-tertiary rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-900 dark:text-text-primary">Current Session</p>
                <p className="text-xs text-slate-500 dark:text-text-secondary">Last active: Just now</p>
              </div>
              <button className="text-sm text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300" onClick={handleLogout}>
                End Session
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecuritySettings;

function useAuth(): { axiosInstance: any; } {
  throw new Error('Function not implemented.');
}
