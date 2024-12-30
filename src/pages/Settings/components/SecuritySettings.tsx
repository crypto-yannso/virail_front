import React from 'react';
import { Shield, Key, Smartphone } from 'lucide-react';

const SecuritySettings = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center gap-2 mb-6">
        <Shield size={20} className="text-primary" />
        <h2 className="text-lg font-semibold">Security Settings</h2>
      </div>
      
      <div className="space-y-6">
        <div>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-medium">Change Password</h3>
              <p className="text-sm text-gray-500">Update your password regularly to keep your account secure</p>
            </div>
            <Key size={20} className="text-gray-400" />
          </div>
          
          <div className="space-y-4">
            <input
              type="password"
              placeholder="Current Password"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="password"
              placeholder="New Password"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="password"
              placeholder="Confirm New Password"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
        
        <div>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-medium">Two-Factor Authentication</h3>
              <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
            </div>
            <Smartphone size={20} className="text-gray-400" />
          </div>
          
          <button className="px-4 py-2 border border-gray-200 rounded-lg hover:border-primary transition-colors">
            Enable 2FA
          </button>
        </div>
        
        <div>
          <h3 className="font-medium mb-2">Active Sessions</h3>
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Current Session</p>
                <p className="text-xs text-gray-500">Last active: Just now</p>
              </div>
              <button className="text-sm text-red-600 hover:text-red-700">
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