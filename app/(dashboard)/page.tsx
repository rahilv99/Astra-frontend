import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Database, Podcast } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols lg:gap-8">
            <div className="text-center md:max-w-2xl md:mx-auto lg:col-span-6 ">
              <h1 className="text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl md:text-6xl">
                Astra.
                <span className="block text-blue-300">Smarter Content</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Spend less time searching and more time learning. Astra brings all the newest
                advancements in your field to you.  
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-center lg:mx-auto">
                <Link
                  href="https://vercel.com/templates/next.js/next-js-saas-starter"
                  target="_blank"
                >
                  <Button className="bg-white hover:bg-gray-100 text-black border border-gray-200 rounded-full text-lg px-8 py-8 inline-flex items-center justify-center">
                    Demo
                  </Button>
                </Link>
              </div>
            </div>


          </div>
        </div>
      </section>

      <section className="py-16 bg-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <div>
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-300 text-white">
                <Database className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-gray-900">
                  Data Sources
                </h2>
                <p className="mt-2 text-base text-gray-500">
                  Astra aggregates the most recent publications, preprints, and news articles curated from 
                  leading academic sources.
                </p>
              </div>
            </div>

            <div className="mt-10 lg:mt-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-300 text-white">
                <Sparkles className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-gray-900">
                  Data Filtering
                </h2>
                <p className="mt-2 text-base text-gray-500">
                  Astra uses advanced machine learning algorithms and natural language processing
                  to ensure all the information you recieve is relevant and meaningful.
                </p>
              </div>
            </div>

            <div className="mt-10 lg:mt-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-300 text-white">
                <Podcast className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-gray-900">
                  Podcast Generation
                </h2>
                <p className="mt-2 text-base text-gray-500">
                  Astra extracts only the most important information from the articles, generating engaging podcast 
                  episodes tailored specifically for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Curious? Sign up for our free plan.
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-500">
                Our free plan offers a taste of what Astra can do for you. Sign up today to 
                recieve weekly updates on the latest advancements in your field, straight to your inbox. 
              </p>
            </div>
            <div className="mt-8 lg:mt-0 flex justify-center lg:justify-end">
              <Link
                href = '/pricing'
                target="_blank"
              >
                <Button className="bg-white hover:bg-gray-100 text-black border border-gray-200 rounded-full text-xl px-12 py-6 inline-flex items-center justify-center">
                  View Plans
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
