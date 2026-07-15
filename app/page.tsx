import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

const practices = [
  { ic: "🏢", t: "Hukum Korporasi", d: "Pendirian badan usaha, merger & akuisisi, perjanjian komersial, dan corporate action." },
  { ic: "🏛️", t: "Litigasi & Sengketa", d: "Pendampingan perkara perdata, pidana, dan tata usaha negara di semua tingkat peradilan." },
  { ic: "📑", t: "Legal Compliance", d: "Audit kepatuhan, perizinan usaha, dan penyesuaian regulasi ketenagakerjaan." },
  { ic: "🤝", t: "Alternatif Penyelesaian", d: "Negosiasi, mediasi, dan arbitrase untuk penyelesaian sengketa yang efisien." },
  { ic: "🏠", t: "Properti & Pertanahan", d: "Due diligence, sengketa lahan, dan pendampingan transaksi properti." },
  { ic: "👨‍👩‍👧", t: "Hukum Keluarga", d: "Perjanjian pranikah, waris, dan pendampingan perceraian secara profesional." },
];

const stats = [
  ["250+", "Perkara Ditangani"],
  ["92%", "Tingkat Keberhasilan"],
  ["15+", "Tahun Pengalaman"],
  ["40+", "Klien Korporasi"],
];

const team = [
  { ava: "GA", name: "Dr. Gede Adhikara, S.H., M.H.", role: "Managing Partner", exp: "Korporasi & Arbitrase · 18 tahun" },
  { ava: "LP", name: "Larasati Puspa, S.H., LL.M.", role: "Senior Partner", exp: "Litigasi Komersial · 14 tahun" },
  { ava: "RW", name: "Raden Wicaksono, S.H.", role: "Partner", exp: "Compliance & Ketenagakerjaan · 11 tahun" },
];

const gallery = [
  { emoji: "⚖️", bg: "from-[#13273f] to-[#0d1b2e]" },
  { emoji: "📚", bg: "from-[#a8862c] to-[#5e4a15]" },
  { emoji: "🏛️", bg: "from-[#1d3a5f] to-[#13273f]" },
  { emoji: "🖋️", bg: "from-[#2c466b] to-[#0d1b2e]" },
];

const testimonials = [
  { text: "Sengketa kontrak kami senilai miliaran diselesaikan lewat mediasi dalam 4 bulan. Strateginya matang dan komunikasinya jelas.", name: "Direktur Utama", role: "Perusahaan Distribusi FMCG" },
  { text: "Proses akuisisi berjalan mulus. Due diligence-nya sangat teliti — beberapa risiko besar terdeteksi sebelum closing.", name: "CFO", role: "Perusahaan Teknologi" },
  { text: "Pendampingan perkara waris keluarga kami ditangani dengan empati dan profesionalisme tinggi.", name: "H. Syamsuddin", role: "Klien Perorangan" },
];

