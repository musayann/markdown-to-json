import type { NextPage } from 'next'
import Head from 'next/head';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown'
import CopyIcon from '../components/CopyIcon';
import { copyTextToClipboard } from '../util/copy';

const Home: NextPage = () => {
  const [content, setContent] = useState<string>('');
  const contentJson = JSON.stringify(content);
  const copy = () => {
    copyTextToClipboard(contentJson);
  }
  return (
    <div className='w-9/12 mx-auto max-w-5xl pt-12 '>
      <Head>
        <title>Markdown to json string</title>
      </Head>
      <h1 className='text-3xl font-semibold text-center'>Markdown to json string</h1>
      <div className='grid grid-cols-2 gap-12 pt-10'>
        <div className='flex-1'>
          <p className='mb-2'>Markdown input</p>
          <textarea value={content} onChange={(e) => setContent(e.target.value)} className='w-full h-64 p-4 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block sm:text-sm border border-gray-300 rounded-md' />
        </div>
        <div className='flex-1'>
          <p className='mb-2'>Preview</p>
          <div className='w-full h-64 border border-dashed border-gray-300 shadow-sm mt-1 p-4 overflow-scroll'>
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        </div>
        <div className='flex-1'>
          <p className='mb-2'>Json output <span title='copy' className='cursor-pointer' onClick={copy}><CopyIcon /></span></p>
          <div className='w-full h-64 prose'>
            <pre className='h-full'><code className='h-full'>{contentJson}</code></pre>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
