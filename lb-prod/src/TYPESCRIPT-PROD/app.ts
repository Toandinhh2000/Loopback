class Customer {
  firstName: string;
  lastName: string;

Contructor(fname: string, lname: string) {
  this.firstName = fname;
  this.lastName = lname;
}
}

function customerLogger<T extends Customer>(customer: T): void {
  console.log(`Customer: ${customer.firstName} ${customer.lastName}`);
}

let customer1 = new Customer("John", "Doe");
customerLogger(customer1);

customerLogger('Jane Doe');  //Compiler Error

customerLogger(1) // Compiler Error