'use client'


import { useState, useEffect } from "react";

// export default function MangaPage() {
//   // Animation state for the circles
//   const [animate, setAnimate] = useState(false);
  
//   useEffect(() => {
//     setAnimate(true);
//   }, []);
  

//   return (
//     <div className="min-h-screen">
//      manga page


//       <div className="min-h-screen bg-black bg-opacity-95 text-white relative overflow-hidden">
//         {/* Stars background */}
//         <div className="absolute inset-0">
//           {/* <Stars /> */}
//         </div>
        
//         {/* Centered content */}
//         <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-screen relative z-10">
//           {/* Concentric circles */}
//           <div className="relative w-64 h-64 mb-12">
//             <div className={`absolute inset-0 rounded-full border border-gray-700 opacity-20 transition-all duration-1000 ${animate ? 'scale-100 opacity-20' : 'scale-0 opacity-0'}`} style={{ transitionDelay: '0.1s' }}></div>
//             <div className={`absolute inset-0 m-8 rounded-full border border-gray-700 opacity-30 transition-all duration-1000 ${animate ? 'scale-100 opacity-30' : 'scale-0 opacity-0'}`} style={{ transitionDelay: '0.3s' }}></div>
//             <div className={`absolute inset-0 m-16 rounded-full border border-gray-700 opacity-40 transition-all duration-1000 ${animate ? 'scale-100 opacity-40' : 'scale-0 opacity-0'}`} style={{ transitionDelay: '0.5s' }}></div>
//             <div className={`absolute inset-0 m-24 rounded-full border border-gray-700 opacity-50 transition-all duration-1000 ${animate ? 'scale-100 opacity-50' : 'scale-0 opacity-0'}`} style={{ transitionDelay: '0.7s' }}></div>
            
//             {/* Center logo */}
//             <div className="absolute inset-0 flex items-center justify-center">
//               <div className={`w-16 h-16 transition-all duration-700 ${animate ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
//                 {/* <LogoSVG /> */}
//               </div>
//             </div>
//           </div>
          
//           {/* Heading */}
//           <h2 className={`text-2xl md:text-3xl text-gray-300 font-light mb-24 tracking-wide transition-all duration-1000 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '1s' }}>
//             Partnering with top industry experts
//           </h2>
          
//           {/* Partner logos */}
//           <div className="w-full max-w-4xl">
//             <div className={`flex flex-wrap justify-center gap-8 md:gap-16 transition-all duration-1000 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '1.2s' }}>
//               {/* <PartnerLogo icon="lightning" />
//               <PartnerLogo icon="circle" />
//               <PartnerLogo icon="wave" />
//               <PartnerLogo icon="wave" />
//               <PartnerLogo icon="lightning" /> */}
//             </div>
//           </div>
//         </div>
//       </div>
//       <section className="relative bg-[#0a0a23] py-24 flex flex-col items-center justify-center text-white overflow-hidden">
//         {/* Concentric Circles */}
//         <div className="absolute rounded-full border border-white/10 w-[400px] h-[400px]"></div>
//         <div className="absolute rounded-full border border-white/10 w-[300px] h-[300px]"></div>
//         <div className="absolute rounded-full border border-white/10 w-[200px] h-[200px]"></div>

//         {/* Center Icon */}
//         <div className="z-10 flex flex-col items-center space-y-4">
//           <div className="w-14 h-14 rounded-full bg-purple-500 flex items-center justify-center text-2xl font-bold">
//             ⬤
//           </div>
//           <h2 className="text-lg md:text-xl font-medium text-white text-center">
//             Partnering with top industry experts
//           </h2>
//         </div>

//         {/* Logo placeholders at bottom */}
//         <div className="absolute bottom-10 flex items-center justify-center gap-10 flex-wrap px-4 text-white/70 text-sm">
//           {['Alpha', 'Beta', 'Gamma', 'Delta', 'Epsilon'].map((name, idx) => (
//             <div key={idx} className="flex flex-col items-center">
//               <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-semibold">
//                 {name[0]}
//               </div>
//               <span className="mt-1">{name}</span>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }


export default function MangaPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Manga Dashboard</h1>
      <p className="mb-4">
        Welcome to your manga dashboard! The sidebar on the left has automatically
        detected that you're on a manga page and has adjusted its navigation
        accordingly.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Trending Manga</h2>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <span className="text-blue-500 font-semibold">1.</span>
              <span>One Piece</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-500 font-semibold">2.</span>
              <span>Jujutsu Kaisen</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-500 font-semibold">3.</span>
              <span>Chainsaw Man</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-500 font-semibold">4.</span>
              <span>My Hero Academia</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-500 font-semibold">5.</span>
              <span>Tokyo Revengers</span>
            </li>
          </ul>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Continue Reading</h2>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <div className="bg-gray-200 dark:bg-gray-700 w-12 h-16 rounded"></div>
              <div>
                <p className="font-medium">Berserk</p>
                <p className="text-sm text-gray-500">Chapter 372 • Page 18</p>
              </div>
            </li>
            <li className="flex gap-3">
              <div className="bg-gray-200 dark:bg-gray-700 w-12 h-16 rounded"></div>
              <div>
                <p className="font-medium">Vagabond</p>
                <p className="text-sm text-gray-500">Chapter 204 • Page 7</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}