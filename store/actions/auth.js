export const SIGNUP = 'SIGNUP';

export const signup = (email, password) => {
  return async (dispatch) => {
    await fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBS8YZtxuBEW4itIL0m2woBqV7sKPjY4As',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true
        })
      }
    );

    if (!Response.ok) {
      throw new Error('Somemthing went rong');
    }

    const resData = await Response.json();

    dispatch({ type: SIGNUP });
  };
};
