import React from 'react';
import Image from '../components/image';

const AboutMe = ()=> (
  <div class="about-me">
    <section class="introduction">
    <p>
      My Name is Omar! <br/>I study Software Development and Network Engineering.
      I have a great passion to computer science and technology.
      I like to code every chance I get. Most importantly I like to build
      cool and useful tools.
    </p>
    </section>
    <section class="intrests">
    <p>
      My passion is to reach a point in my career and academics where I can build
      tools and utilties that help a large number of people.
    </p>

    <p> Here are a few things I wish to work on oneday </p>
    <ul>
      <li> Lunix kernal</li>
      <li> NodeJs core </li>
    </ul>
    </section>

    <section class="little-more-info">
      <p>
       What&apos;s my strength?<br/>
       I know about technology and I try my best to understnad a technology inside out.
       Also I know a little bit of a lot of things. Hence, I kinda know where I am suppose to look when I need a specific
       requiremnt.
      </p>
    </section>
    <div style={{ maxWidth: '300px', marginLeft:"30%" }}>
      <Image />
    </div>
  </div>
);

export default AboutMe;
