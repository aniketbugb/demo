var Service_Provider = require('../../model/service_provider_models/service_provider_model');
var Vendor_Bank = require('../../model/service_receiver_model/vendor_bank.model');
//const checkAuth = require('../middleware/check-auth');
const checkAuth = require('../../middleware/check-auth')
const jwt = require('jsonwebtoken');
const utilities = require('../../middleware/utilities');


module.exports = function (router) {

    router.post('/post_service_provider', function (req, res) {
        try {
            var obj = new Service_Provider();
            if (req.body.profile !== undefined)
                obj.profile = req.body.profile
            if (req.body.userName !== undefined)
                obj.userName = req.body.userName
            if (req.body.mobile !== undefined)
                obj.mobile = req.body.mobile;
            if (req.body.alternateMobile !== undefined)
                obj.alternateMobile = req.body.alternateMobile;
            if (req.body.email !== undefined)
                obj.email = req.body.email;
            if (req.body.password !== undefined)
                obj.password = req.body.password;
            if (req.body.categoryId !== undefined)
                obj.categoryId = req.body.categoryId;
            if (req.body.expertiseId !== undefined)
                obj.expertiseId = req.body.expertiseId;
            if (req.body.firmName !== undefined)
                obj.firmName = req.body.firmName;
            if (req.body.firmType !== undefined)
                obj.firmType = req.body.firmType;
            if (req.body.firmRepresentative !== undefined)
                obj.firmRepresentative = req.body.firmRepresentative;
            if (req.body.representativeDesignation !== undefined)
                obj.representativeDesignation = req.body.representativeDesignation;
            if (req.body.representativeEducation !== undefined)
                obj.representativeEducation = req.body.representativeEducation;
            if (req.body.representativeQualification !== undefined)
                obj.representativeQualification = req.body.representativeQualification;
            if (req.body.website !== undefined)
                obj.website = req.body.website;
            if (req.body.segment !== undefined)
                obj.segment = req.body.segment;
            if (req.body.authorisedApplicators !== undefined)
                obj.authorisedApplicators = req.body.authorisedApplicators;
            if (req.body.address !== undefined)
                obj.address = req.body.address;
            if (req.body.preferredCities !== undefined)
                obj.preferredCities = req.body.preferredCities;
            if (req.body.yearOfEst !== undefined)
                obj.yearOfEst = req.body.yearOfEst;
            if (req.body.isGSTAvail !== undefined)
                obj.isGSTAvail = req.body.isGSTAvail;
            if (req.body.gstNo !== undefined)
                obj.gstNo = req.body.gstNo;
            if (req.body.isPFAvail !== undefined)
                obj.isPFAvail = req.body.isPFAvail;
            if (req.body.pfNo !== undefined)
                obj.pfNo = req.body.pfNo;
            if (req.body.isPANAvail !== undefined)
                obj.isPANAvail = req.body.isPANAvail;
            if (req.body.panNo !== undefined)
                obj.panNo = req.body.panNo;
            // if (req.body.successiveYear !== undefined)
            //     obj.successiveYear = req.body.successiveYear;
            // if (req.body.successiveYearTO !== undefined)
            //     obj.successiveYearTO = req.body.successiveYearTO;
            if (req.body.staffCount !== undefined)
                obj.staffCount = req.body.staffCount;
            if (req.body.labourCount !== undefined)
                obj.labourCount = req.body.labourCount;
            if (req.body.remark !== undefined)
                obj.remark = req.body.remark;
            if (req.body.regFrom !== undefined)
                obj.regFrom = req.body.regFrom;
            if (req.body.fcmToken !== undefined)
                obj.fcmToken = req.body.fcmToken;
            if (req.body.regOn !== undefined)
                obj.regOn = req.body.regOn;
            if (req.body.projectList !== undefined)
                obj.projectList = req.body.projectList;
            if (req.body.assetList !== undefined)
                obj.assetList = req.body.assetList;
            if (req.body.turnover !== undefined)
                obj.turnover = req.body.turnover;
            if (req.body.docs !== undefined)
                obj.docs = req.body.docs;
            if (req.body.userRegID !== undefined)
                obj.userRegID = req.body.userRegID;
            if (req.body.updateCount !== undefined)
                obj.updateCount = req.body.updateCount;

            Service_Provider.findOne({}, { userCode: 1 })
                .sort([["regOn", "descending"]]).
                then(mxres => {
                    if (mxres === null) {
                        obj.userCode = "100000";
                    } else {
                        var str = mxres.userCode;
                        if (str === null)
                            obj.userCode = "100000";
                        else {
                            let newId = parseInt(str);
                            newId++;
                            obj.userCode = newId;
                        }
                    }

                    obj.save()
                        .then(result => {
                            res.json({ statuscode: 200, success: true, message: "Data Saved Successfully." });
                        }).catch(err => {
                            console.log("Error--->" + err);
                            res.json({ statuscode: 500, success: false, message: "Something went wrong" });
                        })
                }).catch(err => {
                    console.log("Error--->" + err);
                    res.json({ statuscode: 500, success: false, message: "Something went wrong" });
                })

        } catch (error) {
            console.log("Error: " + error);
            res.json({ statuscode: 500, success: false, message: "Internal server error" });
        }
    });

    router.get('/verify_provider_mobile/:mobile', async function (req, res) {
        try {
            await Service_Provider.findOne({ mobile: req.params.mobile, isActive: true }, { mobile: 1, userCode: 1 })
                .then(mobRes => {
                    if (mobRes) {
                        res.json({ statuscode: 202, message: 'This mobile number is already registered', otp: null });
                    } else {
                        var otp_val = Math.floor(1000 + Math.random() * 9000);
                        //*** Code To send sms */
                        res.json({ statuscode: 200, message: 'Otp has been sent to your mobile number !!', otp: otp_val }); // If user is not returned, then e-mail is not taken
                    }
                })
                .catch(err => {
                    console.log("Error---> " + err);
                    res.json({ statuscode: 500, success: false, message: 'Internal server error', otp: null });
                });
        }
        catch (error) {
            res.json({ statuscode: 500, success: false, message: error, otp: null });
        }
    });

    router.get('/verify_provider_username/:userName', async function (req, res) {
        try {
            await Service_Provider.findOne({ userName: req.params.userName, isActive: true }, { userName: 1, userCode: 1 })
                .then(mobRes => {
                    if (mobRes) {
                        res.json({ statuscode: 202, message: 'This user name is already registered' });
                    } else {
                        res.json({ statuscode: 200, message: 'Valid user name' });
                    }
                })
                .catch(err => {
                    console.log("Error---> " + err);
                    res.json({ statuscode: 500, success: false, message: 'Internal server error' });
                });
        }
        catch (error) {
            res.json({ statuscode: 500, success: false, message: error });
        }
    });

    router.get('/verify_provider_mobile_email/:mob/:email', async function (req, res) {
        try {
            const mob_Avil = await Service_Provider.findOne({ mobile: req.params.mob, isActive: true }, { firmName: 1, userCode: 1 });
            const email_Avil = await Service_Provider.findOne({ email: req.params.email, isActive: true }, { firmName: 1, userCode: 1 });

            if (mob_Avil === null) {
                if (email_Avil === null) {
                    var otp_val = Math.floor(1000 + Math.random() * 9000);
                    res.json({ statuscode: 200, success: true, message: 'Otp has been sent to your mobile number !!', otp: otp_val, result: null }); // If user is not returned, then e-mail is not taken
                }
                else {
                    res.json({ statuscode: 202, success: false, message: 'Email address is already registered', otp: null, result: email_Avil }); // If user is returned, then e-mail is taken
                }
            }
            else {
                res.json({ statuscode: 202, success: false, message: 'This mobile number is already registered', otp: null, result: mob_Avil }); // If user is returned, then e-mail is taken
            }
        }
        catch (mainEx) {
            res.json({ statuscode: 500, success: true, message: "Internal server error " + mainEx });
        }
    });

    router.post('/provider_sign_in', async function (req, res) {
        try {
            await Service_Provider.findOne({ userName: req.body.userName, isActive: true })
                .populate({ path: 'categoryId', select: { 'category': 1 } })
                .populate({ path: 'expertiseId', select: { 'expertise': 1 } })
                .populate({ path: 'address.cityID', select: { 'city': 1 } })
                .populate({ path: 'address.stateID', select: { 'state': 1 } })
                .populate({ path: 'preferredCities', select: { 'city': 1 } })
                .then(result => {
                    if (!result) {
                        res.json({ statuscode: 401, success: false, message: 'Invalid user name', Result: null });
                    } else if (result) {
                        if (!req.body.password) {
                            res.json({ statuscode: 401, success: false, message: 'No password provided', Result: null });
                        } else {
                            var validPassword = result.comparePassword(req.body.password);
                            if (!validPassword) {
                                res.json({ statuscode: 401, success: false, message: 'Invalid credentials.', Result: null });
                            } else {
                                const token = jwt.sign({
                                    userName: req.body.userName,
                                    userId: result._id
                                }, "secrete this should be longer",
                                    { expiresIn: '24h' }
                                );

                                res.json({
                                    statuscode: 200, success: true, message: 'User Signed In Successfully!',
                                    Result: result, token: token, expiresIn: '24h'
                                });
                            }
                        }
                    }
                })
                .catch(err => {
                    console.log("Error---> " + err);
                    res.json({ statuscode: 500, success: false, message: 'Internal server error', Result: null });
                });
        } catch (error) {
            res.json({ statuscode: 500, success: false, message: error, Result: null });
        }
    });

    router.get('/get_provider_profile/:id', async function (req, res) {
        try {
            await Service_Provider.findOne({ _id: req.params.id, isActive: true })
                .populate({ path: 'categoryId', select: { 'category': 1 } })
                .populate({ path: 'expertiseId', select: { 'expertise': 1 } })
                .populate({ path: 'address.cityID', select: { 'city': 1 } })
                .populate({ path: 'address.stateID', select: 'state' })
                .populate({ path: 'preferredCities', select: { city: 1 } })
                .then(result => {
                    const token = jwt.sign({
                        userName: req.body.userName,
                        userId: result._id
                    }, "secrete this should be longer",
                        { expiresIn: '24h' }
                    );

                    res.json({
                        statuscode: 200, success: true, message: 'User Signed In Successfully!',
                        Result: result, token: token, expiresIn: '24h'
                    });
                })
                .catch(err => {
                    console.log("Error---> " + err);
                    res.json({ statuscode: 500, success: false, message: 'Internal server error', Result: null });
                });
        } catch (error) {
            res.json({ statuscode: 500, success: false, message: error, Result: null });
        }
    });
    router.get('/get_All_Providers', async (req, res) => {
        try {
            let page = 1;
            let limit = 10;

            if (req.query.page !== undefined)
                page = parseInt(req.query.page);

            if (req.query.limit !== undefined)
                limit = parseInt(req.query.limit);

            let qry = { isActive: true };
            if (req.query.filterData !== undefined && req.query.filter_Field !== undefined) {
                let regex = new RegExp(req.query.filterData, 'i')
                if (req.query.filter_Field === 'firmName') {
                    qry.firmName = regex;
                } else if (req.query.filter_Field === 'mobile') {
                    qry.mobile = regex;
                } else if (req.query.filter_Field === 'email') {
                    qry.email = regex;
                }
            }

            if (req.query.rpt_Field === "today") {
                qry.regOn = { $gte: new Date((new Date().getTime() - 24 * 60 * 60 * 1000)) };
            } else if (req.query.rpt_Field === 'week') {
                qry.regOn = { $gte: new Date((new Date().getTime() - 7 * 24 * 60 * 60 * 1000)) };
            } else if (req.query.rpt_Field === "month") {
                qry.regOn = { $gte: new Date((new Date().getTime() - 30 * 24 * 60 * 60 * 1000)) };
            } else if (req.query.rpt_Field === "year") {
                qry.regOn = { $gte: new Date((new Date().getTime() - 365 * 24 * 60 * 60 * 1000)) };
            }

            const totalCount = await Service_Provider.countDocuments(qry);

            const result = await Service_Provider.find(qry, { password: 0, temporarytoken: 0, fcmToken: 0, projectList: 0, assetList: 0 })
                .populate({ path: 'expertiseId', select: 'expertise' })
                .populate({ path: 'categoryId', select: 'category' })
                .populate({ path: 'address.stateID', select: 'state' })
                .populate({ path: 'address.cityID', select: 'city' })
                .populate({ path: 'preferredCities', select: 'city' })
                .sort({ regOn: -1 }) // Sort by registration date in descending order
                .skip((page - 1) * limit)
                .limit(limit);

            res.json({ statuscode: 200, message: `Data Fetch Successfully`, Result: result, currentPage: page, totalPages: Math.ceil(totalCount / limit), totalRecords: totalCount });
        } catch (error) {
            res.status(500).json({ statuscode: 500, message: `Internal Server Error : ${error.message}` });
        }
    });


    router.get('/get_service_provider/:id', (req, res) => {
        try {
            Service_Provider.findById({ _id: req.params.id }, { password: 0, fcmToken: 0 })
            .populate({ path: 'expertiseId', select: 'expertise' })
            .then(result => {
                res.json({ statuscode: 200, Result: result })
            }).catch(err => {
                res.json({ statuscode: 402, message: `Error is : ${err}` })
            })
        } catch (error) {
            res.json({ statuscode: 402, message: `Internal Server Error : ${error}` });
        }
    });
    router.get('/get_service_provider_regid/:id', (req, res) => {
        try {
            Service_Provider.findOne({ userRegID: req.params.id }, { password: 0, fcmToken: 0 })
            .populate({ path: 'expertiseId', select: 'expertise' })
            .then(result => {
                console.log(result)
                res.json({ statuscode: 200, Result: result })
            }).catch(err => {
                res.json({ statuscode: 402, message: `Error is : ${err}` });
            })
        } catch (error) {
            res.json({ statuscode: 402, message: `Internal Server Error : ${error}` });
        }
    });

router.put('/update_Service_Provider_For_other/:id', async (req, res) => {
    console.log(req.body);
    try {
        const result = await Service_Provider.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true });
        if (result) {
            res.json({ statusCode: 200, message: `Provider Updated Successfully`, result: result });
        } else {
            res.json({ statusCode: 404, message: `Provider not found` });
        }
    } catch (error) {
        res.status(500).json({ statusCode: 500, message: `Internal Server Error : ${error.message}` });
    }
});

