export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://tacticaldev.cl/#organization",
        name: "TacticalDev Engineering Group",
        url: "https://tacticaldev.cl",
        logo: "https://tacticaldev.cl/logoTD.webp",
        email: "info@tacticaldev.cl",
        telephone: "+56984656126",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Santiago",
          postalCode: "8300000",
          addressCountry: "CL",
        },
        sameAs: ["https://x.com/tacticaldevspa"],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+56984656126",
          contactType: "sales",
          availableLanguage: "Spanish",
          areaServed: "CL",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://tacticaldev.cl/#website",
        url: "https://tacticaldev.cl",
        name: "TacticalDev",
        publisher: { "@id": "https://tacticaldev.cl/#organization" },
        inLanguage: "es-CL",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
