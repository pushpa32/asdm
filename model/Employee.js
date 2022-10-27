import mongoose from 'mongoose'

const employeeSchema = new mongoose.Schema
    (
        {
            emp_id: { type: String, required: true },
            email: { type: String, default: "NA" },
            // password: { type: String, required: true },
            name: { type: String, required: true },
            phone: { type: String, required: true },
            device_id: { type: String, default: null },
            dob: { type: String, default: "NA" },
            attached_with: { type: String, required: true },
            project: { type: String, required: true },
            designation: { type: String, required: true, default: "NA" },
            first_district: { type: String, required: true, default: "NA" },
            additional_district: { type: String, required: true, default: "NA" },
            // department: { type: String, required: true, default: "NA" },
            profile_img: { type: String, default: null },
            isUser: { type: Boolean, default: true }
        }
    )
// employeeSchema.index({ emp_id: 1, email: 1, phone: 1 }, { unique: true, unique: true, unique: true })

export const Employee = mongoose.model("Employee", employeeSchema)