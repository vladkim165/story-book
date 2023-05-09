interface OptionType {
  group: string;
  payload: string;
  tags?: string[];
}

export const options: OptionType[] = [
  {
    group: 'Q&A',
    payload: 'Why is processing a sorted array faster than processing an unsorted array?',
    tags: ['Array, Typescript, Python'],
  },
  {
    group: 'Q&A',
    payload: 'How do I undo the most recent local commits in Git?',
    tags: ['Git, Typescript, Python'],
  },
  {
    group: 'Q&A',
    payload: 'How do I delete a Git branch locally and remotely?',
    tags: ['Git, Typescript, Python'],
  },
  { group: 'Q&A', payload: 'What does the "yield" keyword do in Python?', tags: ['Python'] },
  {
    group: 'Q&A',
    payload: 'How can I remove a specific item from an array in JavaScript?',
    tags: ['Javascript, Typescript, Python'],
  },
  { group: 'Q&A', payload: 'Which JSON content type do I use?', tags: ['Javascript, Typescript, Python'] },
  { group: 'Q&A', payload: 'How do I rename a local Git branch?', tags: ['Javascript, Typescript, Python'] },
  { group: 'Q&A', payload: 'ow do I undo git add before commit?', tags: ['Javascript, Typescript, Python'] },
  { group: 'Q&A', payload: 'Can comments be used in JSON?', tags: ['Javascript, Typescript, Python'] },
  { group: 'Q&A', payload: 'What and where are the stack and heap?', tags: ['Javascript, Typescript, Python'] },
  { group: 'Q&A', payload: 'Why does HTML think “chucknorris” is a color?', tags: ['Javascript, Typescript, Python'] },
  { group: 'Q&A', payload: 'How do JavaScript closures work?', tags: ['Javascript, Typescript, Python'] },
  {
    group: 'Q&A',
    payload: 'What is the difference between "let" and "var" in Javascript?',
    tags: ['Javascript, Typescript, Python'],
  },
  { group: 'Tags', payload: 'Java' },
  { group: 'Tags', payload: 'Javascript' },
  { group: 'Tags', payload: 'javascript-adobe-framework' },
  { group: 'Tags', payload: 'MaterialUI' },
  { group: 'Tags', payload: 'React' },
  { group: 'Tags', payload: 'Vue' },
  { group: 'Tags', payload: 'Next.js' },
  { group: 'Tags', payload: 'Python' },
  { group: 'Tags', payload: 'Spring' },
];
