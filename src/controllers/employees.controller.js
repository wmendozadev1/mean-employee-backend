
//const hello = (req, res) => res.send('hello');

const employeeCtrl = {}

const Employee = require('../models/Employee')

employeeCtrl.getEmployees = async (req, res) => {
    //res.send('get employees')
    const employees = await Employee.find()
    res.json(employees)
}

employeeCtrl.createEmployees = async (req, res) => {
    //res.send('create employees')
    //console.log(req.body)
    const newEmployee =  new Employee(req.body)
    //console.log(newEmployee)
    
    await newEmployee.save()

    res.send({ message: 'Employee Created' })
}

employeeCtrl.getEmployee = async (req, res) => {
    console.log(req.params)
    const employee = await Employee.findById(req.params.id )
    //Employee.findOne({ _id: req.params.id })
    res.send(employee)
}

employeeCtrl.editEmployee = async (req, res) => {
    await Employee.findByIdAndUpdate(req.params.id, req.body)
    res.json({status: 'Employee updated' })
}

employeeCtrl.deleteEmployee = async (req, res) => {
    await Employee.findByIdAndDelete(req.params.id)
    res.json({ status:'Employee Deleted'})
}

module.exports =  employeeCtrl;  //{ hello }

