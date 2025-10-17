import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import MemberCard, { Member } from '@/components/members/MemberCard';
import CoreTeamDisplay from '@/components/members/CoreTeamDisplay';

// --- DATA FETCHING AND TRANSFORMATION ---
const getMembers = (): Member[] => {
  const membersDirectory = path.join(process.cwd(), 'members');
  const filenames = fs.readdirSync(membersDirectory);

  const members = filenames
    .filter((filename) => filename !== 'sample.md')
    .map((filename) => {
      // Create a slug from the filename
      const slug = filename.replace(/\.md$/, '');
      const filePath = path.join(membersDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');

      const { data } = matter(fileContents);

      // --- PARSE `collections` ---
      const isCore = data.collections?.includes('core_team') || false;
      const memberYears = (data.collections || [])
        .filter((col: string) => col.startsWith('members>'))
        .map((col: string) => parseInt(col.split('>')[1], 10))
        .filter(Boolean); // remove any NaN values

      // --- PARSE `customFields` into a simple object ---
      const socials = (data.customFields || []).reduce(
        (acc: any, field: any) => {
          const key = Object.keys(field)[0];
          const value = field[key];
          acc[key] = value;
          return acc;
        },
        {}
      );

      // --- Return the TRANSFORMED, clean object ---
      return {
        slug,
        name: data.title,
        image: data.previewimage,
        description: data.description,
        isCore,
        memberYears,
        socials
      };
    })
    // Sort members alphabetically by name
    .sort((a, b) => a.name.localeCompare(b.name));

  return members;
};

// --- THE PAGE COMPONENT ---
const MembersPage = () => {
  const allMembers = getMembers();

  // Separate members into core and general categories
  const coreMembers = allMembers.filter((member) => member.isCore);
  const generalMembers = allMembers.filter((member) => !member.isCore);

  return (
    <div className="mx-auto w-[90%] max-w-7xl px-4 py-8">
      <h1 className="text-center text-3xl font-bold text-white underline decoration-sky-400 decoration-4 underline-offset-8 md:text-5xl">
        Meet the Members!
      </h1>

      {/* Core Team Section with Filtering */}
      {coreMembers.length > 0 && <CoreTeamDisplay coreMembers={coreMembers} />}

      {/* General Members Section */}
      <h2 className="mt-16 text-center text-3xl font-bold text-white underline decoration-sky-400 decoration-4 underline-offset-8 md:text-4xl">
        Our Community
      </h2>
      <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {generalMembers.map((member) => (
          <MemberCard key={member.slug} member={member} />
        ))}
      </div>
    </div>
  );
};

export default MembersPage;
