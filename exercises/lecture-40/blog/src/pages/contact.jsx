const Contact = () => {
  return (
    <div className="contact-page bg-slate-200 min-h-screen flex flex-col justify-between">
      <header className="bg-kindaBlack text-lightGreen py-8">
        <h1 className="text-3xl font-bold text-center">Contact Us</h1>
      </header>
      <section className="contact-content max-w-4xl mx-auto py-8">
        <p className="text-lg mb-4 px-5">
          Have a question or feedback? Fill out the form below and we`ll get
          back to you as soon as possible.
        </p>
        <form className="w-full max-w-lg mx-auto">
          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="appearance-none block w-full bg-white text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="name"
                type="text"
                placeholder="Your name"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="appearance-none block w-full bg-white text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="email"
                type="email"
                placeholder="Your email"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="appearance-none block w-full bg-white text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="message"
                placeholder="Your message"
                rows="6"
              ></textarea>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              className="bg-kindaBlack text-lightGreen hover:bg-black font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Send Message
            </button>
          </div>
        </form>
      </section>
      <footer className="bg-kindaBlack text-lightGreen py-4 text-center">
        <p>Contact us: nickname@example.com</p>
      </footer>
    </div>
  );
};

export default Contact;
