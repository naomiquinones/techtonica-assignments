const router = require("express").Router();
let User = require("../models/user.model");

// show all users
router.route("/").get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json("Error: " + err)); // catch show all users error, must use '+', not ',' to concatenate
});

// show a specific user
router.route("/:id").get((req, res) => {
  User.findById(req.params.id)
    .then(event => res.json(event))
    .catch(err => res.status(400).json("Error getting this user: " + err)); // catch findById error, must use '+', not ',' to concatenate
});
// add a user
router.route("/add").post((req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;

  const newUser = new User({
    username,
    password,
    email
  });

  newUser
    .save() // use mongoose save
    .then(() => res.json("User added!"))
    .catch(err => res.status(400).json("Error saving this user: " + err)); // catch save new user error, must use '+', not ',' to concatenate
});

// update a user
// ---------- using post and mongoose save function
router.route("/update/:id").post((req, res) => {
  User.findById(req.params.id)
    .then(user => {
      user.username = req.body.username;
      user.password = req.body.password;
      user.email = req.body.email;

      user.save() //use mongoose save function
        .then(() => res.json('User updated'))
        .catch(err => res.status(400).json('Error saving the update: ' + err)); // catch save error, must use '+', not ',' to concatenate
    })
    .catch(err => res.status(400).json('Error finding this user: ' + err)); // catch findById error, must use '+', not ',' to concatenate
});

// delete a user
router.route('/:id').delete((req,res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json('User deleted.'))
    .catch(err => res.status(400).json('Error deleting this user: ' + err)); // catch findByIdAndDelete error, must use '+', not ',' to concatenate
})

module.exports = router;