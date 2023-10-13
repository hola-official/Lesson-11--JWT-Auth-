const data = {
    employees: require("../model/employees.json"),
    setEmployees: function (data) {
      this.employees = data;
    },
  };
  
  const getAllEmployees = (req, res) => {
    res.json(data.employees);
  };
  
  const createNewEmployee = (req, res) => {
    const newEmployee = {
      id: data.employees?.length
        ? data.employees[data.employees.length - 1].id + 1
        : 1,
  
      firstname: req.body.firstname,
      lastname: req.body.lastname,
    };
  
    if (!newEmployee.firstname || !newEmployee.lastname) {
      return res.status(400).json({ message: "firstname and lastname required" });
    }
    data.setEmployees([...data.employees, newEmployee]);
    res.status(201).json(data.employees);
  };
  
  const updateEmployee = (req, res) => {
    const employee = data.employees.find(
      (emp) => emp.id === parseInt(req.body.id)
    );
  
    if (!employee) {
      return res
        .status(400)
        .json({ message: `Employee ID ${req.body.id} not found` });
    }
    if (req.body.firstname) employee.firstname = req.body.firstname;
    if (req.body.lastname) employee.lastname = req.body.lastname;
  
    const filterArray = data.employees.filter(
      (emp) => emp.id !== parseInt(req.body.id)
    );
  
    const unSortedArray = [...filterArray, employee];
    //The given code creates a new array called "unSortedArray" by combining the elements of an existing array
    // called "filterArray" with a new element called "employee".
  
    data.setEmployees(
      unSortedArray.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0))
    );
    //  A sorted array is an array in which its elements are arranged in a specific order,
    //Step-by-step explanation of the code:
  
    //  The code uses the "sort" method on the "unSortedArray" to sort it based on the comparison function provided.
    //  The comparison function  (a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 1)  compares the "id" property of two objects "a" and "b".
    //  If "a.id" is greater than "b.id", it returns 1, which indicates that "a" should be placed after "b" in the sorted array.
    //  If "a.id" is less than "b.id", it returns -1, which indicates that "a" should be placed before "b" in the sorted array.
    //  If "a.id" is equal to "b.id", it returns 1, which indicates that the order of "a" and "b" should not be changed.
    //  The "sort" method uses this comparison function to determine the order of the objects in the sorted array.
    //  Finally, the sorted array is assigned as the value of the "employees" property in the "data" object using the "setEmployees" method.
  
    res.json(data.employees);
  };
  const deleteEmployee = (req, res) => {
    const employee = data.employees.find(
      (emp) => emp.id === parseInt(req.body.id)
    );
  
    if (!employee) {
      return res
        .status(404)
        .json({ message: `Employee ID ${req.body.id} not found` });
    }
  
    const filterArray = data.employees.filter(
      (emp) => emp.id !== parseInt(req.body.id)
    );
    data.setEmployees([...filterArray]);
  
    res.json(data.employees);
  };
  
  const getEmployee = (req, res) => {
    const employee = data.employees.find(
      emp => emp.id === parseInt(req.params.id)
    );
    if (!employee) {
      return res
        .status(404)
        .json({ message: `Employee ID ${req.params.id} not found` });
    }
    res.json(employee);
  };
  
  module.exports = {
    getAllEmployees,
    createNewEmployee,
    updateEmployee,
    deleteEmployee,
    getEmployee,
  };