package com.ronak.shophubbackend.Service;

import com.ronak.shophubbackend.Model.User;
import com.ronak.shophubbackend.Repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    UserRepo userRepo;

    public void addUser(User u){
        userRepo.save(u);
    }

    public List<User> getUser(){
        return userRepo.findAll();
    }
}
