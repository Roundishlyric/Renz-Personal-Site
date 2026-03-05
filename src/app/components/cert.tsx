import React, { memo, useMemo, useRef } from "react";
import { Card } from "./ui/card";

type Certification = {
  name: string;
  issuer: string;
  dateLabel: string;
  dateTime?: string;
  credlyUrl?: string;
  badgeImgUrl?: string;
};

const FALLBACK = {
  cisco: "/images/cis.png",
  certiport: "/images/cert.png",
} as const;

const certifications: Certification[] = [
  {
    name: "CyberOps Associate",
    issuer: "Cisco Networking Academy",
    dateLabel: "July 2025",
    dateTime: "2025-07",
    credlyUrl:
      "https://www.credly.com/badges/9fa89645-16a5-4e7e-8edc-23a33257f20b/public_url",
    badgeImgUrl:
      "https://images.credly.com/size/220x220/images/53f37f83-04a1-4935-9b1e-21a99cc6e1b2/CyberOpsAssoc.png",
  },
  {
    name: "Cisco Certified Support Technician Networking (CCST Networking) - Lifetime",
    issuer: "Certiport",
    dateLabel: "March 2025",
    dateTime: "2025-03",
    credlyUrl:
      "https://www.credly.com/badges/f67638d0-fe60-4171-88ed-26330681b85d/public_url",
    badgeImgUrl:
      "https://images.credly.com/size/340x340/images/57d88bab-75be-4400-a2fd-dbfa8e2b056e/image.png",
  },
  {
    name: "CCNA: Enterprise Networking, Security, and Automation",
    issuer: "Cisco Networking Academy",
    dateLabel: "November 2024",
    dateTime: "2024-11",
    credlyUrl:
      "https://www.credly.com/badges/01b6d082-aede-46b1-a14c-ac30c3b3a9e7/public_url",
    badgeImgUrl:
      "https://images.credly.com/size/110x110/images/0a6d331e-8abf-4272-a949-33f754569a76/CCNAENSA__1_.png",
  },
  {
    name: "CCNA: Switching, Routing, and Wireless Essentials",
    issuer: "Cisco Networking Academy",
    dateLabel: "July 2024",
    dateTime: "2024-07",
    credlyUrl:
      "https://www.credly.com/badges/3ae0ee6e-cc28-4cfc-b862-618fc2128780/public_url",
    badgeImgUrl:
      "https://images.credly.com/size/110x110/images/f4ccdba9-dd65-4349-baad-8f05df116443/CCNASRWE__1_.png",
  },
  {
    name: "Introduction to Networks",
    issuer: "Cisco Networking Academy",
    dateLabel: "April 2024",
    dateTime: "2024-04",
    credlyUrl:
      "https://www.credly.com/badges/1840edb8-bf4c-4ae2-b562-37512737049c/public_url",
    badgeImgUrl:
      "https://images.credly.com/size/110x110/images/70d71df5-f3dc-4380-9b9d-f22513a70417/CCNAITN__1_.png",
  },
  {
    name: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    dateLabel: "March 2024",
    dateTime: "2024-03",
    credlyUrl:
      "https://www.credly.com/badges/ca76c119-b63f-401b-a68a-912c7ac8cdca/public_url",
    badgeImgUrl:
      "https://images.credly.com/size/110x110/images/af8c6b4e-fc31-47c4-8dcb-eb7a2065dc5b/I2CS__1_.png",
  },
  {
    name: "IT Specialist - Java",
    issuer: "Certiport",
    dateLabel: "July 2023",
    dateTime: "2023-07",
    credlyUrl:
      "https://www.credly.com/badges/6a75b8e2-9147-40f5-9744-8bd64f3da44b/public_url",
    badgeImgUrl:
      "https://images.credly.com/size/110x110/images/2210b6fe-0eda-415a-8aba-6c1400566728/ITS-Badges_Java_1200px.png",
  },
];

function getIssuerKind(issuer: string) {
  return issuer.toLowerCase().includes("certiport") ? "certiport" : "cisco";
}

type IconProps = React.SVGProps<SVGSVGElement>;

const ShieldCheckIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M12 2.5l7 3.8v7.3c0 4.6-3.2 8.6-7 9.9-3.8-1.3-7-5.3-7-9.9V6.3l7-3.8z" stroke="currentColor" strokeWidth={1.6} />
    <path d="M8.5 12.3l2.2 2.2 4.8-5.2" stroke="currentColor" strokeWidth={1.8} />
  </svg>
);

const ExternalLinkIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M14 5h5v5" stroke="currentColor" strokeWidth={1.8} />
    <path d="M10 14L19 5" stroke="currentColor" strokeWidth={1.8} />
    <path d="M19 14.5V19a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4.5" stroke="currentColor" strokeWidth={1.6} />
  </svg>
);

const CertCard = memo(function CertCard({ cert }: { cert: Certification }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const issuerKind = getIssuerKind(cert.issuer);
  const hasCredly = Boolean(cert.credlyUrl);
  const imgSrc = cert.badgeImgUrl ?? FALLBACK[issuerKind];

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    cardRef.current?.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    cardRef.current?.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }

  return (
    <Card
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="
        group relative overflow-hidden
        rounded-2xl
        border-2 border-transparent
        bg-white p-6 text-black
        transition-shadow
        hover:border-red-700
        hover:shadow-2xl
      "
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(280px circle at var(--mx) var(--my), rgba(255,0,0,0.15), transparent 60%)",
        }}
      />

      <div className="flex items-start gap-5">
        <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-xl border bg-white shadow-[0_0_20px_rgba(255,0,0,0.12)]">
          <img
            src={imgSrc}
            alt={cert.name}
            className="h-16 w-16 object-contain"
          />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <h4 className="text-xl font-semibold leading-snug md:text-2xl">
              {cert.name}
            </h4>

            {hasCredly && (
              <span className="inline-flex items-center gap-2 rounded-full bg-red-700 px-3 py-1 text-xs font-semibold text-white">
                <ShieldCheckIcon className="h-4 w-4" />
                Verified
              </span>
            )}
          </div>

          <p className="mt-1 font-medium text-red-700">
            {cert.issuer}
          </p>

          <div className="mt-2 pr-40">
            <time className="text-sm text-gray-500">
              {cert.dateLabel}
            </time>
          </div>
        </div>
      </div>

      {hasCredly && (
        <a
          href={cert.credlyUrl}
          target="_blank"
          rel="noreferrer"
          className="
            absolute bottom-5 right-5
            inline-flex items-center gap-2
            rounded-xl
            bg-red-700 px-4 py-2
            text-sm font-semibold text-white
            transition
            hover:bg-red-800
            hover:shadow-lg
          "
        >
          Verify
          <ExternalLinkIcon className="h-4 w-4" />
        </a>
      )}
    </Card>
  );
});

export function Cert() {
  const items = useMemo(() => certifications, []);

  return (
    <section id="cert" className="relative overflow-hidden bg-black py-24 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-red-600/10 blur-3xl" />
        <div className="absolute -bottom-44 right-10 h-80 w-80 rounded-full bg-red-600/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,0,0,0.10),transparent_55%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 xl:px-0">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl text-white md:text-5xl">
            Badges and Certifications
          </h2>
          <div className="mx-auto mb-4 h-1 w-24 bg-red-700"></div>
          <p className="text-lg text-gray-300">Recognitions that support my direction in networking, software, and cybersecurity</p>
        </div>

        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2">
          {items.map((cert) => (
            <CertCard
              key={cert.credlyUrl ?? cert.name}
              cert={cert}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
