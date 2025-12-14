package com.ronak.shophubbackend.Service;

import com.ronak.shophubbackend.Repo.CartRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CartService {
    @Autowired
    CartRepo cartRepo;

}