const faqs = [
  { q: "Apakah konsultasi pertama benar-benar gratis?", a: "Ya. Konsultasi awal 30 menit gratis untuk memahami duduk perkara dan memberikan gambaran opsi hukum Anda, tanpa kewajiban melanjutkan." },
  { q: "Bagaimana struktur biaya jasa hukum?", a: "Tergantung jenis perkara: lump sum untuk pekerjaan terukur (pendirian PT, kontrak), hourly rate atau retainer untuk pendampingan berkelanjutan. Estimasi tertulis diberikan di awal." },
  { q: "Apakah kerahasiaan saya terjamin?", a: "Mutlak. Seluruh informasi klien dilindungi kerahasiaannya sesuai kode etik advokat, sejak konsultasi pertama." },
  { q: "Apakah melayani klien di luar Jakarta?", a: "Ya. Kami menangani perkara di berbagai kota di Indonesia, dan konsultasi dapat dilakukan secara online." },
  { q: "Berapa lama perkara biasanya selesai?", a: "Bervariasi — negosiasi bisa hitungan minggu, litigasi bisa lebih dari setahun. Kami selalu mengupayakan jalur paling efisien terlebih dahulu." },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="mb-3 text-xs font-bold uppercase tracking-[4px] text-accent">{children}</p>;
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#0d1b2e] to-[#13273f] py-28 text-white">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <div className="tracking-[8px] text-accent">— ⚖️ —</div>
          <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-bold leading-tight text-white md:text-6xl">
            Mitra Hukum yang Berdiri di Sisi Anda
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-[#b8c8dc]">
            Advokat berpengalaman untuk kebutuhan korporasi, litigasi, dan
            compliance — dengan strategi yang terukur dan komunikasi yang jernih.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a href="#konsultasi" className="rounded-md bg-accent px-8 py-3.5 font-bold text-white transition-opacity hover:opacity-85">
              Konsultasi Gratis 30 Menit
            </a>
            <a href="#praktik" className="rounded-md border border-white/40 px-8 py-3.5 font-bold text-white transition-colors hover:border-accent hover:text-accent">
              Bidang Praktik
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-line bg-surface py-12">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-5 text-center md:grid-cols-4">
          {stats.map(([n, l]) => (
            <div key={l}>
              <strong className="block font-heading text-4xl text-accent">{n}</strong>
              <span className="mt-1 block text-sm text-muted">{l}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Practice areas */}
      <section id="praktik" className="py-20">
        <div className="mx-auto max-w-6xl px-5 text-center">
          <Eyebrow>Bidang Praktik</Eyebrow>
          <h2 className="text-3xl font-bold md:text-4xl">Layanan Hukum Kami</h2>
          <div className="mt-12 grid gap-6 text-left sm:grid-cols-2 lg:grid-cols-3">
            {practices.map((p) => (
              <div key={p.t} className="border-t-2 border-accent bg-surface p-7 transition-shadow hover:shadow-lg">
                <div className="text-3xl">{p.ic}</div>
                <h3 className="mt-4 font-heading text-lg font-bold">{p.t}</h3>
                <p className="mt-2 text-sm text-muted">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About + gallery */}
      <section id="tentang" className="bg-alt py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 md:grid-cols-2">
          <div>
            <Eyebrow>Tentang Kami</Eyebrow>
            <h2 className="text-3xl font-bold md:text-4xl">Integritas di Atas Segalanya</h2>
            <p className="mt-4 text-muted">
              Didirikan tahun 2010, Adhikara Law tumbuh menjadi firma hukum yang
              dipercaya perusahaan nasional maupun klien perorangan. Kami
              percaya nasihat hukum terbaik adalah yang jujur — termasuk memberi
              tahu Anda ketika jalur damai lebih baik daripada berperkara.
            </p>
            <q className="mt-6 block font-heading text-xl italic text-heading">
              Kemenangan terbaik adalah yang dicapai tanpa merusak masa depan klien.
            </q>
            <p className="mt-2 text-sm text-muted">— Dr. Gede Adhikara, Managing Partner</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {gallery.map((g, i) => (
              <div key={i} className={`flex aspect-square items-center justify-center rounded-xl bg-gradient-to-br text-5xl ${g.bg}`}>
                {g.emoji}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="tim" className="py-20">
        <div className="mx-auto max-w-6xl px-5 text-center">
          <Eyebrow>Tim Kami</Eyebrow>
          <h2 className="text-3xl font-bold md:text-4xl">Para Advokat</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {team.map((m) => (
              <div key={m.name} className="border border-line bg-card p-8 text-center transition-shadow hover:shadow-lg">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-b from-[#13273f] to-[#0d1b2e] font-heading text-xl text-accent">
                  {m.ava}
                </div>
                <h3 className="mt-4 font-heading text-lg font-bold">{m.name}</h3>
                <p className="text-sm font-semibold text-accent">{m.role}</p>
                <p className="mt-2 text-xs text-muted">{m.exp}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#0d1b2e] py-20 text-white">
        <div className="mx-auto max-w-6xl px-5 text-center">
          <Eyebrow>Testimoni Klien</Eyebrow>
          <h2 className="text-3xl font-bold text-white md:text-4xl">Kepercayaan yang Terjaga</h2>
          <div className="mt-12 grid gap-6 text-left md:grid-cols-3">
            {testimonials.map((t, i) => (
              <figure key={i} className="border border-white/10 bg-white/5 p-8">
                <div className="mb-4 font-heading text-4xl text-accent">“</div>
                <blockquote className="text-sm text-[#c9d6e5]">{t.text}</blockquote>
                <figcaption className="mt-5">
                  <strong className="block text-sm text-white">{t.name}</strong>
                  <span className="text-xs text-[#8fa3ba]">{t.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-8 text-xs text-[#8fa3ba]">Identitas klien disamarkan demi kerahasiaan.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20">
        <div className="mx-auto max-w-3xl px-5">
          <div className="text-center">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="text-3xl font-bold md:text-4xl">Pertanyaan Umum</h2>
          </div>
          <div className="mt-12 space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="group border border-line bg-card px-6 py-5 open:border-accent">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-heading">
                  {f.q}
                  <span className="text-xl text-accent transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3.5 text-sm text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation */}
      <section id="konsultasi" className="bg-alt py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center">
            <Eyebrow>Konsultasi</Eyebrow>
            <h2 className="text-3xl font-bold md:text-4xl">Diskusikan Perkara Anda</h2>
          </div>
          <div className="mt-12 grid gap-12 md:grid-cols-2">
            <div className="space-y-6">
              {[
                ["🏢", "Kantor", site.address],
                ["⏰", "Jam Kerja", site.hours],
                ["💬", "WhatsApp", "+62 812-3456-7890"],
                ["🔒", "Kerahasiaan", "Seluruh informasi dilindungi kode etik advokat"],
              ].map(([ic, t, d]) => (
                <div key={t} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-card text-xl shadow-sm">{ic}</div>
                  <div>
                    <strong className="block text-sm text-heading">{t}</strong>
                    <span className="text-sm text-muted">{d}</span>
                  </div>
                </div>
              ))}
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
