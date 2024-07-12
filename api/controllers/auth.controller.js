const signup = async (req, res) => {
  try {
  } catch (error) {
    console.log("error on signup", error.message);
    res.status(500).json({ message: error.message });
  }
};
const login = async (req, res) => {
  try {
  } catch (error) {
    console.log("error on login", error.message);
    res.status(500).json({ message: error.message });
  }
};
const logout = async (req, res) => {
  try {
  } catch (error) {
    console.log("error on logout", error.message);
    res.status(500).json({ message: error.message });
  }
};

export { signup, login, logout };
