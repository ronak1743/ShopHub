package com.ronak.shophubbackend.Controller;

import com.ronak.shophubbackend.Service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CartController {
    @Autowired
    CartService cartService;
}
