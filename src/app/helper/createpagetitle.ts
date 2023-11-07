import React, { useEffect } from "react";
import { usePathname } from "next/navigation";

interface HeadProps {
  title: string;
}

const ChangePageTitle: React.FC<HeadProps> = ({ title }) => {
  const registerPathname = usePathname();

  useEffect(() => {
    // Extract the title from the route and set the document title
    const pathname = registerPathname;
    const titleFromPath = pathname === "/" ? "Home" : pathname.replace(/^\//, "");
    document.title = `${titleFromPath.toLocaleUpperCase()} | MindMate`;
  }, [registerPathname]);

  return null; // This component doesn't render anything
};

export default ChangePageTitle;