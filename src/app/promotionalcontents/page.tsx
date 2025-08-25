import Image from 'next/image';

export default function PromotionalContents() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Promotional Contents</h2>
      <p className="text-lg mb-4">
        Spread awareness of Baybayin through events, posters, and campaigns.
      </p>
      <div className="grid grid-cols-2 gap-6">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/8/84/Baybayin_script_sample.svg"
          alt="Baybayin Poster"
          className="rounded-lg shadow"
          width={500} // Set an appropriate width
          height={300} // Set an appropriate height
        />
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Baybayin_script_sample.svg"
          alt="Baybayin Culture"
          className="rounded-lg shadow"
          width={500} // Set an appropriate width
          height={300} // Set an appropriate height
        />
      </div>
    </section>
  );
}
