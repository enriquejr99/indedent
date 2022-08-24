import test from 'node:test'
import assert from 'node:assert'
import indedent from '../dist/esm/index.js'

test('trim', () => {
  const a = indedent` \t foo \t `
  const b = 'foo'
  assert.strictEqual(a, b)
})

test('dedent spaces', () => {
  const a = indedent`
  foo
  `
  const b = 'foo'
  assert.strictEqual(a, b)
})

test('dedent tabs', () => {
  const a = indedent`
  \tfoo
  `
  const b = 'foo'
  assert.strictEqual(a, b)
})

test('inline', () => {
  const a = indedent`foo
                     bar`
  const b = 'foo\nbar'
  assert.strictEqual(a, b)
})

test('nested', () => {
  const a = indedent`
  foo
    bar
  baz
  `
  const b = 'foo\n  bar\nbaz'
  assert.strictEqual(a, b)
})

test('interpolation', () => {
  const a = indedent`
  foo
    ${'line 1\nline 2'}
  baz
  `
  const b = 'foo\n  line 1\n  line 2\nbaz'
  assert.strictEqual(a, b)
})
