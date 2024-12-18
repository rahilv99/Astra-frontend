import React from "react";

import {
  Fingerprint,
  BrainIcon,
  CalendarIcon,
  IdCardIcon,
  CircleIcon,
  AudioLines,
  IdCard
} from "lucide-react";

export default function AIPodcastDemo() {
    const PodcastPlayer = () => {
        return (
            <div className="relative z-10 bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg rounded-xl shadow-lg p-6 mx-auto max-w-2xl">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <AudioLines className="w-6 h-6 text-gray-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-400">
                The Importance of Data in Generative AI
              </h3>
            </div>
            <p className="text-gray-100 mb-6">
                In this episode, we explore publications and news articles discussing the critical role of data in practical use cases
                of generative AI models. It becomes clear that while generative AI has shown remarkable progress in general purpose applications,
                hallucination and bias from training data remain significant challenges that limit the refinement of generative models into professional agents.
            </p>
            <div className="p-4 flex items-center space-x-4">
              <audio controls className="w-full">
                <source src="podcast_v2.1.wav" type="audio/wav" />
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>
        );
      }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="relative">
          <div className="space-y-24">
            <Step
              icon={<Fingerprint className="w-8 h-8" />}
              title="Interests"
              content="Generative AI, Text-to-Speech, Transformer Models, Lingustics"
              direction="left"
              prompt="List some of your major interests so I can find data relevant to you."
            />

            <Step
              icon={<IdCardIcon className="w-8 h-8" />}
              title="Role"
              content="Researcher"
              direction="right"
              prompt="Select your role to help me understand your perspective."
            />

            <Step
              icon={<CalendarIcon className="w-8 h-8" />}
              title="Delivery"
              content="Monday"
              direction="left"
              prompt="What day of the week do you want your podcast to be delivered?"
            />

            <PodcastPlayer />
          </div>
        </div>
      </div>
    </div>
  );
}

interface StepProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  direction: "left" | "right";
  prompt: string;
}

function Step({ icon, title, content, direction, prompt }: StepProps) {
  const isLeft = direction === "left";
  return (
    <div
      className={`relative z-10 flex items-center ${
        isLeft ? "justify-start" : "justify-end"
      }`}
    >
      <div
        className={`bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-lg p-6 ${
          isLeft ? "mr-8" : "ml-8"
        } lg:w-80 md: w-70 sm: w-60 h-auto space-y-4`}
      >
        <div className="flex items-center space-x-4 mb-4">
          <div className="flex-shrink-0 w-12 h-12  bg-gradient-to-br from-cyan-900 to-cyan-400 rounded-full flex items-center justify-center text-white">
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
        <p className="text-gray-100 bg-white bg-opacity-10 rounded-xl p-4 backdrop-filter backdrop-blur-lg">
          {content}
        </p>
      </div>
      <div
        className={`absolute ${
          isLeft ? "-right-3" : "-left-3"
        } top-1/2 transform -translate-y-1/2 lg:w-80 md:w-70  sm: w-60 h-auto bg-gradient-to-br from-cyan-900 to-black rounded-xl shadow-md p-4`}
      >
        <div className="flex items-center justify-center space-x-3">
          {isLeft ? (
            <>
              <p className="text-gray-200">{prompt}</p>
              <CircleIcon className="h-12 w-12 text-cyan-200" />
            </>
          ) : (
            <>
              <CircleIcon className="h-12 w-12 text-cyan-200" />
              <p className="text-gray-200">{prompt}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
