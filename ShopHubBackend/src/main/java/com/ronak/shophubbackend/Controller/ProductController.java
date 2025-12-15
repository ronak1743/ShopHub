package com.ronak.shophubbackend.Controller;

import com.ronak.shophubbackend.Model.Product;
import com.ronak.shophubbackend.Service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class ProductController {

    @Autowired
    ProductService productService;

    @GetMapping("/getproducts")
    public List<Product> getList(){
        return productService.getList();
    }
    
}