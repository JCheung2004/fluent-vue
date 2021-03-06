export function assert(condition: boolean, message: string) {
  if (!condition) {
    throw new Error(`[fluent-vue] ${message}`)
  }
}

export function warn(message: string) {
  if (process.env.NODE_ENV !== 'production') {
    console.warn(`[fluent-vue] ${message}`)
  }
}
