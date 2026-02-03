import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const subdomains = {
  products: [
    {
      name: "AirAccount",
      link: "https://AirAccount.aastar.io",
      svg: "/airaccount.svg",
      description: "A simple interface for your Ethereum account life cycle.",
    },
    {
      name: "SuperPaymaster",
      link: "https://SuperPaymaster.aastar.io",
      svg: "/superpaymaster.svg",
      description:
        "A simple gas payment framework utilizing ERC4337 and EIP7702.",
    },
    {
      name: "CometENS",
      link: "https://CometENS.aastar.io",
      svg: "/cometens.svg",
      description: "A meaningful name for your addresses in Ethereum.",
    },
  ],
  tools: [
    {
      name: "Demo",
      link: "https://Demo.aastar.io",
      svg: "/demo.svg",
      description: "Explore the features of AAStar products.",
    },
    {
      name: "Faucet",
      link: "https://Faucet.aastar.io",
      svg: "/faucet.svg",
      description: "Get test tokens for development.",
    },
    {
      name: "Waiting-list",
      link: "https://waiting-list.aastar.io",
      svg: "/waiting-list.svg",
      description: "Join the waiting list for early access.",
    },
  ],
  infra: [
    {
      name: "Validator",
      link: "https://v1.aastar.io",
      svg: "/validator.svg",
      description:
        "A decentralized, permissionless infra to unti-compromise for your community TEE keepers.",
    },
    {
      name: "KMS",
      link: "https://kms.aastar.io",
      svg: "/kms.svg",
      description:
        "A decetralized, permissionless, community running, ARM hardware dependeant second credential TEE keeper.",
    },
    {
      name: "More...",
      link: "#",
      svg: "/more.svg",
      description: "More... is on building",
    },
  ],
};

const SubdomainLinks: React.FC = () => {
  return (
    <section id="products-and-tools" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-blue-700">
            Our Gifts for Human Digital Future
          </h2>
          <Separator className="w-32 mx-auto mt-4 border-blue-300" />
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-blue-800 mb-6">
            Products
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {subdomains.products.map((item) => (
              <a
                href={item.link}
                key={item.name}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg border border-gray-200 flex flex-col bg-white p-4 h-full">
                  <CardContent className="pt-2 flex-grow flex flex-col items-center">
                    <img
                      src={item.svg}
                      alt={item.name}
                      width={100}
                      height={55}
                      loading="lazy"
                    />
                    <h4 className="text-lg font-semibold text-blue-800 mt-4">
                      {item.name}
                    </h4>
                    <p className="text-gray-700 text-sm text-center mt-2">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-blue-800 mb-6">Tools</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subdomains.tools.map((item) => (
              <a
                href={item.link}
                key={item.name}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg border border-gray-200 flex flex-col bg-white p-4 h-full">
                  <CardContent className="pt-2 flex-grow flex flex-col items-center">
                    <img
                      src={item.svg}
                      alt={item.name}
                      width={100}
                      height={55}
                      loading="lazy"
                    />
                    <h4 className="text-lg font-semibold text-blue-800 mt-4">
                      {item.name}
                    </h4>
                    <p className="text-gray-700 text-sm text-center mt-2">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-blue-800 mb-6">Infra</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subdomains.infra.map((item) => (
              <a
                href={item.link}
                key={item.name}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg border border-gray-200 flex flex-col bg-white p-4 h-full">
                  <CardContent className="pt-2 flex-grow flex flex-col items-center">
                    <img
                      src={item.svg}
                      alt={item.name}
                      width={100}
                      height={55}
                      loading="lazy"
                    />
                    <h4 className="text-lg font-semibold text-blue-800 mt-4">
                      {item.name}
                    </h4>
                    <p className="text-gray-700 text-sm text-center mt-2">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubdomainLinks;
