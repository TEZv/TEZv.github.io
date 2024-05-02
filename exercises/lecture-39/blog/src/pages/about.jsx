const About = () => {
    return (
      <div className="about-page bg-slate-200 min-h-screen flex flex-col justify-between">
        <header className="bg-kindaBlack text-lightGreen py-8">
          <h1 className="text-3xl font-bold text-center">About Our Blog</h1>
        </header>
        <section className="about-content max-w-4xl mx-auto py-8 p-5">
          <p className="text-lg mb-4">
            Welcome to our blog! We are passionate about sharing knowledge and
            insights on various topics...
          </p>
          <p className="text-lg mb-4">
            Our blog covers a wide range of topics including cosmetics,
            lifestyle, travel, and more.
          </p>
          <p className="text-lg mb-4">
            Stay Tuned for regular updates and engaging content!
          </p>
        </section>
        <footer className="bg-kindaBlack text-lightGreen py-4 text-center">
          <p>Contact us: nickname@example.com</p>
        </footer>
      </div>
    );
  };
  
  export default About;