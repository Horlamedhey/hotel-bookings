const { Router } = require("express");
const router = Router();

//  Create Endpoints

const createHotel = require("./create/Hotel");
// const createUser = require("./create/User");

router.use(createHotel);
// router.use(createUser);

//  Read Endpoints

const readHotel = require("./read/Hotel");
// const readUser = require("./read/User");

router.use(readHotel);
// router.use(readUser);

//  Update Endpoints

const updateHotel = require("./update/Hotel");
// const updateUser = require("./update/User");

router.use(updateHotel);
// router.use(updateUser);

// //  Delete Endpoints

// const deleteHotel = require("./delete/property");
// const deleteUser = require("./delete/user");

// router.use(deleteHotel);
// router.use(deleteUser);

module.exports = router;
