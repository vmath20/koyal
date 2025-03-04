import Link from "next/link"

export default function AboutContent() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">About Koyal Labs</h1>
      <p className="mb-4">
        Koyal Labs is creating the next frontier of applied AI technologies, founded by{" "}
        <a
          href="https://www.linkedin.com/in/vaibhav-mishra-bio/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Vaibhav Mishra
        </a>
        , a Stanford AI dropout.
      </p>
      <p className="mb-4">
        Think of us as a mix between an app studio building consumer AI apps and an applied AI lab developing advanced
        developer tools and foundational models.
      </p>
      <p>
        Find some of our projects{" "}
        <Link href="/projects" className="text-blue-600 hover:underline">
          here
        </Link>
        .
      </p>
    </div>
  )
}
