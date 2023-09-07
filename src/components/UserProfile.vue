<template>
  <div class="user-profile">
    <div class="profile-frame">
      <i class="fas fa-user user-icon"></i>
    </div>
    <div class="user-info">
      <h2>User Profile</h2>
      <button @click="logout">Log Out</button> <!-- Logout button -->
    </div>
  </div>
</template>

<script>

</script>
  
  
  <style scoped>
  .user-profile {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .profile-frame {
    background-color: #fff; /* Frame background color */
    border: 2px solid #ccc; /* Frame border */
    border-radius: 50%; /* Make it a circle */
    padding: 20px; /* Adjust as needed */
  }
  
  .user-icon {
    font-size: 48px; /* Adjust the icon size as needed */
    color: #333; /* Icon color */
  }
  
  .user-info {
    margin-left: 20px; /* Add spacing between the frame and user info */
    text-align: center;
  }
  
  h2 {
    font-size: 24px; /* Heading font size */
    margin-bottom: 10px; /* Add spacing below the heading */
  }
  
  p {
    font-size: 18px; /* User name font size */
    font-weight: bold; /* Make the username bold */
  }
  
  button {
    background-color: #ff0000; /* Log Out button background color */
    color: #fff; /* Log Out button text color */
    padding: 10px 20px; /* Button padding */
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-top: 20px; /* Add spacing above the button */
  }
  
  button:hover {
    background-color: #cc0000; /* Hover background color */
  }
  </style>
  