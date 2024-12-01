import React from 'react';
import Container from '../components/Container';
import CustomParticles from './../components/Particles';
import Splash from '../components/Splash';
import Hello from '../components/Hello'; // Import directly
import CodeEditor from '../components/CodeEditor'; // Import directly
import Me from '../components/Me'; // Import directly
import Skills from '../components/Skills'; // Import directly
import FeedBacks from '../components/FeedBacks'; // Import directly
import LeaveFeedBack from '../components/LeaveFeedBack'; // Import directly
import useInView from '../hooks/useInView'; // Import the custom hook

const About = () => {
  // Use the custom hook for each section
  const [refHello, isInViewHello] = useInView({ threshold: 0.05 });
  const [refMe, isInViewMe] = useInView({ threshold: 0.05 });
  const [refSkills, isInViewSkills] = useInView({ threshold: 0.05 });
  const [refFeedBacks, isInViewFeedBacks] = useInView({ threshold: 0.05 });

  return (
    <>
      <section ref={refHello} className="min-h-[90vh] items-center justify-center flex">
        <CustomParticles />
        <Container>
          {isInViewHello && (
            <>
              <Hello />
              <CodeEditor />
            </>
          )}
        </Container>
      </section>

      <section ref={refMe} className="min-h-[50vh] my-5 items-center justify-center flex">
        <Container>
          {isInViewMe && <Me />}
        </Container>
      </section>

      <section ref={refSkills} className="min-h-[70vh] my-5 items-center justify-center flex">
        <Container>
          {isInViewSkills && <Skills />}
        </Container>
      </section>

      <section ref={refFeedBacks} className="min-h-[70vh] my-5 items-center justify-center flex">
        <Container>
          {isInViewFeedBacks && <FeedBacks />}
        </Container>
      </section>

      <section className="min-h-[70vh] mb-5 items-center justify-center flex">
        <Container>
          <LeaveFeedBack />
        </Container>
      </section>
    </>
  );
};

export default About;
