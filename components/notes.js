import React, { useState } from 'react';
import Navbar from './Navbar';
import Navbar2 from './navbar2';
// import sidebarIcon from '/6.png'; // replace with your own image source

// type Chapter = {
//   title: string;
//   content: string;
// };

const chapters = [
  {
    title: 'Chapter 1',
    content: 'This is the content of Chapter 1.',
  },
  {
    title: 'Chapter 2',
    content: 'This is the content of Chapter 2.',
  },
  {
    title: 'Chapter 3',
    content: 'This is the content of Chapter 3.',
  },
];

// type Props = {};

function Notes({}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedChapterIndex, setSelectedChapterIndex] = useState(0);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleChapterClick = (index) => {
    setSelectedChapterIndex(index);
    setIsSidebarOpen(false);
  };

  const selectedChapter = chapters[selectedChapterIndex];

  return (
    <div>
      <div style={{ backgroundColor: 'gray', height: '50px' }}>
        <Navbar2 />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
  {isSidebarOpen && (
    <div  className='ml-3 px-3 rounded-xl bg-[#E7DFF9]/60' style={{ height: '1000px', width: '250px', background: '' }}>
      <button className='mt-3' onClick={handleToggleSidebar}>
        <img className='h-6 w-6 rounded-full' src='/close.png' alt="Toggle Sidebar" />
      </button>
      <ul>
  {chapters.map((chapter, index) => (
    <li 
      key={index}
      onClick={() => handleChapterClick(index)}
      className={`ml-3 px-3 py-1 hover:bg-[#e8f1f2] ${index !== selectedChapterIndex ? 'cursor-pointer' : ''}`}
      style={{ fontSize: '14px', marginBottom: '10px', borderBottom: '1px solid black' }}
    >
      {chapter.title}
    </li>
  ))}
</ul>
    </div>
  )}
  <div style={{ flex: 1, marginLeft: isSidebarOpen ? '250px' : '0', transition: 'margin 0.2s' }}>
    <button className='ml-4 mt-3 py-6' onClick={handleToggleSidebar} style={{ display: isSidebarOpen ? 'none' : 'block' }}>
      <img className='h-6 w-6 rounded-full' src='/menu.png' alt="Toggle Sidebar" />
    </button>
    <h1 className='ml-3 px-3 text-center mt-8 text-xl'>{selectedChapter.title}</h1>
    <p className='ml-3 px-3 text-center mt-8 text-md' style={{ fontSize: '20px', marginTop: '20px' }}>{selectedChapter.content}</p>
  </div>
</div>
    </div>
  );
}

export default Notes;
