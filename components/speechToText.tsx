/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useEffect, useRef, useState } from 'react';

// Declare SpeechRecognition type for TypeScript
export interface SpeechRecognition {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  start: () => void;
  stop: () => void;
  onresult: ((event: any) => void) | null;
  onend: (() => void) | null;
}

const SpeechToTextInput = () => {
  const [isListening, setIsListening] = useState(false);
  const [text, setText] = useState('');
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  useEffect(() => {
    // Check browser compatibility
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert('Your browser does not support Speech Recognition');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setText((prev) => prev + ' ' + transcript);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognitionRef.current = recognition;
  }, []);

  const handleMicClick = () => {
    if (isListening) {
      recognitionRef.current?.stop();
    } else {
      recognitionRef.current?.start();
      setIsListening(true);
    }
  };

  return (
    <div className="flex flex-col gap-2 max-w-xl mx-auto p-4">
      <textarea
        rows={6}
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border rounded p-2 w-full"
        placeholder="Start typing or use the mic..."
      />
      <button
        onClick={handleMicClick}
        className={`px-4 py-2 rounded text-white ${
          isListening ? 'bg-red-600' : 'bg-blue-600'
        }`}
      >
        {isListening ? 'Stop Listening' : 'Start Speaking'}
      </button>
    </div>
  );
};

export default SpeechToTextInput;
