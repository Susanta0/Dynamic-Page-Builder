

import React, { useState } from 'react';

const Button = ({ label = 'Button', updateProps, isPublished }) => {
  const [buttonLabel, setButtonLabel] = useState(label);

  const handleChange = (e) => {
    const newLabel = e.target.value;
    setButtonLabel(newLabel);
    updateProps({ label: newLabel });
  };

  // When published, render only the button with its label
  if (isPublished) {
    return (
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        {buttonLabel}
      </button>
    );
  }

  return (
    <div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        {buttonLabel}
      </button>
      <input
        type="text"
        value={buttonLabel}
        onChange={handleChange}
        placeholder="Edit Button Label"
        className="border p-2 rounded w-full mt-2"
      />
    </div>
  );
};

export default Button;
