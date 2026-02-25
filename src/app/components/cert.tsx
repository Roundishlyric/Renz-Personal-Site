import React from "react";
import { Card } from "./ui/card";

type Certification = {
  name: string;
  issuer: string;
  date: string;
  credlyUrl?: string; // profile/badge link
  credlyEmbedUrl?: string; // optional: Credly embed URL for badge image
};

const certifications: Certification[] = [
  {
    name: "CyberOps Associate",
    issuer: "Cisco Networking Academy",
    date: "July 2025",
    credlyUrl: "https://www.credly.com/badges/9fa89645-16a5-4e7e-8edc-23a33257f20b/public_url",
    credlyEmbedUrl: "https://images.credly.com/size/220x220/images/53f37f83-04a1-4935-9b1e-21a99cc6e1b2/CyberOpsAssoc.png",
  },
  {
    name: "Cisco Certified Support Technician Networking (CCST Networking) - Lifetime",
    issuer: "Certiport",
    date: "March 2025",
    // credlyUrl: "https://www.credly.com/badges/xxxx",
    // credlyEmbedUrl: "https://www.credly.com/embedded_badge/.../image",
  },
  {
    name: "CCNA: Enterprise Networking, Security, and Automation",
    issuer: "Cisco Networking Academy",
    date: "November 2024",
    // credlyUrl: "https://www.credly.com/badges/xxxx",
    // credlyEmbedUrl: "https://www.credly.com/embedded_badge/.../image",
  },
  {
    name: "CCNA: Switching, Routing, and Wireless Essentials",
    issuer: "Cisco Networking Academy",
    date: "July 2024",
    // credlyUrl: "https://www.credly.com/badges/xxxx",
    // credlyEmbedUrl: "https://www.credly.com/embedded_badge/.../image",
  },
  {
    name: "Introduction to Networks",
    issuer: "Cisco Networking Academy",
    date: "April 2024",
    // credlyUrl: "https://www.credly.com/badges/xxxx",
    // credlyEmbedUrl: "https://www.credly.com/embedded_badge/.../image",
  },
  {
    name: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "March 2024",
    // credlyUrl: "https://www.credly.com/badges/xxxx",
    // credlyEmbedUrl: "https://www.credly.com/embedded_badge/.../image",
  },
  {
    name: "IT Specialist - Java",
    issuer: "Certiport",
    date: "July 2023",
    // credlyUrl: "https://www.credly.com/badges/xxxx",
    // credlyEmbedUrl: "https://www.credly.com/embedded_badge/.../image",
  },
];

type IconProps = React.SVGProps<SVGSVGElement>;

function ShieldCheckIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 2.5l7 3.8v7.3c0 4.6-3.2 8.6-7 9.9-3.8-1.3-7-5.3-7-9.9V6.3l7-3.8z"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinejoin="round"
      />
      <path
        d="M8.5 12.3l2.2 2.2 4.8-5.2"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ExternalLinkIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M14 5h5v5"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 14L19 5"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 14.5V19a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4.5"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Credly badge images:
 * - Best: use Credly "Embed" image URL for each badge (credlyEmbedUrl).
 * - Fallback: issuer logo (Cisco/Certiport) if embed URL not provided.
 */
