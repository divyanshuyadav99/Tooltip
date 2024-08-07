import React from 'react';
import Tooltip from './Tooltip';

const App = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="group relative">
        <Tooltip position="left">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Hover me</button>
        </Tooltip>
      </div>
    </div>
  );
};

export default App;
