package com.ronak.shophubbackend.Service;

import com.ronak.shophubbackend.Model.Cart;
import com.ronak.shophubbackend.Model.CartItem;
import com.ronak.shophubbackend.Model.Product;
import com.ronak.shophubbackend.Repo.CartRepo;
import com.ronak.shophubbackend.Repo.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
public class CartService {
    @Autowired
    CartRepo cartRepo;
    @Autowired
    ProductRepo productRepo;
    @Autowired
    private CartItem cartItem;


    public String addtoCart(long userId,long ProductId,int quantity){
        Optional<Cart> oldCart = cartRepo.findByCustomerIdAndProductId(userId, ProductId);

        if (oldCart.isPresent()) {
            Cart cart = oldCart.get();
            cart.setQuantity(cart.getQuantity() + quantity);
            cartRepo.save(cart);
            return "Quantity Updated in Cart";
        } else {
            Cart cart = new Cart();
            cart.setCustomerId(userId);
            cart.setProductId(ProductId);
            cart.setQuantity(quantity);
            cartRepo.save(cart);
            return "Added to Cart";
        }
    }

    public List<CartItem> getCart(long id) {
        List<CartItem> list =new ArrayList<>();
        List<Cart>ans=cartRepo.findByCustomerId(id);
        for(Cart item:ans){

            Product product = productRepo.findProductById(item.getProductId());
            CartItem cartItem = new CartItem();
            cartItem.setId(item.getId());

            if(product!=null) {

                cartItem.setName(product.getName());
                cartItem.setPrice(product.getPrice());
                cartItem.setImgUrl(product.getImgUrl());
                cartItem.setQuantity(item.getQuantity());
                list.add(cartItem);
            }
        }
        Collections.reverse(list);
        return list;
    }

    public void updateItem(long id,int qty){
        cartRepo.updateQuantity(id,qty);
    }

    public void deleteItem(long id){
        cartRepo.deleteByCartId(id);
    }
}
