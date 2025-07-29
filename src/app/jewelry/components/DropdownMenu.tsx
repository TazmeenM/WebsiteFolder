'use client';

import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';

interface DropdownMenuProps {
  sortChanger: (sortKey: string) => void;  // Callback to handle sorting
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({sortChanger}) => {
    const items: MenuProps['items'] = [
    {
        label: 'Alphabetical (A-Z)',
        key: '1',
    },
    {
        label: 'Reverse Alphabetical (Z-A)',
        key: '2',
    },
    {
        label: 'Price (low-high)',
        key: '3',
    },
        {
        label: 'Price (high-low)',
        key: '4',
    },
    ];
    const onClick: MenuProps['onClick'] = ({ key }) => {
        sortChanger(key);
    }
    return(
  <Dropdown menu={{ items, onClick }}>
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        Sort by...
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
    )
};

export default DropdownMenu;