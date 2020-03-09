package com.service.api.service.api.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name="orders")
public class Order implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @Getter
    @Setter
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Getter
    @Setter
    @NotNull
    private BigDecimal qtyItems;

    @Getter
    @Setter
    @NotNull
    private BigDecimal totalPrice;

    @Getter
    @Setter
    @NotNull
    private BigDecimal shippingPrice;

    @Getter
    @Setter
    private LocalDateTime orderDate = LocalDateTime.now();

    @Getter
    @Setter
    @JsonBackReference
    @ManyToOne
    @JoinColumn
    private Customer customer;

}
