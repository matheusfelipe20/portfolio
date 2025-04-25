import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import './LoadingHome.css';

const LoadingHome = ({ onFinish }) => {
  const [text, setText] = useState('');
  const fullText = 'Carregando...';

  useEffect(() => {
    let i = 0;
    const typeTimer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(typeTimer);
    }, 100);

    const finishTimer = setTimeout(() => {
      onFinish();
    }, 2800);

    return () => {
      clearTimeout(finishTimer);
      clearInterval(typeTimer);
    };
  }, [onFinish]);

  return (
    <motion.div
      className="loading-terminal"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2.5, duration: 0.4, ease: "easeOut" }}
    >
      <div className="terminal-box">
        <span className="terminal-text">{text}<span className="cursor" /></span>
      </div>
    </motion.div>
  );
};

export default LoadingHome;