import { motion } from 'framer-motion';

const aboutItems = [
  {
    label: "Projects made",
    number: 7,
  },
  {
    label: "Technologies used",
    number: 15,
  },
];
const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up flex">
        <div>
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-lg md:max-w-[60ch]">
            Hi! I'm <strong>Akash</strong>, a sophomore studying{" "}
            <strong>Computer Science & Engineering</strong> at{" "}
            <strong>Greater Noida Institute of Technology, Greater Noida</strong>
            .With a strong base in fundamentals of computer science, I'm a{" "}
            <strong>MERN </strong>
            stack developer passionate about building responsive web
            applications that combine functionality with modern design. I'm also
            exploring my interest in
            <strong> DevOps</strong> and enjoy creating scalable solutions that
            leave an impact !
          </p>
          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, index) => (
              <div key={index}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl">
                    {number}
                  </span>
                  <span className="text-sky-400 font-semibold md:text-3xl">
                    +
                  </span>
                </div>
                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))}
            {/* <div
              className="ml-auto w-24">hello</div>
            <img
              src="/logo.svg"
              alt="logo"
              width={30}
              height={30}
              className="ml-auto md:w-[40px] md:h-[40px]"
            /> */}

          </div>
        </div>
        <div className='flex flex-col items-center justify-center pl-16'>
          <div className="relative">
            <img src='/akash_kumar.jpg'
              alt="Akash kumar"
              width="192"
              height="192"
              priority={true}
              // quality={90}
              className="h-48 w-48 rounded-full object-cover border-[0.35rem] border-white shadow-xl"/>
              <motion.span
            className="text-3xl absolute bottom-2 right-2"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            🎯
          </motion.span>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default About;
