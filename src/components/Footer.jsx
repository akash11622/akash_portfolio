import { ButtonPrimary } from "./Button";
import FooterText from "./FooterText";

const sitemap = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Contact me",
    href: "#contact",
  },
];

const socials = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/akash-kumar-ab2ba5219",
  },
  {
    label: "Twitter X",
    href: "https://x.com/akash_541",
  },
  {
    label: "Leetcode",
    href: "https://leetcode.com/u/akash_5414/",
  },
];
const Footer = () => {
  return (
    <footer className="section pb-8">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2 ">
          <div className="mb-10">
            <h2 className="headline-1 mb-8 lg:max-w-[20ch] reveal-up">
              Let&apos;s work together today!
            </h2>
            <ButtonPrimary
              href={"mailto:mr.akash5414@gmail.com "}
              label={"Get in touch"}
              icon="chevron_right"
              classes={"reveal-up"}
            />
          </div>
          <div className="grid grid-cols-2 gap-4 lg:pl-20">
            <div>
              <p className="mb-2 reveal-up">Sitemap</p>

              <ul>
                {sitemap.map(({ label, href }, index) => (
                  <li key={index}>
                    <a
                      href={href}
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-400 hover:underline reveal-up"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="pb-2 reveal-up">Social</p>
              <ul>
                {socials.map(({ label, href }, index) => (
                  <li key={index}>
                    <a
                      href={href}
                      target="_blank"
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-400 hover:underline reveal-up"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <FooterText/>
        </div>
    </footer>
  );
};

export default Footer;
