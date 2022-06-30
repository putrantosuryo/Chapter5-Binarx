const userList = [
  {
    user: "suryo",
    password: "password",
  },
  {
    user: "tes",
    password: "tes",
  },
];

const login = (req, res) => {
  const user = req.body.user;
  const password = req.body.password;

  const userData = userList.find(
    (el) => el.user == req.body.user && el.password == req.body.password
  );
  try {
    if (userData.user == user && userData.password == password)
      return res.send("LOGIN BERHASIL");
  } catch (error) {
    return res.send("LOGIN ERROR");
  }

  // userList.forEach((element) => {
  //   console.log(req.body.user +" "+element.user)
  //   console.log(req.body.password +" "+element.password)
  //   console.log("======================================")

  //   if (
  //     req.body.user == element.user &&
  //     req.body.password == element.password
  //   ) {
  //     return res.send ("Login Berhasil !");
  //   }
  // });
  // return res.send ("Login Gagal !");
};

module.exports = { login };
