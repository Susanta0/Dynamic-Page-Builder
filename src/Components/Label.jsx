
import React, { useState } from 'react';

const Label = ({ text = 'Label', updateProps, isPublished }) => {
  const [labelText, setLabelText] = useState(text);

  const handleChange = (e) => {
    const newText = e.target.value;
    setLabelText(newText);
    updateProps({ text: newText });
  };

  // If published, just render the label text without input
  if (isPublished) {
    return <label className="block font-medium mb-2">{labelText}</label>;
  }

  return (
    <div>
      <label className="block font-medium mb-2">{labelText}</label>
      <input
        type="text"
        value={labelText}
        onChange={handleChange}
        placeholder="Edit Label Text"
        className="border p-2 rounded w-full"
      />
    </div>
  );
};

export default Label;
