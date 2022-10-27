import express from "express"
import {
  getLeaveHistory,
  statusChangeByHR,
  statusChangeByAdmin,
  getLeaveRequest,
  getDetailByID,
  applyCasualLeave,
  getCasualDetail,
  getLeaveDetails,
  getLeaveRequestByAdmin,
  updateCriteria,
  getLeaveRequests,
  getLeaveRequestIds,
  changeStatus
} from "../controller/leave.js"
import { verifyAdmin, verifyHR, verifySuperAdmin, verifyUser } from "../utils/verifyToken.js";

export const casualLeave = express.Router()

//Mobile
casualLeave.post('/apply', applyCasualLeave)
casualLeave.post('/get/leave/detail', getCasualDetail)


casualLeave.post('/update/status', changeStatus)

casualLeave.post('/get', getLeaveHistory)

//hr
casualLeave.post('/get/requests', verifyHR, getLeaveRequest)
//admin
casualLeave.post('/get/requests/admin', verifyAdmin, getLeaveRequestByAdmin)

casualLeave.post('/get/byID', getDetailByID)

casualLeave.post('/get/requests/id', getLeaveRequestIds)

casualLeave.post('/status/change/byhr', statusChangeByHR)
casualLeave.post('/status/change/byadmin', statusChangeByAdmin)

casualLeave.post('/get/details', getLeaveDetails)

casualLeave.post('/hr/update', updateCriteria)

//404
casualLeave.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!")
});
