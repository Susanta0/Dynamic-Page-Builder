

import React, { useState } from 'react';

const CheckBox = ({ label = 'Check Box', updateProps, isPublished }) => {
  const [checkLabel, setCheckLabel] = useState(label);

  const handleChange = (e) => {
    const newLabel = e.target.value;
    setCheckLabel(newLabel);
    updateProps({ label: newLabel });
  };

  // When published, render only the checkbox with static label
  if (isPublished) {
    return (
      <div className="flex items-center space-x-2">
        <input type="checkbox" className="w-4 h-4" />
        <label>{checkLabel}</label>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center space-x-2">
        <input type="checkbox" className="w-4 h-4" />
        <label>{checkLabel}</label>
      </div>
      <input
        type="text"
        value={checkLabel}
        onChange={handleChange}
        placeholder="Edit Checkbox Label"
        className="border p-2 rounded w-full mt-2"
      />
    </div>
  );
};

export default CheckBox;


