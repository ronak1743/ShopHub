package com.ronak.shophubbackend.Service;

import com.ronak.shophub.Model.User;
import com.ronak.shophub.Repo.UserRepo;
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
