import React, { useState } from 'react';

const Tabs = ({ tabsData }) => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="w-full max-w-md mx-auto p-4">
      {/* Tab Buttons */}
      <div className="flex border-b border-gray-300 mb-4">
        {tabsData.map((tab, index) => (
          <button
            key={index}
            onClick={() => setTabIndex(index)}
            className={`px-4 py-2 text-sm font-medium transition-colors duration-200 ${
              tabIndex === index
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-4 bg-gray-100 border border-gray-300 rounded-md shadow-sm">
        {tabsData[tabIndex].content}
      </div>
    </div>
  );
};

export default Tabs;
