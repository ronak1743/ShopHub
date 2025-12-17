package com.ronak.shophubbackend.Controller;

import com.ronak.shophubbackend.Model.CartItem;
import com.ronak.shophubbackend.Service.CartService;
import jakarta.servlet.http.HttpSession;
import jakarta.websocket.server.PathParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
public class CartController {
    @Autowired
    CartService cartService;

    @PostMapping("/addtocart")
    public String addToCart(@RequestBody Map<String, Object> info, HttpSession session){
        long x=(long)session.getAttribute("id");
        long pid = Long.parseLong(info.get("id").toString());
        int quant = Integer.parseInt(info.get("qty").toString());
        return cartService.addtoCart(x,pid,quant);
    }

    @GetMapping("/getCart")
    public List<CartItem> getCart(HttpSession session){
        return cartService.getCart((long)session.getAttribute("id"));
    }

    @PutMapping("/updatecart")
    public void updateItem(@RequestBody Map<String, Object> info){
        long id = Long.parseLong(info.get("id").toString());
        int qty = Integer.parseInt(info.get("qty").toString());
        cartService.updateItem(id,qty);
    }

    @DeleteMapping("/deletecart/{id}")
    public void delete(@PathVariable long id){
        cartService.deleteItem(id);
    }
}
