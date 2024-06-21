function App() {

  return (
    <>

      <body>
        <header
          className="code-section relative z-20 px-6 py-5 font-['IBM_Plex_Sans'] lg:py-7"
          id="s27kp2s"
        >
          <div
            className="mx-auto flex max-w-[1368px] items-center justify-between lg:text-lg xl:text-xl xl:leading-9"
          >
            <div>
              <a
                id="nav-name-text"
                href="/"
                className="relative z-20 block text-3xl font-medium"
              >Pimienta de Canela</a
              ><svg
                className="absolute left-0 top-0 z-0 hidden lg:block"
                width="349"
                height="130"
                viewBox="0 0 349 130"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g mask="url(#mask0_1_174)">
                  <path
                    d="M335.756 8.59748C333.999 43.2789 302.26 73.6142 251.29 94.3707C200.444 115.077 130.991 125.999 55.0003 122.149C-20.9901 118.299 -88.9836 100.413 -137.477 74.6742C-186.088 48.8725 -214.598 15.4847 -212.841 -19.1968C-211.084 -53.8782 -179.345 -84.2135 -128.375 -104.97C-77.5289 -125.676 -8.07589 -136.598 67.9145 -132.748C143.905 -128.898 211.898 -111.013 260.391 -85.2735C309.002 -59.4718 337.513 -26.0839 335.756 8.59748Z"
                    stroke="#E9E9E9"
                    strokeWidth="3"
                    className=""
                  ></path>
                </g>
              </svg>
            </div>
            <div id="nav-links" className="hidden items-center gap-5 md:flex xl:gap-8">
              <a
                href="/#top"
                className="block border-b-2 border-transparent font-medium transition ease-linear lg:hover:border-gray-950"
              >Home</a
              ><a
                id="nav-link-one"
                href="/#about"
                className="block border-b-2 border-transparent transition ease-linear lg:hover:border-gray-950"
              >About</a
              ><a
                id="nav-link-two"
                href="/#features"
                className="block border-b-2 border-transparent transition ease-linear lg:hover:border-gray-950"
              >Services</a
              ><a
                href="/gallery-of-creations"
                className="block border-b-2 border-transparent transition ease-linear lg:hover:border-gray-950"
              >Gallery of Creations</a
              >
            </div>
            <div id="nav-cta" className="hidden items-center gap-5 md:flex">
              <a
                href="/"
                className="primary-color-bg block rounded-full px-3 py-1 text-white transition ease-linear lg:px-5 bg-rose-600 hover:bg-rose-500"
              ><span id="nav-cta-button-text" className="">Ordenar Ahora</span></a
              >
            </div>
            <button className="block md:hidden">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 2L30 2"
                  stroke="#0D6800"
                  strokeWidth="3"
                  strokeLinecap="round"
                ></path>
                <path
                  d="M2 16L30 16"
                  stroke="#0D6800"
                  strokeWidth="3"
                  strokeLinecap="round"
                ></path>
                <path
                  d="M2 30L30 30"
                  stroke="#0D6800"
                  strokeWidth="3"
                  strokeLinecap="round"
                ></path>
              </svg>
            </button>
          </div>
          <div id="nav-links-mobile" className="mt-4 hidden md:hidden">
            <div
              className="relative z-10 flex flex-col space-y-2 bg-white pb-4 text-center text-lg"
            >
              <a href="/#top" className="text-gray-800">Home</a
              ><a id="mobile-nav-link-one" href="/#about" className="text-gray-800"
              >About</a
              ><a id="mobile-nav-link-two" href="/#features" className="text-gray-800"
              >Services</a
              >
              <div id="nav-mobile-cta-button" className="flex-col space-y-2 pt-4">
                <div id="nav-cta-button">
                  <a
                    href="/#contact"
                    className="primary-color-bg block rounded-full px-3 py-1 text-white transition ease-linear lg:px-5 bg-rose-600 hover:bg-rose-500"
                  >Contact Us</a
                  >
                </div>
              </div>
            </div>
            <a href="/gallery-of-creations" className="text-gray-800"
            >Gallery of Creations</a
            >
          </div>
        </header>
        <section
          className="code-section overflow-hidden font-['IBM_Plex_Sans']"
          id="src2po"
        >
          <div
            className="relative mx-auto flex max-w-[1218px] flex-col items-center px-6 pb-28 pt-10 lg:flex-row lg:items-end lg:justify-between"
          >
            <div
              className="relative z-20 mx-auto flex max-w-xl flex-col items-center md:mx-0 md:items-start"
            >
              <div
                className="lg:texl-lg inline-flex items-center gap-3 rounded-full bg-gray-100 p-1.5 pr-4 font-medium md:gap-4 md:pr-7 xl:text-xl"
              >
                <p
                  id="hero-message-badge-header"
                  className="rounded-full bg-gray-950 px-2 py-1 leading-9 text-white md:px-5"
                >
                  Special
                </p>
                <p id="hero-message-badge-text" className="max-w-[260px]">
                  Repostería de temporada 🌟
                </p>
              </div>
              <h1
                id="hero-header"
                className="pb-6 pt-8 text-center text-3xl font-bold md:text-left lg:text-5xl xl:text-7xl"
              >
                Desenvuelve la dulce elegancia
              </h1>
              <p
                id="hero-subtext"
                className="pb-10 text-xl opacity-60 lg:text-2xl lg:leading-10 text-justify md:text-justify 2xl:text-justify"
              >
                En Pimienta de Canela, transformamos ingredientes frescos y técnicas
                tradicionales en pasteles y dulces irresistibles. Nuestra pasión es
                crear experiencias únicas a través de sabores y presentaciones
                inigualables.
              </p>
              <a
                href="/"
                className="hero-cta-button primary-color-bg inline-block rounded-full px-16 py-3 text-lg font-medium text-white transition ease-linear md:py-5 md:text-xl lg:hover:opacity-80 bg-rose-600"
              ><span id="hero-cta-button-text">Compra Ahora</span></a
              >
            </div>
            <div
              className="shadow-card relative z-20 mt-8 inline-flex items-center gap-3 rounded-3xl border-2 border-white bg-gray-600/40 p-4 shadow-[0_0_25px_0_rgba(0,0,0,0.1)] backdrop-blur-xl md:gap-5 lg:mt-0 lg:block lg:border-4 lg:p-8 2xl:text-left"
            >
              <div className="flex -space-x-2 overflow-hidden p-2 lg:mb-5">
                <img
                  className="testimonial-image dont-replace inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1623334044303-241021148842?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w0MzEzMzd8MHwxfHNlYXJjaHwxfHxQYXN0cmllc3xlbnwwfDB8fHwxNzE4OTA3NTI3fDA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1920"
                  alt=""
                  data-media='{"id":"sqkXyyj4WdE","src":"unsplash","type":"image"}'

                /><img
                  className="testimonial-image dont-replace inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w0MzEzMzd8MHwxfHNlYXJjaHwyfHxQYXN0cmllc3xlbnwwfDB8fHwxNzE4OTA3NTI3fDA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1920"
                  alt=""
                  data-media='{"id":"qZ5lPCPvdXE","src":"unsplash","type":"image"}'

                /><img
                  className="testimonial-image dont-replace inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1617026061250-62b474264442?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w0MzEzMzd8MHwxfHNlYXJjaHwzfHxQYXN0cmllc3xlbnwwfDB8fHwxNzE4OTA3NTI3fDA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1920"
                  alt=""
                  data-media='{"id":"acw-W7oeFOk","src":"unsplash","type":"image"}'

                /><img
                  className="testimonial-image dont-replace inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1612539466296-4ecf1db303e3?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w0MzEzMzd8MHwxfHNlYXJjaHw0fHxQYXN0cmllc3xlbnwwfDB8fHwxNzE4OTA3NTI3fDA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1920"
                  alt=""
                  data-media='{"id":"yHjcZCaiKFY","src":"unsplash","type":"image"}'

                /><img
                  className="testimonial-image dont-replace inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1597528662465-55ece5734101?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w0MzEzMzd8MHwxfHNlYXJjaHw1fHxQYXN0cmllc3xlbnwwfDB8fHwxNzE4OTA3NTI3fDA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1920"
                  alt=""
                  data-media='{"id":"Ns2aJ5OXKds","src":"unsplash","type":"image"}'

                />
              </div>
              <p className="text-xl text-white/60 lg:text-2xl">
                <span
                  id="hero-number-estimate"
                  className="text-2xl font-semibold text-white lg:text-4xl"
                >100+</span
                ><span id="hero-number-qualifier" className="ml-2"
                >Happy Customers</span
                >
              </p>
            </div>
            <svg
              className="absolute bottom-10 left-48 z-0 hidden lg:block"
              width="1044"
              height="140"
              viewBox="0 0 1044 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.00006 44.5C88.6667 84.3333 354.9 157.3 546.5 44.4999C738.1 -68.3001 957.833 73.3333 1042 138"
                stroke="#E9E9E9"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="20 20"
                className=""
              ></path></svg>
            <img
              className="testimonial-image dont-replace absolute bottom-10 left-80 hidden h-24 w-24 rounded-full object-cover shadow-[0_0_25px_0_rgba(0,0,0,0.1)] ring-2 ring-white lg:block"
              src="https://images.unsplash.com/photo-1530016555861-3d1f3f5ca94b?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w0MzEzMzd8MHwxfHNlYXJjaHw2fHxQYXN0cmllc3xlbnwwfDB8fHwxNzE4OTA3NTI3fDA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1920"
              alt="mother-kid"
              data-media='{"id":"YpsnJ6eGjVs","src":"unsplash","type":"image"}'

            />
          </div>
          <img
            className="high-res-image seo-image absolute -right-32 -top-32 z-10 hidden h-[750px] w-[750px] rounded-full rounded-tr-none object-cover object-right-top md:block"
            src="https://images.unsplash.com/photo-1623334044303-241021148842?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w0MzEzMzd8MHwxfHNlYXJjaHwxfHxQYXN0cmllc3xlbnwwfDB8fHwxNzE4OTA3NTI3fDA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1920"
            alt="hero"
            data-media='{"id":"sqkXyyj4WdE","src":"unsplash","type":"image"}'

          />
          <div className="mt-8 flex space-x-4">
            <a
              href="/gallery-of-creations"
              className="hover:underline text-xl font-medium text-gray-600"
            >Galería de Creaciones</a
            ><a href="/" className="hover:underline text-xl font-medium text-gray-600"
            >Inicio</a
            >
          </div>
        </section>
        <section
          id="section1"
          className="code-section relative overflow-hidden font-['IBM_Plex_Sans'] md:overflow-visible lg:pt-20"
        >
          <div className="relative mx-auto max-w-[1400px]">
            <div
              className="absolute left-16 right-16 top-0 z-0 hidden h-60 rounded-3xl bg-gray-100 lg:block"
            ></div>
            <div
              className="relative z-10 grid-cols-5 gap-8 md:grid lg:gap-16 lg:pt-16 xl:grid-cols-2"
            >
              <div
                className="relative col-span-3 ml-8 grid grid-cols-3 gap-4 pb-10 md:ml-0 md:grid-cols-2 lg:gap-8 xl:col-span-1"
              >
                <div
                  className="relative z-30 col-span-2 h-60 w-full overflow-hidden rounded-xl border-4 border-white shadow-[0_0_25px_0_rgba(0,0,0,0.1)] md:col-span-1 md:h-96 lg:h-[460px]"
                >
                  <img
                    className="high-res-image h-full w-full object-cover"
                    src="https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w0MzEzMzd8MHwxfHNlYXJjaHwyfHxQYXN0cmllc3xlbnwwfDB8fHwxNzE4OTA3NTI3fDA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1920"
                    alt=""
                    data-media='{"id":"qZ5lPCPvdXE","src":"unsplash","type":"image"}'

                  />
                </div>
                <div
                  className="relative z-10 h-60 w-full overflow-hidden rounded-xl rounded-r-none border-4 border-white md:h-96 md:rounded-r-xl lg:h-[460px]"
                >
                  <img
                    className="high-res-image h-full w-full object-cover"
                    src="https://images.unsplash.com/photo-1617026061250-62b474264442?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w0MzEzMzd8MHwxfHNlYXJjaHwzfHxQYXN0cmllc3xlbnwwfDB8fHwxNzE4OTA3NTI3fDA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1920"
                    alt=""
                    data-media='{"id":"acw-W7oeFOk","src":"unsplash","type":"image"}'

                  />
                </div>
                <div
                  className="primary-color-border absolute -bottom-4 left-32 z-20 hidden h-[300px] w-[300px] rounded-full border-[40px] shadow-[0_0_25px_0_rgba(0,0,0,0.1)] lg:block border-rose-600"
                ></div>
                <div
                  className="primary-color-border absolute bottom-0 left-32 z-20 h-[200px] w-[200px] rounded-full border-[30px] shadow-[0_0_25px_0_rgba(0,0,0,0.1)] lg:hidden border-rose-600"
                ></div>
              </div>
              <div
                className="col-span-2 flex flex-col items-center md:items-start xl:col-span-1 xl:pr-40"
              >
                <h1
                  id="about-header"
                  className="pb-5 text-center text-2xl font-semibold md:text-left lg:text-4xl xl:text-5xl xl:leading-[60px]"
                >
                  About Us
                </h1>
                <p
                  id="about-text"
                  className="pb-8 text-lg opacity-60 lg:text-xl xl:text-2xl xl:leading-10 text-justify md:text-justify 2xl:text-justify"
                >
                  Welcome to Pimienta de Canela, where our mission is to create
                  extraordinary pastries and sweets by combining the freshest
                  ingredients with time-honored techniques. Our creations are not
                  just desserts; they are experiences that delight your senses and
                  evoke unforgettable memories.
                </p>
                <p
                  className="primary-color-text inline-block rounded-full bg-gray-100 px-8 py-5 text-lg lg:text-xl xl:text-2xl text-rose-600"
                >
                  <span
                    id="about-number-estimate"
                    className="mr-2 font-semibold xl:text-4xl"
                  >5+</span
                  ><span id="about-number-qualifier">Years in Business</span>
                </p>
              </div>
            </div>
          </div>
          <svg
            className="absolute right-0 top-60 z-0 hidden lg:block"
            width="207"
            height="401"
            viewBox="0 0 207 401"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M444.448 28.6553C466.176 55.744 462.607 99.5034 438.302 148.879C414.055 198.136 369.401 252.441 310.047 300.048C250.693 347.656 187.991 379.46 134.647 392.439C81.173 405.449 37.682 399.436 15.9544 372.348C-5.77327 345.259 -2.20446 301.5 22.1012 252.124C46.3479 202.868 91.0017 148.562 150.356 100.955C209.71 53.3475 272.411 21.5434 325.756 8.56427C379.23 -4.44634 422.721 1.56667 444.448 28.6553Z"
              stroke="#E9E9E9"
              strokeWidth="3"
            ></path>
          </svg>
        </section>
        <section
          id="features"
          className="code-section relative pb-16 pt-20 font-['IBM_Plex_Sans'] lg:pb-24 lg:pt-40"
        >
          <div className="relative z-20 mx-auto max-w-[1220px] px-6">
            <h1
              className="flex flex-col items-center justify-center space-x-2 pb-8 text-2xl font-semibold sm:flex-row lg:text-4xl xl:text-5xl"
            >
              <span id="features-header-beginning">Discover</span
              ><span
                id="features-header-word"
                className="inline-block rounded-full bg-black px-8 py-2 text-2xl text-white"
              >Excellence</span
              ><span id="features-header-end">with Us</span>
            </h1>
            <div
              className="grid gap-8 rounded-2xl bg-white px-8 py-5 lg:grid-cols-2 lg:px-16 lg:py-14"
            >
              <div className="relative flex items-start gap-5">
                <div
                  id="feature-1-icon"
                  className="primary-color-text relative z-10 flex h-10 w-10 flex-none items-center justify-center rounded-full bg-gray-200 text-xl lg:h-16 lg:w-16 text-rose-600"
                >
                  <i className="fa-solid fa-bread-slice" aria-hidden="true"></i>
                </div>
                <div>
                  <h3
                    id="feature-1-header"
                    className="pb-3.5 text-lg font-medium md:text-xl lg:text-2xl xl:text-3xl"
                  >
                    Artisan Pastries
                  </h3>
                  <p
                    id="feature-1-text"
                    className="opacity-60 lg:text-lg lg:leading-9 xl:text-xl 2xl:text-justify"
                  >
                    Our artisan pastries are handcrafted with the utmost care,
                    combining tradition and innovation to bring you the finest
                    flavors.
                  </p>
                </div>
                <svg
                  className="absolute left-8 top-16 z-0 hidden lg:block"
                  width="3"
                  height="115"
                  viewBox="0 0 3 115"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.5 0.5V115"
                    stroke="#E9E9E9"
                    strokeWidth="3"
                    strokeDasharray="20 20"
                  ></path></svg
                ><svg
                  className="absolute left-4 top-10 sm:hidden"
                  width="4"
                  height="129"
                  viewBox="0 0 4 129"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 0V129"
                    stroke="#E9E9E9"
                    strokeWidth="3"
                    strokeDasharray="10 10"
                  ></path>
                </svg>
              </div>
              <div className="relative flex items-start gap-5">
                <div
                  id="feature-2-icon"
                  className="primary-color-text relative z-10 flex h-10 w-10 flex-none items-center justify-center rounded-full bg-gray-200 text-xl lg:h-16 lg:w-16 text-rose-600"
                >
                  <i className="fa-solid fa-cake-candles" aria-hidden="true"></i>
                </div>
                <div>
                  <h3
                    id="feature-2-header"
                    className="pb-3.5 text-lg font-medium md:text-xl lg:text-2xl xl:text-3xl"
                  >
                    Custom Orders
                  </h3>
                  <p
                    id="feature-2-text"
                    className="opacity-60 lg:text-lg lg:leading-9 xl:text-xl 2xl:text-justify"
                  >
                    Celebrate special occasions with our custom orders, tailored to
                    your specific tastes and preferences to make moments truly
                    memorable.
                  </p>
                </div>
                <svg
                  className="absolute left-8 top-16 z-0 hidden lg:block"
                  width="3"
                  height="115"
                  viewBox="0 0 3 115"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.5 0.5V115"
                    stroke="#E9E9E9"
                    strokeWidth="3"
                    strokeDasharray="20 20"
                  ></path></svg> <svg
                    className="absolute left-4 top-10 sm:hidden"
                    width="4"
                    height="129"
                    viewBox="0 0 4 129"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                  <path
                    d="M2 0V129"
                    stroke="#E9E9E9"
                    strokeWidth="3"
                    strokeDasharray="10 10"
                  ></path>
                </svg>
              </div>
              <div className="relative flex items-start gap-5">
                <div
                  id="feature-3-icon"
                  className="primary-color-text relative z-10 flex h-10 w-10 flex-none items-center justify-center rounded-full bg-gray-200 text-xl lg:h-16 lg:w-16 text-rose-600"
                >
                  <i className="fa-solid fa-carrot" aria-hidden="true"></i>
                </div>
                <div>
                  <h3
                    id="feature-3-header"
                    className="pb-3.5 text-lg font-medium md:text-xl lg:text-2xl xl:text-3xl"
                  >
                    Fresh Ingredients
                  </h3>
                  <p
                    id="feature-3-text"
                    className="opacity-60 lg:text-lg lg:leading-9 xl:text-xl 2xl:text-justify"
                  >
                    We pride ourselves on using only the freshest and highest
                    quality ingredients, ensuring that each bite is perfection.
                  </p>
                </div>
                <svg
                  className="absolute left-4 top-10 sm:hidden"
                  width="4"
                  height="129"
                  viewBox="0 0 4 129"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 0V129"
                    stroke="#E9E9E9"
                    strokeWidth="3"
                    strokeDasharray="10 10"
                  ></path>
                </svg>
              </div>
              <div className="flex items-start gap-5">
                <div
                  id="feature-4-icon"
                  className="primary-color-text relative z-10 flex h-10 w-10 flex-none items-center justify-center rounded-full bg-gray-200 text-xl lg:h-16 lg:w-16 text-rose-600"
                >
                  <i className="fa-solid fa-gem" aria-hidden="true"></i>
                </div>
                <div>
                  <h3
                    id="feature-4-header"
                    className="pb-3.5 text-lg font-medium md:text-xl lg:text-2xl xl:text-3xl"
                  >
                    Elegant Presentation
                  </h3>
                  <p
                    id="feature-4-text"
                    className="opacity-60 lg:text-lg lg:leading-9 xl:text-xl 2xl:text-justify"
                  >
                    Our sweets are not only delectable but also stunningly
                    presented, making them the perfect centerpiece for any event.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 z-0 h-[700px] sm:h-[500px]">
            <img
              className="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1612539466296-4ecf1db303e3?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w0MzEzMzd8MHwxfHNlYXJjaHw0fHxQYXN0cmllc3xlbnwwfDB8fHwxNzE4OTA3NTI3fDA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1920"
              alt=""
              data-media='{"id":"yHjcZCaiKFY","src":"unsplash","type":"image"}'

            />
          </div>
          <div
            className="pointer-events-none absolute bottom-0 left-0 right-0 z-0 h-[700px] sm:h-[500px]"
          >
            <div
              className="h-full w-full bg-gradient-to-b from-white via-white/80 to-white opacity-75"
            ></div>
          </div>
        </section>
        <section
          className="code-section mx-auto flex max-w-[1220px] flex-col gap-9 overflow-hidden px-6 pb-36 pt-16 font-['IBM_Plex_Sans'] md:flex-row md:gap-6"
          id="saxz6h"
        >
          <div className="md:w-3/5 lg:w-1/2">
            <h1
              id="info-header"
              className="pb-4 text-2xl font-semibold lg:pb-14 lg:text-4xl xl:text-5xl"
            >
              Our Craft
            </h1>
            <p
              id="info-first-paragraph"
              className="mb-8 max-w-xl text-lg opacity-60 lg:text-xl xl:text-2xl 2xl:text-justify"
            >
              At Pimienta de Canela, we dedicate ourselves to the art of pastry
              making. Our expert team combines fresh ingredients and traditional
              techniques to create pastries and sweets that are both delicious and
              visually stunning. Each item is crafted with passion and attention to
              detail, ensuring a unique and delightful experience for our customers.
            </p>
            <div
              id="info-checkmark-list"
              className="mb-8 pl-8 text-center lg:text-left"
            >
              <ul className="">
                <li className="mb-4 flex flex-row">
                  <i
                    className="fa fa-check mr-4 mt-1 text-green-500"
                    aria-hidden="true"
                  ></i
                  ><span
                    id="info-checkmark-list-item-1"
                    className="text-lg opacity-60 lg:text-xl xl:text-2xl 2xl:text-justify"
                  >We offer a wide range of pastries and sweets, each crafted to
                    perfection with fresh and premium ingredients.</span
                  >
                </li>
                <li className="mb-4 flex flex-row">
                  <i
                    className="fa fa-check mr-4 mt-1 text-green-500"
                    aria-hidden="true"
                  ></i
                  ><span
                    id="info-checkmark-list-item-2"
                    className="text-lg opacity-60 lg:text-xl xl:text-2xl 2xl:text-justify"
                  >Our custom order service allows you to personalize your
                    pastries for any special occasion, ensuring a perfect match to
                    your preferences.</span
                  >
                </li>
                <li className="mb-4 flex flex-row">
                  <i
                    className="fa fa-check mr-4 mt-1 text-green-500"
                    aria-hidden="true"
                  ></i
                  ><span
                    id="info-checkmark-list-item-3"
                    className="text-lg opacity-60 lg:text-xl xl:text-2xl 2xl:text-justify"
                  >Our elegant presentations turn every dessert into a
                    centerpiece, enhancing the aesthetic of any event or
                    gathering.</span
                  >
                </li>
              </ul>
            </div>
            <p
              id="info-second-paragraph"
              className="max-w-xl text-lg opacity-60 lg:text-xl xl:text-2xl 2xl:text-justify"
            >
              Choosing Pimienta de Canela means choosing quality, tradition, and
              innovation. Our commitment to excellence is reflected in every
              creation, making us a trusted choice for any occasion. Let us
              transform your moments into sweet memories with our exquisite
              pastries.
            </p>
          </div>
          <div className="relative order-first md:order-last md:w-2/5 lg:w-1/2">
            <div
              className="relative z-20 mx-auto h-96 w-full rounded-xl border-4 border-white lg:h-[490px] lg:w-[450px]"
            >
              <img
                className="high-res-image relative z-10 h-full w-full rounded-xl object-cover"
                src="https://images.unsplash.com/photo-1597528662465-55ece5734101?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w0MzEzMzd8MHwxfHNlYXJjaHw1fHxQYXN0cmllc3xlbnwwfDB8fHwxNzE4OTA3NTI3fDA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1920"
                alt=""
                data-media='{"id":"Ns2aJ5OXKds","src":"unsplash","type":"image"}'

              />
              <p
                id="text-over-image"
                className="absolute bottom-9 left-9 z-20 text-3xl font-semibold text-white lg:text-4xl xl:text-5xl"
              >
                Perfection
              </p>
            </div>
            <div
              className="primary-color-bg primary-opacity-[20] absolute left-0 top-10 z-0 h-96 w-96 rounded-full blur-3xl md:top-0 md:h-[600px] md:w-[600px] bg-rose-600/20"
            ></div>
          </div>
        </section>
        <section
          className="code-section mx-auto max-w-[1220px] px-6 pb-16 font-['IBM_Plex_Sans']"
          id="s3dxjg3"
        >
          <div className="items-center justify-between gap-10 pb-12 md:flex">
            <h1
              id="portfolio-header"
              className="max-w-md pb-4 text-3xl font-semibold md:pb-0 lg:text-4xl xl:text-5xl"
            >
              Our Creations
            </h1>
            <p
              id="portfolio-text"
              className="max-w-xl text-lg opacity-60 lg:text-xl xl:text-2xl 2xl:text-justify"
            >
              Explore our stunning collection of pastries and sweets that showcase
              our dedication to quality and elegance.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl bg-gray-100 p-4">
              <img
                className="h-40 w-full rounded-xl object-cover lg:h-52"
                src="https://images.unsplash.com/photo-1530016555861-3d1f3f5ca94b?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w0MzEzMzd8MHwxfHNlYXJjaHw2fHxQYXN0cmllc3xlbnwwfDB8fHwxNzE4OTA3NTI3fDA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1920"
                alt=""
                data-media='{"id":"YpsnJ6eGjVs","src":"unsplash","type":"image"}'

              /><button className="-mt-8 ml-auto mr-5 flex">
                <div
                  className="primary-color-bg relative z-10 flex h-10 w-10 flex-none items-center justify-center rounded-full text-2xl text-white lg:h-16 lg:w-16 bg-rose-600"
                >
                  <i className="fa-solid fa-heart" aria-hidden="true"></i>
                </div>
              </button>
              <h3
                id="portfolio-1-header"
                className="pb-3 text-2xl font-medium lg:text-3xl"
              >
                Signature Cakes
              </h3>
              <p
                id="portfolio-1-text"
                className="max-w-[260px] leading-9 opacity-60 lg:text-lg xl:text-xl 2xl:text-justify"
              >
                Delight in our meticulously crafted signature cakes, perfect for any
                celebration.
              </p>
            </div>
            <div className="rounded-xl bg-gray-100 p-4">
              <img
                className="h-40 w-full rounded-xl object-cover lg:h-52"
                src="https://images.unsplash.com/photo-1552632196-9442133181d3?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w0MzEzMzd8MHwxfHNlYXJjaHw3fHxQYXN0cmllc3xlbnwwfDB8fHwxNzE4OTA3NTI3fDA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1920"
                alt=""
                data-media='{"id":"Fuj145tMO84","src":"unsplash","type":"image"}'

              /><button className="-mt-8 ml-auto mr-5 flex">
                <div
                  className="primary-color-bg relative z-10 flex h-10 w-10 flex-none items-center justify-center rounded-full text-2xl text-white lg:h-16 lg:w-16 bg-rose-600"
                >
                  <i className="fa-solid fa-heart" aria-hidden="true"></i>
                </div>
              </button>
              <h3
                id="portfolio-2-header"
                className="pb-3 text-2xl font-medium lg:text-3xl"
              >
                Gourmet Cookies
              </h3>
              <p
                id="portfolio-2-text"
                className="max-w-[260px] leading-9 opacity-60 lg:text-lg xl:text-xl 2xl:text-justify"
              >
                Indulge in our gourmet cookies, baked to crisp perfection with rich
                flavors.
              </p>
            </div>
            <div className="rounded-xl bg-gray-100 p-4">
              <img
                className="h-40 w-full rounded-xl object-cover lg:h-52"
                src="https://images.unsplash.com/photo-1523198205441-99fac53d157f?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w0MzEzMzd8MHwxfHNlYXJjaHw4fHxQYXN0cmllc3xlbnwwfDB8fHwxNzE4OTA3NTI3fDA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1920"
                alt=""
                data-media='{"id":"Kdtd6fDxkmI","src":"unsplash","type":"image"}'

              /><button className="-mt-8 ml-auto mr-5 flex">
                <div
                  className="primary-color-bg relative z-10 flex h-10 w-10 flex-none items-center justify-center rounded-full text-2xl text-white lg:h-16 lg:w-16 bg-rose-600"
                >
                  <i className="fa-solid fa-heart" aria-hidden="true"></i>
                </div>
              </button>
              <h3
                id="portfolio-3-header"
                className="pb-3 text-2xl font-medium lg:text-3xl"
              >
                Seasonal Specials
              </h3>
              <p
                id="portfolio-3-text"
                className="max-w-[260px] leading-9 opacity-60 lg:text-lg xl:text-xl 2xl:text-justify"
              >
                Savor our seasonal specials, inspired by the flavors and colors of
                the season.
              </p>
            </div>
          </div>
        </section>
        <section className="code-section relative font-['IBM_Plex_Sans']" id="s48ffe">
          <div
            className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 py-16 lg:px-24"
          >
            <h1
              id="call-to-action-header"
              className="pb-8 text-center text-3xl font-semibold lg:text-4xl xl:text-5xl"
            >
              Join Our Sweet Journey
            </h1>
            <button
              id="call-to-action-button"
              className="primary-color-bg rounded-full px-16 py-3 text-lg font-medium text-white transition ease-linear lg:py-5 lg:text-xl lg:hover:bg-opacity-80 bg-rose-600 hover:bg-rose-500"
            >
              <span id="call-to-action-button-text">Contact Us</span>
            </button>
          </div>
          <div className="absolute inset-0 z-0">
            <img
              className="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1514481538271-cf9f99627ab4?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w0MzEzMzd8MHwxfHNlYXJjaHw5fHxQYXN0cmllc3xlbnwwfDB8fHwxNzE4OTA3NTI3fDA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1920"
              alt=""
              data-media='{"id":"gOn7dKcCWKg","src":"unsplash","type":"image"}'

            />
          </div>
          <div className="pointer-events-none absolute inset-0">
            <div
              className="h-full w-full bg-gradient-to-b from-white via-white/80 to-white opacity-75"
            ></div>
          </div>
        </section>
        <section
          className="code-section relative py-20 font-['IBM_Plex_Sans'] lg:py-24"
          id="sz4c3w"
        >
          <div className="mx-auto max-w-[1220px] px-6">
            <div
              className="mx-auto flex max-w-sm flex-col items-center lg:mx-0 lg:max-w-lg"
            >
              <h1
                id="testimonials-header"
                className="pb-5 text-center text-3xl font-semibold lg:pb-7 lg:text-left lg:text-4xl xl:text-5xl"
              >
                What Our Customers Say
              </h1>
              <p
                id="testimonial-quote"
                className="border-b-2 border-gray-300 pb-7 text-center text-lg opacity-60 lg:text-left lg:text-xl xl:text-2xl xl:leading-10"
              >
                "Pimienta de Canela's pastries are a culinary masterpiece. Each bite
                is a testament to their passion and expertise."
              </p>
              <h3
                className="pt-7 text-center text-xl font-medium lg:text-left lg:text-2xl xl:text-3xl"
              >
                <span>Jane Doe. - </span
                ><span id="testimonial-title">Food Critic</span>
              </h3>
            </div>
          </div>
          <div className="relative mt-16 overflow-hidden lg:hidden">
            <img
              className="dont-replace -ml-24 min-w-[540px] shrink-0 sm:mx-auto sm:ml-auto"
              src="https://landingsite-static-web-images.s3.us-east-2.amazonaws.com/template9/graphic-mobile.svg"
              alt=""
            />
            <div className="absolute left-20 top-4 md:left-80">
              <img
                className="testimonial-image dont-replace relative z-10 h-16 w-16 rounded-full border-4 border-white object-cover"
                src="https://images.unsplash.com/photo-1597905733802-7bec89b471b6?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w0MzEzMzd8MHwxfHNlYXJjaHwxNnx8UGFzdHJpZXN8ZW58MHwwfHx8MTcxODkwNzUyN3ww&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1920"
                alt=""
                data-media='{"id":"iQq1NyJj-n8","src":"unsplash","type":"image"}'

              />
              <div
                className="primary-color-bg primary-opacity-[20] absolute inset-0 z-0 h-20 w-20 rounded-full blur-lg bg-rose-600/20"
              ></div>
            </div>
            <div className="absolute right-8 top-6 md:right-52">
              <img
                className="testimonial-image dont-replace relative z-10 h-16 w-16 rounded-full border-4 border-white object-cover"
                src="https://images.unsplash.com/photo-1580822656752-1f113169c5fe?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w0MzEzMzd8MHwxfHNlYXJjaHwxN3x8UGFzdHJpZXN8ZW58MHwwfHx8MTcxODkwNzUyN3ww&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1920"
                alt=""
                data-media='{"id":"UfY523zu--w","src":"unsplash","type":"image"}'

              />
              <div
                className="primary-color-bg primary-opacity-[20] absolute inset-0 z-0 h-20 w-20 rounded-full blur-lg bg-rose-600/20"
              ></div>
            </div>
            <div className="absolute bottom-6 right-12 md:right-64">
              <img
                className="testimonial-image dont-replace relative z-10 h-16 w-16 rounded-full border-4 border-white object-cover"
                src="https://images.unsplash.com/photo-1533893057902-dbc94f18f01f?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w0MzEzMzd8MHwxfHNlYXJjaHwxOHx8UGFzdHJpZXN8ZW58MHwwfHx8MTcxODkwNzUyN3ww&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1920"
                alt=""
                data-media='{"id":"Oy4tHyQqpMU","src":"unsplash","type":"image"}'

              />
              <div
                className="primary-color-bg primary-opacity-[20] absolute inset-0 z-0 h-20 w-20 rounded-full blur-lg bg-rose-600/20"
              ></div>
            </div>
            <div
              className="absolute left-1/2 top-28 flex -translate-x-1/2 items-center gap-2"
            >
              <h1 id="testimonial-number-estimate" className="text-3xl font-semibold">
                1,000+
              </h1>
              <p
                id="testimonial-number-qualifier"
                className="text-xl font-medium opacity-50"
              >
                5-Star Orders
              </p>
            </div>
          </div>
          <div className="hidden lg:block">
            <img
              className="dont-replace absolute right-0 top-0 z-0 w-[500px] xl:w-auto"
              src="https://landingsite-static-web-images.s3.us-east-2.amazonaws.com/template9/graphic.svg"
              alt=""
            />
            <div className="absolute right-20 top-10 xl:right-60">
              <img
                className="testimonial-image dont-replace relative z-10 h-16 w-16 rounded-full border-4 border-white object-cover xl:h-28 xl:w-28"
                src="https://images.unsplash.com/photo-1595526417596-c0fdbf75287b?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w0MzEzMzd8MHwxfHNlYXJjaHwxOXx8UGFzdHJpZXN8ZW58MHwwfHx8MTcxODkwNzUyN3ww&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1920"
                alt=""
                data-media='{"id":"71sp4JBYO-U","src":"unsplash","type":"image"}'

              />
              <div
                className="primary-color-bg primary-opacity-[20] absolute inset-0 z-0 h-20 w-20 rounded-full blur-lg xl:h-32 xl:w-32 bg-rose-600/20"
              ></div>
            </div>
            <div className="absolute right-96 top-44 xl:right-[550px]">
              <img
                className="testimonial-image dont-replace relative z-10 h-16 w-16 rounded-full border-4 border-white object-cover xl:h-28 xl:w-28"
                src="https://images.unsplash.com/photo-1598795164852-d2b5472d8bbb?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w0MzEzMzd8MHwxfHNlYXJjaHwyMHx8UGFzdHJpZXN8ZW58MHwwfHx8MTcxODkwNzUyN3ww&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1920"
                alt=""
                data-media='{"id":"TRMlUU49Mbs","src":"unsplash","type":"image"}'

              />
              <div
                className="primary-color-bg primary-opacity-[20] absolute inset-0 z-0 h-20 w-20 rounded-full blur-lg xl:h-32 xl:w-32 bg-rose-600/20"
              ></div>
            </div>
            <div className="absolute bottom-10 right-14 xl:bottom-0 xl:right-40">
              <img
                className="testimonial-image dont-replace relative z-10 h-16 w-16 rounded-full border-4 border-white object-cover xl:h-28 xl:w-28"
                src="https://images.unsplash.com/photo-1623334044303-241021148842?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w0MzEzMzd8MHwxfHNlYXJjaHwxfHxQYXN0cmllc3xlbnwwfDB8fHwxNzE4OTA3NTI3fDA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1920"
                alt=""
                data-media='{"id":"sqkXyyj4WdE","src":"unsplash","type":"image"}'

              />
              <div
                className="primary-color-bg primary-opacity-[20] absolute inset-0 z-0 h-20 w-20 rounded-full blur-lg xl:h-32 xl:w-32 bg-rose-600/20"
              ></div>
            </div>
            <div
              className="absolute right-20 top-40 flex rotate-6 items-center gap-2 lg:top-52 xl:right-28 xl:top-60 xl:block"
            >
              <h1
                id="testimonial-number-estimate2"
                className="text-3xl font-semibold lg:text-5xl xl:text-7xl"
              >
                1,000+
              </h1>
              <p
                id="testimonial-number-qualifier2"
                className="text-xl font-medium opacity-50 lg:text-2xl xl:text-3xl"
              >
                5-Star Orders
              </p>
            </div>
          </div>
        </section>
      </body>
    </>);
};

export default App;
