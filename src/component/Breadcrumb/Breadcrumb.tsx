// src/components/Breadcrumb.tsx
import React from 'react';
import { FaHome } from 'react-icons/fa';

interface BreadcrumbProps {
  items: { name: string; link?: string }[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="flex pt-4 items-center space-x-2 text-sm text-gray-500 ">
      <span className="text-gray-500 hover:text-gray-700">
        <FaHome className="w-4 h-4" />
      </span>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <span className="text-gray-500 text-sm">{'>'}</span>
          {item.link ? (
            <span className="hover:text-gray-700">
              {item.name}
            </span>
          ) : (
            <span>{item.name}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;
