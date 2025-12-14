package com.ronak.shophubbackend.Controller;

import com.ronak.shophubbackend.Model.User;
import com.ronak.shophubbackend.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping("/add")
    public ResponseEntity<Map<String,Object>> addUser(@RequestBody User user){
        Map<String,Object>map = new HashMap<>();
        if(userService.addUser(user)){
            map.put("code",001);
            map.put("msg","User Created");
            map.put("resp",true);

        }
        else{
            map.put("code",002);
            map.put("msg","email is already signup");
            map.put("resp",false);
        }
        return new ResponseEntity<>(map,HttpStatus.OK);

    }

    @PostMapping("/login")
    public ResponseEntity<Map<String, Object>> loginUser(@RequestBody Map<String,String>data){

        User user = userService.checkUser(data.get("email"));
        Map<String,Object>response=new HashMap<>();
        if(user!=null){
           if(userService.loginUser(data.get("email"),data.get("password"))){
               response.put("Code",100);
               response.put("msg","login");
               response.put("resp",true);
           }
           else{
               response.put("Code",101);
               response.put("msg","login fail");
               response.put("resp",false);
           }

        }
        else{
            response.put("Code",010);
            response.put("msg","User not found");
            response.put("resp",false);
        }
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/get")
    public List<User> getuser(){
        return  userService.getUser();
    }
}
