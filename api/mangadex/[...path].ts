import type { VercelRequest, VercelResponse } from '@vercel/node'

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    return res.status(200).end()
  }

  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  // Get the path from the catch-all route
  // In Vercel, catch-all routes use the route name as the query key
  const pathParam = req.query.path || req.query['...path']
  const path = Array.isArray(pathParam) 
    ? pathParam.join('/') 
    : (pathParam as string) || ''

  // Build query string from query parameters (excluding 'path' and '...path')
  const queryParams = new URLSearchParams()
  Object.entries(req.query).forEach(([key, value]) => {
    if (key !== 'path' && key !== '...path') {
      if (Array.isArray(value)) {
        value.forEach(v => queryParams.append(key, String(v)))
      } else if (value) {
        queryParams.append(key, String(value))
      }
    }
  })
  const queryString = queryParams.toString()
  
  // Construct the full URL
  const targetUrl = `https://api.mangadex.org/${path}${queryString ? `?${queryString}` : ''}`
  
  // Log for debugging (remove in production if needed)
  console.log('MangaDex proxy - path:', path, 'targetUrl:', targetUrl)

  try {
    // Forward the request to MangaDex API
    const response = await fetch(targetUrl, {
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0',
        'Accept': 'application/json',
      },
    })

    // Get the response data
    const data = await response.json()

    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

    // Return the response with the same status code
    return res.status(response.status).json(data)
  } catch (error) {
    console.error('MangaDex API proxy error:', error)
    return res.status(500).json({ 
      error: 'Failed to proxy request to MangaDex API',
      message: error instanceof Error ? error.message : 'Unknown error'
    })
  }
}

