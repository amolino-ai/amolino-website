'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import Link from 'next/link'
import { Button } from '@/components/Button'
import { Container } from '@/components/container'
import { Navbar } from '@/components/Navbar'

// Define your form schema with Zod
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  company: z.string().optional(),
  phoneNumber: z.string().optional(),
  message: z.string().optional()
})

// TypeScript type derived from schema
type FormValues = z.infer<typeof formSchema>

export default function DemoPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      phoneNumber: '',
      message: ''
    }
  })

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/bookdemo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      if (response.ok) {
        router.push('/')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="overflow-hidden">
      <div className="relative">
        <Container className="relative">
          <Navbar />
          <div className="pt-1 pb-24 sm:pt-24 sm:pb-32 md:pt-24 md:pb-48">
            <h1 className="font-display text-4xl/[1.1] font-semibold tracking-normal text-balance text-gray-950 drop-shadow-sm sm:text-5xl/[1.05] md:text-5xl/[1.05]">
              Book a Demo
            </h1>
            <p className="mt-4 max-w-2xl text-lg/7 font-medium text-gray-950/75">
              Fill out the form below and our team will get in touch to schedule a personalized demo of Amolino.
            </p>
            <div className="mt-10 max-w-md">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                    Your name
                  </label>
                  <div className="mt-2">
                    <input
                      id="name"
                      {...register('name')}
                      type="text"
                      className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                    )}
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Work email
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      {...register('email')}
                      type="email"
                      className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>
                </div>
                
                {/* Additional fields */}
                <div>
                  <label htmlFor="company" className="block text-sm font-medium leading-6 text-gray-900">
                    Company
                  </label>
                  <div className="mt-2">
                    <input
                      id="company"
                      {...register('company')}
                      type="text"
                      className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phoneNumber" className="block text-sm font-medium leading-6 text-gray-900">
                    Phone Number
                  </label>
                  <div className="mt-2">
                    <input
                      id="phoneNumber"
                      {...register('phoneNumber')}
                      type="tel"
                      className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">
                    Message (Optional)
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="message"
                      {...register('message')}
                      rows={4}
                      className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                
                <div className="flex gap-x-4">
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                  </Button>
                  <Link href="/" passHref>
                    <Button variant="secondary" type="button">Go back</Button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}