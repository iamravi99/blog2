import React, { useEffect, useRef } from 'react';

const Banner = () => {
  const adRef = useRef(null);

  useEffect(() => {
    const script1 = document.createElement('script');
    script1.type = 'text/javascript';
    script1.innerHTML = `
      atOptions = {
        'key': '82131ce3b29bf80f2cf3efbc84c7dfdd',
        'format': 'iframe',
        'height': 90,
        'width': 728,
        'params': {}
      };
    `;

    const script2 = document.createElement('script');
    script2.type = 'text/javascript';
    script2.src = '//www.highperformanceformat.com/82131ce3b29bf80f2cf3efbc84c7dfdd/invoke.js';

    if (adRef.current) {
      adRef.current.innerHTML = ''; // Clear previous content
      adRef.current.appendChild(script1);
      adRef.current.appendChild(script2);
    }
  }, []);

  return (
    <div className='w-full max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8'>
      <div className="flex justify-center items-center py-4">
        <div ref={adRef} className="w-[728px] h-[90px]" />
      </div>
    </div>
  );
};

export default Banner;
