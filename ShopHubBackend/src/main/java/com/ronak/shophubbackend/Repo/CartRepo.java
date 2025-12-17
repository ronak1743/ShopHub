package com.ronak.shophubbackend.Repo;

import com.ronak.shophubbackend.Model.Cart;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CartRepo extends JpaRepository<Cart,Long> {
    List<Cart> findByCustomerId(long customerId);
    @Modifying
    @Transactional
    @Query("UPDATE Cart c SET c.quantity = :qty WHERE c.id = :id")
    int updateQuantity(long id, int qty);

    @Modifying
    @Transactional
    @Query("DELETE FROM Cart c WHERE c.id = :id")
    void deleteByCartId(long id);

    Optional<Cart> findByCustomerIdAndProductId(long customerId, long productId);
}
