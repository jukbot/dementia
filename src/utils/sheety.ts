//sheety.co/docs
const sheetUrl = 'https://api.sheety.co/8a44a741c92c7db731048db192b34fd5/dementiaSurvey'

export const getData = async (sheetName: string): Promise<any> => {
  const url = `${sheetUrl}/${sheetName}`

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    if (!response.ok) {
      const message = `An error has occured: ${response.status}`
      throw new Error(message)
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error(error)
  }
}

export const getDataById = async (sheetName: string, id: string): Promise<any> => {
  const url = `${sheetUrl}/${sheetName}/${id}`

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    if (!response.ok) {
      const message = `An error has occured: ${response.status}`
      throw new Error(message)
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error(error)
  }
}

export const addData = async <T>(payload: T, sheetName: string): Promise<any> => {
  const url = `${sheetUrl}/${sheetName}`
  const body = {
    survey: {
      ...payload,
    },
  }
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
    if (!response.ok) {
      const message = `An error has occured: ${response.status}`
      throw new Error(message)
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error(error)
  }
}

export const updateData = async <T>(payload: T, sheetName: string, id: string): Promise<any> => {
  const url = `${sheetUrl}/${sheetName}/${id}`
  const body = {
    survey: {
      ...payload,
    },
  }
  try {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
    if (!response.ok) {
      const message = `An error has occured: ${response.status}`
      throw new Error(message)
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error(error)
  }
}
