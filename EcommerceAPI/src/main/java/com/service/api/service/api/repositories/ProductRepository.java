package com.service.api.service.api.repositories;

import com.service.api.service.api.models.Product;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ProductRepository extends JpaRepository<Product, Long> {
}
