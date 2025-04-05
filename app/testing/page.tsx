'use client'
// app/page.tsx or pages/index.tsx (based on your Next.js version)

import dynamic from 'next/dynamic';

const SpeechToTextInput = dynamic(() => import('../../components/speechToText'), {
  ssr: false, // Disable SSR since Web Speech API is browser-only
});

export default function Home() {
  return (
    <main>
      <h1 className="text-2xl font-bold text-center mt-4">Speech to Text Demo</h1>
      <SpeechToTextInput />
    </main>
  );
}
