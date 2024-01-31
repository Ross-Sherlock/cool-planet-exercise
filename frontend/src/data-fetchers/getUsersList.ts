const getUsersList = async () => {
  try {
    const response = await fetch("http://localhost:3000/users");

    if (response.status === 404) {
      throw new Error("Users not found");
    }

    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }

    return response.json();
  } catch (error) {
    // Catch network errors
    if (error instanceof TypeError) {
      throw new Error("Failed to fetch");
    } else {
      // Throw other types of errors
      throw error;
    }
  }
};

export default getUsersList;
