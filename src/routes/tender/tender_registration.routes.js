const Tender_Registration = require('../../model/tender/tender-registration.model');

const routes = (router) => {
    router.post('/post_tender', (req, res) => {
        try {
            const obj = new Tender_Registration();
            if (req.body.developer !== undefined)
                obj.developer = req.body.developer
            if (req.body.projectId !== undefined)
                obj.projectId = req.body.projectId;
            if (req.body.cityId !== undefined)
                obj.cityId = req.body.cityId;
            if (req.body.building !== undefined)
                obj.building = req.body.building;
            if (req.body.scope !== undefined)
                obj.scope = req.body.scope;
            if (req.body.isOpen !== undefined)
                obj.isOpen = req.body.isOpen;
            if (req.body.isLive !== undefined)
                obj.isLive = req.body.isLive;
            if (req.body.startDate !== undefined)
                obj.startDate = req.body.startDate;
            if (req.body.lastDate !== undefined)
                obj.lastDate = req.body.lastDate;
            if (req.body.maxContractValue !== undefined)
                obj.maxContractValue = req.body.maxContractValue;
            if (req.body.remark !== undefined)
                obj.remark = req.body.remark;
            if (req.body.regOn !== undefined)
                obj.regOn = req.body.regOn;
            if (req.body.eoiNo !== undefined)
                obj.eoiNo = req.body.eoiNo;
            if (req.body.isActive !== undefined)
                obj.isActive = req.body.isActive;
            if (req.body.developerName !== undefined)
                obj.developerName = req.body.developerName;
            if (req.body.projectName !== undefined)
                obj.projectName = req.body.projectName;
            if (req.body.cityName !== undefined)
                obj.cityName = req.body.cityName;
            if (req.body.cityName !== undefined)
                obj.cityName = req.body.cityName;
            if (req.body.scopeName !== undefined)
                obj.scopeName = req.body.scopeName;
            if (req.body.location !== undefined)
                obj.location = req.body.location;
            if (req.body.isPublic !== undefined)
                obj.isPublic = req.body.isPublic;

            Tender_Registration.findOne({}, { regNo: 1 })
                .sort([["regNo", "descending"]]).
                then(mxres => {
                    if (mxres === null) {
                        obj.regNo = "100000";
                    } else {
                        var str = mxres.regNo;
                        if (str === null)
                            obj.regNo = "100000";
                        else {
                            let newId = parseInt(str);
                            newId++;
                            obj.regNo = newId;
                        }
                    }

                    var strYear = new Date().getFullYear();
                    var shortYear = strYear.toString().substr(-2);
                    var eoi = "TEN/" + shortYear + "/" + obj.regNo;

                    obj.eoiNo = eoi;


                    obj.save()
                        .then(result => {
                            res.json({ statuscode: 200, message: `Data Saved Successfully.` });
                        }).catch(err => {
                            res.json({ statuscode: 500, message: `Error is :${err}` });
                        })
                }).catch(er => {
                    console.log(er);
                    res.json({ statuscode: 500, message: `Error is :${er}` });
                })

        } catch (error) {
            console.log("Error: " + error);
            res.json({ statuscode: 500, success: false, message: `Internal Server Error :${error}` });
        }
    });

    router.get('/get_all_tender', async (req, res) => {
        try {
            let limit = 10; let skip = 0;
            if (req.query.limit !== undefined)
                limit = req.query.limit;
            if (req.query.skip !== undefined)
                skip = req.query.skip;
            let qry = { isActive: true };
            if (req.query.filterData !== undefined) {
                if (req.query.filterData && req.query.filter_Field) {
                    let regex = new RegExp(req.query.filterData, 'i')
                    if (req.query.filter_Field === 'project') {
                        qry.project = regex;
                    } else if (req.query.filter_Field === 'formNo') {
                        qry.formNo = regex;
                    } else if (req.query.filter_Field === 'author') {
                        qry.author = regex;
                    }
                }
            }
            var allRec = (await Tender_Registration.find(qry, { _id: 1 })).length;
            Tender_Registration.find(qry)
                // .populate({ path: 'project', select: 'projectName' })
                .then(result => {
                    res.json({ statuscode: 200, message: `Data Fetch Successfully`, Result: result, ttlRecords: allRec });
                }).catch(err => {
                    res.json({ statuscode: 500, message: `Error is : ${err}` });
                })
        } catch (error) {
            res.json({ statuscode: 500, message: `Internal Server Error : ${error}` });
        }
    });

    router.get('/get_all_tenders/:id', (req, res) => {
        try {
            Tender_Registration.findById({ _id: req.params.id })
                .populate({ path: 'projectId', select: 'projectName' })
                .then(result => {
                    res.json({ statuscode: 200, message: `Data fetched successfully`, Result: result });
                }).catch(err => {
                    res.json({ statuscode: 500, message: `Error is : ${err}` });
                })
        } catch (error) {
            res.json({ statuscode: 500, message: `Error is : ${error}` });
        }
    });

    router.put('/update_tender/:id', async function (req, res) {
        try {
            await Tender_Registration.findByIdAndUpdate(req.params.id, req.body)
                .then(post => {
                    res.json({ statuscode: 200, message: 'Data updated successfully' });
                })
                .catch(err => {
                    res.json({ statuscode: 500, message: err });
                });
        }
        catch (mainEx) {
            res.json({ statuscode: 500, message: "Internal server error " + mainEx });
        }
    });

    router.get('/get_draft_tenders/:id', async (req, res) => {
        try {
            // Create a new Date object and set hours, minutes, and seconds to zero
            const today = new Date();
            today.setHours(0, 0, 0, 0);

            const result = await Tender_Registration.find({
                isActive: true,
                isLive: false,
                developer: req.params.id,
                lastDate: { $gte: today }  // Use the updated 'today' variable here
            })
                .populate({ path: 'developer', select: 'firmName' })
                .populate({ path: 'projectId', select: 'projectName location' })
                .populate({ path: 'cityId', select: 'city' })
                .populate({ path: 'scope', select: 'expertise' })
                .sort([["regNo", "descending"]])
                .exec();

            res.json({ statuscode: 200, message: `Data fetched successfully`, Result: result });
        } catch (error) {
            console.error("Error:", error);
            res.status(500).json({ statuscode: 500, message: `Error is : ${error.message}` });
        }
    });

    router.get('/get_live_tenders/:id', async (req, res) => {
        try {
            // Create a new Date object and set hours, minutes, and seconds to zero
            const today = new Date();
            today.setHours(0, 0, 0, 0);

            const result = await Tender_Registration.find({
                isActive: true,
                isLive: true,
                developer: req.params.id,
                lastDate: { $gte: today }  // Use the updated 'today' variable here
            })
                .populate({ path: 'developer', select: 'firmName' })
                .populate({ path: 'projectId', select: 'projectName location' })
                .populate({ path: 'cityId', select: 'city' })
                .populate({ path: 'scope', select: 'expertise' })
                .sort([["regNo", "descending"]])
                .exec();

            res.json({ statuscode: 200, message: `Data fetched successfully`, Result: result });
        } catch (error) {
            console.error("Error:", error);
            res.status(500).json({ statuscode: 500, message: `Error is : ${error.message}` });
        }
    });

    router.get('/get_closed_tenders/:id', async (req, res) => {
        try {
            // Create a new Date object and set hours, minutes, and seconds to zero
            const today = new Date();
            today.setHours(0, 0, 0, 0);

            const result = await Tender_Registration.find({
                isActive: true,
                developer: req.params.id,
                lastDate: { $lt: today }  // Use the updated 'today' variable here
            })
                .populate({ path: 'developer', select: 'firmName' })
                .populate({ path: 'projectId', select: 'projectName location' })
                .populate({ path: 'cityId', select: 'city' })
                .populate({ path: 'scope', select: 'expertise' })
                .sort([["regNo", "descending"]])
                .exec();
             console.log(result)
            res.json({ statuscode: 200, message: `Data fetched successfully`, Result: result });
        } catch (error) {
            console.error("Error:", error);
            res.status(500).json({ statuscode: 500, message: `Error is : ${error.message}` });
        }
    });

    router.get('/get_closed_tenders', async (req, res) => {
        try {
            // Create a new Date object and set hours, minutes, and seconds to zero
            const today = new Date();
            today.setHours(0, 0, 0, 0);
    
            const result = await Tender_Registration.find({
                isActive: true,
                lastDate: { $lt: today }
            })
                .populate({ path: 'developer', select: 'firmName' })
                .populate({ path: 'projectId', select: 'projectName location' })
                .populate({ path: 'cityId', select: 'city' })
                .populate({ path: 'scope', select: 'expertise' })
                .sort([["regNo", "descending"]])
                .exec();
    
            console.log(result);
            res.json({ statusCode: 200, message: `Data fetched successfully`, Result: result });
        } catch (error) {
            console.error("Error:", error);
            res.status(500).json({ statusCode: 500, message: `Error is : ${error.message}` });
        }
    });

    router.post('/get_provider_tenders', async (req, res) => {
        try {
            const today = new Date();
            today.setHours(0, 0, 0, 0);ff
            let query = {
                isActive: true,
                isLive: true,
                isOpen : true,
                isPublic: false,
                lastDate: { $gte: today },
                developer: { $in: req.body.receiver }
            };
    
            if (req.body.city) {
                query.cityId = { $in: req.body.city };
            } 
            if(req.body.expertise){
                query.scope = { $in: req.body.expertise };
            }
    
            const result = await Tender_Registration.find(query)
            .populate({ path: 'developer', select: 'firmName' })
            .populate({ path: 'projectId', select: 'projectName location' })
            .populate({ path: 'cityId', select: 'city' })
            .populate({ path: 'scope', select: 'expertise' })
            .sort([["regNo", "descending"]])
            .exec();

    
            console.log(266, result);
            res.status(200).json({ statuscode: 200, message: 'Data fetched successfully', Result: result });
        } catch (error) {
            console.error("Error:", error);
            res.status(500).json({ statuscode: 500, message: `Error is : ${error.message}` });
        }
    });

    router.post('/get_provider_tenders_For_All', async (req, res) => {
        try {
            console.log(req.body); // Log the receiver IDs
    
            // Create a new Date object and set hours, minutes, and seconds to zero
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            let query = {
                isActive: true,
                isLive: true,
                isOpen : true,
                isPublic:true,
                lastDate: { $gte: today },
                // developer: { $in: req.body.receiver }
            };
    
            // Check if city is present in the request body
            if (req.body.city) {
                query.cityId = { $in: req.body.city };
            } 
            if(req.body.expertise){
                query.scope = { $in: req.body.expertise };
            }
    
            const result = await Tender_Registration.find(query)
            .populate({ path: 'developer', select: 'firmName' })
            .populate({ path: 'projectId', select: 'projectName location' })
            .populate({ path: 'cityId', select: 'city' })
            .populate({ path: 'scope', select: 'expertise' })
            .sort([["regNo", "descending"]])
            .exec();
            console.log(266, result);
            res.status(200).json({ statuscode: 200, message: 'Data fetched successfully', Result: result });
        } catch (error) {
            console.error("Error:", error);
            res.status(500).json({ statuscode: 500, message: `Error is : ${error.message}` });
        }
    });

    router.post('/get_complete_provider_tenders', async (req, res) => {
        try {
            const query = {
                isActive: true,
                isLive: true,
                lastDate: { $gte: new Date().setHours(0, 0, 0, 0) }
            };

            if (req.body.city !== undefined) {
                query.cityId = req.body.city;
            }

            if (req.body.expertise !== undefined) {
                query.scope = req.body.expertise;
            }

            if (req.body.receiver !== undefined) {
                query.$or = [
                    { isOpen: true },
                    { isOpen: false, developer: { $in: req.body.receiver } }
                ];
            }

            const result = await Tender_Registration.find(query)
                .populate({ path: 'developer', select: 'firmName' })
                .populate({ path: 'projectId', select: 'projectName location' })
                .populate({ path: 'cityId', select: 'city' })
                .populate({ path: 'scope', select: 'expertise' })
                .sort([["regNo", "descending"]])
                .exec();

            res.json({ statuscode: 200, message: `Data fetched successfully`, Result: result });
        } catch (error) {
            console.error("Error:", error);
            res.status(500).json({ statuscode: 500, message: `Error is : ${error.message}` });
        }
    });

    router.put('/float_tender/:id', async function (req, res) {
        try {
            await Tender_Registration.findByIdAndUpdate(req.params.id, req.body)
                .then(post => {
                    res.json({ statuscode: 200, success: true, message: 'Data updated successfully' });
                })
                .catch(err => {
                    res.json({ statuscode: 500, success: true, message: err });
                });
        }
        catch (mainEx) {
            res.json({ statuscode: 500, success: true, message: "Internal server error " + mainEx });
        }
    });


    return router;
}

module.exports = routes;

