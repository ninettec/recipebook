export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hola, I'm Ninette</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Welcome to</span>{" "}
            <br />
            my virtual cookbook!
          </h1>
          <p className="hero--section-description">
            Here you'll be able to find all of my recipes coming either from my mexican lineage or my heart!
            <br /> (Please note that this website is a work in progress, I welcome any feedback!)
          </p>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
