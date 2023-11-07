import React, { useEffect } from 'react';
import { usePathname } from "next/navigation";

interface HeadProps {
  title: string;
}

const ChangePageTitle: React.FC<HeadProps> = ({ title }) => {

  const registerPathname = usePathname();

  useEffect(() => {
    
    // Set the document title based on the route and provided title
    document.title = `${title} | MindMate`;
  }, [registerPathname, title]);

  return null; // This component doesn't render anything
};

export default ChangePageTitle;
