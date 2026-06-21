interface GuideHeaderProps {
  subheading: string;
  heading: string;
  description: string;
}

export default function GuideHeader({ subheading, heading, description }: GuideHeaderProps) {
  return (
    <header className="max-w-3xl">
      <div className="mb-8 inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-sm font-medium text-primary-700  ">
        <span className="mr-2 h-2 w-2 rounded-full bg-primary-500"></span>
        {subheading}
      </div>
      <h1 className="bg-gradient-to-r from-neutral-800 via-neutral-500 to-neutral-800 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl  ">
        {heading}
      </h1>
      <p className="mt-6 text-lg text-neutral-600 ">
        {description}
      </p>
    </header>
  );
}
