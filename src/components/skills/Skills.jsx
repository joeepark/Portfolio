import Image from 'next/image';
import css from '/public/css.png';
import html from '/public/html.png';
import javascript from '/public/javascript.png';
import node from '/public/nodejs.png';
import postgreSQL from '/public/postgreSQL.png';
import react from '/public/react.png';
import typescript from '/public/typescript.png';
import mongoDB from '/public/mongoDB.svg';

export default function Skills() {
  return (
    <section className="skills">
      <span>`{'<skills>'}`</span>
      <h3 className="code-header">Code</h3>
      <div className="code-content">
        <div className="code-icons">
          <Image src={javascript} alt="javscript icon" height={60} />
          <Image src={react} alt="react icon" height={60} />
          <Image src={css} alt="css icon" height={60} />
          <Image src={html} alt="html icon" height={60} />
        </div>
        <div className="code-icons">
          <Image src={typescript} alt="typescript icon" height={60} />
          <Image src={node} alt="node icon" height={60} />
          <Image src={postgreSQL} alt="postgresql icon" height={60} />
          <Image src={mongoDB} alt="mongodb icon" height={60} />
        </div>
        <ul>
          <li>Next.js</li>
          <li>Express.js</li>
          <li>GraphQL</li>
          <li>Tailwind</li>
          <li>styled-components</li>
          <li>Git/Github</li>
        </ul>
      </div>
      <div className="design-image"></div>
      <h3 className="design-header">UX/UI Design</h3>
      <div className="photography-header">
        <h3>Photoshop</h3>
        <h3>Lightroom</h3>
      </div>
      <span>`{'</skills>'}`</span>
    </section>
  );
}
