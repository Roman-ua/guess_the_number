import React from "react";
import './Layout.css'

interface Props {
  children: React.ReactNode;
}

const Layout = ({children}: Props) => {
  return (
    <div className={'layout'}>
      {children}
    </div>
  )
}

export default Layout
