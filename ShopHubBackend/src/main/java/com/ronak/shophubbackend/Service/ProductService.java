package com.ronak.shophubbackend.Service;

import com.ronak.shophubbackend.Model.Product;
import com.ronak.shophubbackend.Repo.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
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

    public void addProduct(String name, BigDecimal Price,String Stock,String desc,String imageUrl,Long id){
        Product product = new Product();
        product.setName(name);
        product.setPrice(Price);
        product.setStock(Integer.parseInt(Stock));
        product.setImgUrl(imageUrl);
        product.setDescription(desc);
        product.setActive(true);
        product.setSellerId(id);
        createProduct(product);
    }

    public List<Product> getProductBySeller(Long id) {
        return productRepo.findBySellerId(id);
    }

    public void deleteProduct(Long sellerid, Long id) {
        Product product = productRepo.findProductById(id);
        if(product.getSellerId()==sellerid){
            productRepo.delete(product);
        }

    }
}