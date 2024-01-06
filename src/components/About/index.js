import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import Me from '../../assets/images/cabo.jpeg'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <div className='container about-page'>
      <div className='text-zone'>
        <h1>
          <AnimatedLetters
            letterClass={letterClass} 
            strArray={['A','b','o','u','t',' ','M','e']}
            idx={15}
            />
        </h1>
        <p>Im grateful for the experience and time I spent in the service industry, and it helped me develop a lot of inter personal communication skills as well as strengthening my base for customer service. Before Epicodus I spent many years as a sous chef and cook at various restaurants in the Portland area. This fast paced environment helped me develop a great stress response to difficult tasks and taught me how to best manage my time for the best yielding results in a high speed and unforgiving environment. I find that as I get older that my interests are expanding and my desire growing to jump into the tech and development industry. This led me to my current venture in the web development realm with Epicodus. Im fairly new to coding and in the pursuit of sharpening my coding language skills but the open ended and expansive possibilities in software development are a key pull for me to this industry.</p>
        <p>At this point I've learned basic coding with HTML, CSS and javascript, as well as a learning mindset to further expand upon these languages and tools. As per the curriculum I also intend learn and be proficient in C# as well as React. As a sous chef I found my self constantly wanting to expand on the menus I was serving but only able to explore so much in the professional realm, but with coding I can for-see endless paths to personalizing and adapting my code that will allow me to keep growing.</p>
        <p>The industry itself seems to always be expanding and years of pursuit may lead to mastery but there seems to be no ceiling for personal growth as a developer. Im hungry to sink my teeth into challenging and exciting projects that will be fulfilling on an academic and professional level. The way I see it the sky is the limit.</p>
      </div>

      <div className='photo-me'>
        <img src={Me} alt='me' />
      </div>
    </div>
  )
}

export default About;