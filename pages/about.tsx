import React from 'react'
import Image from '../src/components/Image'
import Circle from '../src/components/shapes/Circle'
import DotsLarge from '../src/components/shapes/DotsLarge'
import ShapePink from '../src/components/shapes/ShapePink'
import Layout from '../src/components/Layout'
import ArrowBig from '../src/components/ArrowBig'
import Behance from '../src/components/Behance'
/* import Instagram from '../src/components/Instagram'; */
import LinkedIn from '../src/components/LinkedIn'
import ExperienceItem from '../src/components/ExperienceItem'
import Dribbble from '../src/components/Dribbble'
import Codepen from '../src/components/Codepen'

const about: React.FC = () => (
  <Layout title='About' mainClass='about' aboutActive>
    <article className='personal'>
      <div className='left'>
        <div className='wrapper'>
          <Image source='about-photo' title='Stefany Fernández' width={952} height={1420} />
          <ShapePink />
          <DotsLarge />
          <Circle />
        </div>
      </div>
      <div className='right'>
        <div className='wrapper'>
          <h2>
            <span>Hey! I’m </span>
            <span>
              <b>
                <em>Stefany</em>
              </b>
              <span className='comma'>,</span>
            </span>
            <span>nice to</span>
            <span>
              see you<span className='dot'>.</span>
            </span>
          </h2>
          <p>
            My name is <b>Stefany Fernández</b>.
          </p>
          <p>
            I’m a 32 year old designer and developer from Venezuela living in Madrid. Designing is
            my biggest passion, I like to create experiences that make people’s lives more enjoyable
            and easy.
          </p>

          <p>
            I have to admit that after years of turning design into code, I fell in love with it and
            it’s kind of an escape when I’m lacking creativity or need a break from design (we all
            know that happens), because I think it’s very satisfying when you make a code so clean
            and everything works perfectly.
          </p>

          <p>
            I focus on UX / UI, front development, branding, editorial and package design, I also
            love to travel, decorating everything, eat and make some lettering on my free hours
            (yes, they exist sometimes).
          </p>

          <p>
            I always try to improve and get to know myself more as a designer and have fun while I’m
            on it. My inspirations come from exploring different styles of design and finding ideas
            everywhere.
          </p>

          <p>
            I like to say that I am very organised and structured when it comes to my work. I also
            have an eye for details and that if I don’t know something I’m one of those who may be
            curious to learn everything about it.
          </p>

          <p>
            At this point I think you’re probably wondering the meaning of <b>LaLolita</b> and it’s
            pretty simple, my cat’s name is Lola, and I’ve always liked her diminutive “Lolita” so
            when I was thinking of create my own brand, her name came up so quickly in my mind that
            I had to use it.
          </p>
          <p>
            You could also find my other cat Paco wandering around here and there doing some
            mischief.
          </p>

          <p>Now let’s get down to the rabbit hole ;)</p>
        </div>
      </div>
    </article>
    <article className='experience'>
      <div className='top'>
        <div className='title'>
          <h3 className='alignRight'>
            Worked
            <br />
            with
          </h3>
        </div>
        <div className='content'>
          <ExperienceItem
            startDate='Nov 2022'
            endDate='Present'
            position='Senior Graphic Designer'
            company='IceCare Corp'
          />
          <ExperienceItem
            startDate='Mar 2022'
            endDate='Nov 2022'
            position='Senior Ux / Ui Designer'
            company='The Lion'
          />
          <ExperienceItem
            startDate='Nov 2016'
            endDate='Jan 2022'
            position='Team Lead Designer + Front End Developer'
            company='Binpar Digital Ignition'
          />
          <ExperienceItem
            startDate='Jul 2015'
            endDate='Nov 2016'
            position='Web Designer'
            company='Quodem Consultores'
          />
          <ExperienceItem
            startDate='Feb 2014'
            endDate='Jul 2015'
            position='Jr. Art Director'
            company='La Web Mercadeo Interactivo'
          />
          <ExperienceItem
            startDate='Jun 2014'
            endDate='Nov 2015'
            position='Packaging Designer'
            company='Casa Moller USA'
          />
        </div>
      </div>
      <div className='bottom'>
        <div className='title'>
          <h3>
            Studied
            <br />
            at
          </h3>
        </div>
        <div className='content'>
          <ExperienceItem
            startDate='Jan 2022'
            endDate='Jul 2022'
            position='Editorial Design - Online Master'
            company='La Hauss'
            right
          />
          <ExperienceItem
            startDate='Mar 2019'
            endDate='Jun 2019'
            position='Interior Design Course'
            company='Mindway Liberal Studies'
            right
          />
          <ExperienceItem
            startDate='2013'
            endDate='2014'
            position='Web Design Diploma'
            company='Centro de Diseño Digital'
            right
          />
          <ExperienceItem
            startDate='2009'
            endDate='2012'
            position='Graphic Design Degree'
            company='Instituto de Diseño de Caracas'
            right
          />
        </div>
      </div>
    </article>
    <article className='focus'>
      <h3 className='alignRight'>
        Focused <br />
        on
      </h3>
      <ul>
        <li>UI / UX</li>
        <li>Front End</li>
        <li>Branding</li>
        <li>Packaging</li>
        <li>Editorial</li>
        <li>Lettering</li>
      </ul>
    </article>
    <article className='skills'>
      <div className='wrapper'>
        <h3>
          Skilled <br />
          at
        </h3>
        <ul>
          <li>Figma</li>
          <li>Adobe CC</li>
          <li>CSS</li>
          <li>HTML</li>
          <li>Typescript</li>
          <li>React</li>
          <li>React Native</li>
        </ul>
      </div>
      <h4>& More because I’m a quick learner</h4>
    </article>
    <article className='email'>
      <h3>
        So...
        <span>Have you met my email?</span>
      </h3>
      <a title='Email us' href='mailto:info@lalolita.rocks'>
        info@lalolita.rocks
      </a>
      <h4>
        Write us whenever you want, <br />
        we wanna read some legendary ideas. <br />
        <br />
        <span>
          And if you want, you can have my <strong>resume</strong> on pdf too.
        </span>
      </h4>
      <a
        className='download click'
        title='Download resume'
        target='_blank'
        rel='noreferrer'
        href='/stefany-fernandez-cv.pdf'
        download='stefany-fernandez-cv'
      >
        Download it!
      </a>
    </article>
    <article className='social'>
      <h3 className='alignRight'>
        You can find <br />
        us here too
      </h3>
      <ArrowBig />
      <div className='icons'>
        <a
          target='_blank'
          title='Go to Behance'
          rel='noreferrer'
          href='https://www.behance.net/tefyfernandez'
        >
          <Behance />
        </a>
        <a
          target='_blank'
          title='Go to Dribbble'
          rel='noreferrer'
          href='https://dribbble.com/tefyfernandez'
        >
          <Dribbble />
        </a>
        <a
          target='_blank'
          title='Go to Codepen'
          rel='noreferrer'
          href='https://codepen.io/tefyfernandez'
        >
          <Codepen />
        </a>
        {/* 
        <a
          target="_blank"
          title="Go to Instagram"
          rel="noreferrer"
          href="https://www.instagram.com/lalolita.rocks/"
        >
          <Instagram />
        </a> */}
        <a
          target='_blank'
          title='Go to LinkedIn'
          rel='noreferrer'
          href='https://www.linkedin.com/in/stefanyfernandezsifontes/'
        >
          <LinkedIn />
        </a>
      </div>
    </article>
  </Layout>
)

export default about
