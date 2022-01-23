package com.example.carselling.DAO;

import com.example.carselling.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository("accessUsers")
public interface UsersDAO extends JpaRepository<User, Long> {
}
