import Image from 'next/image';
import css from '/public/css.svg';
import html from '/public/html.svg';
import javascript from '/public/javascript.svg';
import node from '/public/nodejs.svg';
import postgreSQL from '/public/postgreSQL.svg';
import react from '/public/react.png';
import typescript from '/public/typescript.svg';
import mongoDB from '/public/mongoDB.svg';

export default function Skills() {
  return (
    <section className="skills">
      {/* <span>`{'<skills>'}`</span> */}
      <h3 className="skills__code-header">Code</h3>
      <div className="skills__code-content">
        <div className="skills__code-icons">
          <Image src={javascript} alt="javscript icon" height={60} />
          <Image src={react} alt="react icon" height={60} />
          <Image src={css} alt="css icon" height={60} />
          <Image src={html} alt="html icon" height={60} />
        </div>
        <div className="skills__code-icons">
          <Image src={typescript} alt="typescript icon" height={60} />
          <Image src={node} alt="node icon" height={60} />
          <Image src={postgreSQL} alt="postgresql icon" height={60} />
          <Image src={mongoDB} alt="mongodb icon" height={60} />
        </div>
      </div>
      <div className="skills__design-image"></div>
      <h3 className="skills__design-header">UX/UI Design</h3>
      <div className="skills__photography-header">
        <h3>Photoshop</h3>
        <h3>Lightroom</h3>
      </div>
      {/* <span>`{'</skills>'}`</span> */}
    </section>
  );
}