router.put('/update_updateCount_provider/:id', async (req, res) => {
    try {
        // Find the user by ID
        const user = await Service_Provider.findById(req.params.id);
        
        // Check if the user exists
        if (!user) {
            return res.status(404).json({ statusCode: 404, message: "User not found" });
        }

        // Check if the updateCount field is present in the request body
        if (!req.body.updateCount) {
            return res.status(400).json({ statusCode: 400, message: "updateCount field is required" });
        }

        // Update the updateCount variable
        user.updateCount = req.body.updateCount;
        await user.save();

        res.status(200).json({ statusCode: 200, message: "Count updated successfully", result: user });
    } catch (error) {
        res.status(500).json({ statusCode: 500, message: `Internal Server Error: ${error.message}` });
    }
});

router.put('/update_Service_Provider/:id', async (req, res) => {
    try {
        // Find the provider by ID
        const provider = await Service_Provider.findById(req.params.id);
        
        // Check if the provider exists
        if (!provider) {
            return res.status(404).json({ statusCode: 404, message: "Provider not found" });
        }

        // Check if the provider has reached the update limit (3 times)
        if (provider.updateCount >= 3) {
            return res.status(403).json({ statusCode: 403, message: "You have reached the maximum limit for updates Please Contact Admin" });
        }

        // Update the provider data
        await Service_Provider.findByIdAndUpdate(req.params.id, req.body, { new: true });

        // Increment the update count and update the lastModified field
        provider.updateCount += 1;
        provider.lastModified = new Date();
        await provider.save();

        res.status(200).json({ statusCode: 200, message: "Provider updated successfully", result: provider });
    } catch (error) {
        res.status(500).json({ statusCode: 500, message: `Internal Server Error: ${error.message}` });
    }
});


    router.put('/get_providerByPreferredCities/:receiverId', (req, res) => {
        try {
            Vendor_Bank.find({ isActive: true, receiverId: req.params.receiverId }, { _id: 0, providerId: 1 })
                .then(resVendors => {

                    var array = [];
                    resVendors.forEach(function (vendor) {
                        array.push(vendor.providerId)
                    });

                    console.log(JSON.stringify(array));

                    let qry = { _id: { $nin: array }, isActive: true, preferredCities: { $in: req.body.preferredCities } };

                    console.log(qry);
                    Service_Provider.find(qry, { 'firmName': 1, 'firmRepresentative': 1, 'representativeDesignation': 1 })
                        .populate({ path: 'address.cityID', select: 'city' })
                        .populate({ path: 'preferredCities', select: 'city' })
                        .populate({ path: 'expertiseId', select: 'expertise' })
                        .then(result => {
                            res.json({ statuscode: 200, Result: result });
                        }).catch(err => {
                            console.log(err)
                            res.json({ statuscode: 402, message: `Internal Server Error : ${err}` });
                        })
                }).catch(err => {
                    console.log(err)
                    res.json({ statuscode: 402, message: `Internal Server Error : ${err}` });
                })

        } catch (error) {
            console.log(error)
            res.json({ statuscode: 402, message: `Internal Server Error : ${error}` });
        }
    });

    return router;
}