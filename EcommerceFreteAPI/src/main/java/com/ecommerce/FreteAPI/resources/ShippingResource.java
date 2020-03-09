package com.ecommerce.FreteAPI.resources;

import com.ecommerce.FreteAPI.services.ShippingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value="/api")
@CrossOrigin(origins="*")
public class ShippingResource {

    @Autowired
    ShippingService shippingService;

    @GetMapping("/shipping/{qtyItems}")
    public Double getShippingPrice(@PathVariable(value="qtyItems") int qty){
        return shippingService.calculateShipping(qty);
    }


}
