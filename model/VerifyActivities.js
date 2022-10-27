import mongoose, { Schema } from 'mongoose'

const verifyActivity = new mongoose.Schema
    (
        {
            emp_id: { type: Schema.Types.ObjectId, ref: 'Employee' },
            attendance_id: { type: Schema.Types.ObjectId, ref: 'Attendance' },
            // admin_id: { type: String, required: true },
            admin_id: { type: Schema.Types.ObjectId, ref: 'Admin' },
            emp_response: { type: String, default: null },
            message: { type: String, required: true },
            status: { type: Number, required: true, default: 0 },
            date: { type: String, required: true }
        }
    )

export const VerifyActivity = mongoose.model("VerifyActivity", verifyActivity)