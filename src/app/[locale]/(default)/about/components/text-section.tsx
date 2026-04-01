import Image from 'next/image';
import React from 'react';

import { generateSlug } from '@/lib/utils';

const TextSection = async ({
  title,
  body,
  bulletPoints,
  isBullet = false,
  iconPrefix,
}: {
  title: string;
  body?: string;
  bulletPoints?: string[];
  isBullet?: boolean;
  iconPrefix?: string;
}) => {
  return (
    <div
      id={generateSlug(title)}
      className="group mb-12 px-4 text-primary-foreground transition-all duration-300 hover:bg-white/5 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-5xl rounded-xl p-6">
        <div>
          <h2 className="mb-6 text-left text-2xl font-bold tracking-tight text-accent-500 md:text-3xl">
            {title}
          </h2>
          <div className="flex flex-col items-start justify-between gap-6 text-sm sm:flex-row sm:text-base lg:text-lg">
            {isBullet ? (
              <ul className="list-outside list-disc pl-3">
                {bulletPoints?.map((point, index) => (
                  <li
                    key={`${point}-${index}`}
                    className="mb-4 text-white/90 transition-all duration-300 hover:text-white"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            ) : bulletPoints ? (
              <div className="grid grid-cols-1 gap-6 text-white md:grid-cols-2">
                {bulletPoints?.map((point, index) => (
                  <div
                    key={`${point}-${index}`}
                    className="group flex items-center gap-4 rounded-lg p-4 transition-all duration-300 hover:bg-white/5"
                  >
                    <span className="flex-shrink-0">
                      <Image
                        className="h-12 w-12 transform transition-transform duration-300 group-hover:scale-110"
                        src={`${iconPrefix}-${index + 1}.svg`}
                        alt={`${iconPrefix}_${index + 1}.svg`}
                        width={100}
                        height={100}
                      />
                    </span>
                    <p className="text-white/90 transition-all duration-300 group-hover:text-white">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="whitespace-pre-line text-pretty break-words text-base leading-relaxed text-white/90 sm:text-lg lg:text-xl">
                {body}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextSection;
