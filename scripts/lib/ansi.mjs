const reset = '\x1b[0m'
const bold = '\x1b[1m'
const dim = '\x1b[2m'
const italic = '\x1b[3m'
const underline = '\x1b[4m'
const inverse = '\x1b[7m'

const { boldOff, dimOff } = '\x1b[22m'
const italicOff = '\x1b[23m'
const underlineOff = '\x1b[24m'
const inverseOff = '\x1b[27m'

const fgBlack = '\x1b[30m'
const fgRed = '\x1b[31m'
const fgGreen = '\x1b[32m'
const fgYellow = '\x1b[33m'
const fgBlue = '\x1b[34m'
const fgMagenta = '\x1b[35m'
const fgCyan = '\x1b[36m'
const fgWhite = '\x1b[37m'

const ansi = {
  reset,
  bold,
  dim,
  italic,
  underline,
  inverse,

  boldOff,
  dimOff,
  italicOff,
  underlineOff,
  inverseOff,

  fgBlack,
  fgRed,
  fgGreen,
  fgYellow,
  fgBlue,
  fgMagenta,
  fgCyan,
  fgWhite,
}

export default ansi
