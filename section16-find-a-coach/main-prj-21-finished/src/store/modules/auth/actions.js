export default {
  login() {},
  async signup(context, payload) {
    const response = await fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDL_yZ9A2Zou2EHSE95ecf9JDMjZ6sYUfI',
      {
        method: 'POST',
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        }),
      }
    );

    const responseData = await response.json();
    if (!response.ok) {
      console.log('responseData: ', responseData.error.message);
      // console.log(responseData);
      const error = new Error(responseData.error.message);
      return error;
    }
    return responseData;
  },
};
