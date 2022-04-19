// Hooks
import { useState } from 'react';

export default function GenerateImage({ id, src }) {
  const [views, setViews] = useState([]);

  function setView(index) {
    setViews(prev => [...prev, index]);
  }

  return (
    <div className='image-container'>
      <img
        src={src}
        alt={`زخم پای دیابتی - درجه ${id}`}
        style={{ filter: views.includes(id) ? 'unset' : 'blur(50px)' }}
      />
      {!views.includes(id) && (
        <button onClick={() => setView(id)}>برای دیدن کلیک کنید</button>
      )}
    </div>
  );
}
