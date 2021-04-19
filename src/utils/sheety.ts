export const addData = <T>(payload: T): void => {
  const url = 'https://api.sheety.co/8a44a741c92c7db731048db192b34fd5/dementiaSurvey/survey'
  const body = {
    survey: {
      ...payload,
    },
  }
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
    .then((response) => response.json())
    .then((json) => {
      // Do something with object
      console.log(json.survey)
    })
}
