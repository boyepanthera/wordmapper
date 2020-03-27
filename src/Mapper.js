import React from 'react';
import { words } from './utils/inputs';
import ReactWordcloud from 'react-wordcloud';

export const Mapper = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
    }
    return (
        <div className="h-screen">
            <div>
                <div className='bg-gray-200'>
                    <ReactWordcloud words={words} />
                </div>
            </div>
            <div>
                <div className='mx-auto bg-white rounded-lg shadow-2xl w-1/4 p-8'>
                    <div className='text-center my-4'>Paste in your keywords</div>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor='text'>Text</label>
                            <input type='text' name='text' placeholder='e.g Oil war' className='p-2 block w-full border border-gray-300' />
                        </div>
                        <div>
                            <label htmlFor='value'>Value</label>
                            <input type='number' name='value' placeholder='weight in numbers 100 being highest' className=' border border-gray-300 p-2 block w-full' />
                        </div>
                        <button className='text-white font-semibold bg-indigo-800 p-2' type='submit'>Add word</button>
                    </form>
                </div>
            </div>
        </div>
    );
} 