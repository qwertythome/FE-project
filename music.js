function getautor() {
    const urlkey = window.location.search;
    const url = new URLSearchParams(urlkey);
    const autor = url.get('token');
    console.log(autor);
  
  
  
    fetch("http://localhost:3000/auth/getsongs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({autor:autor})
    })
    .then((response) => {
      // Handle the response from the server
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      // Handle the JSON response data here
      console.log(data);
    })
    .catch((error) => {
      // Handle any errors that occurred during the fetch
      console.error('Error:', error);
    });
  }
  
  getautor();