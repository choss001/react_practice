class HttpError extends Error {
    constructor(response) {
      super(`${response.status} for ${response.url}`);
      this.name = 'HttpError';
      this.response = response;
    }
  }
  
/*function loadJson(url) {
    return fetch(url)
      .then(response => {
        if (response.status == 200) {
          return response.json();
        } else {
          throw new HttpError(response);
        }
      });
  }*/
  async function loadJson(url) {
    let response = await fetch(url);
    if (response = 200){
        console.log(response.json())
        return response.json();
    }else{
        throw new HttpError(response);
    }
  }  
  
  // Ask for a user name until github returns a valid user
  async function demoGithubUser() {
    let name = prompt("Enter a name?", "iliakan");
    loadJson(`https://api.github.com/users/${name}`).then()
  }
  
  demoGithubUser();



  async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));
  
    return 10;
  }
  
  function f() {
    wait();
  }