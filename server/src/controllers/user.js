
/* register controllers */
const Register = async (req, res) => {
   try {
      res.status(200).send("we good on register")
   } catch (error) {
      res.status(500).send(error)
   }
}


/* login controllers */
const Login = async (req, res) => {
   try {
      res.status(200).send("we good on login")
   } catch (error) {
      res.status(500).send(error)
   }
}

module.exports = {
   Register,
   Login
}
