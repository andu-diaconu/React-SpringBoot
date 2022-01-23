package com.example.carselling.Controller;

import com.example.carselling.DAO.UsersDAO;
import com.example.carselling.Model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000/")
@RequestMapping("/car-sell")
@RestController
public class UserController {

    @Autowired
    private final UsersDAO usersDAO;

    public UserController(@Qualifier("accessUsers") UsersDAO usersDAO) {
        this.usersDAO = usersDAO;
    }

    @GetMapping("/users")
    public List<User> getAllUsers(){
        return usersDAO.findAll();
    }

    @PostMapping("/addUser")
    public User addUser(@RequestBody User user){return usersDAO.save(user);}
}
