package com.service.api.service.api.resources;

import com.service.api.service.api.models.Order;
import com.service.api.service.api.repositories.CustomerRepository;
import com.service.api.service.api.repositories.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value="/api")
@CrossOrigin(origins="*")
public class OrderResource {

    @Autowired
    OrderRepository orderRepository;

    @Autowired
    CustomerRepository customerRepository;

    @GetMapping("/orders")
    public List<Order> listOrders(){
        return orderRepository.findAll();
    }

    @PostMapping(value = "/order", consumes = { MediaType.APPLICATION_JSON_VALUE })
    public Order saveProduct(@RequestBody Order order){
        return orderRepository.save(order);
    }

    @DeleteMapping("/order")
    public void deleteProduct(@RequestBody Order order){
        orderRepository.delete(order);
    }

    @PutMapping("/order")
    public Order updateProduct(@RequestBody Order order){

        customerRepository.save(order.getCustomer());
        return orderRepository.save(order);
    }








}
