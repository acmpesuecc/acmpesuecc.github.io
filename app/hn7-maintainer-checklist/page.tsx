'use client';

import { useEffect, useRef, useState } from 'react';
import { Atkinson_Hyperlegible } from 'next/font/google';
import './hacktoberfest.css';

const atkinsonRegular = Atkinson_Hyperlegible({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700']
});

interface ChecklistItem {
  id: string;
  label: string;
  checked: boolean;
  children?: ChecklistItem[];
}

interface Section {
  id: string;
  title: string;
  emoji: string;
  items: ChecklistItem[];
  expanded: boolean;
}

// Cookie getter at module level (only runs on client)
const getCookie = (name: string): string | null => {
  if (typeof window === 'undefined') return null;
  const nameEQ = name + '=';
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

export default function HN7MaintainerChecklist() {
  // Use lazy initialization to load from cookies on first render
  const [sections, setSections] = useState<Section[]>(() => {
    const saved = getCookie('hn7-checklist-state');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return [];
      }
    }
    return [];
  });

  // Use ref to track if we're on client (for logic)
  const isMountedRef = useRef(false);
  // Use state to trigger re-render after mount
  const [mounted, setMounted] = useState(false);
  const [showCongrats, setShowCongrats] = useState(false);
  const hasShownCongratsRef = useRef(false);

  // Initialize checklist data
  const initializeSections = (): Section[] => [
    {
      id: 'basic',
      title: 'Basic Checklist',
      emoji: '🧩',
      expanded: true,
      items: [
        {
          id: 'readme',
          label: 'README.md',
          checked: false,
          children: [
            {
              id: 'readme-1',
              label: 'What the project does and its purpose',
              checked: false
            },
            {
              id: 'readme-2',
              label: 'What the project is built on (tech stack)',
              checked: false
            },
            {
              id: 'readme-3',
              label:
                'How people can build and run the project locally (and test if needed)',
              checked: false
            },
            {
              id: 'readme-4',
              label: 'Maintainer(s) in charge (with GitHub link)',
              checked: false
            },
            {
              id: 'readme-5',
              label: 'Clear setup and contribution instructions',
              checked: false
            },
            {
              id: 'readme-6',
              label: 'Link or mention of CONTRIBUTING.md',
              checked: false
            },
            {
              id: 'readme-7',
              label: 'License details (mention the repo is open-source)',
              checked: false
            }
          ]
        },
        {
          id: 'contributing',
          label: 'CONTRIBUTING.md',
          checked: false,
          children: [
            {
              id: 'contrib-1',
              label: 'Basic structure of the project',
              checked: false
            },
            {
              id: 'contrib-2',
              label: 'PR guidelines (keep it simple and clear)',
              checked: false
            },
            {
              id: 'contrib-3',
              label: 'Issue/Bug guidelines (optional)',
              checked: false
            },
            {
              id: 'contrib-4',
              label: 'Any rules specific to your project',
              checked: false
            },
            {
              id: 'contrib-5',
              label: 'Coding or formatting conventions (if any)',
              checked: false
            }
          ]
        },
        {
          id: 'license',
          label: 'LICENSE',
          checked: false,
          children: [
            {
              id: 'license-1',
              label: 'Any basic open-source license will do',
              checked: false
            },
            {
              id: 'license-2',
              label: 'If unsure, use MIT License',
              checked: false
            }
          ]
        },
        {
          id: 'coc',
          label: 'CODE_OF_CONDUCT.md (Optional but encouraged)',
          checked: false
        },
        {
          id: 'tags',
          label: 'Repository Tags',
          checked: false,
          children: [
            {
              id: 'tags-1',
              label: 'Must include "hacktoberfest" label',
              checked: false
            },
            {
              id: 'tags-2',
              label: 'Must include "hacknight-2025" label',
              checked: false
            }
          ]
        }
      ]
    },
    {
      id: 'issues',
      title: 'Issues',
      emoji: '🧾',
      expanded: true,
      items: [
        {
          id: 'issue-count',
          label: 'At least 4 initial issues created',
          checked: false
        },
        {
          id: 'issue-quick',
          label: 'At least 2 issues solvable within an hour',
          checked: false
        },
        {
          id: 'issue-requirements',
          label: 'Every issue must include',
          checked: false,
          children: [
            {
              id: 'issue-req-1',
              label: 'Explanation of the issue',
              checked: false
            },
            {
              id: 'issue-req-2',
              label: 'Possible fix or approach (optional)',
              checked: false
            },
            {
              id: 'issue-req-3',
              label: 'Relevant logs or screenshots (if any)',
              checked: false
            },
            {
              id: 'issue-req-4',
              label: "Maintainer's notes or insights",
              checked: false
            },
            {
              id: 'issue-req-5',
              label: 'Resources or references related to the issue',
              checked: false
            },
            {
              id: 'issue-req-6',
              label: 'Bounty Points assigned to the issue',
              checked: false
            }
          ]
        }
      ]
    },
    {
      id: 'points',
      title: 'Points System',
      emoji: '💰',
      expanded: true,
      items: [
        {
          id: 'bounty-understand',
          label:
            'Understand Bounty Points (0-50: minimal, 250-500: medium, 800-1500: major)',
          checked: false
        },
        {
          id: 'brownie-understand',
          label:
            'Understand Brownie Points (10-20 pts for exceptional work, up to 50 pts in rare cases)',
          checked: false
        },
        {
          id: 'points-assigned',
          label: 'All issues have appropriate bounty points assigned',
          checked: false
        }
      ]
    },
    {
      id: 'final',
      title: 'Final Notes',
      emoji: '📝',
      expanded: true,
      items: [
        {
          id: 'no-delete',
          label:
            'DO NOT delete or intentionally break features before the hack',
          checked: false
        },
        {
          id: 'practical',
          label: 'Keep issues practical and fair',
          checked: false
        },
        {
          id: 'structured',
          label: 'Well-structured README and CONTRIBUTING files',
          checked: false
        },
        {
          id: 'communication',
          label: 'Clear communication plan with contributors',
          checked: false
        }
      ]
    }
  ];

  // Cookie setter
  const setCookie = (name: string, value: string, days: number) => {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
  };

  // Initialize sections if not loaded from cookie
  useEffect(() => {
    if (sections.length === 0) {
      setSections(initializeSections());
    }
    // Mark as mounted
    isMountedRef.current = true;
    setMounted(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Save state to cookies whenever it changes
  useEffect(() => {
    if (isMountedRef.current && sections.length > 0) {
      setCookie('hn7-checklist-state', JSON.stringify(sections), 365);
    }
  }, [sections]);

  // Toggle item checked state
  const toggleItem = (sectionId: string, itemId: string, childId?: string) => {
    setSections((prevSections) =>
      prevSections.map((section) => {
        if (section.id === sectionId) {
          return {
            ...section,
            items: section.items.map((item) => {
              if (item.id === itemId) {
                if (childId && item.children) {
                  const updatedChildren = item.children.map((child) =>
                    child.id === childId
                      ? { ...child, checked: !child.checked }
                      : child
                  );
                  const allChildrenChecked = updatedChildren.every(
                    (c) => c.checked
                  );
                  return {
                    ...item,
                    children: updatedChildren,
                    checked: allChildrenChecked
                  };
                } else {
                  const newChecked = !item.checked;
                  if (item.children) {
                    return {
                      ...item,
                      checked: newChecked,
                      children: item.children.map((c) => ({
                        ...c,
                        checked: newChecked
                      }))
                    };
                  }
                  return { ...item, checked: newChecked };
                }
              }
              return item;
            })
          };
        }
        return section;
      })
    );
  };

  // Toggle section expansion
  const toggleSection = (sectionId: string) => {
    setSections((prevSections) =>
      prevSections.map((section) =>
        section.id === sectionId
          ? { ...section, expanded: !section.expanded }
          : section
      )
    );
  };

  // Calculate progress
  const calculateProgress = () => {
    let total = 0;
    let checked = 0;

    sections.forEach((section) => {
      section.items.forEach((item) => {
        if (item.children) {
          total += item.children.length;
          checked += item.children.filter((c) => c.checked).length;
        } else {
          total += 1;
          checked += item.checked ? 1 : 0;
        }
      });
    });

    return total > 0 ? Math.round((checked / total) * 100) : 0;
  };

  // Create confetti effect - must be declared before useEffect that uses it
  const createConfetti = () => {
    const colors = ['#A0A0FF', '#C2C2FF', '#5A5AB5', '#403F7D'];
    const confettiCount = 50;

    for (let i = 0; i < confettiCount; i++) {
      setTimeout(() => {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.background =
          colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 3 + 's';
        confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
        document.body.appendChild(confetti);

        setTimeout(() => {
          confetti.remove();
        }, 5000);
      }, i * 30);
    }
  };

  // Check if all items are completed - use refs to avoid setState in effect
  const progress = sections.length > 0 ? calculateProgress() : 0;
  const shouldShowCongrats =
    progress === 100 && !hasShownCongratsRef.current && isMountedRef.current;

  useEffect(() => {
    if (shouldShowCongrats) {
      hasShownCongratsRef.current = true;
      setShowCongrats(true);
      createConfetti();
    }
  }, [shouldShowCongrats]);

  // Reset all checkboxes
  const resetAll = () => {
    if (
      confirm(
        'Are you sure you want to reset all checkboxes? This action cannot be undone.'
      )
    ) {
      setSections(initializeSections());
    }
  };

  // Show loading until mounted
  if (!mounted) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-xl text-white">Loading...</div>
      </div>
    );
  }

  return (
    <div
      className={`${atkinsonRegular.className} hacktoberfest-page relative mx-auto my-12 w-[90%] lg:my-0 lg:w-2/3`}
    >
      {/* Hacktoberfest Logo */}
      <div className="mx-auto mb-8 flex items-center justify-center gap-4 lg:mb-12">
        <div className="text-center">
          <img
            src="/hacktoberfest-logo.svg"
            alt="Hacktoberfest 2025 Logo"
            className="mx-auto h-16 w-auto lg:h-24"
          />
        </div>
      </div>

      <h1 className="mx-auto w-full text-center text-2xl font-extrabold text-[#A0A0FF] lg:text-5xl">
        HackNight 7.0 Maintainers Checklist
      </h1>

      <p className="mx-auto mt-6 text-center text-white lg:mt-8 lg:text-lg">
        Responsibility of maintainers starts much before the Night of HackNight.
        <br />
        Make sure your repositories follow and comply with all of the following
        points.
      </p>

      {/* Sticky Progress Bar with Hacktoberfest styling - Compact */}
      <div className="sticky top-2 z-50 mx-auto mt-8 rounded-lg border-2 border-[#A0A0FF] bg-[#1C1C3F] p-3 shadow-2xl backdrop-blur-xs lg:mt-12 lg:p-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1">
            <div className="mb-1 flex items-center justify-between">
              <span className="text-sm font-bold text-[#C2C2FF] lg:text-base">
                Progress
              </span>
              <span className="text-sm font-bold text-[#A0A0FF] lg:text-base">
                {progress}%
              </span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-[#403F7D]">
              <div
                className="h-full rounded-full bg-linear-to-r from-[#5A5AB5] via-[#A0A0FF] to-[#C2C2FF] transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* Reset Button inline with progress bar */}
          <button
            onClick={resetAll}
            className="rounded-md border-2 border-[#A0A0FF] bg-transparent px-3 py-1 text-sm font-bold text-[#A0A0FF] transition-all hover:bg-[#A0A0FF] hover:text-[#1C1C3F] lg:px-4 lg:py-1.5"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Example Link */}
      <div className="mx-auto mt-8 rounded-lg border-2 border-[#5A5AB5] bg-[#1C1C3F] p-4 lg:p-6">
        <p className="text-white lg:text-lg">
          💡{' '}
          <strong className="text-[#C2C2FF]">
            Example implementing all of the above:
          </strong>{' '}
          <a
            href="https://github.com/acmpesuecc/GRDNS"
            className="text-[#A0A0FF] underline hover:text-[#C2C2FF]"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/acmpesuecc/GRDNS
          </a>
        </p>
      </div>

      {/* Checklist Sections */}
      <div className="mt-8 mb-16 space-y-6 lg:mt-12 lg:mb-24">
        {sections.map((section) => (
          <div
            key={section.id}
            className="overflow-hidden rounded-lg border-2 border-[#5A5AB5] bg-[#1C1C3F]"
          >
            {/* Section Header */}
            <button
              onClick={() => toggleSection(section.id)}
              className="flex w-full items-center justify-between p-4 text-left transition-colors hover:bg-[#403F7D] lg:p-6"
            >
              <h2 className="text-xl font-bold text-[#A0A0FF] lg:text-2xl">
                {section.emoji} {section.title}
              </h2>
              <svg
                className={`h-6 w-6 transform text-[#A0A0FF] transition-transform ${
                  section.expanded ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Section Content */}
            {section.expanded && (
              <div className="border-t-2 border-[#5A5AB5] p-4 lg:p-6">
                <div className="space-y-3">
                  {section.items.map((item) => (
                    <div key={item.id} className="space-y-2">
                      {/* Parent Item */}
                      <label className="flex cursor-pointer items-start space-x-3 rounded-sm p-2 transition-colors hover:bg-[#403F7D]">
                        <input
                          type="checkbox"
                          checked={item.checked}
                          onChange={() => toggleItem(section.id, item.id)}
                          className="hacktoberfest-checkbox mt-1"
                        />
                        <span className="flex-1 font-bold text-white lg:text-lg">
                          {item.label}
                        </span>
                      </label>

                      {/* Child Items */}
                      {item.children && (
                        <div className="ml-8 space-y-2 border-l-2 border-[#5A5AB5]/50 pl-4">
                          {item.children.map((child) => (
                            <label
                              key={child.id}
                              className="flex cursor-pointer items-start space-x-3 rounded-sm p-2 transition-colors hover:bg-[#403F7D]"
                            >
                              <input
                                type="checkbox"
                                checked={child.checked}
                                onChange={() =>
                                  toggleItem(section.id, item.id, child.id)
                                }
                                className="hacktoberfest-checkbox hacktoberfest-checkbox-small mt-1"
                              />
                              <span className="flex-1 text-white/90">
                                {child.label}
                              </span>
                            </label>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Additional Information Sections */}
      <div className="mb-16 space-y-6 lg:mb-24">
        {/* Points System Details */}
        <div className="rounded-lg border-2 border-[#5A5AB5] bg-[#1C1C3F] p-4 lg:p-6">
          <h3 className="mb-4 text-xl font-bold text-[#A0A0FF] lg:text-2xl">
            💰 Bounty Points System
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-white">
              <thead>
                <tr className="border-b-2 border-[#5A5AB5]">
                  <th className="p-2 text-left font-bold text-[#C2C2FF]">
                    Points
                  </th>
                  <th className="p-2 text-left font-bold text-[#C2C2FF]">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#5A5AB5]/30">
                  <td className="p-2 font-bold text-[#A0A0FF]">0–50</td>
                  <td className="p-2">
                    Minimal contribution — documentation fixes, one-liners,
                    small chores
                  </td>
                </tr>
                <tr className="border-b border-[#5A5AB5]/30">
                  <td className="p-2 font-bold text-[#A0A0FF]">250–500</td>
                  <td className="p-2">
                    Medium contributions requiring some research or moderate
                    features
                  </td>
                </tr>
                <tr>
                  <td className="p-2 font-bold text-[#A0A0FF]">800–1500</td>
                  <td className="p-2">
                    Major contributions requiring domain-specific knowledge and
                    dedicated work
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Brownie Points */}
        <div className="rounded-lg border-2 border-[#5A5AB5] bg-[#1C1C3F] p-4 lg:p-6">
          <h3 className="mb-4 text-xl font-bold text-[#A0A0FF] lg:text-2xl">
            🍫 Brownie Points
          </h3>
          <p className="text-white lg:text-lg">
            Awarded{' '}
            <strong className="text-[#C2C2FF]">on top of bounty points</strong>{' '}
            for exceptional contributions — neat code, good documentation, or
            going beyond the issue&apos;s scope.
          </p>
          <ul className="mt-3 list-inside list-disc space-y-2 text-white lg:text-lg">
            <li>Typically up to 10-20 pts</li>
            <li>In exceptional cases, can go up to 50 pts</li>
          </ul>
        </div>

        {/* Final Notes */}
        <div className="rounded-lg border-2 border-[#5A5AB5] bg-[#1C1C3F] p-4 lg:p-6">
          <h3 className="mb-4 text-xl font-bold text-[#A0A0FF] lg:text-2xl">
            📝 Final Reminders
          </h3>
          <ul className="list-inside list-disc space-y-2 text-white lg:text-lg">
            <li>
              Keep issues practical and fair — this is a learning experience for
              all participants!
            </li>
            <li>
              A well-structured README and CONTRIBUTING file make your repo more
              inviting and manageable.
            </li>
            <li>
              Clear communication with contributors helps everyone have a smooth
              HackNight.
            </li>
          </ul>
        </div>
      </div>

      {/* Closing Message - Outside the box */}
      <div className="mb-16 text-center lg:mb-24">
        <p className="text-xl font-bold text-[#A0A0FF] lg:text-2xl">
          Have a blast!
        </p>
        <p className="mt-2 font-bold text-[#C2C2FF] lg:text-lg">
          — ACM Core 2025
        </p>

        {/* Maintainer Leads Note */}
        <div className="mx-auto mt-6 max-w-md rounded-lg border border-[#5A5AB5]/30 bg-[#1C1C3F]/50 p-4 text-sm text-white/80">
          <p className="mb-2 font-semibold text-[#C2C2FF]">
            Maintainer leads for this year are:
          </p>
          <p className="mb-1">
            <a
              href="mailto:mail@mebin.in"
              className="text-[#A0A0FF] hover:underline"
            >
              Mebin J Thattil
            </a>
            {' - '}
            <a
              href="mailto:mail@mebin.in"
              className="text-white/60 hover:text-[#A0A0FF]"
            >
              mail@mebin.in
            </a>
          </p>
          <p className="mb-2">
            <a
              href="mailto:pro.aditya.r@gmail.com"
              className="text-[#A0A0FF] hover:underline"
            >
              Aditya R
            </a>
            {' - '}
            <a
              href="mailto:pro.aditya.r@gmail.com"
              className="text-white/60 hover:text-[#A0A0FF]"
            >
              pro.aditya.r@gmail.com
            </a>
          </p>
          <p className="text-xs text-white/60">
            Contact any of us for any maintainer related issues.
          </p>
        </div>

        {/* Subtle hint */}
        <p className="mt-8 text-sm text-[#5A5AB5] opacity-60 lg:text-base">
          ✨ Psst... tick off all the boxes for a surprise :)
        </p>
      </div>

      {/* Congratulations Modal */}
      {showCongrats && (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/70 backdrop-blur-xs">
          <div className="animate-bounce-in relative mx-4 max-w-lg rounded-2xl border-4 border-[#A0A0FF] bg-[#1C1C3F] p-8 shadow-2xl">
            <button
              onClick={() => setShowCongrats(false)}
              className="absolute top-4 right-4 text-2xl font-bold text-[#A0A0FF] hover:text-[#C2C2FF]"
            >
              ×
            </button>
            <div className="text-center">
              <div className="mb-4 text-6xl">🎉</div>
              <h2 className="mb-4 text-3xl font-bold text-[#A0A0FF]">
                Congrats!
              </h2>
              <p className="mb-6 text-lg text-white">
                You&apos;re all set for HackNight. Here is a small gift for
                ticking off all the items
              </p>
              <a
                href="https://youtu.be/j5a0jTc9S10"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg border-2 border-[#A0A0FF] bg-linear-to-r from-[#5A5AB5] to-[#A0A0FF] px-6 py-3 font-bold text-white transition-all hover:scale-105 hover:shadow-lg"
              >
                Totally legit link 👀
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
