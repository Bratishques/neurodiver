// data.ts
export interface Question {
  id: number;
  text: string;
  options: { letter: string; text: string }[];
}

export interface TestResult {
  title: string;
  description: string;
}

export const testResults: TestResult[] = [
  {
    title: 'ADHD',
    description:
      'You’re a degen on 5x speed. Minted before reading, staked before knowing the APY, and already rage-quit before the Discord AMA even started. Every chart is a 1-minute play and every project is your new hyperfixation — for 12 minutes.',
  },
  {
    title: 'AUTISM',
    description:
      "You found a typo in the smart contract, wrote a 14-tweet thread explaining it, and already drafted a better version of the protocol on GitHub. While everyone else is mooning, you're refactoring the DAO voting system for scalability.",
  },
  {
    title: 'TOURETTE’S SYNDROME',
    description:
      "You join a project, and within 3 minutes you're all caps in the chat yelling 'EXIT SCAM INCOMING'. You don’t DYOR — you just rage-check tokenomics and call it a rug if it’s not bullish enough. Chaos is alpha.",
  },
  {
    title: 'DYSLEXIA',
    description:
      'You wanted to bridge, but ended up on a YouTube tutorial from 2021. MetaMask still scares you and whitepapers look like Matrix code. But hey — you’re vibes-first, logic-later. Respect.',
  },
  {
    title: 'NORMIE',
    description:
      'You read the roadmap, ask questions in Discord, and buy after confirmation from 3 different chats. You don’t FOMO, you DYOR (kind of). Basically the crypto equivalent of a guy who wears a seatbelt even in the backseat.',
  },
  {
    title: 'OCD',
    description:
      'You’ve triple-checked the token contract, made a Notion board of every vesting schedule, and manually drew Fibonacci levels for fun. Your wallet is clean, your Discord is sorted, and your trades are backed by 12 hours of spreadsheeting.',
  },
];

