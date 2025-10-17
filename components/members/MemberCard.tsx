import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export type Member = {
  slug: string;
  name: string;
  image: string;
  description: string;
  isCore: boolean;
  memberYears: number[];
  socials: { [key: string]: string };
};

const socialIconMap: { [key: string]: React.ElementType } = {
  Github: FaGithub,
  Linkedin: FaLinkedin,
  Instagram: FaInstagram,
  X: FaXTwitter,
  Email: FaEnvelope,
};

const MemberCard = ({ member }: { member: Member }) => {
  return (
    <div className="flex flex-col items-center rounded-lg border border-slate-700 bg-slate-800/50 p-6 text-center shadow-lg transition-transform duration-300 hover:scale-105 hover:border-sky-400">
      <Image
        src={member.image}
        alt={`Profile photo of ${member.name}`}
        width={128}
        height={128}
        className="h-32 w-32 rounded-full border-4 border-slate-600 object-cover"
      />
      <h3 className="mt-4 text-2xl font-bold text-white">{member.name}</h3>
      <p className="mt-2 text-sm text-slate-300">{member.description}</p>
      
      {/* Dynamically render social icons */}
      <div className="mt-4 flex flex-wrap justify-center gap-4">
        {Object.entries(member.socials).map(([name, url]) => {
          const IconComponent = socialIconMap[name];
          if (!IconComponent) return null; // Don't render if we don't have an icon for it
          return (
            <Link
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name}'s ${name}`}
              className="text-slate-400 transition-colors hover:text-sky-400"
            >
              <IconComponent size={24} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MemberCard;
