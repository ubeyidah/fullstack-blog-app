export const signupUser = async (userData) => {
  const res = await fetch("/api/auth/signup", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  const data = await res.json();
  if (!res.ok) {
    throw {
      message: data.message,
    };
  }
  return data;
};
export const loginUser = async (userData) => {
  const res = await fetch("/api/auth/login", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  const data = await res.json();
  if (!res.ok) {
    throw {
      message: data.message,
    };
  }
  return data;
};
export const logoutUser = async () => {
  const res = await fetch("/api/auth/logout", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
  });
  const data = await res.json();
  if (!res.ok) {
    throw {
      message: data.message,
    };
  }
  return data;
};
export const writeNewPost = async (postData) => {
  const res = await fetch("/api/post", {
    method: "POST",
    body: postData,
  });
  const data = await res.json();
  if (!res.ok) {
    throw {
      message: data.message,
    };
  }
  return data;
};
export const getPosts = async () => {
  const res = await fetch("/api/post");
  const data = await res.json();
  if (!res.ok) {
    throw {
      message: data.message,
    };
  }
  return data;
};
