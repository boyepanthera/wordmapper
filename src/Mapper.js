import React, { useState } from 'react';
import { words } from './utils/inputs';
import ReactWordcloud from 'react-wordcloud';
import LogoSrc from './assets/images/mapper.PNG'
import { GithubPicker } from 'react-color';

export const Mapper = () => {
    const [mapwords, setMapwords] = useState(words)
    const options = {
        // colors: ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd', '#8c564b'],
        enableTooltip: true,
        deterministic: true,
        fontFamily: 'impact',
        fontSizes: [20, 60],
        fontStyle: 'normal',
        fontWeight: 'normal',
        padding: 1,
        rotations: 1,
        rotationAngles: [0],
        scale: 'sqrt',
        spiral: 'archimedean',
        transitionDuration: 1000,
    };
    const handleSubmit = (e) => {
        // console.log(e)
        e.preventDefault();
        const newWord = {
            text: e.target.text.value,
            value: parseInt(e.target.value.value)
        };
        setMapwords([...mapwords, newWord]);
        e.target.reset();
    }
    const [color, setColor] = useState({ background: '#FC8181' });
    const handleChangeComplete = color => setColor({ background: color.hex });
    return (
        <div className="h-screen">
            <div className='px-16'>
                <img className='h-20 w-20' src={LogoSrc} alt='Wordmap logo' />
            </div>
            <div>
                <div className='text-center text-2xl'>Wordmap creation just got easier...</div>
                <div className='bg-gray-200 w-1/3 mx-auto my-8'>
                    <ReactWordcloud words={mapwords} options={options} className='w-full' />
                </div>
                <div className='w-1/3 mx-auto my-8 flex justify-between'>
                    <GithubPicker
                        color={color}
                        onChange={handleChangeComplete}
                    />
                    <i className="fas fa-toggle-on text-purple-700 text-3xl"></i>
                </div>
            </div>
            <div>
                <div className='mx-auto bg-white rounded-lg mb-20 shadow-2xl w-1/3 p-8 m-4'>
                    <div className='text-center mb-4 uppercase text-xl'>Add Keywords</div>
                    <form onSubmit={handleSubmit}>
                        <div className='flex flex-wrap justify-between mb-3'>
                            <div className='w-full sm:w-1/2  min-w-sm'>
                                <label htmlFor='text'>Text</label>
                                <input type='text' name='text' placeholder='e.g Oil war' className='p-2 block w-full border border-gray-300' />
                            </div>
                            <div className='w-full sm:w-1/2 min-w-sm'>
                                <label htmlFor='value'>Weight</label>
                                <input type='number' name='value' placeholder='In number 1-100 range' className=' border border-gray-300 p-2 block w-full' />
                            </div>
                            <div className='w-full my-2 align-middle'>
                                <button type='submit' className='text-white font-semibold bg-purple-800 focus:outline-none p-2  w-full shadow-lg rounded-full'>Add word</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
} 