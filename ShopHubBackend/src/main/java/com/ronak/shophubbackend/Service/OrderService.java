package com.ronak.shophubbackend.Service;

import com.ronak.shophubbackend.DTO.OrderItem;
import com.ronak.shophubbackend.Model.Order;
import com.ronak.shophubbackend.Model.Product;
import com.ronak.shophubbackend.Repo.OrderRepo;
import com.ronak.shophubbackend.Repo.ProductRepo;
import org.hibernate.mapping.Collection;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
public class OrderService {
    @Autowired
    OrderRepo orderRepo;
    @Autowired
    ProductRepo productRepo;


    public List<OrderItem> getOrders(long id){
        List<Order> orderList = orderRepo.findByCustomerId(id);
        List<OrderItem> list = new ArrayList<>();
        for(Order order:orderList){
            OrderItem item=new OrderItem(order);
            Product p=productRepo.findProductById(order.getProductId());
            item.setName(p.getName());
            item.setImage(p.getImgUrl());
            list.add(item);
        }
        Collections.reverse(list);
        return list;
    }

    public void addOrder(Long cid,Long pid){
        Order order = new Order();
        order.setProductId(pid);
        order.setQuantity(1);
        order.setCustomerId(cid);
        Product product = productRepo.findProductById(pid);
        order.setSellerId(product.getSellerId());
        order.setPrice(product.getPrice());
        orderRepo.save(order);

    }
}
