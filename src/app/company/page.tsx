import { Button } from '@/components/Button'
import { Container } from '@/components/container'
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
      <Heading as="h1">See Clearly. Sell Smarter.</Heading>
      <Lead className="mt-6 max-w-3xl">
        Transform sales performance with <b>Real-time quarterly</b> forecasts, <b>Pipeline Visibility</b> and{' '}
        <b>Deal Linearity</b>.
      </Lead>
      <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
        <div className="max-w-lg">
          <h2 className="text-2xl font-medium tracking-tight">Our Misson</h2>
          <p className="mt-6 text-sm/6 text-gray-600">
            Our mission is to transform revenue leadership from an art of intuition to a science of certainty. We
            empower B2B organizations to achieve predictable, linear revenue growth by eliminating the fundamental
            challenges of pipeline visibility, forecast accuracy, and deal execution. Through AI-powered intelligence,
            we turn scattered customer signals into actionable insights that enable sales leaders to confidently answer
            the most critical business question: &quot;Will we hit our number?&quot;
          </p>

          <h2 className="mt-12 text-2xl font-medium tracking-tight">Our Vision</h2>
          <p className="mt-6 text-sm/6 text-gray-600">
            We envision a future where revenue organizations operate with complete certainty rather than hopeful
            guesswork. A world where sales leaders no longer accept quarter-end loading, forecast inaccuracy, and
            pipeline surprises as inevitable, but instead use scientific intelligence to architect predictable revenue
            flow. Our vision is to make every revenue team data-driven, every forecast accurate, and every deal
            execution optimized—transforming not just how companies sell, but how they grow.
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

function Person({
  name,
  description,
  img,
  linkedinURL,
}: {
  name: string
  description: string
  img: string
  linkedinURL?: string
}) {
  return (
    <li className="flex items-center gap-4">
      <img alt="" src={img} className="size-16 rounded-full" />
      <div className="text-sm/6">
        <div className="flex items-center gap-2">
          <h3 className="font-medium">{name}</h3>
          {linkedinURL && (
            <a
              href={linkedinURL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              <img src="/icons/linkedin.svg" alt="LinkedIn" className="h-4 w-4" />
            </a>
          )}
        </div>
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
        actionable insights for revenue growth. Backed by some of the world&apos;s best in GTM and B2B sales, the
        founding team is equipped with the knowledge and experience to help sales teams achieve predictable success.
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
            <div className="flex items-center gap-2">
              <p className="text-sm text-gray-600">CEO and Founder</p>
              <a
                href="https://www.linkedin.com/in/aseemasthana/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                <img src="/icons/linkedin.svg" alt="LinkedIn" className="h-4 w-4" />
              </a>
            </div>
            <p className="mt-2 text-sm text-gray-600">
              Aseem brings extensive experience in sales and AI, having previously led sales teams and developed AI
              solutions for enterprise customers.
            </p>
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
            <div className="flex items-center gap-2">
              <p className="text-sm text-gray-600">Founding CTO</p>
              <a
                href="https://www.linkedin.com/in/daniele-ds/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                <img src="/icons/linkedin.svg" alt="LinkedIn" className="h-4 w-4" />
              </a>
            </div>
            <p className="mt-2 text-sm text-gray-600">
              Daniele brings deep technical expertise in AI and machine learning, having previously worked on
              cutting-edge AI solutions at leading tech companies.
            </p>
          </div>
        </div>
      </div>
      <Subheading className="mt-24">Our Advisors</Subheading>

      <Heading as="h3" className="mt-2">
        Advised by industry experts.
      </Heading>
      <hr className="mt-6 border-t border-gray-200" />
      <ul role="list" className="mx-auto mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <Person
          name="Jai Desai"
          description="Go-to-Market and Enterprise Sales"
          linkedinURL="https://www.linkedin.com/in/jaidesai/"
          img="/photos/jai_desai.jpg"
        />
        <Person
          name="Jesse Marseille"
          description="Go-to-Market and  Sales"
          linkedinURL="https://www.linkedin.com/in/jessemarseille/"
          img="/photos/jesse_marseille.jpg"
        />
        <Person
          name="Sebastian Spitzer"
          description="Go-to-Market and Channel Sales"
          linkedinURL="https://www.linkedin.com/in/seba-s/"
          img="/photos/sebastian_spitzer.jpg"
        />
        <Person
          name="Barry Wilson"
          description="Enterprise Sales"
          linkedinURL="https://www.linkedin.com/in/barry-wilson-9348204/"
          img="/photos/barry_wilson.jpg"
        />
        <Person
          name="Arun Reddy Nelakurthi"
          linkedinURL="https://www.linkedin.com/in/arunreddy/"
          description="AI/ML"
          img="/photos/arun_nelakurthi.jpg"
        />
        <Person
          name="Adam Carson"
          linkedinURL="https://www.linkedin.com/in/acarson/"
          description="Revenue and Finance"
          img="/photos/adam_carson.jpg"
        />
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
