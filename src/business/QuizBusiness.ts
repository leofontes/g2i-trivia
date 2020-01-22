import Question from '../model/Question'
import {capitalize} from '../utils/strings'

export function mapAnswersToQuestions(
  questions: Question[],
  answers: Boolean[],
): Question[] {
  console.log(questions)
  console.log(answers)

  return questions.map((question, index) => {
    const correctAnswer = question.correct_answer === 'True'

    return {
      ...question,
      user_answer: {
        is_correct: correctAnswer === answers[index],
        user_answer: capitalize(answers[index].toString()),
      },
    }
  })
}

export function getScoreString(questions: Question[]): string {
  let score = 0

  questions.forEach(question => {
    if (question.user_answer?.is_correct) {
      score++
    }
  })

  return `You scored\n${score} / ${questions.length}`
}
