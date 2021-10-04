
const { Router } = require('express')
const router = Router()

const employeesCtrl = require('../controllers/employees.controller.js')

//CRUD
//router.get('/hello', employeesCtrl )
//router.get('/hello',(req, res) => res.send('hello') )
//router.get('/employees', employeesCtrl.getEmployees);

// /api/employees

router.get('/', employeesCtrl.getEmployees);
router.post('/', employeesCtrl.createEmployees);
router.get('/:id', employeesCtrl.getEmployee);
router.put('/:id', employeesCtrl.editEmployee);
router.delete('/:id', employeesCtrl.deleteEmployee);


module.exports = router