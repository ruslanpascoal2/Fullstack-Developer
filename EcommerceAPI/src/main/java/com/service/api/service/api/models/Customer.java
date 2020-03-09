package com.service.api.service.api.models;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.List;

@Entity
@Table(name="customers")
public class Customer implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @Getter
    @Setter
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Getter
    @Setter
    @NotNull
    private String code;

    @Getter
    @Setter
    @NotNull
    private String name;

    @Getter
    @Setter
    @JsonManagedReference
    @OneToMany(mappedBy="customer")
    private List<Order> orders;
}
