import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './Markdown.scss';
import CodeMirror from '@uiw/react-codemirror';
import { markdown } from '@codemirror/lang-markdown';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const Main = () => {
  document.addEventListener('drop', (e) => {
    e.preventDefault();
    e.stopPropagation();
  });
  document.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.stopPropagation();
  });
  const [content, setContent] = useState('');
  return (
    <div className="w-full h-screen flex">
      <div className="w-1/2">
        <CodeMirror
          className="h-screen"
          value={content}
          theme="dark"
          extensions={[markdown()]}
          onChange={setContent}
        />
      </div>
      <div className="w-1/2 p-12 h-screen overflow-scroll">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
}
