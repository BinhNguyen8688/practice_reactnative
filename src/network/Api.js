const BASE_URL='http://localhost:3000';
const headers = {
  'Content-Type': 'application/json',
  'charset': 'utf-8'
}

export default class API {
  static signIn(userCredential){
        let signInURL = `${BASE_URL}/signin`;
        return fetch(signInURL, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(userCredential)
        }).then(response => {
            //console.log(response.ok);
            return response.json();
        })
    }
}
