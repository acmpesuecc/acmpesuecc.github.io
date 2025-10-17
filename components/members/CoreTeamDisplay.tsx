'use client';

import { useState } from 'react';
import MemberCard, { Member } from './MemberCard';

type CoreTeamDisplayProps = {
  coreMembers: Member[];
};

const CoreTeamDisplay = ({ coreMembers }: CoreTeamDisplayProps) => {
  // Get a unique, sorted list of years from all core members
  const availableYears = [
    ...new Set(coreMembers.flatMap((member) => member.memberYears || [])),
  ].sort((a, b) => b - a); // Sort descending

  // Initialize with the most recent year if available, otherwise 'all'
  const [selectedYear, setSelectedYear] = useState<number | 'all'>(
    availableYears[0] || 'all'
  );

  // Filter members based on the selected year
  const filteredMembers =
    selectedYear === 'all'
      ? coreMembers
      : coreMembers.filter((member) => member.memberYears?.includes(selectedYear));

  return (
    <section>
      <h2 className="mt-12 text-center text-3xl text-white underline decoration-sky-300 underline-offset-8 lg:text-4xl">
        Core Team
      </h2>

      {/* Filter Buttons */}
      <div className="my-8 flex flex-wrap justify-center gap-2">
        <button
          onClick={() => setSelectedYear('all')}
          className={`rounded-md px-4 py-2 text-sm font-semibold transition-colors ${
            selectedYear === 'all'
              ? 'bg-sky-500 text-white'
              : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
          }`}
        >
          All
        </button>
        {availableYears.map((year) => (
          <button
            key={year}
            onClick={() => setSelectedYear(year)}
            className={`rounded-md px-4 py-2 text-sm font-semibold transition-colors ${
              selectedYear === year
                ? 'bg-sky-500 text-white'
                : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
            }`}
          >
            {year}
          </button>
        ))}
      </div>

      {/* Display Filtered Core Members */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredMembers.length > 0 ? (
          filteredMembers.map((member) => (
            <MemberCard key={member.slug} member={member} />
          ))
        ) : (
          <p className="col-span-full text-center text-slate-400">
            No core members found for the selected year.
          </p>
        )}
      </div>
    </section>
  );
};

export default CoreTeamDisplay;
