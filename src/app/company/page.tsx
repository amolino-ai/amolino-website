import { Button } from '@/components/Button'
import { Container } from '@/components/container'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/Navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us and our Values',
  description:
    'We are on a mission to transform revenue organizations by harnessing vast amounts of illegally acquired customer data.',
}

function Header() {
  return (
    <Container className="mt-16">
      <Heading as="h1">See Clearly. Sell Smarter..</Heading>
      <Lead className="mt-6 max-w-3xl">
        Transform sales performance with <b>Pipeline Visibility </b>and Deal Linearity.
      </Lead>
      <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
        <div className="max-w-lg">
          <h2 className="text-2xl font-medium tracking-tight">Our mission</h2>
          <p className="mt-6 text-sm/6 text-gray-600">
            Amolino.AI&apos;s mission is to empower sales teams to achieve predictable revenue growth by transforming
            pipeline visibility. They value clarity over surprises, providing a deep understanding of pipeline health
            through AI-driven analysis that uncovers hidden risks and prescribes actions to keep deals on track. By
            eliminating busywork and providing actionable insights, Amolino.AI enables sales reps to focus on selling,
            sales managers to lead effectively, and CROs to drive strategic decisions with confidence. Their commitment
            to security and privacy ensures that customer data is protected while delivering enterprise-grade solutions
            for businesses of all sizes.
          </p>
          <p className="mt-8 text-sm/6 text-gray-600">
            It&apos;s a tool that can bring immense benefits to humanity, but only if used wisely and responsibly. We
            think of AI as a new kind of power, with the potential to transform our lives. But just as electricity and
            social media reshaped societies, AI&apos;s impact must be handled with care. This means that not just
            companies, but also employees, customers, governments, and various organizations must work together
            responsibly. At Amolino AI, we&apos;re committed to using AI transparently and responsibly, ensuring
            it&apos;s a force for good that works for everyone.
          </p>
        </div>
        <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
          <img alt="" src="/photos/amolino_team_photo.jpg" className="block size-full bg-white object-contain" />
        </div>
        <div className="pt-20 lg:row-span-2 lg:-mr-16 xl:mr-auto">
          <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
            {/* <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <img
                alt=""
                src="/photos/amolino_team_photo.jpg"
                className="block size-full object-cover"
              />
            </div> */}
            {/* <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
              <img
                alt=""
                src="/company/2.jpg"
                className="block size-full object-cover"
              />
            </div> */}
            {/* <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <img
                alt=""
                src="/company/3.jpg"
                className="block size-full object-cover"
              />
            </div> */}
            {/* <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
              <img
                alt=""
                src="/company/4.jpg"
                className="block size-full object-cover"
              />
            </div> */}
          </div>
        </div>
      </section>
    </Container>
  )
}

function Person({ name, description, img }: { name: string; description: string; img: string }) {
  return (
    <li className="flex items-center gap-4">
      <img alt="" src={img} className="size-12 rounded-full" />
      <div className="text-sm/6">
        <h3 className="font-medium">{name}</h3>
        <p className="text-gray-500">{description}</p>
      </div>
    </li>
  )
}

