import Image from 'next/image';
import blob from '/public/blob.png';
import bg from '/public/mainbg.png';

export default function Intro() {
  return (
    <section className="intro">
      <div className="parllax_group" id="blob">
        <Image src={blob} alt="portrait image" height={1500} className="blob" />
      </div>
      <div className="parllax_group" id="text">
        <h1>Joseph Park</h1>
        <h2>highly motivated software engineer</h2>
        <h3>
          who likes <span>collaborative</span> and <span>creative</span> work to build something
          amazing
        </h3>
      </div>
    </section>
  );
}
