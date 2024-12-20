async function getUsers() {
  const endpoint = "http://localhost:3000/users";
  try {
    const response = await fetch(endpoint);
    if (!response.ok) throw new Error("Failed to fetch data");
    const users = await response.json();

    const userContainer = document.getElementById("user-container");
    users.forEach((user) => {
      const listItem = document.createElement("li");
      listItem.style.backgroundColor = user.color || "#f0f8ff";
      listItem.innerHTML = `
        <span><strong>${user.username}</strong></span>
        <span>${user.firstName} ${user.lastName}</span>
      `;
      userContainer.appendChild(listItem);
    });
  } catch (error) {
    console.error("Error fetching users:", error.message);
  }
}

getUsers();
