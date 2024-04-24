import React, { useState } from 'react';

function userdata() {
  const [data, setData] = useState(null);

  const fetchData = () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          setData(JSON.parse(xhr.responseText));
        } else {
          console.error('Request failed:', xhr.status);
        }
      }
    };
    xhr.send();
  };

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
    </div>
  );
}

export default userdata;
