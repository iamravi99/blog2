import React, { useEffect, useRef } from 'react';

const Banner = () => {
  const adRef = useRef(null);

  useEffect(() => {
    // Clear previous ad content
    if (adRef.current) {
      adRef.current.innerHTML = '';
    }

    // Create script for atOptions
    const scriptSetup = document.createElement('script');
    scriptSetup.type = 'text/javascript';
    scriptSetup.text = `
      var atOptions = {
        'key': '82131ce3b29bf80f2cf3efbc84c7dfdd',
        'format': 'iframe',
        'height': 90,
        'width': 728,
        'params': {}
      };
    `;

    // Create script to load the ad
    const scriptAd = document.createElement('script');
    scriptAd.type = 'text/javascript';
    scriptAd.src = 'https://www.highperformanceformat.com/82131ce3b29bf80f2cf3efbc84c7dfdd/invoke.js';
    scriptAd.async = true;

    if (adRef.current) {
      adRef.current.appendChild(scriptSetup);
      adRef.current.appendChild(scriptAd);
    }
  }, []);

  return (
    <div className='w-full max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8'>
      <div className="flex justify-center items-center py-4">
        <div
          ref={adRef}
          className="w-[728px] h-[90px] bg-white rounded shadow-md flex justify-center items-center"
        >
          {/* Optional fallback text */}
          <span className="text-gray-400 text-sm">Loading Ad...</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
