import React, { useEffect } from 'react';
import { TimelineLite } from 'gsap';

import lift from '../../shared/images/gsap-lift.png';
import { babel } from '../../shared/svg/babel.svg';
import { github } from '../../shared/svg/github.svg';
import { js } from '../../shared/svg/js.svg';
import { react } from '../../shared/svg/react.svg';
import { webpack } from '../../shared/svg/webpack.svg';

import Description from './Description';
import Feature from './Feature';
import Icons from './Icons';

// icons will be animated using a stagger method
const iconsArray = [
  { src: react, width: '60', height: '60' },
  { src: js, width: '60', height: '60' },
  { src: github, width: '60', height: '60' },
  { src: webpack, width: '60', height: '60' },
  { src: babel, width: '100', height: '60' },
];

const TimelineSequence = () => {
  const logoTl = new TimelineLite({ paused: true });

  let content = null;
  let head = null;
  let subhead = null;
  let feature = null;
  let description = null;
  const icons = [];

  // add instances to the timeline
  useEffect(() => {
    logoTl
      .set(content, { autoAlpha: 1 }) // show content div
      .from(head, 0.5, { left: 100, autoAlpha: 0 })
      .from(subhead, 0.5, { left: -100, autoAlpha: 0 }, '-=0.25') // added -0.25 seconds prior to end of timeline
      .from(feature, 0.5, { scale: 0.5, autoAlpha: 0 }, 'feature') // added 0.5 seconds after end of timeline
      .from(description, 0.5, { left: 100, autoAlpha: 0 }, 'feature+=0.25')
      .staggerFrom(icons, 0.2, { scale: 0, autoAlpha: 0 }, 0.1); // animate all icons with 0.1 second stagger

    setTimeout(() => {
      logoTl.play();
    }, 1000);
  }, []);

  return (
    <div>
      <div ref={div => (content = div)}>
        <h1 ref={h1 => (head = h1)}>Dylan 🦊</h1>
        <h2 ref={h2 => (subhead = h2)}>A real swell guy, you should buy this man a beer</h2>
        <div>
          <Feature
            src={lift}
            width="240"
            height="151"
            ref={img => (feature = img)}
            alt="features"
          />
          <Description ref={p => (description = p)}>
            Hello, world! I made this little demo to start getting the hang of GSAP timeout
            animations in React. If you think this is cute, check out my{' '}
            <a href="https://hexaclock.netlify.com/">hexaclock</a>, or read about me @{' '}
            <a href="https://dyyyl.rocks">dyyyl.rocks</a>. Big shout out to{' '}
            <a href="https://greensock.com/">greensock</a> for making such a cool API!
          </Description>
        </div>

        <Icons>
          {iconsArray.map((icon, index) => {
            const { src, width, height } = icon;
            return (
              <svg
                key={`icon-${index + 1}`}
                src={src}
                width={width}
                height={height}
                ref={img => (icons[index] = img)}
                alt="icon"
              />
            );
          })}
        </Icons>
      </div>
    </div>
  );
};

export default TimelineSequence;
