import Script from "next/script";

interface UmamiScriptProps {
  websiteId: string;
}

const UmamiScript: React.FC<UmamiScriptProps> = ({ websiteId }) => {
  if (process.env.NODE_ENV !== 'development') {
    return (
      <Script
        defer
        src="https://umami.hilars.dev/script.js"
        data-website-id={websiteId}
      />
    );
  }
  return null;
};

export default UmamiScript;