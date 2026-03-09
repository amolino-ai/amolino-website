interface GuideHeaderProps {
  subheading: string;
  heading: string;
  description: string;
}

export default function GuideHeader({ subheading, heading, description }: GuideHeaderProps) {
  return (
    <header className="max-w-3xl">
      <div className="mb-8 inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700  ">
        <span className="mr-2 h-2 w-2 rounded-full bg-blue-500"></span>
        {subheading}
      </div>
      <h1 className="bg-gradient-to-r from-zinc-800 via-zinc-500 to-zinc-800 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl  ">
        {heading}
      </h1>
      <p className="mt-6 text-lg text-zinc-600 ">
        {description}
      </p>
    </header>
  );
}
