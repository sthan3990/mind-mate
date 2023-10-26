import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const UserProfile = () => {
  const router = useRouter();
  const { id } = router.query;

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`/api/get-user?id=${id}`)
        .then(response => response.json())
        .then(data => setUserData(data.user))
        .catch(error => console.error("Error fetching user data:", error));
    }
  }, [id]);

  return (
    <div>
      {userData && (
        <>
          <h1>First-name last-name</h1>
          <p>Email: sample@sample.com</p>
          {/* <h1>{userData.first_name} {userData.last_name}</h1>
          <p>Email: {userData.email}</p> */}
          {/* Add more fields as needed */}
        </>
      )}
    </div>
  );
};

export default UserProfile;
