

import React from 'react';

export default function MangaLayout({ children }) {

  return (
    <main>
      <div className='w-full'>
        { children }
      </div>
    </main>
  )
}