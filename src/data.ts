import { Project, Profile } from './types';

export const initialProfile: Profile = {
  fullName: 'NDATIMANA Christine',
  headline: "Add Christine's professional headline",
  biography: "Update with Christine's real biography",
  primarySkill: 'Add a genuine primary skill',
  availability: 'Availability to be confirmed',
  imageUri: null
};

export const skills = [
  { name: 'Skill 1 to confirm', detail: "Replace with a genuine skill Christine can demonstrate." },
  { name: 'Skill 2 to confirm', detail: "Replace with a genuine skill Christine can demonstrate." },
  { name: 'Skill 3 to confirm', detail: "Replace with a genuine skill Christine can demonstrate." },
  { name: 'Skill 4 to confirm', detail: "Replace with a genuine skill Christine can demonstrate." },
  { name: 'Skill 5 to confirm', detail: "Replace with a genuine skill Christine can demonstrate." }
];

export const education = [
  { period: 'Current', title: 'SWE 3409 Mobile Application Development', detail: 'INES Ruhengeri' },
  { period: 'To be added', title: 'Verified education or training', detail: "Add Christine's real qualification, training and dates." }
];

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Project 1: add a genuine project',
    problem: "Pending: describe the real problem Christine's project addressed.",
    contribution: "Pending: describe Christine's actual contribution.",
    technology: 'Pending: add technologies actually used.',
    outcome: 'Pending: add a verified result, if applicable.'
  },
  {
    id: 'project-2',
    title: 'Project 2: add a genuine project',
    problem: 'Pending: describe the real problem this project addressed.',
    contribution: "Pending: describe Christine's actual contribution.",
    technology: 'Pending: add technologies actually used.',
    outcome: 'Pending: add a verified result, if applicable.'
  }
];
