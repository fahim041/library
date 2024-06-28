'use client';
import { useState } from 'react';
import frameworks, { Framework } from './struct';
import Link from 'next/link';

export default function HomePageForm() {
  const [selectedFramework, setSelectedFramework] = useState<Framework>(
    frameworks[0]
  );

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedFrameworkId = parseInt(e.target.value);
    const framework = frameworks.find(
      (framework) => framework.id === selectedFrameworkId
    );
    if (framework) {
      setSelectedFramework(framework);
    }
  };

  return (
    <div className='w-1/2'>
      <form>
        <label htmlFor="framework">Select a framework:</label>
        <select
          name="framework"
          id="framework"
          value={selectedFramework.id}
          onChange={handleChange}
          className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          {frameworks.map((framework) => (
            <option key={framework.id} value={framework.id}>
              {framework.name}
            </option>
          ))}
        </select>
      </form>

      {/* based on the framework show the feature and link to the pages */}
      <div className="mt-4">
        <h2 className="text-lg font-semibold">Features:</h2>
        <ul className="list-disc ml-4">
          {selectedFramework.features.map((feature) => (
            <li key={feature.id}>
              <Link href={feature.url} className="text-blue-500 hover:underline">
                {feature.name}
              </Link> - {' '}
              <a href={feature.code} target='_blank' className='text-blue-500 underline hover:cursor'>Code</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
