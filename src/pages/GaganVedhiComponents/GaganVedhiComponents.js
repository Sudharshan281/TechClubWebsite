import React from "react";
import styles from "./GaganVedhiComponents.module.css";
import Activities from "./Activities";
import { motion } from "framer-motion";

function GaganVedhiComponents() {
  //constants for links
  const email = "astronomyclub@iittp.ac.in";
  const discord = "https://discord.com/invite/7nqZBQX9";
  const linkedin = "https://www.linkedin.com/in/gagan-vedhi-iitt-129314244/";
  const instagram = "https://www.instagram.com/astroclubiitt/";
  const github = "https://github.com/astroclubiitt";
  const facebook =
    "https://www.facebook.com/Gagan-Vedhi-114387885028659/?ref=page_internal";

  return (
    <>
      {/* Header */}

      <div className={`${styles.big}`}>
        <div className={`bg-black ${styles.starsContainer}`}>
          <div className={styles.header1}>
            <img
              src="./gv_image/gv-removebg-preview.png"
              className="animate-pulse h-[34vh] lg:w-[20vw] relative rounded md:top-[4vh] -left-[2vw]"
              alt="logo"
            />
            <div className={styles.textBox}>
              <h1 className={styles.heading1}>GAGAN VEDHI</h1>
            </div>
          </div>
          <div id={styles.stars}></div>
          <div id={styles.stars2}></div>
          <div id={styles.stars3}></div>
        </div>

        {/* Description */}

        <div className={styles.desc}>
          <div className={`${styles.box}`}>
            <div
              className={`${styles.titleContainer} ${styles.gazingcontainer}`}
            >
              <div className={styles.titleWords}>
                <div className={`${styles.title1} ${styles.gazingtitle1}`}>
                  <h1 className={`${styles.title2} ${styles.gazing}`}>
                    Gazing beyond our world with Gagan Vedhi
                  </h1>
                </div>
              </div>
            </div>

            <p className=" text-black object-contain rounded-xl font-medium bold h-[75vh] w-[45vw] overflow-auto px-10 color-white bg-white py-8 my-16 ">
              Exploring the vast expanse of the universe and uncovering its
              secrets is a thrilling experience right?, and it becomes even more
              exciting when shared with like-minded individuals. That's what
              Gagan Vedhi, the Astronomy Club of our institute, is all about. We
              bring together a community of students who are passionate about
              exploring the mysteries of the cosmos and learning more about the
              universe. From stargazing sessions to lectures on the latest space
              discoveries, we have something for everyone. And that's not all,
              we also conduct technical events on computational astronomy which
              provides an opportunity for students to deepen their understanding
              and skills in the field. Join us on our journey as we gaze up at
              the stars and uncover the secrets of the cosmos.
            </p>
          </div>
        </div>
        <br />
        <br />

        {/* About Us */}

        <div className={`about-col ${styles.aboutc}`}>
          <div className={`${styles.titleContainer} ${styles.aboutcontainer}`}>
            <div className={styles.titleWords}>
              <div className={styles.title1}>
                <h1 className={`${styles.title2} ${styles.aboutUS}`}>
                  About Us
                </h1>
              </div>
            </div>
          </div>
          <div
            className={`${styles.aboutcont} flex flex-row justify-around content-around gap-8`}
          >
            <div className="flex flex-col md:ml-[10vh] md:rounded-3xl md:border-2 max-w-2xl border-cyan-500 w-1/2 overflow-auto bg-white">
              <h2 className="flex flex-col justify-center m-auto font-bold py-3 justify-self-center">
                History
              </h2>
              <p className=" text-black  font-medium md:text-lg bold text-left md:px-8 md:py-3 overflow-auto md:tracking-wide color-white">
                Gagan Vedhi, is a community of astronomy enthusiasts who are
                passionate about exploring the mysteries of the universe. The
                club was founded 6 years ago by Anup Kulkarni with the name
                "Gagan Vedhi" which means "Aimed at Sky" and as justified by its
                name it focuses on developing interest in astronomy among
                students and provide a platform of discussion to individuals who
                already got lost in the vastness of Astronomy.Since its
                formation, the club has organized diverse activities and
                collaborated with numerous organizations. Our commitment to
                creating memorable experiences and fostering a vibrant community
                continues unwaveringly.{" "}
              </p>
            </div>
            <div className="flex flex-col w-1/2 md:mr-[10vh] md:rounded-3xl md:border-2 border-cyan-500 overflow-auto bg-white">
              <h2 className="color-yellow font-bold mt-2 md:py-3">
                Motivation
              </h2>
              <p className="text-black text-left font-medium px-12 py-8 tracking-widest md:text-xl">
                The club's motivation is to create a platform for students where
                they can come together to explore the mysteries of the universe.
                The Club Aims to establish a strong community of Astrophiles to
                create a great memory among its members.
              </p>
            </div>
          </div>
          <br />

          {/* Achievements and Activities*/}

          <div
            className={`${styles.titleContainer} ${styles.achievecontainer}`}
          >
            <div className={styles.titleWords}>
              <div className={`${styles.title1} ${styles.achievetitle1}`}>
                <h1 className={`${styles.title2} ${styles.achieve}`}>
                  {" "}
                  Achievements
                </h1>
              </div>
            </div>
          </div>
          <br />
          <div className={styles.wrapper}>
            <div className={styles.centreLine}>
              <a href="#" className={styles.scrollIcon}>
                {" "}
                <i className={`animate-bounce fas fa-caret-up`}></i>
              </a>
            </div>
            <div className={`${styles.Row} ${styles.Row_1}`}>
              <section>
                <i className={`${styles.icon} fas fa-home`}></i>
                <div className={styles.details}>
                  <motion.h2
                    className={styles.Title}
                    style={{ color: "black" }}
                    initial={{ x: "-3rem", opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 2,
                      type: "spring",
                    }}
                  >
                    Shaastra- Cosmic Innovation Challenge
                  </motion.h2>{" "}
                </div>
                <p>
                  Second Prize by Team of Arpit and Manas among 163
                  registrations from various colleges. Received Prize money
                  worth Rs. 10,000/- .
                </p>
                <div className={styles.bottom}>
                  <a href="!#" alt="" style={{ pointerEvents: "none" }}>
                    {" "}
                    Read more
                  </a>
                  <i>- GaganVedhi</i>
                </div>
              </section>
            </div>

            {/* <div className={`${styles.Row} ${styles.Row_2}`}>
              <section>
                <i className={`${styles.icon} hover:animate-spin fas fa-star`}></i>

                <div className={styles.details}>
                  <motion.h2
                  className={styles.Title}
                  style={{color: 'black'}}
                    initial={{x: "+3rem",opacity:0}}
                    whileInView={{x:0,opacity:1}}
                    transition={{
                        duration: 2,
                        type: "spring"
                    }}
                    >Regional Science Centre Trip</motion.h2>
                </div>
                <p>
                  A three-hour trip to RSC of Tirupati for a sky-gazing session
                </p>
                <div className={styles.bottom}>
                  <a href="!#" alt="" style={{pointerEvents: 'none'}}>
                    {" "}
                    Read more
                  </a>
                  <i>- GaganVedhi</i>
                </div>
              </section>
            </div> */}

            {/* <div className={`${styles.Row} ${styles.Row_1}`}>
              <section>
                <i className={`${styles.icon} hover:animate-spin fas fa-paper-plane`}></i>
                <div className={styles.details}>
                  <motion.h2
                  className={styles.Title}
                  style={{color: 'black'}}
                    initial={{x: "-3rem",opacity:0}}
                    whileInView={{x:0,opacity:1}}
                    transition={{
                        duration: 2,
                        type: "spring"
                    }}
                    >Athereum</motion.h2>
                </div>
                <p>
                  A Joint fest organized by Astronomy Clubs of IIT and IISER
                  Tirupati in which many competitions were conducted..
                </p>
                <div className={styles.bottom}>
                  <a href="!#" alt="" style={{pointerEvents: 'none'}}>
                    {" "}
                    Read more
                  </a>
                  <i>- GaganVedhi</i>
                </div>
              </section>
            </div> */}

            {/* <div className={`${styles.Row} ${styles.Row_2}`}>
              <section>
                <i className={`${styles.icon} hover:animate-spin fas fa-solid fa-rocket`}></i>
                <div className={styles.details}>
                  <motion.h2
                  className={styles.Title}
                  style={{color: 'black'}}
                    initial={{x: "+3rem",opacity:0}}
                    whileInView={{x:0,opacity:1}}
                    transition={{
                        duration: 2,
                        type: "spring"
                    }}
                    >LIGO Workshop </motion.h2>
                </div>
                <p>
                  A two-day Offline workshop on Gravitational Waves Detection by
                  Dr. Apratim and Dr. Suresh from IUCAA Pune. It had received
                  huge participation from IIT and IISER Tirupati. The first day
                  was held at IISER, and the second day at IIT.
                </p>
                <div className={styles.bottom}>
                  <a href="!#" alt="" style={{pointerEvents: 'none'}}>
                    {" "}
                    Read more
                  </a>
                  <i>- GaganVedhi</i>
                </div>
              </section>
            </div> */}
          </div>
          <br />

          <Activities />

          {/* Team */}

          <div className={styles.main}>
            <div
              className={`${styles.titleContainer} ${styles.aboutcontainer}`}
            >
              <div className={styles.titleWords}>
                <div className={styles.title1}>
                  <h1 className={`${styles.title2} ${styles.clubHead}`}>
                    {" "}
                    Club heads
                  </h1>
                </div>
              </div>
            </div>
            <div className={styles.container}>
              <div className={styles.card}>
                <div className={styles.imgBx}>
                  <img src="./gv_image/manas1.jpg" alt="Manas Poddar" />
                </div>
                <div className={styles.content}>
                  <h2 className={styles.teamHeading1}>Manas Poddar</h2>
                  <h3 className={styles.teamHeading1}>Head</h3>
                  <p className="font-semibold">
                    3rd yr Chemical Engineering student at IIT Tirupati.
                  </p>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.imgBx}>
                  <img src="./gv_image/pranav.jpg" alt="Pranav Sutar" />
                </div>
                <div className={styles.content}>
                  <h2 className={styles.teamHeading2}>Pranav Sutar</h2>
                  <h3 className={styles.teamHeading2}>Mentor</h3>
                  <p className="font-semibold ">
                    4th yr Computer Science and Engineering student at IIT
                    Tirupati.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <br />

          {/* Footer */}

          <footer
            className={`bg-black text-center text-white ${styles.mainFooter}`}
          >
            <div className="container md:pt-9 ">
              <div className="md:mb-9 flex justify-center">
                <a
                  href={facebook}
                  className={`${styles.foot} mr-10 text-neutral-800 dark:text-neutral rounded border-1 hover:bg-blue-900 p-1 hover:rounded-md`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 hover:fill-white p-0"
                    fill="white"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
                <a
                  href={discord}
                  className={` ${styles.foot} mr-10 text-neutral-800 dark:text-neutral-200 rounded hover:bg-blue-600 border-1 p-1 hover:rounded-md`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="23"
                    fill="white"
                    className="bi bi-discord hover:fill-white "
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
                  </svg>
                </a>
                <a
                  href={email}
                  className={` ${styles.foot} mr-10 text-neutral-800 dark:text-neutral-200 rounded border-1 p-1 hover:bg-white hover:rounded-md`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 hover:fill-red-500"
                    fill="white"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href={instagram}
                  className={` ${styles.foot} mr-10 text-neutral-800 dark:text-neutral-200 rounded border-1 p-1 hover:bg-white hover:rounded-md`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 hover:fill-pink-600"
                    fill="white"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href={linkedin}
                  className={` ${styles.foot} mr-10 text-neutral-800 dark:text-neutral-200 rounded border-1 p-1 hover:bg-blue-600 hover:rounded-md`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 hover:fill-white"
                    fill="white"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </a>
                <a
                  href={github}
                  className={` ${styles.foot} text-neutral-800 dark:text-neutral-200 rounded border-1 p-1 hover:bg-white hover:rounded-md`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 hover:fill-black"
                    fill="white"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* <!--Copyright section--> */}

            <div className="bg-black p-4 text-center text-neutral-8 00 dark:bg-neutral-700 dark:text-neutral-200">
              © 2023 Copyright:
              <a
                className="text-neutral-600 dark:text-neutral-400"
                href="/"
                style={{ pointerEvents: "none" }}
              >
                <span> Gagan Vedhi </span>
              </a>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default GaganVedhiComponents;
