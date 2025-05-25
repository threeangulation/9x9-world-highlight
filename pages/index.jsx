import Link from "next/link";

export default function Home() {
  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">9x9 World Highlight</h1>
      <p className="mb-6 text-gray-600">
        A global macro narrative report powered by <strong>fIAltred</strong>, <strong>Merci</strong>, and <strong>ReyKha</strong>.
      </p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-1">📅 Latest Report: May 23, 2025</h2>
        <p className="text-gray-500 mb-2">Risk FX surged as USD exhausted, GBP/AUD/NZD rotated upward.</p>
        <Link href="/report/2025-05-23">
          <a className="text-blue-600 underline">View Full Report →</a>
        </Link>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-1">🌐 Animated 9x9 Exhibit</h2>
        <p className="text-gray-500 mb-2">Flow arcs & capital bias — global sentiment at a glance.</p>
        <Link href="/embed/exhibit">
          <a className="text-blue-600 underline">View Exhibit Map →</a>
        </Link>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-1">📘 About the 9x9 Report</h2>
        <p className="text-gray-500">
          The 9x9 Report is a stylized capital flow digest across 9 major regions. Directional arrows, volatility blurbs, and speculative signal overlays.
        </p>
      </section>
    </main>
  );
}