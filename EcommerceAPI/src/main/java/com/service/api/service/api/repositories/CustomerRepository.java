package com.service.api.service.api.repositories;

import com.service.api.service.api.models.Customer;
import org.springframework.data.jpa.repository.JpaRepository;


public interface CustomerRepository extends JpaRepository<Customer, Long> {
}
