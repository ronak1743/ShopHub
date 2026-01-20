package com.ronak.shophubbackend.Controller;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import com.ronak.shophubbackend.Model.Product;
import com.ronak.shophubbackend.Service.ProductService;
import com.ronak.shophubbackend.configrations.CloudinaryConfig;
import jakarta.servlet.http.HttpSession;
import jakarta.websocket.server.PathParam;
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
        Long id=Long.parseLong(session.getAttribute("id").toString());

        productService.addProduct(name,price,stock,desc,imageUrl,id);

        return ResponseEntity.ok(imageUrl);
    }


    @GetMapping("/myproduct")
    public List<Product> getProductBySeller(HttpSession session){
        Long id=Long.parseLong(session.getAttribute("id").toString());
        return productService.getProductBySeller(id);
    }

    @DeleteMapping("/delete/product/{id}")
    public void deleteProduct(@PathVariable Long id, HttpSession session){
        Long sellerid=Long.parseLong(session.getAttribute("id").toString());
        productService.deleteProduct(sellerid,id);

    }
}