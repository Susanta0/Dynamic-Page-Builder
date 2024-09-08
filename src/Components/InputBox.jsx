
import React, { useState } from 'react';

const InputBox = ({ placeholder = 'Input Box', updateProps, isPublished }) => {
  const [inputPlaceholder, setInputPlaceholder] = useState(placeholder);

  const handleChange = (e) => {
    const newPlaceholder = e.target.value;
    setInputPlaceholder(newPlaceholder);
    updateProps({ placeholder: newPlaceholder });
  };

  // When published, render only the input field with static placeholder
  if (isPublished) {
    return <input type="text" placeholder={inputPlaceholder} className="border p-2 rounded w-full" />;
  }

  return (
    <div>
      <input
        type="text"
        placeholder={inputPlaceholder}
        className="border p-2 rounded w-full"
      />
      <input
        type="text"
        value={inputPlaceholder}
        onChange={handleChange}
        placeholder="Edit Placeholder"
        className="border p-2 rounded w-full mt-2"
      />
    </div>
  );
};

export default InputBox;