export function Cert() {
  return (
    <section
      id="cert"
      className="relative py-24 bg-black text-white overflow-hidden"
    >
      {/* subtle red glow accents (still only red/black/white) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-red-600/10 blur-3xl" />
        <div className="absolute -bottom-44 right-10 h-80 w-80 rounded-full bg-red-600/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,0,0,0.10),transparent_55%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 xl:px-0">
        {/* TITLE */}
        <div className="text-center mb-14">


          <h3 className="mt-5 text-4xl md:text-6xl font-bold tracking-tight">
            Badges and Certifications
          </h3>
          <div className="mt-4 mx-auto h-1 w-28 rounded bg-red-600" />

          <p className="mt-5 text-white/75 max-w-2xl mx-auto">
            Credly-verified credentials show a badge image and a verification
            link.
          </p>
        </div>

        {/* GRID (bigger panels: 1 col on small, 2 cols on desktop) */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-10">
          {certifications.map((cert, index) => {
            const isCertiport = cert.issuer.toLowerCase().includes("certiport");
            const hasCredly = Boolean(cert.credlyUrl);
            const hasBadgeImg = Boolean(cert.credlyEmbedUrl);

            const fallbackLogo = isCertiport ? "/images/cert.png" : "/images/cis.png";

            return (
              <Card
                key={index}
                className="
                  group relative overflow-hidden
                  p-8 md:p-10
                  rounded-3xl
                  bg-white text-black
                  border border-red-700/60
                  shadow-[0_20px_60px_rgba(0,0,0,0.45)]
                  transition-all duration-300
                  hover:-translate-y-2
                  hover:border-red-500
                  hover:shadow-[0_30px_90px_rgba(255,0,0,0.20)]
                  min-h-[200px]
                "
              >
                {/* top accent line */}
                <div className="absolute inset-x-0 top-0 h-1.5 bg-red-600" />

                <div className="flex items-start gap-6">
                  {/* BADGE IMAGE / LOGO */}
                  <div
                    className="
                      w-20 h-20 md:w-24 md:h-24 shrink-0
                      flex items-center justify-center
                      rounded-2xl
                      bg-white
                      border border-black/15
                      shadow-sm
                      overflow-hidden
                    "
                    title={hasBadgeImg ? "Credly badge image" : cert.issuer}
                  >
                    <img
                      src={hasBadgeImg ? (cert.credlyEmbedUrl as string) : fallbackLogo}
                      alt={hasBadgeImg ? `${cert.name} badge` : cert.issuer}
                      className="w-14 h-14 md:w-16 md:h-16 object-contain"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* TEXT */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <h4 className="text-xl md:text-2xl font-bold leading-snug">
                        {cert.name}
                      </h4>

                      {/* verification badge */}
                      {hasCredly ? (
                        <span
                          className="
                            inline-flex items-center gap-2
                            rounded-full border border-red-600/40
                            bg-black px-3 py-1.5
                            text-xs md:text-sm font-semibold text-white
                            whitespace-nowrap
                          "
                          title="Credly verification link available"
                        >
                          <ShieldCheckIcon className="h-4 w-4 md:h-5 md:w-5 text-white" />
                          Verified
                        </span>
                      ) : (
                        <span
                          className="
                            inline-flex items-center
                            rounded-full border border-black/15
                            bg-white px-3 py-1.5
                            text-xs md:text-sm font-medium text-black/60
                            whitespace-nowrap
                          "
                          title="Add a Credly link to show verification"
                        >
                          No link
                        </span>
                      )}
                    </div>

                    <p className="mt-3 text-red-600 text-base font-semibold">
                      {cert.issuer}
                    </p>

                    <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
                      <p className="text-black/70 text-base">{cert.date}</p>

                      {/* Credly verify button */}
                      {hasCredly ? (
                        <a
                          href={cert.credlyUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="
                            inline-flex items-center gap-2
                            rounded-2xl
                            bg-black px-5 py-3
                            text-base font-semibold text-white
                            border border-red-600/40
                            transition-all duration-200
                            hover:border-red-500
                            hover:shadow-[0_12px_38px_rgba(255,0,0,0.18)]
                            focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600
                          "
                          aria-label={`Verify ${cert.name} on Credly`}
                        >
                          Verify (Credly)
                          <ExternalLinkIcon className="h-5 w-5 text-white" />
                        </a>
                      ) : (
                        <span className="text-sm text-black/50">
                          Add <span className="font-semibold">credlyUrl</span> to enable verification
                        </span>
                      )}
                    </div>

                    {/* Optional hint if they forgot the badge image */}
                    {hasCredly && !hasBadgeImg ? (
                      <p className="mt-4 text-sm text-black/55">
                        Want the real badge image? Add{" "}
                        <span className="font-semibold">credlyEmbedUrl</span> from
                        Credly’s “Embed” options.
                      </p>
                    ) : null}
                  </div>
                </div>

                {/* subtle hover ring */}
                <div
                  className="
                    pointer-events-none absolute inset-0 rounded-3xl
                    ring-0 ring-red-600/0
                    group-hover:ring-2 group-hover:ring-red-600/30
                    transition
                  "
                />
              </Card>
            );
          })}
        </div>

        <div className="mt-10 text-center text-white/60 text-sm">
          Tip: For each badge, set <span className="text-white">credlyUrl</span>{" "}
          and optionally <span className="text-white">credlyEmbedUrl</span>.
        </div>
      </div>
    </section>
  );
}