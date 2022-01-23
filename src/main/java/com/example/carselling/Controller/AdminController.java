package com.example.carselling.Controller;

import com.example.carselling.DAO.AdminsDAO;
import com.example.carselling.Model.Admin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000/")
@RequestMapping("/car-sell")
@RestController
public class AdminController {

    @Autowired
    private final AdminsDAO adminsDAO;

    public AdminController(@Qualifier("accessAdmins") AdminsDAO adminsDAO) {
        this.adminsDAO = adminsDAO;
    }

    @GetMapping("/admins")
    public List<Admin> getAllAdmins(){
        return adminsDAO.findAll();
    }
}
