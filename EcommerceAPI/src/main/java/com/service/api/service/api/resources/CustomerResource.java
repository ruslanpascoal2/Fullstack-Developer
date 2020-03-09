package com.service.api.service.api.resources;

import com.service.api.service.api.models.Customer;
import com.service.api.service.api.repositories.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value="/api")
@CrossOrigin(origins="*")
public class CustomerResource {

    @Autowired
    CustomerRepository customerRepository;

    @GetMapping("/customers")
    public List<Customer> listCustomers(){
        return customerRepository.findAll();
    }

    @PostMapping(value = "/customer", consumes = { MediaType.APPLICATION_JSON_VALUE })
    public Customer saveCustomer(@RequestBody Customer customer){
        return customerRepository.save(customer);
    }

    @DeleteMapping("/customer")
    public void deleteCustomer(@RequestBody Customer customer){
        customerRepository.delete(customer);
    }

    @PutMapping("/customer")
    public Customer updateCustomer(@RequestBody Customer customer){
        return customerRepository.save(customer);
    }
}
