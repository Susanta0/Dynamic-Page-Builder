
import React from 'react';
import { useLocalStorage } from '../Hooks/useLocalStorage';
import Label from '../Components/Label';
import InputBox from '../Components/InputBox';
import Button from '../Components/Button';
import CheckBox from '../Components/CheckBox';
import Table from '../Components/Table';

const componentMap = {
  Label,
  InputBox,
  Button,
  CheckBox,
  Table,
};

const PublishedPage = () => {
  const [layout] = useLocalStorage('layout', []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold">Published Page</h1>
      <div className="mt-4 border">
        {layout.map((item) => {
          const Component = componentMap[item.componentType];
          return (
            <div key={item.id} className="mb-4">
              <Component {...item.props} isPublished />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PublishedPage;
