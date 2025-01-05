import React from 'react';
import { X } from 'lucide-react';
import { useStore } from '../../store/useStore';

const RightPanel = () => {
  const { rightPanelOpen, toggleRightPanel } = useStore();

  return rightPanelOpen ? (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 dark:bg-black/70 z-40 md:hidden transition-opacity duration-300"
        onClick={toggleRightPanel}
      />
      
      {/* Panel */}
      <aside
        className="fixed right-0 top-[8vh] w-[90vw] md:w-[400px] h-[92vh] bg-white dark:bg-dark-primary border-l border-gray-200 dark:border-border-dark shadow-lg dark:shadow-dark-lg z-50 transition-transform duration-300"
      >
        <div className="p-4 border-b border-gray-200 dark:border-border-dark flex justify-between items-center">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-text-primary">Context Panel</h2>
          <button
            onClick={toggleRightPanel}
            className="p-2 hover:bg-gray-100 dark:hover:bg-dark-tertiary rounded-lg transition-colors"
          >
            <X size={20} className="text-slate-900 dark:text-text-primary" />
          </button>
        </div>
        <div className="p-4 overflow-y-auto h-[calc(100%-4rem)]">
          <p className="text-gray-500 dark:text-text-secondary">Select an item to view details</p>
        </div>
      </aside>
    </>
  ) : null;
};

export default RightPanel;