import Image from 'next/image';
// import portrait from '/public/portrait3.jpg';

export default function Intro() {
  return (
    <section className="intro">
      <span>`{'<intro>'}`</span>
      {/* <Image src={portrait} alt="portrait image" height={1300}/> */}
      <h1>
        <div>
          <span>I AM</span> <span>a</span>
        </div>
        software engineer who likes <span>collaborative</span> and <span>creative</span> work to
        build something amazing.
      </h1>
      <span>`{'</intro>'}`</span>
    </section>
  );
}
