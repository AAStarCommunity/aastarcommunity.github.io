import React from "react";
// Image and Link are now standard HTML or handled internally
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  SiGithub,
  SiTelegram,
  SiX,
  SiMedium,
} from "react-icons/si";
import SubdomainLinks from "@/components/subdomain-links";

const globalData = {
  header: {
    icon: { name: "BiStar", color: "text-orange-500" },
    name: "AAStar - Build Decentralized Infra for Community.",
    nav: [
      { href: "#home", label: "Home" },
      { href: "#about", label: "About" },
      {
        href: "https://www.aastar.io/research",
        label: "Research",
        openSite: true,
      },
      { href: "https://docs.aastar.io", label: "Docs", openSite: true },
      {
        href: "https://github.com/AAStarCommunity",
        label: "Github",
        openSite: true,
      },
    ],
  },
  footer: {
    social: {
      telegram: "https://t.me/Account_Abstraction_Community",
      twitter: "https://x.com/aaStarCommunity",
      medium: "https://medium.com/@AAStarCommunity",
      github: "https://github.com/AAStarCommunity/aastarcommunity.github.io",
    },
  },
};

const aboutContent = `
## What is AAStar?

<h3>AAStar^ is a subgroup of Plancker^ community. We launched AAStar after a conversation with Vitalik at Zuzalu, Montenegro in 2023.</h3>

<h3>We will commit to the Ethereum for long term contribution and construction, focus on Account Abstraction and relate infra.</h3>

<h3>**Mission**: Empower Community, Unleash Humanity.</h3>

<h3>**Vision**: A better digital future for humanity.</h3>

<h3>**Value**: A Gift for Human from AAStar Hackers.</h3>

## What are we building?

*   **SuperPaymaster**: A simple gas payment framework utilizing ERC4337 and EIP7702.
*   **AirAccount**: An easy interface for your Ethereum account life cycle.
*   **Comet ENS**: A meaningful name for your addresses in Ethereum.
*   **[More...](https://www.aastar.io/#research)**
`;

const focusItems = [
  {
    title: "Credential Binding🔗 ",
    text: "Bind any credential: Web2 accounts, EOAs, Email, SMS.",
  },
  {
    title: "Secure Account Generation🛡️",
    text: "TEE-based encrypted account generation and management on ARM.",
  },
  {
    title: "Dual Verification 👆 ",
    text: "Fingerprint and TEE-based secondary verification with enhanced AI security checks.",
  },
  {
    title: "Full Account Lifecycle Management♻️ ",
    text: "AA-based management: social recovery, will execution, daily limits, etc.",
  },
  {
    title: "Gasless & Seamless Transactions⚡",
    text: "Intuitive Web2-like experiences (payments, tips, likes, NFTs) powered by AA.",
  },
  {
    title: "True Decentralization🌐",
    text: "Decentralized accounts with fingerprint + TEE + secure computation validators for user data sovereignty.",
  },
  {
    title: "Ultra Security🔒",
    text: "Layered security solutions tailored for different user needs.",
  },
  {
    title: "dApps Portal🚪",
    text: "Curated list of dApps supporting EIP1271 and experimental EIP7702 applications.",
  },
];

const problemSolutionContent = `
## What Problems Do We Solve?

The first barrier to mass adoption of blockchain: simple, secure, and user-friendly crypto accounts.
The second is motivation: why should I use blockchain? We choose the answer: DApps and create infra for DApps.

## Who Are Our Core Users?

1.  Developers, early adopters embracing crypto.
2.  Early dApp users.
3.  Mass users after dApp popularization: business people, KOLs, white-collar workers, content creators, delivery drivers, students, etc.
`;

const teamContent = `
## Teams

AAStar team is committed to providing AA-compatible public goods components for Ethereum.

We are trying to answer this question: How can we improve Ethereum accounts to make mass adoption possible?

* Notion team profile: [Team Profile](https://www.notion.so/planckerdao/Team-Profile-2dc80086797a4ed9ab940e922b133720)
* GitHub teams: [People](https://github.com/orgs/AAStarCommunity/people)
* Research articles: [Research list](https://www.notion.so/planckerdao/Research-list-57cd0b8612ad42a3870f157017cfb15d) | [AAStar Working Docs](https://www.notion.so/planckerdao/AAStar-Working-Docs-e8c9419d8b6b4e38a6022e52b8e1a9b4)
`;

