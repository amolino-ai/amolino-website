'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Link from 'next/link';
import posthog from 'posthog-js';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { submitDemoRequest } from './actions';
import { EVENTS } from '@/lib/posthog';

// Define your form schema with Zod
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  company: z.string().optional(),
  phoneNumber: z.string().optional(),
  message: z.string().optional()
});

// TypeScript type derived from schema
type FormValues = z.infer<typeof formSchema>;

export default function DemoPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

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
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      // Identify the visitor with their real name and email.
      // This merges their anonymous amolino-user-xxxx profile
      // with their real identity in PostHog.
      posthog.identify(posthog.get_distinct_id(), {
        email: data.email,
        name: data.name,
        ...(data.company ? { company: data.company } : {}),
        ...(data.phoneNumber ? { phone: data.phoneNumber } : {}),
      });

      posthog.capture(EVENTS.DEMO_FORM_SUBMITTED, {
        company_provided: Boolean(data.company),
        phone_provided: Boolean(data.phoneNumber),
        message_provided: Boolean(data.message),
      });

      const result = await submitDemoRequest(data);
      if (result.success) {
        router.push('/');
      } else {
        console.error('Error submitting form:', result.error);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-neutral-50 to-white">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-100/40 rounded-full blur-3xl"></div>
        <div className="absolute top-60 -left-40 w-96 h-96 bg-tertiary-100/30 rounded-full blur-3xl"></div>
      </div>

      <Container className="relative">
        <div className="py-16 sm:py-24 lg:py-32">
          {/* Header Section */}
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700 ring-1 ring-inset ring-primary-700/10 mb-8">
              <svg className="h-1.5 w-1.5 fill-primary-600" viewBox="0 0 6 6" aria-hidden="true">
                <circle cx={3} cy={3} r={3} />
              </svg>
              Get Started
            </div>
            
            <h1 className="font-display text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
              Book a Demo
            </h1>
            <p className="mt-6 text-lg leading-8 text-neutral-600 max-w-xl mx-auto">
w              See how Amolino helps sales teams win more deals. Fill out the form below and we&apos;ll schedule a personalized demo.
            </p>
          </div>

          {/* Form Section */}
          <div className="mx-auto mt-16 max-w-xl">
            <div className="bg-white rounded-2xl shadow-xl shadow-neutral-900/5 ring-1 ring-neutral-900/5 overflow-hidden">
              <div className="p-8 sm:p-10">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name & Email - Two columns on larger screens */}
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                      <label htmlFor="name" className="block text-sm font-semibold leading-6 text-neutral-900">
                        Full Name <span className="text-error-500">*</span>
                      </label>
                      <div className="mt-2.5">
                        <input
                          id="name"
                          {...register('name')}
                          type="text"
                          placeholder="John Doe"
                          className="block w-full rounded-lg border-0 px-4 py-3 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6 transition-shadow"
                        />
                        {errors.name && (
                          <p className="mt-2 text-sm text-error-600 flex items-center gap-1">
                            <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                            </svg>
                            {errors.name.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="email" className="block text-sm font-semibold leading-6 text-neutral-900">
                        Work Email <span className="text-error-500">*</span>
                      </label>
                      <div className="mt-2.5">
                        <input
                          id="email"
                          {...register('email')}
                          type="email"
                          placeholder="john@company.com"
                          className="block w-full rounded-lg border-0 px-4 py-3 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6 transition-shadow"
                        />
                        {errors.email && (
                          <p className="mt-2 text-sm text-error-600 flex items-center gap-1">
                            <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                            </svg>
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Company & Phone */}
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold leading-6 text-neutral-900">
                        Company
                      </label>
                      <div className="mt-2.5">
                        <input
                          id="company"
                          {...register('company')}
                          type="text"
                          // placeholder="Acme Inc."
                          className="block w-full rounded-lg border-0 px-4 py-3 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6 transition-shadow"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="phoneNumber" className="block text-sm font-semibold leading-6 text-neutral-900">
                        Phone Number
                      </label>
                      <div className="mt-2.5">
                        <input
                          id="phoneNumber"
                          
                          {...register('phoneNumber')}
                          type="tel"
                          //placeholder="+1 (555) 000-0000"
                          className="block w-full rounded-lg border-0 px-4 py-3 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6 transition-shadow"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold leading-6 text-neutral-900">
                      Tell us about your needs
                    </label>
                    <div className="mt-2.5">
                      <textarea
                        id="message"
                        {...register('message')}
                        rows={4}
                        placeholder="Share any specific challenges or questions you&apos;d like us to address during the demo..."
                        className="block w-full rounded-lg border-0 px-4 py-3 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6 resize-none transition-shadow"
                      />
                    </div>
                  </div>

                  {/* Privacy Notice */}
                  <div className="flex items-start gap-3 p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                    <svg className="h-5 w-5 text-neutral-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                    <p className="text-xs leading-5 text-neutral-600">
                      We respect your privacy. Your information will only be used to contact you about the demo and will never be shared with third parties.
                    </p>
                  </div>

                  {/* Submit Buttons */}
                  <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-between pt-2">
                    <Link href="/" passHref className="w-full sm:w-auto">
                      <Button variant="secondary" type="button" className="w-full sm:w-auto">
                        <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                        </svg>
                        Go Back
                      </Button>
                    </Link>
                    <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto sm:min-w-[160px]">
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Submitting...
                        </>
                      ) : (
                        <>
                          Submit Request
                          <svg className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                          </svg>
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </div>
            </div>

            {/* Additional trust signals */}
            <div className="mt-8 text-center">
              <p className="text-sm text-neutral-500">
                Trusted by sales teams at leading B2B companies
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}