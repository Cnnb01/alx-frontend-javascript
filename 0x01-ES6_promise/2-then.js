function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    if (promise) {
      console.log('Got a response from the API');
      resolve({
        status: 200,
        body: 'success',
      });
    } else {
      reject(Error(' '));
    }
  });
}
export default handleResponseFromAPI;
