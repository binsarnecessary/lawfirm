export const site = {
  name: "Adhikara Law",
  logo: "⚖️",
  whatsapp: "6281234567890", // TODO: ganti nomor asli
  waGreeting: "Halo Adhikara Law, saya ingin konsultasi hukum.",
  address: "Menara Adhikara Lt. 12, Jl. Sudirman Kav. 50, Jakarta Pusat",
  hours: "Senin–Jumat, 09.00 – 18.00 WIB",
};

export const waLink = (t: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(t)}`;

export const nav = {
  links: [
    { href: "#praktik", label: "Bidang Praktik" },
    { href: "#tentang", label: "Tentang" },
    { href: "#tim", label: "Tim" },
    { href: "#faq", label: "FAQ" },
  ],
  cta: { href: "#konsultasi", label: "Konsultasi Gratis" },
};

export const footer = {
  about:
    "Firma hukum dengan advokat berpengalaman di bidang korporasi, litigasi, dan legal compliance. Integritas di atas segalanya.",
  columns: [
    {
      title: "Firma",
      links: [
        { href: "#praktik", label: "Bidang Praktik" },
        { href: "#tim", label: "Tim Advokat" },
        { href: "#tentang", label: "Tentang Kami" },
        { href: "#faq", label: "FAQ" },
      ],
    },
    {
      title: "Hubungi",
      links: [
        { href: "https://wa.me/6281234567890", label: "WhatsApp" },
        { href: "#", label: "Email" },
        { href: "#", label: "LinkedIn" },
      ],
    },
  ],
};

export type Field = { id: string; label: string; placeholder: string; textarea?: boolean };

export const form = {
  fields: [
    { id: "nama", label: "Nama", placeholder: "Nama Anda / perusahaan" },
    { id: "bidang", label: "Bidang Hukum", placeholder: "cth: sengketa kontrak, pendirian PT" },
    { id: "pesan", label: "Ringkasan Perkara", placeholder: "Jelaskan singkat kebutuhan hukum Anda (kerahasiaan terjaga)...", textarea: true },
  ] as Field[],
  cta: "Ajukan Konsultasi",
  buildMessage: (v: Record<string, string>) =>
    `Halo Adhikara Law. Saya ${v.nama ?? ""}, ingin konsultasi terkait ${v.bidang ?? ""}. ${v.pesan ?? ""}`,
};
