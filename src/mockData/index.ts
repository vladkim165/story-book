export interface OptionType {
  group: string;
  title: string;
  tags?: string[];
  key?: string;
  children?: readonly JSX.Element[];
}

export const options: OptionType[] = [
  {
    group: 'Q&A',
    title: 'Why JS?',
    tags: ['Array, Typescript, Python'],
  },
  {
    group: 'Q&A',
    title: 'How do I undo the most recent local commits in Git?',
    tags: ['Git, Typescript, Python'],
  },
  {
    group: 'Q&A',
    title: 'How do I delete a Git branch locally and remotely?',
    tags: ['Git, Typescript, Python'],
  },
  { group: 'Q&A', title: 'What does"yield" do in Python?', tags: ['Python'] },
  {
    group: 'Q&A',
    title: 'How can I remove item from an array in JavaScript?',
    tags: ['Javascript, Typescript, Python'],
  },
  { group: 'Q&A', title: 'Which JSON content type do I use?', tags: ['Javascript, Typescript, Python'] },
  { group: 'Q&A', title: 'How do I rename a local Git branch?', tags: ['Javascript, Typescript, Python'] },
  { group: 'Q&A', title: 'ow do I undo git add before commit?', tags: ['Javascript, Typescript, Python'] },
  { group: 'Q&A', title: 'Can comments be used in JSON?', tags: ['Javascript, Typescript, Python'] },
  { group: 'Q&A', title: 'What and where are the stack and heap?', tags: ['Javascript, Typescript, Python'] },
  { group: 'Q&A', title: 'Why does HTML think “chucknorris” is a color?', tags: ['Javascript, Typescript, Python'] },
  { group: 'Q&A', title: 'How do JavaScript closures work?', tags: ['Javascript, Typescript, Python'] },
  {
    group: 'Q&A',
    title: 'Whats the difference between "let" and "var" in Javascript?',
    tags: ['Javascript, Typescript, Python'],
  },
  { group: 'Tags', title: 'Java' },
  { group: 'Tags', title: 'Javascript' },
  { group: 'Tags', title: 'javascript-adobe-framework' },
  { group: 'Tags', title: 'MaterialUI' },
  { group: 'Tags', title: 'React' },
  { group: 'Tags', title: 'Vue' },
  { group: 'Tags', title: 'Next.js' },
  { group: 'Tags', title: 'Python' },
  { group: 'Tags', title: 'Spring' },
];
