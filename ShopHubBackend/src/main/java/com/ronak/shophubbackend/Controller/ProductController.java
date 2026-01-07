package com.ronak.shophubbackend.Controller;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import com.ronak.shophubbackend.Model.Product;
import com.ronak.shophubbackend.Service.ProductService;
import com.ronak.shophubbackend.configrations.CloudinaryConfig;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class ProductController {

    @Autowired
    ProductService productService;

    @Autowired
    Cloudinary cloudinary;

    @GetMapping("/getproducts")
    public List<Product> getList(){
        return productService.getList();
    }

    @PostMapping("/addproduct")
    public ResponseEntity<?> createProduct(
            @RequestParam String name,
            @RequestParam BigDecimal price,
            @RequestParam String stock,
            @RequestParam String desc,
            @RequestParam MultipartFile image, HttpSession session) throws IOException {

        Map upload = cloudinary.uploader().upload(image.getBytes(), ObjectUtils.emptyMap());
        String imageUrl = (String) upload.get("secure_url");

        Product product = new Product();
        product.setName(name);
        product.setPrice(price);
        product.setStock(Integer.parseInt(stock));
        product.setImgUrl(imageUrl);
        product.setDescription(desc);
        product.setActive(true);
        product.setSellerId(Long.parseLong(session.getAttribute("id").toString()));
        productService.createProduct(product);

        return ResponseEntity.ok(imageUrl);
    }


}