export const questions: Question[] = [
  {
    id: 1,
    text: 'When you read the whitepaper of an L1 solution, you:',
    options: [
      { letter: 'A', text: 'Rush to check the 1-minute chart in a minute' },
      { letter: 'B', text: "Try to read it, but can't" },
      { letter: 'C', text: 'Finish reading it without understanding half' },
      {
        letter: 'D',
        text: "Randomly bang on the table if you don't like the tokenomics",
      },
      { letter: 'E', text: 'Read each sentence 3 times to be sure' },
      {
        letter: 'F',
        text: 'Get stuck on one sentence and wonder why the logo is crooked',
      },
    ],
  },
  {
    id: 2,
    text: 'A new project is launching a presale. Your actions:',
    options: [
      { letter: 'A', text: 'Jump in at the 3-second mark – no time to think' },
      {
        letter: 'B',
        text: "Try to understand, but can't even connect MetaMask",
      },
      {
        letter: 'C',
        text: 'Read all the terms, then go to the chat and ask what people think',
      },
      {
        letter: 'D',
        text: "Yell in the chat: 'It's a scam!' and block everyone",
      },
      { letter: 'E', text: 'Check the contract address 5 times' },
      {
        letter: 'F',
        text: 'Wait for a full audit, analyze all the information',
      },
    ],
  },
  {
    id: 3,
    text: 'How do you study the tokenomics of a project?',
    options: [
      {
        letter: 'A',
        text: "Don't study it – just trade the token if the chart looks good",
      },
      {
        letter: 'B',
        text: "Try, but get confused by terms like 'emission,' 'unlocking' ",
      },
      { letter: 'C', text: 'Just study the important points' },
      {
        letter: 'D',
        text: "If I see 'more than 30% for the team' – I close the tokenomics",
      },
      {
        letter: 'E',
        text: 'Look for errors in the numbers and check if everything adds up ',
      },
      {
        letter: 'F',
        text: 'Try to figure out how to improve the model (Autism)',
      },
    ],
  },
  {
    id: 4,
    text: "When a DAO vote is held in the project's chat:",
    options: [
      { letter: 'A', text: 'Vote for the most meme-worthy option' },
      { letter: 'B', text: 'Press a random button' },
      { letter: 'C', text: "Read all options, then vote 'like the majority'" },
      {
        letter: 'D',
        text: "Type in the chat in caps lock: 'EVERYTHING IS DECIDED ALREADY!'",
      },
      { letter: 'E', text: "Don't vote – afraid of making a mistake" },
      {
        letter: 'F',
        text: 'Write an analysis of the vote and send it in the chat',
      },
    ],
  },
  {
    id: 5,
    text: 'How do you read the roadmap?',
    options: [
      { letter: 'A', text: "Just look for the date when it says 'moon" },
      { letter: 'B', text: 'See dates and signatures and understand nothing' },
      { letter: 'C', text: "Read carefully, even if it's boring" },
      {
        letter: 'D',
        text: "Don't read the roadmap because you don't trust it",
      },
      { letter: 'E', text: 'Mark all release dates in your calendar' },
      {
        letter: 'F',
        text: 'Compare it with the roadmaps of 3 other projects and analyze',
      },
    ],
  },
  {
    id: 6,
    text: 'WHEN THE MARKET IS BULLISH:',
    options: [
      { letter: 'A', text: '15 seconds, then open another one' },
      {
        letter: 'B',
        text: "Don't understand why the candles are green and red",
      },
      {
        letter: 'C',
        text: 'Look at the daily chart and wait for consolidation',
      },
      { letter: 'D', text: 'See a downtrend and still open a long position' },
      {
        letter: 'E',
        text: 'Manually mark all levels on the chart and review it 3 times',
      },
      {
        letter: 'F',
        text: 'Turn on 5 indicators but only trust your intuition',
      },
    ],
  },
  {
    id: 7,
    text: "What do you feel when you level up on the project's Discord server?",
    options: [
      { letter: 'A', text: "Joy, as if you've won the lottery" },
      {
        letter: 'B',
        text: "Didn't understand how it happened, but it's cool ",
      },
      { letter: 'C', text: 'Just regular gamification, fine' },
      {
        letter: 'D',
        text: "Get a higher role and wonder why you haven't been rewarded",
      },
      {
        letter: 'E',
        text: 'Immediately screenshot, record everything, track progress',
      },
      { letter: 'F', text: 'Check who leveled up faster' },
    ],
  },
  {
    id: 8,
    text: 'The developers delayed the update launch by a week. Your reaction:',
    options: [
      { letter: 'A', text: 'Start looking for another project, trust is gone' },
      {
        letter: 'B',
        text: "Don't understand what update is being talked about",
      },
      { letter: 'C', text: "Well, it's okay, let them do it right" },
      {
        letter: 'D',
        text: 'Write an angry post on Twitter about how stupid the developers are',
      },
      {
        letter: 'E',
        text: 'Read the explanation 4 times and write a letter to support ',
      },
      {
        letter: 'F',
        text: "Start making your version of the product 'the right way'",
      },
    ],
  },
  {
    id: 9,
    text: 'What do you think about NFT collections from projects?',
    options: [
      {
        letter: 'A',
        text: 'Bought, forgot, sold, bought again – a cool experience',
      },
      { letter: 'B', text: "Didn't figure out how to mint, but wanted to" },
      { letter: 'C', text: 'Check if there is utility – if yes, I buy' },
      {
        letter: 'D',
        text: "Don't understand how a picture can cost more than $1000",
      },
      {
        letter: 'E',
        text: 'Spend 2 hours reading about the roles of each NFT',
      },
      {
        letter: 'F',
        text: 'Write to support why the metadata for token #2317 is invalid ',
      },
    ],
  },
  {
    id: 10,
    text: 'When the project scams:',
    options: [
      { letter: 'A', text: "Was already in a new one – didn't even notice" },
      {
        letter: 'B',
        text: "Didn't understand what happened, but there's no more money",
      },
      { letter: 'C', text: 'Well, it happens, crypto risks' },
      {
        letter: 'D',
        text: "Write in the chat: 'I'll find you, you bastards! [thinking half of the swear words can be censored]'",
      },
      {
        letter: 'E',
        text: 'Read transactions in the blockchain explorer for 5 hours',
      },
      { letter: 'F', text: 'Write a detailed analysis post on Twitter' },
    ],
  },
];
