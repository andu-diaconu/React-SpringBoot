package com.example.carselling.DAO;

import com.example.carselling.Model.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository("accessAdmins")
public interface AdminsDAO extends JpaRepository<Admin, Long> {
}
