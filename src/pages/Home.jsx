import React, { useState, useEffect, useRef } from 'react';

const Home = () => {
  const [text, setText] = useState('');
  const [showNextPage, setShowNextPage] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }, []);

  const handleChange = (e) => {
    const inputText = e.target.value;
    setText(inputText);

    if (inputText === 'RASDAP' || inputText === 'rasdap') {
      // Trigger fade-out effect
      setFadeOut(true);
      setTimeout(() => setShowNextPage(true), 500);
    }
  };

  return (
    <div className="h-screen bg-gray-100 flex justify-center items-center">
      {!showNextPage ? (
        <textarea
          ref={textareaRef}
          value={text}
          onChange={handleChange}
          placeholder="Write something here..."
          className={`w-full h-full p-4 text-lg text-black bg-transparent outline-none resize-none border-none sm:text-base md:text-lg lg:text-xl font-mystical overflow-y-hidden transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
          style={{
            display: 'flex',
            textAlign: 'center',
            verticalAlign: 'middle',
            lineHeight: '100vh',
            caretColor: 'black',
          }}
        />
      ) : (
        <div className="h-screen flex justify-center items-center transition-opacity duration-500 opacity-100">
          <h1 className="text-4xl font-bold">Thank You!</h1>
        </div>
      )}
      <style jsx>{`
        @font-face {
          font-family: 'Mystical';
          src: url('/path-to-your-mystical-font.woff2') format('woff2');
        }
        .font-mystical {
          font-family: 'Mystical', Cursive, Fantasy;
        }
      `}</style>
    </div>
  );
};

export default Home;
