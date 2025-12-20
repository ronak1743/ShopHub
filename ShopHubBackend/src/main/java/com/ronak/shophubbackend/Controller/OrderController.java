package com.ronak.shophubbackend.Controller;

import com.ronak.shophubbackend.DTO.OrderItem;
import com.ronak.shophubbackend.Model.Order;
import com.ronak.shophubbackend.Service.OrderService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
public class OrderController {

    @Autowired
    OrderService orderService;

    @GetMapping("/getorders")
    public List<OrderItem> getOrders(HttpSession session){
        return orderService.getOrders((Long)(session.getAttribute("id")));
    }

    @PostMapping("/addorder")
    public void addOrder(@RequestBody Map<String, Object> map, HttpSession session) {

        Long pid = ((Number) map.get("pid")).longValue();
        Long cid = ((Number) session.getAttribute("id")).longValue();

        orderService.addOrder(cid, pid);
    }


}
