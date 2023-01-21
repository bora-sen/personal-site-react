import React from 'react'
import Reveal from 'react-reveal/Fade'
import Lottie from 'react-lottie'
import animData from '../assets/lottieanim.json'

function Welcome() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <Reveal>
        <section>

            <Lottie
            options={defaultOptions}
            width={400}
            height={300}
            />
                    <div className='flex'>
            <h2 className='font-thin text-primary bg-primary-dark dark:text-primary-dark dark:font-normal dark:bg-primary px-4 text-lg rounded-md py-1 mx-auto'>Hi! This is Bora.</h2>
        </div>
        </section>
    </Reveal>
  )
}

export default Welcome