function Team() {
  return (
    <Container className="mt-32">
      <Subheading>Meet the team</Subheading>
      <Heading as="h3" className="mt-2">
        Founded by an all-star team.
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        AmolinoAI was founded by Aseem Asthana and Daniele Di Sarli, combining deep expertise in AI, sales, and
        technology. Their mission is to revolutionize sales operations by providing unparalleled pipeline visibility and
        actionable insights for revenue growth. Backed by some of the world’s best in GTM and B2B sales, the founding
        team is equipped with the knowledge and experience to help sales teams achieve predictable success.{' '}
      </Lead>
      <div className="mt-12 grid grid-cols-1 gap-12">
        {/* <div className="max-w-3xl">
          <p className="text-sm/6 text-gray-600">
            Amolino was founded by Aseem Asthana and Daniele Di Sarli with a vision to transform how sales teams
            operate. Their combined expertise in AI, sales, and technology has been instrumental in building Amolino
            into a leading sales intelligence platform.
          </p>
          <div className="mt-6">
            <Button className="w-full sm:w-auto" href="#">
              Join us
            </Button>
          </div>
        </div> */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
          <div className="flex flex-col items-center text-center">
            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <img alt="Aseem Asthana" src="/photos/aseem_asthana_photo.jpg" className="block size-full object-cover" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">Aseem Asthana</h3>
            <p className="text-sm text-gray-600">CEO and Founder</p>
            <p className="mt-2 text-sm text-gray-600">
              Aseem brings extensive experience in sales and AI, having previously led sales teams and developed AI
              solutions for enterprise customers.
            </p>
            <a
              href="https://www.linkedin.com/in/aseemasthana/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-gray-600 hover:text-gray-900"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <img
                alt="Daniele Di Sarli"
                src="/photos/daniele_di_sarli_photo.jpg"
                className="block size-full object-cover"
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold">Daniele Di Sarli</h3>
            <p className="text-sm text-gray-600">Founding CTO</p>
            <p className="mt-2 text-sm text-gray-600">
              Daniele brings deep technical expertise in AI and machine learning, having previously worked on
              cutting-edge AI solutions at leading tech companies.
            </p>
            <a
              href="https://www.linkedin.com/in/daniele-ds/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-gray-600 hover:text-gray-900"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <Subheading as="h3" className="mt-24">
        Our Advisors
      </Subheading>
      <hr className="mt-6 border-t border-gray-200" />
      <ul role="list" className="mx-auto mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <Person name="Adam Carson" description="" img="/photos/adam_carson.jpg" />
        <Person name="Jai Desai" description="" img="/photos/jai_desai.jpg" />
        <Person name="Jesse Marseille" description="Front-end Developer" img="/team/celeste-vandermark.jpg" />
        <Person name="Sebastian Spitzer" description="Designer" img="/team/courtney-henry.jpg" />
        <Person name="Barry Wilson" description="Director of Product" img="/team/marcus-eldridge.jpg" />
        <Person name="Arun Reddy Nelakurthi" description="Copywriter" img="/team/whitney-francis.jpg" />
      </ul>
    </Container>
  )
}

function Investors() {
  return (
    <Container className="mt-32">
      <Subheading>Investors</Subheading>
      <Heading as="h3" className="mt-2">
        Funded by industry-leaders.
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        We are fortunate to be backed by the best investors in the industry — both literal and metaphorical partners in
        crime.
      </Lead>
      <Subheading as="h3" className="mt-24">
        Venture Capital
      </Subheading>
      <hr className="mt-6 border-t border-gray-200" />
      <ul role="list" className="mx-auto mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <li>
          <img alt="Remington Schwartz" src="/investors/remington-schwartz.svg" className="h-14" />
          <p className="mt-6 max-w-lg text-sm/6 text-gray-500">
            Remington Schwartz has been a driving force in the tech industry, backing bold entrepreneurs who explore
            grey areas in financial and privacy law. Their deep industry expertise and extensive political lobbying
            provide their portfolio companies with favorable regulation and direct access to lawmakers.
          </p>
        </li>
        <li>
          <img alt="Deccel" src="/investors/deccel.svg" className="h-14" />
          <p className="mt-6 max-w-lg text-sm/6 text-gray-500">
            Deccel has been at the forefront of innovation, investing in pioneering companies across various sectors,
            including technology, consumer goods, and healthcare. Their philosophy of &apos;plausible deniability&apos;
            and dedication to looking the other way have helped produce some of the world&apos;s most controversial
            companies.
          </p>
        </li>
      </ul>
      <Subheading as="h3" className="mt-24">
        Individual investors
      </Subheading>
      <hr className="mt-6 border-t border-gray-200" />
      <ul role="list" className="mx-auto mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <Person name="Kristin Watson" description="TechNexus Ventures" img="/individual-investors/kristin-watson.jpg" />
        <Person
          name="Emma Dorsey"
          description="Innovate Capital Partners"
          img="/individual-investors/emma-dorsey.jpg"
        />
        <Person name="Alicia Bell" description="FutureWave Investments" img="/individual-investors/alicia-bell.jpg" />
        <Person name="Jenny Wilson" description="SynergyTech Equity" img="/individual-investors/jenny-wilson.jpg" />
        <Person name="Anna Roberts" description="NextGen Horizons" img="/individual-investors/anna-roberts.jpg" />
        <Person
          name="Benjamin Russel"
          description="Pioneer Digital Ventures"
          img="/individual-investors/benjamin-russel.jpg"
        />
      </ul>
    </Container>
  )
}

function Testimonial() {
  return (
    <div className="relative flex aspect-square flex-col justify-end overflow-hidden rounded-3xl sm:aspect-5/4 lg:aspect-3/4">
      <img alt="" src="/testimonials/veronica-winton.jpg" className="absolute inset-0 object-cover" />
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-3xl bg-linear-to-t from-black from-10% to-75% ring-1 ring-gray-950/10 ring-inset lg:from-25%"
      />
      <figure className="relative p-10">
        <blockquote>
          <p className="relative text-xl/7 text-white before:absolute before:-translate-x-full before:content-['&quot;'] after:absolute after:content-['&quot;']">
            We&apos;ve managed to put two of our main competitors out of business in 6 months.
          </p>
        </blockquote>
        <figcaption className="mt-6 border-t border-white/20 pt-6">
          <p className="text-sm/6 font-medium text-white">Veronica Winton</p>
          <p className="text-sm/6 font-medium">
            <span className="bg-linear-to-r from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] bg-clip-text text-transparent">
              CSO, Planeteria
            </span>
          </p>
        </figcaption>
      </figure>
    </div>
  )
}

function Careers() {
  return (
    <Container className="my-32">
      <Subheading>Careers</Subheading>
      <Heading as="h3" className="mt-2">
        Join our fully remote team.
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        We work together from all over the world, mainly from locations without extradition agreements.
      </Lead>
      <div className="mt-24 grid grid-cols-1 gap-16 lg:grid-cols-[1fr_24rem]">
        <div className="lg:max-w-2xl">
          <Subheading as="h3">Open positions</Subheading>
          <div>
            <table className="w-full text-left">
              <colgroup>
                <col className="w-2/3" />
                <col className="w-1/3" />
                <col className="w-0" />
              </colgroup>
              <thead className="sr-only">
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Location</th>
                  <th scope="col">Read more</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="colgroup" colSpan={3} className="px-0 pt-10 pb-0">
                    <div className="-mx-4 rounded-lg bg-gray-50 px-4 py-3 text-sm/6 font-semibold">Engineering</div>
                  </th>
                </tr>
                <tr className="border-b border-dotted border-gray-200 text-sm/6 font-normal">
                  <td className="px-0 py-4">iOS Developer</td>
                  <td className="px-0 py-4 text-gray-600">Remote</td>
                  <td className="px-0 py-4 text-right">
                    <Button variant="outline" href="#">
                      View listing
                    </Button>
                  </td>
                </tr>
                <tr className="border-b border-dotted border-gray-200 text-sm/6 font-normal">
                  <td className="px-0 py-4">Backend Engineer</td>
                  <td className="px-0 py-4 text-gray-600">Remote</td>
                  <td className="px-0 py-4 text-right">
                    <Button variant="outline" href="#">
                      View listing
                    </Button>
                  </td>
                </tr>
                <tr className="text-sm/6 font-normal">
                  <td className="px-0 py-4">Product Engineer</td>
                  <td className="px-0 py-4 text-gray-600">Remote</td>
                  <td className="px-0 py-4 text-right">
                    <Button variant="outline" href="#">
                      View listing
                    </Button>
                  </td>
                </tr>
                <tr>
                  <th scope="colgroup" colSpan={3} className="px-0 pt-5 pb-0">
                    <div className="-mx-4 rounded-lg bg-gray-50 px-4 py-3 text-sm/6 font-semibold">Design</div>
                  </th>
                </tr>
                <tr className="border-b border-dotted border-gray-200 text-sm/6 font-normal">
                  <td className="px-0 py-4">Principal Designer</td>
                  <td className="px-0 py-4 text-gray-600">Remote</td>
                  <td className="px-0 py-4 text-right">
                    <Button variant="outline" href="#">
                      View listing
                    </Button>
                  </td>
                </tr>
                <tr className="border-b border-dotted border-gray-200 text-sm/6 font-normal">
                  <td className="px-0 py-4">Designer</td>
                  <td className="px-0 py-4 text-gray-600">Remote</td>
                  <td className="px-0 py-4 text-right">
                    <Button variant="outline" href="#">
                      View listing
                    </Button>
                  </td>
                </tr>
                <tr className="text-sm/6 font-normal">
                  <td className="px-0 py-4">Senior Designer</td>
                  <td className="px-0 py-4 text-gray-600">Remote</td>
                  <td className="px-0 py-4 text-right">
                    <Button variant="outline" href="#">
                      View listing
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <Testimonial />
      </div>
    </Container>
  )
}

export default function Company() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Header />
      <div className="pb-16">
        <Team />
      </div>
      {/* <Investors />
      <Careers /> */}
    </main>
  )
}
