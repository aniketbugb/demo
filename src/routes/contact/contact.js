const contactmodel = require("../../model/contact/contact");
const { uploadsingleToS3 } = require("../basic_routes/CommnFIles/S3");
const { upload } = require("../basic_routes/CommnFIles/multer");
module.exports = (router) => {
  router.post("/post_Contact", async (req, res) => {
    const { cname, cemail, Cm_no, message } = req.body;

    const createcurrier = new contactmodel({
      cname,
      cemail,
      Cm_no,
      message,
    });
    createcurrier.save((error, data) => {
      if (error) return res.status(400).json({ error });
      res.status(201).json({ data });
    });
  });

  router.get("/get_Contact", async (req, res) => {
    try {
      const data = await contactmodel.find();
      res.json(data);
    } catch {
      (err) => res.json(err);
    }
  });

  router.get('/get_Contact/:id', async function (req, res) {
    try {
        await contactmodel.findOne({ _id: req.params.id })
            .then(result => {
                res.json({ statuscode: 200, success: true, message: 'Data Fetched successfully', Result: result });
            })
            .catch(err => {
                res.json({ statuscode: 500, success: false, message: err, result: null });
            });
    }
    catch (mainEx) {
        res.json({ statuscode: 500, success: true, message: "Internal server error " + mainEx });
    }
});

  router.delete("/delete_form/:id", (req, res) => {
    contactmodel.findOneAndDelete({ _id: req.params.id }, (err, data) => {
      if (err) {
        res.json({ err });
      } else {
        res.json(data);
      }
    });
  });
  // router.put("/upload/:id", upload.single("resume"), async (req, res) => {
  //   let resume;
  //   if (req.file) {
  //     let fileData = req.file.buffer;
  //     let fileType;
  //     if (req.file.mimetype === "application/pdf") {
  //       fileType = "pdf";
  //     } else if (
  //       req.file.mimetype === "image/jpeg" ||
  //       req.file.mimetype === "image/jpg"
  //     ) {
  //       fileType = "jpg";
  //     } else if (req.file.mimetype === "image/png") {
  //       fileType = "png";
  //     } else {
  //       return res.status(400).json({ error: "Unsupported file type" });
  //     }
  //     // Call the uploadToS3 function to upload the file to S3
  //     let { Location } = await uploadsingleToS3(fileData, fileType);
  //     resume = Location;
  //   }
  //   curriermodel
  //     .findOneAndUpdate({ _id: req.params.id }, { resume })
  //     .then((data) => {
  //       res.status(200).json({
  //         message: "resume updated successfully",
  //         data,
  //       });
  //     })
  //     .catch((error) => {
  //       res.status(400).json({ error: error.message });
  //     });
  // });

  return router;
};
