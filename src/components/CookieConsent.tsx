import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800 p-4 z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-300 flex-1">
          We use cookies to enhance your browsing experience. By continuing to use our website, you agree to our use of cookies. Read our{" "}
          <Link to="/privacy-policy" className="text-blue-400 hover:text-blue-300">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link to="/terms-of-service" className="text-blue-400 hover:text-blue-300">
            Terms of Service
          </Link>{" "}
          to learn more.
        </div>
        <div className="flex gap-4">
          <button
            onClick={acceptCookies}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            Accept
          </button>
          <button
            onClick={() => setShowBanner(false)}
            className="p-2 text-gray-400 hover:text-gray-300"
          >
            <X size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;