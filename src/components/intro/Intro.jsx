import Image from 'next/image';
import portrait from '/public/portrait3.jpg';

export default function Intro() {
  return (
    <section className="intro">
      <span>`{'<intro>'}`</span>
      <Image src={portrait} alt="portrait image" height={1300}/>
      <h2>Software Engineer</h2>
      <h3>Frontend Developer</h3>
      <span>`{'</intro>'}`</span>
    </section>
  );
}
