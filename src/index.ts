/**
 * Tag function for writing template literals without breaking source code indentation.
 */

export function indedent(strings: TemplateStringsArray, ...args: any[]) {
  let result = ''

  /*
  Constructs a single string. Arguments are indented to match the
  indentation of their interpolating line.
  */

  for (const [i, arg] of args.entries()) {
    const str = strings[i]
    const match = str.match(/^(?:[\s\S]*\n)?([ \t]+)/)
    const indent = match ? match[1] : ''
    if (indent) {
      result += str + arg.toString().replace(/\n/g, '\n' + indent)
    } else {
      result += str + arg
    }
  }

  result += strings[strings.length - 1]

  /*
  Finds the shortest indentation string. Ignores the first line and
  any empty-like lines.
  */

  let shortestIndent: string | undefined
  let lines = result.split('\n').slice(1)
  lines = lines.filter((line) => line.match(/\S/))

  for (const line of lines) {
    const match = line.match(/^[ \t]+/)
    const indent = match ? match[0] : ''
    if (!shortestIndent || indent.length < shortestIndent.length) {
      shortestIndent = indent
      if (shortestIndent === '') {
        break // As short as possible
      }
    }
  }

  /*
  Removes any initial empty-like line if multi-line, otherwise trims
  the start. Always trims the end.
  */

  if (result.includes('\n')) {
    result = result.replace(/^\s*\n/, '')
    result = result.replace(/\s*$/, '')
  } else {
    result = result.trim()
  }

  /*
  Strips the shortest indentation from all lines.
  */

  if (shortestIndent) {
    const regex = new RegExp(`^${shortestIndent}`, 'gm')
    result = result.replace(regex, '')
  }

  return result
}

export default indedent
