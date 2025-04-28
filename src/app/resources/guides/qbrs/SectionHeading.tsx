export default function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="group relative">
      <div className="absolute top-1 -left-6 hidden h-10 w-1 rounded-full bg-blue-500 opacity-70 transition-all duration-200 group-hover:opacity-100 lg:block"></div>
      <h2 className="text-3xl font-bold text-zinc-800 dark:text-zinc-100">{children}</h2>
    </div>
  )
}