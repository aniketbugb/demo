const curriermodel = require("../../model/Curriear/curriear");
const { uploadsingleToS3 } = require("../basic_routes/CommnFIles/S3");
const { upload } = require("../basic_routes/CommnFIles/multer");
module.exports = (router) => {
  router.post("/post_Currier", async (req, res) => {
    const { fname, lname, email, M_no, address, city, state, resume, remark } =
      req.body;

    const createcurrier = new curriermodel({
      fname,
      lname,
      email,
      M_no,
      address,
      city,
      state,
      resume,
      remark,
    });
    createcurrier.save((error, data) => {
      if (error) return res.status(400).json({ error });
      if (address) {
        res.status(201).json({ data });
      }
    });
  });
  router.get("/get_Currier", async (req, res) => {
    try {
      const data = await curriermodel.find();
      res.json(data);
    } catch {
      (err) => res.json(err);
    }
  });

  router.delete("/delete/:id", (req, res) => {
    curriermodel.findOneAndDelete({ _id: req.params.id }, (err, data) => {
      if (err) {
        res.json({ err });
      } else {
        res.json(data);
      }
    });
  });
  router.put("/upload/:id", upload.single('resume'), async (req, res) => {
    let resume;
    if (req.file) {
      let fileData = req.file.buffer;
      let fileType;
      if (req.file.mimetype === "application/pdf") {
        fileType = "pdf";
      } else if (
        req.file.mimetype === "image/jpeg" ||
        req.file.mimetype === "image/jpg"
      ) {
        fileType = "jpg";
      } else if (req.file.mimetype === "image/png") {
        fileType = "png";
      } else {
        return res.status(400).json({ error: "Unsupported file type" });
      }
      // Call the uploadToS3 function to upload the file to S3
      let { Location } = await uploadsingleToS3(fileData, fileType);
      resume = Location;
    }
    curriermodel.findOneAndUpdate({ _id: req.params.id }, { resume })
      .then((data) => {
        res.status(200).json({
          message: "resume updated successfully",
          data,
        });
      })
      .catch((error) => {
        res.status(400).json({ error: error.message });
      });
});

  return router;
};
