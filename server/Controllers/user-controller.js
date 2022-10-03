const User =require("../Models/user-model");

const getAllUser = async (req, res) => {
  await User.find()
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(404).json({ massage: err }));
};

const getUserById = async (req, res) => {
  await User.findById(req.params.id)
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(404).json({ massage: err }));
};

const postUser = async (req, res) => {
  await User.create(req.body)
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(404).json({ massage: err }));
};

const putUser = async (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body,{new:true}) 
.then(result=>{
res.status(200).json(result)
})
.catch(err=>{
  res.status(500).json({massage:"update is failed"})
})
};

const deleteUser = async (req, res) => {
    User.findByIdAndDelete(req.params.id, (err, result) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        };
        res.status(201).json({ success: true, data: result, message: "the News delete" })
    })
};

module.exports = {
  getAllUser,
  getUserById,
  postUser,
  putUser,
  deleteUser,
};