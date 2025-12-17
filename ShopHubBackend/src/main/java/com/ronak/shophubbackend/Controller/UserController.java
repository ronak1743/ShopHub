package com.ronak.shophubbackend.Controller;

import com.ronak.shophubbackend.Model.User;
import com.ronak.shophubbackend.Service.UserService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping("/add")
    public ResponseEntity<Map<String,Object>> addUser(@RequestBody User user, HttpSession session){
        Map<String,Object>map = new HashMap<>();
        if(userService.addUser(user)){
            map.put("code",001);
            map.put("msg","User Created");
            map.put("resp",true);
            map.put("name",user.getName());
            map.put("email",user.getEmail());
            map.put("role",user.getRole());

            session.setAttribute("name",user.getName());
            session.setAttribute("role",user.getRole());
            session.setAttribute("email",user.getEmail());

        }
        else{
            map.put("code",002);
            map.put("msg","email is already signup");
            map.put("resp",false);
        }
        return new ResponseEntity<>(map,HttpStatus.OK);

    }

    @PostMapping("/login")
    public ResponseEntity<Map<String, Object>> loginUser(@RequestBody Map<String,String>data,HttpSession session){
        session.setMaxInactiveInterval(30 * 60);
        User user = userService.checkUser(data.get("email"));
        Map<String,Object>response=new HashMap<>();
        if(user!=null){
           if(userService.loginUser(data.get("email"),data.get("password"))){
               response.put("Code",100);
               response.put("msg","login");
               response.put("resp",true);
               response.put("name",user.getName());
               response.put("email",user.getEmail());
               response.put("role",user.getRole());

               session.setAttribute("name",user.getName());
               session.setAttribute("role",user.getRole());
               session.setAttribute("email",user.getEmail());
               session.setAttribute("id",user.getId());
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

    @GetMapping("/logout")
    public void logout(HttpSession session) {
        session.invalidate();
    }


    @GetMapping("/me")
    public User me(HttpSession session){
        session.setMaxInactiveInterval(30 * 60);
        User user = null;
        if(session.getAttribute("name")!=null){
            user=new User();
            user.setRole((User.UserRole) session.getAttribute("role"));
            user.setName((String)session.getAttribute("name"));
            user.setEmail((String)session.getAttribute("email"));
            user.setId((Long) session.getAttribute("id"));
        }
        System.out.println(user);
        return user;
    }
}
