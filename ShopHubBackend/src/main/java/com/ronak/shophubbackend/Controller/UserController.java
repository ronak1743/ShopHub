package com.ronak.shophubbackend.Controller;

import com.ronak.shophubbackend.Model.User;
import com.ronak.shophubbackend.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping("/add")
    public void addUser(@RequestBody User user){
        userService.addUser(user);
    }

    @GetMapping("/get")
    public List<User> getuser(){
        return  userService.getUser();
    }
}
