const basic_url =
  process.env.NODE_ENV === "production"
    ? "https://bat-mitzvah-list.herokuapp.com/users"
    : "http://localhost:4002/users";

  export const GetAllUser = async () => {
    return await fetch(`${basic_url}`, {
      headers: {
        Authorization: `bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .catch((error) => console.log({ error: "the method get isnt work" }));
  };
  export const GetUserById = async () => {
    try {
      return await fetch(`${basic_url}`, {
        headers: {
          Authorization: `bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((res) => res.json())
        .catch((error) => console.log({ error: "the method getById isnt work" }));
    } catch (error) {
      console.log("error in method getById");
    }
  };
  
  export const PostUser = async (userData) => {
    try {
      return await fetch(`${basic_url}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(userData),
      });
    } catch (error) {
      console.log("error in method post");
    }
  };
  
  export const PutUser = async (userData) => {
    try {
      return await fetch(`${basic_url}/id`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(userData),
      });
    } catch (error) {
      console.log("error in method put");
    }
  };
  export const DeleteUser = async (id) => {
    try {
      return await fetch(`${basic_url}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${localStorage.getItem("token")}`,
        },
      });
    } catch (error) {
      console.log("error in method post");
    }
  };
  
