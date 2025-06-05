'use client'

import React, { useState } from 'react';
import AccountPage from '@/components/Tabs/AccountPage';
import PreferencesPage from '@/components/Tabs/PreferencesPage';
import WorkspacePage from '@/components/Tabs/WorkspacePage';
import NotificationsPage from '@/components/Tabs/NotificationsPage';
import ApplicationPage from '@/components/Tabs/ApplicationPage';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('Account');
  const tabs = ['Account', 'Preferences', 'Workspace', 'Notifications', 'Application'];

  const renderActiveTabContent = () => {
    switch (activeTab) {
      case 'Account':
        return <AccountPage />;
      case 'Preferences':
        return <PreferencesPage />;
      case 'Workspace':
        return <WorkspacePage />;
      case 'Notifications':
        return <NotificationsPage />;
      case 'Application':
        return <ApplicationPage />;
      default:
        return <AccountPage />;
    }
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto py-8 px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-gray-900 mb-6 dark:text-white">Settings</h1>
          
          {/* Navigation Tabs */}
          <div className="border-b border-gray-200 dark:border-[#262626]">
            <nav className="flex space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab
                      ? 'border-violet-500 text-violet-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 hover:dark:border-gray-700'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        <div className="p-4">
          {renderActiveTabContent()}
        </div>
      </div>
    </div>
  );
}