const linksContent = `
## More Information & Official Docs

*   GitHub: [AAStar](https://github.com/aaStarCommunity)
*   Website: [AAStary.io](https://www.aastar.io)
*   Telegram: [AAStar Community](https://t.me/Account_Abstraction_Community)
*   Youtube: [AAStar Channel](https://www.youtube.com/channel/UCc9ingOIgPXdV7UyCMEsoEg)
*   Bilibili: [AAStar Bilibili](https://space.bilibili.com/3546672630074343/)
*   Google Drive: [AAStar Drive](https://drive.google.com/drive/folders/1su9SU3OedZmhnqziYZK8o7e_Cyr7MCBt?usp=sharing)
*   Media Kit(logos): [Logos Drive](https://drive.google.com/drive/folders/1yoxcnmkVMUaLKzfmv-YRv_QucEu7Dh9X?usp=sharing)
*   Twitter: [AAStar](https://twitter.com/aaStarCommunity)
*   Medium: [AAStar Medium](https://medium.com/@AAStarCommunity)

## Operation Contact

*   Telegram channel: [AAStar Community](https://t.me/Account_Abstraction_Community)
`;

const simpleMarkdownToHtml = (md: string): string => {
  md = md.replace(
    /^## (.*$)/gim,
    '<h2 class="text-2xl font-semibold text-blue-800 mb-4 mt-6">$1</h2>',
  );
  md = md.replace(
    /\*\*(.*?)\*\*/gim,
    '<strong class="font-semibold">$1</strong>',
  );
  md = md.replace(/^(\s*\*.*?)(\*\*.*?\*\*)/gim, "$1<strong>$2</strong>");
  md = md.replace(
    /\[(.*?)\]\((.*?)\)/gim,
    '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">$1</a>',
  );
  md = md.replace(/^\* (.*$)/gim, '<li class="ml-5 list-disc">$1</li>');
  md = md
    .split("\n\n")
    .map((p) => p.trim())
    .filter((p) => p.length > 0)
    .map(
      (p) =>
        `<p class="mb-4">${p.replace(/^\s*\*\s/, "").replace(/\n/g, "<br />")}</p>`,
    )
    .join("");
  md = md.replace(/(<br\s*\/?>\s*){2,}/gi, "<br />");
  return md;
};

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center mx-auto px-4">
        <a href="#home" className="mr-6 flex items-center space-x-2">
          <img
            src="https://raw.githubusercontent.com/jhfnetboy/MarkDownImg/main/img/202505031325963.png"
            alt="AAStar Logo"
            width={32}
            height={32}
            className="h-8 w-8"
          />
          <span className="font-bold sm:inline-block text-blue-800">
            {globalData.header.name}
          </span>
        </a>
        <NavigationMenu className="hidden md:flex ml-auto">
          <NavigationMenuList>
            {globalData.header.nav.map((item) => (
              <NavigationMenuItem key={item.label}>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  asChild
                >
                  <a
                    href={item.href}
                    target={item.openSite ? "_blank" : undefined}
                    rel={item.openSite ? "noopener noreferrer" : undefined}
                  >
                    {item.label}
                  </a>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};

const Footer: React.FC = () => {
  const socialLinks = globalData.footer.social;
  return (
    <footer className="py-8 bg-blue-800 text-blue-100">
      <div className="container mx-auto text-center px-4">
        <div className="flex justify-center space-x-6 text-2xl mb-4">
          {socialLinks.github && (
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <SiGithub />
            </a>
          )}
          {socialLinks.twitter && (
            <a
              href={socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <SiX />
            </a>
          )}
          {socialLinks.telegram && (
            <a
              href={socialLinks.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <SiTelegram />
            </a>
          )}
          {socialLinks.medium && (
            <a
              href={socialLinks.medium}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <SiMedium />
            </a>
          )}
        </div>
        <p>
          &copy; {new Date().getFullYear()} AAStar Community. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

const HeroSection: React.FC = () => (
  <section
    id="home"
    className="py-20 md:py-32 bg-gradient-to-br from-blue-50 via-blue-100 to-white text-center"
  >
    <div className="container mx-auto px-4">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-800 mb-4">
        Empower Community, Unleash Humanity🍄
      </h1>
      <p className="text-xl md:text-2xl text-blue-700 mb-8">
        For a better human digital future!
      </p>
      <div className="space-x-4">
        <Button size="lg" asChild>
          <a href="#about">Learn More</a>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <a
            href={globalData.footer.social.telegram || "#"}
            target="_blank"
            rel="noopener noreferrer"
          >
            Join Telegram
          </a>
        </Button>
      </div>
    </div>
  </section>
);

interface ContentSectionProps {
  id?: string;
  title?: string;
  content: string;
  bgColor?: string;
}
const ContentSection: React.FC<ContentSectionProps> = ({
  id,
  title,
  content,
  bgColor = "bg-white",
}) => (
  <section id={id} className={`py-16 ${bgColor}`}>
    <div className="container mx-auto px-4 max-w-3xl">
      {title && (
        <h2 className="text-3xl font-semibold text-blue-800 text-center mb-8">
          {title}
        </h2>
      )}
      <div
        className="prose prose-blue max-w-none prose-li:list-disc prose-li:ml-5"
        dangerouslySetInnerHTML={{ __html: simpleMarkdownToHtml(content) }}
      />
    </div>
  </section>
);

interface FeaturesSectionProps {
  id?: string;
  title: string;
  items: Array<{ title: string; text: string; icon?: string }>;
  bgColor?: string;
}
const FeaturesSection: React.FC<FeaturesSectionProps> = ({
  id,
  title,
  items,
  bgColor = "bg-blue-50",
}) => (
  <section id={id} className={`py-16 ${bgColor}`}>
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-blue-700">
          {title}
        </h2>
        <Separator className="w-32 mx-auto mt-4 border-blue-300" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item, index) => (
          <Card
            key={index}
            className="shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg border border-gray-200 flex flex-col bg-white p-4"
          >
            <CardContent className="pt-2 flex-grow">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm">{item.text}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const ImagePlaceholder: React.FC<{ title: string; src: string }> = ({
  title,
  src,
}) => (
  <div className="container mx-auto py-16 px-4">
    <h2 className="text-3xl font-semibold text-blue-800 text-center mb-8">
      {title}
    </h2>
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-dashed border-blue-300 rounded-lg aspect-video flex items-center justify-center text-blue-500 font-semibold text-xl md:text-2xl text-center p-4 relative overflow-hidden min-h-[300px]">
      <img
        src={src}
        alt={title}
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
        loading="lazy"
      />
    </div>
    <p className="text-center text-gray-500 mt-2">
      We are forwarding to the Vision
    </p>
  </div>
);

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ContentSection id="about" content={aboutContent} bgColor="bg-white" />
        <FeaturesSection
          id="focus"
          title="Our Features"
          items={focusItems}
          bgColor="bg-blue-50"
        />
        <SubdomainLinks />
        <ImagePlaceholder
          title="Architecture Diagram"
          src="https://raw.githubusercontent.com/jhfnetboy/MarkDownImg/main/img/202505301531347.png"
        />
        <ContentSection
          id="problem"
          content={problemSolutionContent}
          bgColor="bg-white"
        />
        <ImagePlaceholder
          title="AirAccount Roadmap"
          src="https://raw.githubusercontent.com/jhfnetboy/MarkDownImg/main/img/202505301525779.png"
        />
        <ContentSection id="team" content={teamContent} bgColor="bg-blue-50" />
        <ContentSection id="links" content={linksContent} bgColor="bg-white" />
      </main>
      <Footer />
    </div>
  );
}
