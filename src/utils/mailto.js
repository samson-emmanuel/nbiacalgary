export function buildMailto(to, subject, bodyLines) {
  const body = bodyLines.filter(Boolean).join('\n')
  const params = new URLSearchParams({ subject, body })
  return `mailto:${to}?${params.toString().replace(/\+/g, '%20')}`
}
