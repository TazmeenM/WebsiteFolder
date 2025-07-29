'use client';

import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, message, Space } from 'antd';

interface DropdownMenuProps {
    sortChanger: (sortKey: string) => void;
}




const DropdownMenu: React.FC<DropdownMenuProps> = ({sortChanger}) => {
    const items: MenuProps['items'] = [
    {
        label: 'Relevance',
        key: '1',
    },
    {
        label: 'Price (low-high)',
        key: '2',
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