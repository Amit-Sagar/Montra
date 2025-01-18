import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

const DropdownComponent = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="dropdown-trigger">
          Open Menu
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content className="dropdown-content">
        <DropdownMenu.Item className="dropdown-item">Item 1</DropdownMenu.Item>
        <DropdownMenu.Item className="dropdown-item">Item 2</DropdownMenu.Item>
        <DropdownMenu.Item className="dropdown-item">Item 3</DropdownMenu.Item>
      </DropdownMenu.Content>

      <DropdownMenu.Arrow className="dropdown-arrow" />
    </DropdownMenu.Root>
  );
};

export default DropdownComponent;
