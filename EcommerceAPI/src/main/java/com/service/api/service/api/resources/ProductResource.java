package com.service.api.service.api.resources;

import com.service.api.service.api.models.Product;
import com.service.api.service.api.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value="/api")
@CrossOrigin(origins="*")
public class ProductResource {

    @Autowired
    ProductRepository productRepository;

    @GetMapping("/products")
    public List<Product> listProducts(){
        return productRepository.findAll();
    }

    @PostMapping("/product")
    public Product saveProduct(@RequestBody Product product){
        return productRepository.save(product);
    }

    @DeleteMapping("/product")
    public void deleteProduct(@RequestBody Product product){
        productRepository.delete(product);
    }

    @PutMapping("/product")
    public Product updateProduct(@RequestBody Product product){
        return productRepository.save(product);
    }


}
