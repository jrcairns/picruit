import { Container } from '@/components/Container'
import Image from 'next/image'
import { CircleBackground } from './CircleBackground'

const people = [
  {
    name: 'Isaac Arch',
    role: 'Managing Director',
    imageUrl:
      'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHNob3R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Jane Doe',
    role: 'Senior Accquisition Partner',
    imageUrl:
      'https://images.unsplash.com/photo-1627161683077-e34782c24d81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aGVhZHNob3R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Bertram Gilfoyle',
    role: 'Engineering Director',
    imageUrl:
      'https://images.unsplash.com/photo-1629425733761-caae3b5f2e50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGhlYWRzaG90fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Leonard Krasner',
    role: 'Creative Director',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Mary Smith',
    role: 'Accquisition Specialist',
    imageUrl:
      'https://images.unsplash.com/photo-1573496358961-3c82861ab8f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhlYWRzaG90fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
]

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="pricing-title"
      className="border-t border-gray-200 bg-gray-900 py-20 sm:py-32 relative overflow-hidden isolate"
    >
      <div className="absolute top-24 sm:top-1/2 left-20 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2" style={{ zIndex: -1 }}>
        <CircleBackground height={750} width={750} color="#fff" className="animate-spin-slower" />
      </div>
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="pricing-title"
            className="text-3xl font-medium tracking-tight text-white"
          >
            About Picruit
          </h2>
          <p className="mt-2 text-lg text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam assumenda suscipit laboriosam iusto eveniet deleniti.
          </p>
        </div>

        <ul role="list" className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8 mt-16 lg:mt-24">
          {people.map((person) => (
            <li key={person.name} className="rounded-lg bg-gray-800 py-10 px-6 text-center xl:px-10 xl:text-left">
              <div className="space-y-6 xl:space-y-10">
                <Image alt={person.name} layout="fill" className="mx-auto h-40 w-40 rounded-full xl:h-56 xl:w-56 object-cover object-top" src={person.imageUrl} />
                <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
                  <div className="space-y-1 text font-medium leading-6">
                    <h3 className="text-white">{person.name}</h3>
                    <p className="text-cyan-500">{person.role}</p>
                  </div>

                  <ul role="list" className="flex justify-center space-x-5">
                    <li>
                      <a href={person.twitterUrl} className="text-gray-400 hover:text-gray-300">
                        <span className="sr-only">Twitter</span>
                        <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href={person.linkedinUrl} className="text-gray-400 hover:text-gray-300">
                        <span className="sr-only">LinkedIn</span>
                        <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          ))}
          <li className="rounded-lg hover:bg-cyan-500/80 cursor-pointer transition-colors duration-300 bg-cyan-500/60 backdrop-blur py-10 px-6 text-center xl:px-10 flex flex-col items-center justify-center">
            <span className="block text-3xl font-semibold text-white">We&apos;re Hiring!</span>
            <a className="underline text-white font-medium text-lg" href="mailto:hello@example.com">Reach out to us</a>
          </li>
        </ul>
      </Container>
    </section>
  )
}
