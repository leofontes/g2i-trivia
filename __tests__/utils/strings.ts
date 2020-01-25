import {capitalize} from '../../src/utils/strings'

test('capitalize', () => {
  expect(capitalize('abc')).toBe('Abc')
  expect(capitalize('')).toBe('')
})
