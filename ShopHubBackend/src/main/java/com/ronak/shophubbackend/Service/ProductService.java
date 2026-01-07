package com.ronak.shophubbackend.Service;

import com.ronak.shophubbackend.Model.Product;
import com.ronak.shophubbackend.Repo.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    ProductRepo productRepo;

    public List<Product> getList(){
        return productRepo.findAll();
    }

    public void createProduct(Product p){
        productRepo.save(p);
    }
}