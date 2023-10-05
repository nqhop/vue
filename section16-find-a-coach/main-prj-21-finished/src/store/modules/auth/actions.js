export default {
  login() {},
  async signup(context, payload) {
    console.log('signup ', payload);
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
    console.log('responseData: ', responseData);
    if (!response.ok) {
      console.log(responseData);
      // const error = new Error(responseData.message || 'Failed to authenticate.');
    }
  },
};
