import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";
const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid  md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="code and coffee" />
          <p className="text-slate-600 mt-8 leading-loose">
            Hello There, I am undergraduate at IIIT Bhopal (graduating in 2025)
            with a strong foundation in data structure and algorithms and full
            stack web development. I have hands-on experience in building robust
            and scalable application using technologies like Next-js React,
            Tailwind ,Prisma, MongoDB, java, spring boot and microservices
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
