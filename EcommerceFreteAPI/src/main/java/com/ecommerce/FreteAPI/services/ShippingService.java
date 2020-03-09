package com.ecommerce.FreteAPI.services;

import org.springframework.stereotype.Service;

import java.util.Random;

@Service
public class ShippingService {

    public Double getRandom(){
        Random r = new Random();
        double randomValue = 5 + (10 - 5) * r.nextDouble();

        return randomValue;
    }


    public Double calculateShipping(int qtyItens){
        return qtyItens * getRandom();
    }
}
