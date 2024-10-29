const projectId = '94ni6bav'
const dataset = 'production'
const apiVersion = '2022-03-07'

const baseUrl = `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}`

export const fetchSanityData = async (query) => {
  const url = `${baseUrl}?query=${encodeURIComponent(query)}`

  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`Erreur: ${response.statusText}`)
    }
    const data = await response.json()
    // console.log(data.result)
    return data.result
  } catch (error) {
    console.error("Erreur lors de la récupération des données:", error)
    return null
  }
}