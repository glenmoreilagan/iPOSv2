import React from 'react'
import SideBarItems from './SideBarItems';

const SideBar = ({ children }) => {
  const items = [
    {
      "title": "Masterfiles",
      "icon": "bi bi-three-dots-vertical",
      "childrens": [
        {
          "title": "Example",
          "icon": "bi bi-dash",
          "path": "/example"
        },
        {
          "title": "Products",
          "icon": "bi bi-dash",
          "path": "/product"
        },
        {
          "title": "Customer",
          "icon": "bi bi-dash",
          "path": "/customer"
        }
      ]
    },
    {
      "title": "Inventory",
      "icon": "bi bi-three-dots-vertical",
      "path": "/inventory",
      "class": "no-dropdown"
    }
  ];

  return (
    <React.Fragment>
      <div className="sidebar">
        <div className="system-logo-title">
          <h2>iPOS</h2>
        </div>
        {items.map((item, index) => <SideBarItems key={index} item={item} />)}
      </div>
      {children}
    </React.Fragment>
  )
}

export default SideBar