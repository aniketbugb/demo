const User_Admin = require("../model/admin-user.model");
const checkAuth = require("../middleware/check-auth");
const jwt = require("jsonwebtoken");
const utilities = require("../middleware/utilities");
var bcrypt = require("bcrypt"); // Import Bcrypt Package

const routes = (router) => {
  router.post("/post_New_Admin_User", async (req, res) => {
    try {
      // Check if email or mobile number already exists in the database
      const existingUser = await User_Admin.findOne({
        $or: [{ email: req.body.email }, { contact: req.body.contact }],
      });
      console.log(existingUser);
      if (existingUser) {
        return res.json({
          statuscode: 400,
          status: false,
          message:
            "Email or mobile number already exists. Please choose a different one.",
        });
      }

      // If email and mobile number are unique, proceed with user registration
      const newUser = new User_Admin({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        mobile: req.body.mobile,
        gender: req.body.gender,
        roleID: req.body.roleID,
        role: req.body.role,
        profile: req.body.profile,
        address: req.body.address,
        source: req.body.source,
        regOn: req.body.regOn,
        registerr: req.body.registerr,
        Expertise: req.body.Expertise,
        Expertise_id: req.body.Expertise_id,
        firm: req.body.firm,
        contact: req.body.contact,
      });

      await newUser.save();
      res.json({
        statuscode: 200,
        status: true,
        message: "User Registered Successfully",
      });
    } catch (error) {
      res.json({
        statuscode: 500,
        status: false,
        message: `Internal Server Error: ${error}`,
      });
    }
  });

  router.get("/get_All_Admin_Users", checkAuth, async (req, res) => {
    try {
      let limit = 10;
      let skip = 0;
      if (req.query.limit !== undefined) limit = req.query.limit;
      if (req.query.skip !== undefined) skip = req.query.skip;

      let qry = { isActive: true };
      if (req.query.filterData !== undefined) {
        if (req.query.filterData && req.query.filter_Field) {
          let regex = new RegExp(req.query.filterData, "i");
          if (req.query.filter_Field === "name") {
            qry.name = regex;
          } else if (req.query.filter_Field === "mobile") {
            qry.mobile = regex;
          } else if (req.query.filter_Field === "email") {
            qry.email = regex;
          }
        }
      }

      var allRec = (await User_Admin.find(qry, { _id: 1 })).length;
      await User_Admin.find(qry, {
        password: 0,
        temporarytoken: 0,
        fcmToken: 0,
        fcmToken_web: 0,
        resettoken: 0,
      })
        .populate({ path: "roleID", select: "role" })
        .populate({ path: "address.stateID", select: "state" })
        .populate({ path: "address.cityID", select: "city" })
        .skip(skip)
        .limit(limit)
        .then((result) => {
          res.json({
            statuscode: 200,
            message: `Data Fetch Successfully`,
            Result: result,
            ttlRecords: allRec,
          });
        })
        .catch((err) => {
          res.json({ statuscode: 402, message: `Error is : ${err}` });
        });
    } catch (error) {
      res.json({
        statuscode: 402,
        message: `Internal Server Error : ${error}`,
      });
    }
  });

  router.get("/get_All_Admin_Users/:id", (req, res) => {
    try {
      User_Admin.findById(
        { _id: req.params.id },
        {
          password: 0,
          temporarytoken: 0,
          fcmToken: 0,
          fcmToken_web: 0,
          resettoken: 0,
        }
      )
        .then((result) => {
          res.json({ statuscode: 200, Result: result });
        })
        .catch((err) => {
          res.json({ statuscode: 402, message: `Error is : ${err}` });
        });
    } catch (error) {
      res.json({
        statuscode: 402,
        message: `Internal Server Error : ${error}`,
      });
    }
  });

  router.put("/update_Admin_Users/:id", (req, res) => {
    try {
      User_Admin.findByIdAndUpdate({ _id: req.params.id }, req.body)
        .then((result) => {
          res.json({ statuscode: 200, message: `User Updated Successfully` });
        })
        .catch((err) => {
          res.json({ statuscode: 402, message: `Error is : ${err}` });
        });
    } catch (error) {
      res.json({
        statuscode: 402,
        message: `Internal Server Error : ${error}`,
      });
    }
  });

  router.delete("/delete_Admin_Users/:id", (req, res) => {
    try {
      User_Admin.deleteOne({ _id: req.params.id })
        .then((result) => {
          res.json({ statuscode: 200, message: `User Deleted Suceessfully` });
        })
        .catch((err) => {
          res.json({ statuscode: 402, message: `Error is : ${err}` });
        });
    } catch (error) {
      res.json({ statuscode: 402, message: `Internal Server Error :${error}` });
    }
  });

  // router.post("/user_authenticate", async (req, res) => {
  //   try {
  //     let { email, password } = req.body;
  //     User_Admin.findOne({ email }).then(async (user) => {
  //       if (user) {
  //         const isPassword = await user.matchPassword(password);

  //         if (isPassword) {
  //           const token = await user.generateToken();
  //           const { _id, firstName, lastName, email, role, city } = user;
  //           res.cookie("token", token, { expiresIn: "1d" });
  //           res.status(200).json({
  //             token,
  //             user: {
  //               _id,
  //               firstName,
  //               lastName,
  //               email,
  //               role,
  //               city,
  //             },
  //           });
  //         } else {
  //           return res.status(400).json({ message: "Invalid Password" });
  //         }
  //       } else {
  //         return res.status(400).json({ message: "Something went wrong" });
  //       }
  //     });
  //   } catch (err) {
  //     res.status(400).json({ message: "Something went wrong" });
  //   }
  // });

  router.post("/user_authenticate", async (req, res) => {
    try {
      let { email, contact, password } = req.body;
      let query = {};
      if (email) {
        query = { email };
      } else if (contact) {
        query = {contact};
      } else {
        return res
          .status(400)
          .json({ message: "mobile number is required" });
      }

      User_Admin.findOne(query).then(async (user) => {
        if (user) {
          const isPassword = await user.matchPassword(password);

          if (isPassword) {
            const token = await user.generateToken();
            const { _id, firm, contact,Expertise, email, role, city,Expertise_id } = user;
            res.cookie("token", token, { expiresIn: "1d" });
            res.status(200).json({
              token,
              user: {
                _id,
                firm,
                contact,
                Expertise,
                Expertise_id,
                email,
                role,
                city,
              },
            });
          } else {
            return res.status(400).json({ message: "Invalid Password" });
          }
        } else {
          return res
            .status(400)
            .json({ message: "Invalid email or mobile number" });
        }
      });
    } catch (err) {
      res.status(400).json({ message: "Something went wrong" });
    }
  });

  router.post('/change-password', async (req, res) => {
    try {
        const { mobile, newPassword } = req.body;

        // Find user by mobile number
        const user = await User_Admin.findOne({ contact:mobile });
        if (!user) {
            return res.status(404).json({ statusCode: 404, message: 'User not found',success:false });
        }

        // Update password with new password
        user.hash_password = bcrypt.hashSync(newPassword, 10);
        await user.save();

        res.status(200).json({ statusCode: 200, message: 'Password updated successfully',success:true });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ statusCode: 500, message: `Internal Server Error: ${error.message}`,success:false });
    }
});

  return router;
};

module.exports = routes;
