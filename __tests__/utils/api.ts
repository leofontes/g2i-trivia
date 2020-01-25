import {buildQuery, QueryParams} from '../../src/utils/api'

test('buildquery', () => {
  const params: QueryParams = {
    test: 1,
    bonus: 'yes',
  }
  expect(buildQuery(params)).toBe('?test=1&bonus=yes')
})

test('buildqueryundefined', () => {
  expect(buildQuery(undefined)).toBe('')
})
