import React, { useState } from 'react';
import { words } from './utils/inputs';
import ReactWordcloud from 'react-wordcloud';
import LogoSrc from './assets/images/mapper.PNG'
import { BlockPicker } from 'react-color';

export const Mapper = () => {
    const [mapwords, setMapwords] = useState(words);
    const [rounded, setRounded] = useState(false);
    const options = {
        enableTooltip: true,
        deterministic: true,
        fontFamily: 'impact',
        fontSizes: [20, 60],
        fontStyle: 'normal',
        fontWeight: 'normal',
        padding: 5,
        rotations: 1,
        rotationAngles: [0],
        scale: 'sqrt',
        spiral: 'archimedean',
        transitionDuration: 4000,
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const newWord = {
            text: e.target.text.value,
            value: parseInt(e.target.value.value)
        };
        setMapwords([...mapwords, newWord]);
        e.target.reset();
    }
    const [color, setColor] = useState({ background: '#EDF2F7' });
    const handleChange = color => setColor({ background: color.hex });

    return (
        <div className="h-screen">
            <div className='px-16'>
                <img className='h-20 w-20' src={LogoSrc} alt='Wordmap logo' />
            </div>
            <div>
                <div className='text-center text-2xl'>Wordmap creation just got easier...</div>
                <div style={color} className={rounded ? `bg-gray-200 w-1/3 h-full w-1/5 rounded-full mx-auto my-8` : `bg-gray-200 w-1/3 mx-auto my-8`}>
                    <ReactWordcloud words={mapwords} options={options} className='w-full' />
                </div>
                <div className='w-1/3 mx-auto my-8 flex justify-between'>
                    <BlockPicker
                        color={color.background}
                        width='200px'
                        onChange={handleChange}
                    />
                    <div >
                        <div>Shape</div>
                        <div className='flex justify-between align-middle'>
                            <div onClick={() => setRounded(true)} className='h-6 w-6 bg-purple-700 inline rounded-full mr-2'></div>
                            <div onClick={() => setRounded(false)} className='h-6 w-6 bg-purple-700 inline  rounded-none'></div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='mx-auto bg-white rounded-lg mb-20 shadow-2xl w-1/3 p-8 m-4'>
                    <div className='text-center mb-4 uppercase text-lg'>Add Keywords</div>
                    <form onSubmit={handleSubmit}>
                        <div className='flex flex-wrap justify-between mb-3'>
                            <div className='w-full sm:w-1/2  min-w-sm'>
                                <label htmlFor='text' className='text-sm'>Text</label>
                                <input type='text' name='text' placeholder='e.g Oil war' className='p-2 block w-full border border-gray-300' />
                            </div>
                            <div className='w-full sm:w-1/2 min-w-sm'>
                                <label htmlFor='value' className='text-sm'>Weight</label>
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