import express from "express";
import {
  signOutRegister,
  signInRegister,
  attendanceByDate,
  getAttendanceByDateAndId,
  getAttendance,
  verifyActivities,
  getVerifiedActivity,
  getNotification,
  deleteNotification,
  fillForTest,
  byRange,
  getEmpNAttendance,

} from "../controller/attendance.js";
import { verifyAdmin, verifySuperAdmin, verifyUser } from "../utils/verifyToken.js";

export const attendance = express.Router();

//register
attendance.post("/signin", verifyUser, signInRegister);
attendance.post("/signout", verifyUser, signOutRegister);
//get
attendance.post("/history/id", verifyUser, getAttendance);
attendance.post("/get/notification", verifyUser, getNotification);
attendance.post("/delete/notification", verifyUser, deleteNotification);
//Web(For Admin)
attendance.post("/history/bydate", verifyAdmin, attendanceByDate);
attendance.post("/history/id/date", verifyAdmin, getAttendanceByDateAndId);
attendance.post("/verify/activity", verifyAdmin, verifyActivities);
attendance.post("/get/verify/activity", verifyAdmin, getVerifiedActivity);


attendance.post("/get/range", byRange);
attendance.post("/get/withdetails", getEmpNAttendance);


//fill db for test
attendance.post("/fillForTest", fillForTest)



//404
attendance.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!");
});
