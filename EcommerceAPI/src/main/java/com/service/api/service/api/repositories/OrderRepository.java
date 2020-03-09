package com.service.api.service.api.repositories;

import com.service.api.service.api.models.Order;
import org.springframework.data.jpa.repository.JpaRepository;


public interface OrderRepository extends JpaRepository<Order, Long> {
}
