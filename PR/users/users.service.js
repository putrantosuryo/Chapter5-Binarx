//Define id for User
let idUser = 1;
//Defini List User
const userList = [];

//Get All User
const getAllUser = (req, res) => {
  return res.json(userList);
};

// Get Specific User
const getUser = (req, res) => {
  res.json(
    userList.filter(function (value, index, arr) {
      return value.id == req.params["idUser"];
    })
  );
};

//Input user
const inputUser = (req, res) => {
  userList.push({
    id: idUser,
    nama: req.body[0].nama,
    password: req.body[0].password,
  });
  idUser++;
  return res.send(userList);
};

//Update user
const updateUser = (req, res) => {
  userList.forEach((element) => {
    if (req.params["idUser"] == element["id"]) {
      element["nama"] = req.body[0].nama;
      element["password"] = req.body[0].password;
    }
  });
  return res.json(userList);
};

//Delete user
const deleteUser = (req, res) => {
  for (let index = 0; index < userList.length; index++) {
    const element = userList[index];
    if (req.params["idUser"] == element["id"]) {
      userList.splice(index, 1);
    }
  }
  return res.json(userList);
};

module.exports = { getAllUser, getUser, inputUser, updateUser, deleteUser };

