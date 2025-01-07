import { ButtonPrimary } from "./Button";
import ProjectCard from "./ProjectCard";

const works = [
  {
    id: 1,
    imgSrc: "/project-1.png",
    title: "Co-Code : Real-time Collaborative Code Editor",
    tags: ["MERN", "TailwindCSS", "Redux Toolkit", "Socket.IO"],
    projectLink: "https://co-code.onrender.com",
  },
  {
    id: 2,
    imgSrc: "/project-2.png",
    title: "Team-UP : Video Calling website made with MERN",
    tags: ["ReactJS", "Node.js", "Socket.IO", "WebRTC"],
    projectLink: "https://team-up-7hbl.onrender.com",
  },
  {
    id: 3,
    imgSrc: "/project-3.png",
    title: "Urban Sole : Online Shoe Store with razorpay gateway",
    tags: ["MERN", "TailwindCSS", "JWT", "Redux", "MVC"],
    projectLink: "https://urbansole-l7rr.onrender.com",
  },
];

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container">
        <h2 className="headline-2 mb-8">My portfolio highlights</h2>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map((work, index) => (
            <ProjectCard
              classes={"reveal-up"}
              key={index}
              imgSrc={work.imgSrc}
              id={work.id}
              title={work.title}
              tags={work.tags}
              projectLink={work.projectLink}
            />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <ButtonPrimary
            href={"/projects"}
            label={"View all projects"}
            icon="arrow_right_alt"
          />
        </div>
      </div>
    </section>
  );
};

export default Work;
