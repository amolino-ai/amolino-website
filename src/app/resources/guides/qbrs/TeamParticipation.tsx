import SectionHeading from './SectionHeading'
import TeamTabs from './TeamTab'

export default function TeamParticipation() {
  return (
    <section id="team-participation" className="scroll-mt-20">
      <SectionHeading>Team Participation</SectionHeading>
      <div className="mt-6 py-4">
        <p className="mb-8 text-lg text-zinc-700">
          A company-wide QBR brings multiple functions into one forum so that performance gaps,
          cross-functional dependencies, and shared initiatives are surfaced and resolved in real time.
        </p>

        <TeamTabs />
      </div>
    </section>
  )
}