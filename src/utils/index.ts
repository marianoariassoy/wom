export const sanitizeTitleForURL = title => {
  let sanitizedTitle = title.trim().replace(/[^a-zA-Z0-9\s]/g, '')
  sanitizedTitle = sanitizedTitle.replace(/\s+/g, '-')
  sanitizedTitle = sanitizedTitle.toLowerCase()
  return sanitizedTitle
}
