package com.ronak.shophubbackend.Controller;

import com.ronak.shophubbackend.DTO.SellerOverview;
import com.ronak.shophubbackend.Service.SellerService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/seller")
public class SellerController {

    @Autowired
    SellerService service;

    @GetMapping("/dash")
    public SellerOverview getDashboard(HttpSession session){
       long l= (long) session.getAttribute("id");
       return service.getDashBoard(l);
    }
}
