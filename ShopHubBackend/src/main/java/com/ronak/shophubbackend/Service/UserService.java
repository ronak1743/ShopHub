package com.ronak.shophubbackend.Service;

import com.ronak.shophubbackend.Model.User;
import com.ronak.shophubbackend.Repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    UserRepo userRepo;

    public User checkUser(String email){
        Optional<User> user = userRepo.findByEmail(email);
        return user.orElse(null);
    }

    public boolean loginUser(String email,String Password){
        User user = checkUser(email);

            if(user.getPassword().equals(Password)){
                return true;
            }
            else{
                return false;
            }

    }
    public boolean addUser(User u){
        if(checkUser(u.getEmail())!=null){
            return false;
        }
        userRepo.save(u);
        return true;
    }

    public List<User> getUser(){
        return userRepo.findAll();
    }
}
