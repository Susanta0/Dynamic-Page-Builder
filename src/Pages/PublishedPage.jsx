
import React from 'react';
import { useLocalStorage } from '../Hooks/useLocalStorage';
import Label from '../components/Label';
import InputBox from '../components/InputBox';
import Button from '../components/Button';
import CheckBox from '../components/CheckBox';
import Table from '../components/Table';

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
