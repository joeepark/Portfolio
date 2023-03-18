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
        <h2>creative software engineer</h2>
        <h3> delivering user-friendly products with a focus on <span>accessibility</span> and <span>inclusivity</span></h3>
      </div>
    </section>
  );
}
