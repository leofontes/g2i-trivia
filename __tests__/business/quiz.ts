import {
  getScoreString,
  mapAnswersToQuestions,
  getConfettiAmount,
} from '../../src/business/QuizBusiness'
import Question from '../../src/model/Question'

const questions: Question[] = [
  {
    user_answer: {
      user_answer: 'true',
      is_correct: true,
    },
    question: 'Some questions',
    correct_answer: 'True',
    category: 'Trivia',
    difficulty: 'hard',
    incorrect_answers: ['false'],
    type: 'boolean',
  },
  {
    user_answer: {
      user_answer: 'True',
      is_correct: true,
    },
    question: 'Some questions',
    correct_answer: 'true',
    category: 'Trivia',
    difficulty: 'hard',
    incorrect_answers: ['false'],
    type: 'boolean',
  },
]

test('confetti', () => {
  let confetti = getConfettiAmount(questions)
  expect(confetti).toBe(50)
})

test('score', () => {
  let score = getScoreString(questions)
  expect(score).toBe('You scored\n2 / 2')
})

const unswaredQuestions: Question[] = [
  {
    user_answer: undefined,
    question: 'Some questions',
    correct_answer: 'True',
    category: 'Trivia',
    difficulty: 'hard',
    incorrect_answers: ['false'],
    type: 'boolean',
  },
  {
    user_answer: undefined,
    question: 'Some questions',
    correct_answer: 'True',
    category: 'Trivia',
    difficulty: 'hard',
    incorrect_answers: ['false'],
    type: 'boolean',
  },
]
const userAnswers: Boolean[] = [true, false]

test('mapAnswers', () => {
  let mappedQuestions = mapAnswersToQuestions(unswaredQuestions, userAnswers)
  expect(mappedQuestions[0].user_answer?.is_correct).toBe(true)
  expect(mappedQuestions[1].user_answer?.is_correct).toBe(false)
})
