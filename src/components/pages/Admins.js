// Admins.js
import React from 'react';
import { useUser } from '../UserContext'; // Import useUser hook

function Admins() {
  // Use the useUser hook to get the user context
  const userContext = useUser();

  // Check if the user has the 'admin' role
  const isAdmin = userContext.user.roles.includes('Admin');

  return (
    <div>
      <h2>Admins Page</h2>
      {isAdmin ? (
        <p>You have access to this page as an admin.</p>
      ) : (
        <p>Access denied. This page is for admins only.</p>
      )}
    </div>
  );
}

export default Admins;
