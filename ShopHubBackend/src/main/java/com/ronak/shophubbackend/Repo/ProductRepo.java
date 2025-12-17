package com.ronak.shophubbackend.Repo;

import com.ronak.shophubbackend.Model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepo extends JpaRepository<Product,Long> {
    Product findProductById(Long id);
}
