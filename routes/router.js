const { Router } = require("express");
const router = Router();

//  Create Endpoints

const createProperty = require("./create/Property");
const createUser = require("./create/User");

router.use(createProperty);
router.use(createUser);

//  Read Endpoints

const readProperty = require("./read/Property");
const readUser = require("./read/User");

router.use(readProperty);
router.use(readUser);

//  Update Endpoints

// const updateProperty = require("./update/property");
const updateUser = require("./update/User");

// router.use(updateProperty);
router.use(updateUser);

// //  Delete Endpoints

// const deleteProperty = require("./delete/property");
// const deleteUser = require("./delete/user");

// router.use(deleteProperty);
// router.use(deleteUser);

module.exports = router;
