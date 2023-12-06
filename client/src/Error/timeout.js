const timeoutMessage = 'The request could not reach the server. The API server may be down, or your connection may have been interrupted. Reload the page to try again.';

export default async function timeoutAfter(seconds = 6000){
    return new Promise((_, reject) => {
      setTimeout(()=> {
        reject(new Error(timeoutMessage));
      }, seconds);
    });
  }